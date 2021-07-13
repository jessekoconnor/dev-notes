It looks like this 

# Suggested paths forward
* Send the work-item back to IVR, and deal with this case in either the routing-cleaner, or the routing-api
* Add logging so that we

# Observations
* Routing cleaner is likely the one sending the requests that trigger this error and fail to finish executing
  * Seems to occur at 5 minute intervals
  * When a convo is unassigned but its work-item is assigned, it get classified as a broken memo and gets additional processint. this is likely the case causing the bug:
    * https://github.com/kustomer/routing-cleaner-lambda/blob/d949e641c904066ad6d0e8a934436df751829b1c/lambda/cleaner.js#L115-L121
  * Seems like the right behavior is to put this thing back into IVR 
  * But it would be helpful to log out some information 
* We get to this error because a work-item doesnt have a lastRevisionQueue, a queue id or key in its update, nor an external queueId
  * https://github.com/kustomer/routing-api/blob/master/services/work_item_command/queue.js#L81-L92
* And its likely getting into the queueCommand because of the following case where the update doesnt have assignedTo set
  * https://github.com/kustomer/routing-api/blob/master/services/work_item_command/index.js#L39-L40

# WorkItemRevision Timeline:
1) workItemCreated
2) 2021-02-13T07:27:22.681Z
  * event rev 2, 
  * isSync=false,  
  * removes queue, 
  * changes status from “queued” to “ivr”, 
  * client=biz-rules-worker
3) 2021-02-13T07:27:22.958Z - 
  * event rev 3, 
  * isSync=false, 
  * adds queue, 
  * changes status from “ivr” to “queued”
4) 2021-02-13T07:27:23.192Z  - 
  * event rev 4, 
  * isSync=true, 
  * removes queue, 
  * changes status from “queued” to “ivr”
5) 2021-02-13T07:27:23.484Z - 
  * event rev 5, 
  * isSync=true, 
  * changes status from “ivr” to “assinged”

# Summary

T0: 2021-02-13T07:27:18.719Z
  work-item 60277f56264a9600131673d7 created
T1: 2021-02-13T07:27:22.966Z (work-item.update)
  attributes.status:        ivr -> queued
  attributes.queuedCount:   1 -> 2
  relationships.queue:      null -> 5f43ed5c06d0c00019b37463
  relationships.rule:       null -> 5f43ebeb34f5e6001af1bd13
T2: 2021-02-13T07:27:22.688Z (work-item.update)
  attributes.status:        queued -> ivr
  relationships.queue       5f3c2605ea3c180019301aea -> null
  client: biz-rules-worker
T3: 2021-02-13T07:27:23.204Z
  attributes.status: queued -> ivr
  relationships.queue: 5f43ed5c06d0c00019b37463 -> null
  relationships.rule: 5f43ebeb34f5e6001af1bd13 -> null
  client: routing-worker
T4: 2021-02-13T07:27:23.498Z
  attributes.status: ivr -> assigned
  relationships.assignedTo: null -> 5f7d064afcc10579957f9217
  relationships.acceptedBy: null -> 5f7d064afcc10579957f9217
  client: routing-worker
T5: 2021-02-13T07:27:23.498Z
  work-items indexing error: [60277f56264a9600131673d4]: version conflict, current version [5] is higher or equal to the one provided [4]
T6: 2021-02-13T07:41:30:00.000Z
  _id of undefined


## Relevant conversation

### last known update of the conversation
"publishedAt": "2021-02-13T07:27:24.426Z",
"changes": {
  "attributes": {
    "updatedAt": {
      "op": "replace",
      "before": "2021-02-13T07:27:23.257Z",
      "after": "2021-02-13T07:27:24.201Z"
    },
    "modifiedAt": {
      "op": "replace",
      "before": "2021-02-13T07:27:22.975Z",
      "after": "2021-02-13T07:27:24.201Z"
    },
    "assignedUsers": {
      "op": "replace",
      "before": [
        "5f7d064afcc10579957f9217"
      ],
      "after": []
    },
    "rev": {
      "op": "replace",
      "before": 18,
      "after": 19
    }
  },
  "relationships": {}
}

### Also triggers a work workflow-execution.complete event
{
  "name": "event",
  "hostname": "28814888af84",
  "pid": 1,
  "level": 30,
  "fullBodyLength": 10355,
  "body": {
    "id": "60277f5cdcfe3e2b052e3b2c",
    "name": "kustomer.workflow-execution.complete",
    "partition": "5f15ebf357f2a300191ca22c",
    "body": {
      "name": "kustomer.workflow-execution.complete",
      "org": "5f15ebf357f2a300191ca22c",
      "partition": "5f15ebf357f2a300191ca22c",
      "data": {
        "attributes": {
          "originalEvent": {
            "id": "60277f5ce214f788c3b64830",
            "name": "kustomer.conversation.update",
           ... (seen above)
          },
          "shouldRunBusinessRules": true
        }
      }
    },
    "publishedAt": "2021-02-13T07:27:24.426Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2021-02-13T07:27:24.427Z",
  "v": 0,
  "dd": {
    "trace_id": "5482557376363344829",
    "span_id": "1267316925197069772",
    "service": "workflow",
    "version": "0.0.1"
  }
}

## Last known update of work-item before error:

### summary
Last updates changes:
*  attributes.status: ivr -> assigned
*  relationships.assignedTo: null -> 5f7d064afcc10579957f9217
*  relationships.acceptedBy: null -> 5f7d064afcc10579957f9217
*  client: routing-worker

Last known state:
* 'workItem.lastRevision.queue.id': DNE
* 'workItem.queue.id': DNE
* 'workItem.queue.key': DNE
* 'workItem.lastRevision.queue.external': DNE

This implies that queueToSet is falsy and lastRevision.queue.external is not defined, causing the error described in this ticket. 

Why did the workItem get into this state?

### details of last know work-item update
{
  "id": "60277f5b2e562f00130811f1",
  "name": "kustomer.work-item.update",
  "partition": "5f15ebf357f2a300191ca22c",
  "publishedAt": "2021-02-13T07:27:23.498Z",
  "body": {
    "id": "60277f5b2e562f00130811f0",
    "name": "kustomer.work-item.update",
    "org": "5f15ebf357f2a300191ca22c",
    "partition": "5f15ebf357f2a300191ca22c",
    "data": {
      "id": "60277f56264a9600131673d4",
      "type": "work_item",
      "attributes": {
        "resourceType": "conversation",
        "status": "assigned",
        "paused": false,
        "channel": "email",
        "firstEnterQueueAt": "2021-02-13T07:27:18.708Z",
        "queuedCount": 2,
        "priority": 1,
        "itemSize": 1,
        "ivr": {
          "businessTime": 0,
          "time": 0
        },
        "updatedAt": "2021-02-13T07:27:23.484Z",
        "modifiedAt": "2021-02-13T07:27:18.716Z",
        "createdAt": "2021-02-13T07:27:18.708Z",
        "resourceRev": 8,
        "resourceCreatedAt": "2021-02-13T07:27:15.931Z",
        "resourceDirection": "in",
        "resourceFirstQueueTime": 7027,
        "resourceFirstAssignTime": 7553,
        "rev": 5,
        "workItemNumber": 1,
        "lastRevision": {
          "enteredQueueAt": "2021-02-13T07:27:22.958Z",
          "queueTime": 234,
          "queueBusinessTime": 234,
          "acceptedAt": "2021-02-13T07:27:23.484Z"
        }
      },
      "relationships": {
        "org": {
          "data": {
            "type": "org",
            "id": "5f15ebf357f2a300191ca22c"
          },
          "links": {
            "self": "/v1/orgs/5f15ebf357f2a300191ca22c"
          }
        },
        "resource": {
          "data": {
            "type": "conversation",
            "id": "60277f53d72347298d9446cb"
          }
        },
        "lastRevision": {
          "data": {
            "type": "work_item_revision",
            "id": "60277f56264a9600131673d5"
          }
        },
        "assignedTo": {
          "data": {
            "type": "user",
            "id": "5f7d064afcc10579957f9217"
          },
          "links": {
            "self": "/v1/users/5f7d064afcc10579957f9217"
          }
        },
        "acceptedBy": {
          "data": {
            "type": "user",
            "id": "5f7d064afcc10579957f9217"
          },
          "links": {
            "self": "/v1/users/5f7d064afcc10579957f9217"
          }
        }
      },
      "links": {
        "self": "/v1/routing/work-item/60277f56264a9600131673d4"
      }
    },
    "createdAt": "2021-02-13T07:27:23.498Z",
    "changes": {
      "attributes": {
        "status": {
          "op": "replace",
          "before": "ivr",
          "after": "assigned"
        },
        "updatedAt": {
          "op": "replace",
          "before": "2021-02-13T07:27:23.192Z",
          "after": "2021-02-13T07:27:23.484Z"
        },
        "resourceFirstAssignTime": {
          "op": "add",
          "after": 7553
        },
        "rev": {
          "op": "replace",
          "before": 4,
          "after": 5
        },
        "lastRevision": {
          "op": "replace",
          "before": {
            "enteredQueueAt": "2021-02-13T07:27:22.958Z",
            "queueTime": 234,
            "queueBusinessTime": 234
          },
          "after": {
            "enteredQueueAt": "2021-02-13T07:27:22.958Z",
            "queueTime": 234,
            "queueBusinessTime": 234,
            "acceptedAt": "2021-02-13T07:27:23.484Z"
          }
        }
      },
      "relationships": {
        "assignedTo": {
          "op": "add",
          "before": null,
          "after": {
            "data": {
              "type": "user",
              "id": "5f7d064afcc10579957f9217"
            },
            "links": {
              "self": "/v1/users/5f7d064afcc10579957f9217"
            }
          }
        },
        "acceptedBy": {
          "op": "add",
          "before": null,
          "after": {
            "data": {
              "type": "user",
              "id": "5f7d064afcc10579957f9217"
            },
            "links": {
              "self": "/v1/users/5f7d064afcc10579957f9217"
            }
          }
        }
      }
    },
    "client": "routing-worker",
    "isSync": true
  },
  "version": 3
  }
}


# Story behind 

## T5
230145319,"_primary_term":1,"status":200}}]}'|jq
{
  "took": 7,
  "errors": true,
  "items": [
    {
      "index": {
        "_index": "work_items_1549652286049",
        "_type": "_doc",
        "_id": "60277f56264a9600131673d4",
        "status": 409,
        "error": {
          "type": "version_conflict_engine_exception",
          "reason": "[_doc][60277f56264a9600131673d4]: version conflict, current version [5] is higher or equal to the one provided [4]",
          "index_uuid": "JCZ3iuNySqS0kU8cy4ZwVw",
          "shard": "3",
          "index": "work_items_1549652286049"
        }
      }
    },
    {
      "index": {
        "_index": "work_items_1549652286049",
        "_type": "_doc",
        "_id": "60277f5add50a100140b379d",
        "_version": 3,
        "result": "updated",
        "_shards": {
          "total": 2,
          "successful": 2,
          "failed": 0
        },
        "_seq_no": 230145319,
        "_primary_term": 1,
        "status": 200
      }
    }
  ]
}

## t4
{
  "dd": {
    "trace_id": "5837141105865576770",
    "span_id": "5191010012827452245"
  },
  "name": "event",
  "hostname": "9215ea2cc73e",
  "pid": 19,
  "level": 30,
  "fullBodyLength": 3087,
  "body": {
    "id": "60277f5b2e562f00130811f1",
    "name": "kustomer.work-item.update",
    "partition": "5f15ebf357f2a300191ca22c",
    "body": {
      "id": "60277f5b2e562f00130811f0",
      "name": "kustomer.work-item.update",
      "org": "5f15ebf357f2a300191ca22c",
      "partition": "5f15ebf357f2a300191ca22c",
      "data": {
        "id": "60277f56264a9600131673d4",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "assigned",
          "paused": false,
          "channel": "email",
          "firstEnterQueueAt": "2021-02-13T07:27:18.708Z",
          "queuedCount": 2,
          "priority": 1,
          "itemSize": 1,
          "ivr": {
            "businessTime": 0,
            "time": 0
          },
          "updatedAt": "2021-02-13T07:27:23.484Z",
          "modifiedAt": "2021-02-13T07:27:18.716Z",
          "createdAt": "2021-02-13T07:27:18.708Z",
          "resourceRev": 8,
          "resourceCreatedAt": "2021-02-13T07:27:15.931Z",
          "resourceDirection": "in",
          "resourceFirstQueueTime": 7027,
          "resourceFirstAssignTime": 7553,
          "rev": 5,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2021-02-13T07:27:22.958Z",
            "queueTime": 234,
            "queueBusinessTime": 234,
            "acceptedAt": "2021-02-13T07:27:23.484Z"
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5f15ebf357f2a300191ca22c"
            },
            "links": {
              "self": "/v1/orgs/5f15ebf357f2a300191ca22c"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "60277f53d72347298d9446cb"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "60277f56264a9600131673d5"
            }
          },
          "assignedTo": {
            "data": {
              "type": "user",
              "id": "5f7d064afcc10579957f9217"
            },
            "links": {
              "self": "/v1/users/5f7d064afcc10579957f9217"
            }
          },
          "acceptedBy": {
            "data": {
              "type": "user",
              "id": "5f7d064afcc10579957f9217"
            },
            "links": {
              "self": "/v1/users/5f7d064afcc10579957f9217"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-item/60277f56264a9600131673d4"
        }
      },
      "createdAt": "2021-02-13T07:27:23.498Z",
      "changes": {
        "attributes": {
          "status": {
            "op": "replace",
            "before": "ivr",
            "after": "assigned"
          },
          "updatedAt": {
            "op": "replace",
            "before": "2021-02-13T07:27:23.192Z",
            "after": "2021-02-13T07:27:23.484Z"
          },
          "resourceFirstAssignTime": {
            "op": "add",
            "after": 7553
          },
          "rev": {
            "op": "replace",
            "before": 4,
            "after": 5
          },
          "lastRevision": {
            "op": "replace",
            "before": {
              "enteredQueueAt": "2021-02-13T07:27:22.958Z",
              "queueTime": 234,
              "queueBusinessTime": 234
            },
            "after": {
              "enteredQueueAt": "2021-02-13T07:27:22.958Z",
              "queueTime": 234,
              "queueBusinessTime": 234,
              "acceptedAt": "2021-02-13T07:27:23.484Z"
            }
          }
        },
        "relationships": {
          "assignedTo": {
            "op": "add",
            "before": null,
            "after": {
              "data": {
                "type": "user",
                "id": "5f7d064afcc10579957f9217"
              },
              "links": {
                "self": "/v1/users/5f7d064afcc10579957f9217"
              }
            }
          },
          "acceptedBy": {
            "op": "add",
            "before": null,
            "after": {
              "data": {
                "type": "user",
                "id": "5f7d064afcc10579957f9217"
              },
              "links": {
                "self": "/v1/users/5f7d064afcc10579957f9217"
              }
            }
          }
        }
      },
      "client": "routing-worker",
      "isSync": true
    },
    "publishedAt": "2021-02-13T07:27:23.498Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2021-02-13T07:27:23.499Z",
  "v": 0
}

## T3
{
  "dd": {
    "trace_id": "3935512727709695313",
    "span_id": "7780587629161605011"
  },
  "name": "event",
  "hostname": "9a1387249d0a",
  "pid": 19,
  "level": 30,
  "fullBodyLength": 2749,
  "body": {
    "id": "60277f5b661b8c001313b928",
    "name": "kustomer.work-item.update",
    "partition": "5f15ebf357f2a300191ca22c",
    "body": {
      "id": "60277f5b661b8c001313b927",
      "name": "kustomer.work-item.update",
      "org": "5f15ebf357f2a300191ca22c",
      "partition": "5f15ebf357f2a300191ca22c",
      "data": {
        "id": "60277f56264a9600131673d4",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "ivr",
          "paused": false,
          "channel": "email",
          "firstEnterQueueAt": "2021-02-13T07:27:18.708Z",
          "queuedCount": 2,
          "priority": 1,
          "itemSize": 1,
          "ivr": {
            "businessTime": 0,
            "time": 0
          },
          "updatedAt": "2021-02-13T07:27:23.192Z",
          "modifiedAt": "2021-02-13T07:27:18.716Z",
          "createdAt": "2021-02-13T07:27:18.708Z",
          "resourceRev": 8,
          "resourceCreatedAt": "2021-02-13T07:27:15.931Z",
          "resourceDirection": "in",
          "resourceFirstQueueTime": 7027,
          "rev": 4,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2021-02-13T07:27:22.958Z",
            "queueTime": 234,
            "queueBusinessTime": 234
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5f15ebf357f2a300191ca22c"
            },
            "links": {
              "self": "/v1/orgs/5f15ebf357f2a300191ca22c"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "60277f53d72347298d9446cb"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "60277f56264a9600131673d5"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-item/60277f56264a9600131673d4"
        }
      },
      "createdAt": "2021-02-13T07:27:23.204Z",
      "changes": {
        "attributes": {
          "status": {
            "op": "replace",
            "before": "queued",
            "after": "ivr"
          },
          "updatedAt": {
            "op": "replace",
            "before": "2021-02-13T07:27:22.958Z",
            "after": "2021-02-13T07:27:23.192Z"
          },
          "rev": {
            "op": "replace",
            "before": 3,
            "after": 4
          },
          "lastRevision": {
            "op": "replace",
            "before": {
              "enteredQueueAt": "2021-02-13T07:27:22.958Z"
            },
            "after": {
              "enteredQueueAt": "2021-02-13T07:27:22.958Z",
              "queueTime": 234,
              "queueBusinessTime": 234
            }
          }
        },
        "relationships": {
          "queue": {
            "op": "remove",
            "before": {
              "data": {
                "type": "queue",
                "id": "5f43ed5c06d0c00019b37463"
              },
              "links": {
                "self": "/v1/routing/queues/5f43ed5c06d0c00019b37463"
              }
            },
            "after": null
          },
          "rule": {
            "op": "remove",
            "before": {
              "data": {
                "type": "queue-rule",
                "id": "5f43ebeb34f5e6001af1bd13"
              },
              "links": {
                "self": "/v1/routing/queue-rules/5f43ebeb34f5e6001af1bd13"
              }
            },
            "after": null
          }
        }
      },
      "client": "routing-worker",
      "isSync": true
    },
    "publishedAt": "2021-02-13T07:27:23.204Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2021-02-13T07:27:23.205Z",
  "v": 0
}

## T2
{
  "dd": {
    "trace_id": "5889528202478447660",
    "span_id": "4010305660235562791"
  },
  "name": "event",
  "hostname": "4c2d50b51fee",
  "pid": 19,
  "level": 30,
  "fullBodyLength": 2557,
  "body": {
    "id": "60277f5a55f8360013376b8c",
    "name": "kustomer.work-item.update",
    "partition": "5f15ebf357f2a300191ca22c",
    "body": {
      "id": "60277f5a55f8360013376b8b",
      "name": "kustomer.work-item.update",
      "org": "5f15ebf357f2a300191ca22c",
      "partition": "5f15ebf357f2a300191ca22c",
      "data": {
        "id": "60277f56264a9600131673d4",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "ivr",
          "paused": false,
          "channel": "email",
          "firstEnterQueueAt": "2021-02-13T07:27:18.708Z",
          "queuedCount": 1,
          "priority": 1,
          "itemSize": 1,
          "updatedAt": "2021-02-13T07:27:22.681Z",
          "modifiedAt": "2021-02-13T07:27:18.716Z",
          "createdAt": "2021-02-13T07:27:18.708Z",
          "resourceRev": 8,
          "resourceCreatedAt": "2021-02-13T07:27:15.931Z",
          "resourceDirection": "in",
          "rev": 2,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2021-02-13T07:27:18.708Z",
            "queueTime": 3973,
            "queueBusinessTime": 3973
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5f15ebf357f2a300191ca22c"
            },
            "links": {
              "self": "/v1/orgs/5f15ebf357f2a300191ca22c"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "60277f53d72347298d9446cb"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "60277f56264a9600131673d5"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-item/60277f56264a9600131673d4"
        }
      },
      "createdAt": "2021-02-13T07:27:22.688Z",
      "changes": {
        "attributes": {
          "status": {
            "op": "replace",
            "before": "queued",
            "after": "ivr"
          },
          "updatedAt": {
            "op": "replace",
            "before": "2021-02-13T07:27:18.716Z",
            "after": "2021-02-13T07:27:22.681Z"
          },
          "rev": {
            "op": "replace",
            "before": 1,
            "after": 2
          },
          "lastRevision": {
            "op": "replace",
            "before": {
              "enteredQueueAt": "2021-02-13T07:27:18.708Z"
            },
            "after": {
              "enteredQueueAt": "2021-02-13T07:27:18.708Z",
              "queueTime": 3973,
              "queueBusinessTime": 3973
            }
          }
        },
        "relationships": {
          "queue": {
            "op": "remove",
            "before": {
              "data": {
                "type": "queue",
                "id": "5f3c2605ea3c180019301aea"
              },
              "links": {
                "self": "/v1/routing/queues/5f3c2605ea3c180019301aea"
              }
            },
            "after": null
          }
        }
      },
      "client": "biz-rules-worker",
      "isSync": false
    },
    "publishedAt": "2021-02-13T07:27:22.688Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2021-02-13T07:27:22.688Z",
  "v": 0
}

## T1
{
  "dd": {
    "trace_id": "3072107146275436429",
    "span_id": "7413961466082023873"
  },
  "name": "event",
  "hostname": "4c2d50b51fee",
  "pid": 19,
  "level": 30,
  "fullBodyLength": 3204,
  "body": {
    "id": "60277f5a55f8360013376b91",
    "name": "kustomer.work-item.update",
    "partition": "5f15ebf357f2a300191ca22c",
    "body": {
      "id": "60277f5a55f8360013376b90",
      "name": "kustomer.work-item.update",
      "org": "5f15ebf357f2a300191ca22c",
      "partition": "5f15ebf357f2a300191ca22c",
      "data": {
        "id": "60277f56264a9600131673d4",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "queued",
          "paused": false,
          "channel": "email",
          "firstEnterQueueAt": "2021-02-13T07:27:18.708Z",
          "queuedCount": 2,
          "priority": 1,
          "itemSize": 1,
          "ivr": {
            "businessTime": 0,
            "time": 0
          },
          "updatedAt": "2021-02-13T07:27:22.958Z",
          "modifiedAt": "2021-02-13T07:27:18.716Z",
          "createdAt": "2021-02-13T07:27:18.708Z",
          "resourceRev": 8,
          "resourceCreatedAt": "2021-02-13T07:27:15.931Z",
          "resourceDirection": "in",
          "resourceFirstQueueTime": 7027,
          "rev": 3,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2021-02-13T07:27:22.958Z"
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5f15ebf357f2a300191ca22c"
            },
            "links": {
              "self": "/v1/orgs/5f15ebf357f2a300191ca22c"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "60277f53d72347298d9446cb"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "60277f56264a9600131673d5"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5f43ed5c06d0c00019b37463"
            },
            "links": {
              "self": "/v1/routing/queues/5f43ed5c06d0c00019b37463"
            }
          },
          "rule": {
            "data": {
              "type": "queue-rule",
              "id": "5f43ebeb34f5e6001af1bd13"
            },
            "links": {
              "self": "/v1/routing/queue-rules/5f43ebeb34f5e6001af1bd13"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-item/60277f56264a9600131673d4"
        }
      },
      "createdAt": "2021-02-13T07:27:22.966Z",
      "changes": {
        "attributes": {
          "status": {
            "op": "replace",
            "before": "ivr",
            "after": "queued"
          },
          "queuedCount": {
            "op": "replace",
            "before": 1,
            "after": 2
          },
          "ivr": {
            "op": "add",
            "after": {
              "businessTime": 0,
              "time": 0
            }
          },
          "updatedAt": {
            "op": "replace",
            "before": "2021-02-13T07:27:22.681Z",
            "after": "2021-02-13T07:27:22.958Z"
          },
          "resourceFirstQueueTime": {
            "op": "add",
            "after": 7027
          },
          "rev": {
            "op": "replace",
            "before": 2,
            "after": 3
          },
          "lastRevision": {
            "op": "replace",
            "before": {
              "enteredQueueAt": "2021-02-13T07:27:18.708Z",
              "queueTime": 3973,
              "queueBusinessTime": 3973
            },
            "after": {
              "enteredQueueAt": "2021-02-13T07:27:22.958Z"
            }
          }
        },
        "relationships": {
          "queue": {
            "op": "add",
            "before": null,
            "after": {
              "data": {
                "type": "queue",
                "id": "5f43ed5c06d0c00019b37463"
              },
              "links": {
                "self": "/v1/routing/queues/5f43ed5c06d0c00019b37463"
              }
            }
          },
          "rule": {
            "op": "add",
            "before": null,
            "after": {
              "data": {
                "type": "queue-rule",
                "id": "5f43ebeb34f5e6001af1bd13"
              },
              "links": {
                "self": "/v1/routing/queue-rules/5f43ebeb34f5e6001af1bd13"
              }
            }
          }
        }
      },
      "client": "routing-worker",
      "isSync": false
    },
    "publishedAt": "2021-02-13T07:27:22.966Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2021-02-13T07:27:22.966Z",
  "v": 0
}

## T0
	{
  "dd": {
    "trace_id": "1229594044254794933",
    "span_id": "7165230620715078127"
  },
  "name": "event",
  "hostname": "ab81315e8de7",
  "pid": 19,
  "level": 30,
  "fullBodyLength": 1832,
  "body": {
    "id": "60277f56264a9600131673d8",
    "name": "kustomer.work-item.create",
    "partition": "5f15ebf357f2a300191ca22c",
    "body": {
      "id": "60277f56264a9600131673d7",
      "name": "kustomer.work-item.create",
      "org": "5f15ebf357f2a300191ca22c",
      "partition": "5f15ebf357f2a300191ca22c",
      "data": {
        "id": "60277f56264a9600131673d4",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "queued",
          "paused": false,
          "channel": "email",
          "firstEnterQueueAt": "2021-02-13T07:27:18.708Z",
          "queuedCount": 1,
          "priority": 1,
          "itemSize": 1,
          "updatedAt": "2021-02-13T07:27:18.716Z",
          "modifiedAt": "2021-02-13T07:27:18.716Z",
          "createdAt": "2021-02-13T07:27:18.708Z",
          "resourceRev": 8,
          "resourceCreatedAt": "2021-02-13T07:27:15.931Z",
          "resourceDirection": "in",
          "rev": 1,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2021-02-13T07:27:18.708Z"
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5f15ebf357f2a300191ca22c"
            },
            "links": {
              "self": "/v1/orgs/5f15ebf357f2a300191ca22c"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "60277f53d72347298d9446cb"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "60277f56264a9600131673d5"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5f3c2605ea3c180019301aea"
            },
            "links": {
              "self": "/v1/routing/queues/5f3c2605ea3c180019301aea"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-item/60277f56264a9600131673d4"
        }
      },
      "createdAt": "2021-02-13T07:27:18.719Z",
      "client": "routing-worker"
    },
    "publishedAt": "2021-02-13T07:27:18.719Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2021-02-13T07:27:18.720Z",
  "v": 0
}



























# Story: Return associated work-item ID with LWT metric
As a user of kustomer and the queue metrics api, I would like to see which work-item a latestWaitTime corresponds to via the queue metrics api response. This will allow me to verify that its working as expected so that I can feel confident displaying it to users.  

Current return val (Abbreviated):
```shell
{
  "data": [{
    "id": '123'
    "attributes": {
      "name": "Email Queue",
      "latestWaitTimeSeconds": 17,
    },
    ...
  },
  ...
  ]
}
```

# Proposals
Proposals for adding workItemId into return value: 
```shell
# Prop1: Add a field under attributes that indicates the workItemId
# Non-breaking change
{
  "data": [{
    "id": '123'
    "attributes": {
      "name": "Email Queue",
      "latestWaitTimeSeconds": 17,
      "latestWorkItemId": "123"
    },
    ...
  },
  ...
  ]
}

# Prop2: Put it in the relationships obj
# I do worry that in the future, queue to work-item metrics will be one to many
# even though right now they are one to one
{
  "data": [{
    "id": '123'
    "attributes": {
      "name": "Email Queue",
      "latestWaitTimeSeconds": 17
    },
    "relationships": {
      "workItem": {
        "data": {
          "id": "123",
          "type": "work-item"
        },
        "links": {
          "self": "/v1/work-item/123"
        },
      }
    }
    ...
  },
  ...
  ]
}


# Prop3: Change to object that contains both LWT and corresponding 
# Breaking change, but looks cleaner
{
  "data": [{
    "id": '123'
    "attributes": {
      "name": "Email Queue",
      "latestWaitTime": {
        "seconds": 17,
        "workItem": "123"
      }
    },
    ...
  },
  ...
  ]
} 
```


# Curl to put a conversation into ended, and a work-item into wrap-up
curl -X PATCH "${LOCAL_API_URL}/v1/conversations/602ad810948198096d6ca945" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "ended": true
}' | jq









# LWT definition:
  WorkItem: queued -> routed
Time from a workItem going from queued to routed


# Case 1 (pendingItem on): 
workItemId: 602bdba3d99f140019b8f131

LWT endpoint Return Value: 25


T0   + 0  (entered queued)
T0   + 25 (workItem state "routed")
T0   + 45 (work item is "accepted")
T0   + 75 (work item is "done")


# Case 2 (pendingItem off): 
workItemId: 602bdba3d99f140019b8f145


LWT Return Value: 33


T0   + 0  (queued message)
T0   + 33 (workItem state "assigned")
T0   + 50 (work item is "done")
















```shell
# STAGING QueueIds:
export queue1=5ff4bc444315ea0013b81862   # DefaultQueue
export queue2=6012d4082d55af001a77ebdb   # Chat
export queue3=600f22c52d55af001a76963c   # Email
export queueDNE=6012d4082d55af001a77ebdf # Queue that doesnt exist

# Get LWT
curl "${STAGING_API_URL}/v1/chat/queues/metrics/${queue3}" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
| jq
```


```shell
# PRODUCTION QueueIds:
export queue1=601d589643f25e0013629719   # DefaultQueue
export queue2=601d5906e82a8600123ddb59   # Chat
export queue3=601d58f73f051d0012c08687   # Email
export queueDNE=5fe0bd11c522cd001252541A # Queue that doesnt exist

# ✅ Three queues 
%>curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/${queue1},${queue2},${queue3}" \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
| jq
{
  "data": [
    {
      "type": "session_queue",
      "id": "5ff4c098a56039001a749393",
      "attributes": {
        "name": "Default Queue",
        "latestWaitTimeSeconds": null
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4c0911fc7582b7094f4e6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4c0911fc7582b7094f4e6"
          }
        },
        "queue": {
          "data": {
            "id": "5ff4c098a56039001a749393",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/5ff4c098a56039001a749393"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "6012dfb69dd043001952ee0e",
      "attributes": {
        "name": "Chat",
        "latestWaitTimeSeconds": 32
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4c0911fc7582b7094f4e6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4c0911fc7582b7094f4e6"
          }
        },
        "queue": {
          "data": {
            "id": "6012dfb69dd043001952ee0e",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/6012dfb69dd043001952ee0e"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "6012dfc62315b4001ab59fcc",
      "attributes": {
        "name": "Email team",
        "latestWaitTimeSeconds": 19
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4c0911fc7582b7094f4e6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4c0911fc7582b7094f4e6"
          }
        },
        "queue": {
          "data": {
            "id": "6012dfc62315b4001ab59fcc",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/6012dfc62315b4001ab59fcc"
          }
        }
      }
    }
  ]
}

# ✅ One queue 
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/${queue2}" \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
| jq
{
  "data": [
    {
      "type": "session_queue",
      "id": "6012dfb69dd043001952ee0e",
      "attributes": {
        "name": "Chat",
        "latestWaitTimeSeconds": 32
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4c0911fc7582b7094f4e6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4c0911fc7582b7094f4e6"
          }
        },
        "queue": {
          "data": {
            "id": "6012dfb69dd043001952ee0e",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/6012dfb69dd043001952ee0e"
          }
        }
      }
    }
  ]
}

# ✅ No queue id(s)
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics" \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
| jq
{
  "errors": [
    {
      "status": 404,
      "source": {
        "parameter": "path"
      },
      "code": "notfound",
      "title": "Not Found"
    }
  ]
}


# ✅ A queue that DoesNotExist 
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/${queueDNE}" \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
| jq
{
  "data": []
}


# ✅ A queue that DoesNotExist && one that does
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/${queue2},${queueDNE}" \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
| jq
{
  "data": [
    {
      "type": "session_queue",
      "id": "6012dfb69dd043001952ee0e",
      "attributes": {
        "name": "Chat",
        "latestWaitTimeSeconds": 32
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4c0911fc7582b7094f4e6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4c0911fc7582b7094f4e6"
          }
        },
        "queue": {
          "data": {
            "id": "6012dfb69dd043001952ee0e",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/6012dfb69dd043001952ee0e"
          }
        }
      }
    }
  ]
}


# ✅ Permissions, as queueRead
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/${queue2}" \
-H "Authorization: Bearer ${PRODUCTION_QUEUE_READ_AUTH_TOKEN}" \
| jq
{
  "data": [
    {
      "type": "session_queue",
      "id": "6012dfb69dd043001952ee0e",
      "attributes": {
        "name": "Chat",
        "latestWaitTimeSeconds": 32
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4c0911fc7582b7094f4e6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4c0911fc7582b7094f4e6"
          }
        },
        "queue": {
          "data": {
            "id": "6012dfb69dd043001952ee0e",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/6012dfb69dd043001952ee0e"
          }
        }
      }
    }
  ]
}

# ✅ Permissions, as user
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/${queue2}" \
-H "Authorization: Bearer ${PRODUCTION_USER_AUTH_TOKEN}" \
| jq
{
  "data": [
    {
      "type": "session_queue",
      "id": "6012dfb69dd043001952ee0e",
      "attributes": {
        "name": "Chat",
        "latestWaitTimeSeconds": 32
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4c0911fc7582b7094f4e6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4c0911fc7582b7094f4e6"
          }
        },
        "queue": {
          "data": {
            "id": "6012dfb69dd043001952ee0e",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/6012dfb69dd043001952ee0e"
          }
        }
      }
    }
  ]
}
```


































# Analytics Api testing
```shell
%> # Find metrics on all 3 queues I have been testing with 
%> curl --location --request POST "${PRODUCTION_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${PRODUCTION_ADMIN_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-01-28T05:00:00.000Z",
    "to": "2021-01-29T04:59:59.999Z",
    "time_zone": "America/New_York"
  },
  "query": {
    "queueId": [
      "5ff4c098a56039001a749393",
      "6012dfb69dd043001952ee0e",
      "6012dfc62315b4001ab59fcc"    
    ]
  }
}' | jq '.data.results'
{
  "latestWaitTime": {
    "data": 109630,
    "6012dfb69dd043001952ee0e": {
      "data": 125320
    },
    "6012dfc62315b4001ab59fcc": {
      "data": 109630
    }
  }
}
%> # Above looks good +1
%>
%> # Add 4th queue that doesnt exist, ensure it handles the dneQueue gracefully 
%> curl --location --request POST "${PRODUCTION_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${PRODUCTION_ADMIN_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-01-28T05:00:00.000Z",
    "to": "2021-01-29T04:59:59.999Z",
    "time_zone": "America/New_York"
  },
  "query": {
    "queueId": [
      "5ff4c098a56039001a749393",
      "6012dfb69dd043001952ee0e",
      "6012dfc62315b4001ab59fcc",
      "6012dfc62315b4001ab59fcA"
    ]
  }
}' | jq '.data.results'
{
  "latestWaitTime": {
    "data": 109630,
    "6012dfb69dd043001952ee0e": {
      "data": 125320
    },
    "6012dfc62315b4001ab59fcc": {
      "data": 109630
    }
  }
}
%> # Notice that the badId is not in the return value. +1
%>
%> # Query for all orgs queues
%> # Add 4th queue that doesnt exist, ensure it handles the dneQueue gracefully 
%> curl --location --request POST "${PRODUCTION_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${PRODUCTION_ADMIN_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-01-28T05:00:00.000Z",
    "to": "2021-01-29T04:59:59.999Z",
    "time_zone": "America/New_York"
  },
  "query": {}
}' | jq '.data.results'
{
  "latestWaitTime": {
    "data": 109630,
    "6012dfb69dd043001952ee0e": {
      "data": 125320
    },
    "6012dfc62315b4001ab59fcc": {
      "data": 109630
    }
  }
}
%> # Above looks good! +1
```