# Investigate reverse sync of queue

This is due to a race condition w/ forward syncing and reverse syncing.

* [20:14:35.06] Convo 54 gets queue rule hit queue1
* [20:14:35.193] Work-Item rev 3 gets queue rule hit queue1
* [20:14:35.51] A workflow changes Convo rev 58 to queue2
* [20:14:36.21] Convo rev gets reverse sync to wrong queue1
  * [20:14:36.29] Reverse Sync Logging!!! Incorrect!!!

## Reverse sync under investigation

```json
{
  "name": "routing-worker",
  "hostname": "50701a395be0",
  "pid": 1,
  "level": 30,
  "event": {},
  "obj": {},
  "conversationId": "621e7d0534b1800f59590a62",
  "workItemId": "621e7d095e6129b4f6e94279",
  "updatedConversation": {
    "queue": {
      "id": "5d9fbc698d1a94001a7b9950"
    },
    "rev": 59
  },
  "msg": "CONVERSATION_SYNC_AUDIT",
  "time": "2022-03-01T20:14:36.295Z",
  "v": 0,
  "dd": {
    "trace_id": "5975515570340052903",
    "span_id": "5975515570340052903",
    "service": "routing-worker",
    "version": "release-v0.1.147"
  }
}
```

## WORK_ITEM revs

### Work Item Rev 3 [Work-Item update that triggerd the reverse sync]

* Queue: 5d9fbc698d1a94001a7b9950
  * Before: null
  * Routing Reason: QUEUE_RULES_HIT
* PublishedAt: "2022-03-01T20:14:35.193Z",
* Aligns w/ convo rev 54
  * this occured 10ms afterwards

```json
{
  "name": "event",
  "hostname": "ca00d5a9df1c",
  "pid": 1,
  "level": 30,
  "fullBodyLength": 2996,
  "body": {
    "id": "621e7eab441b2f423480b714",
    "name": "kustomer.work-item.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eab441b2f235b80b713",
      "name": "kustomer.work-item.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "id": "621e7d095e6129b4f6e94279",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "queued",
          "paused": false,
          "channel": "whatsapp",
          "firstEnterQueueAt": "2022-03-01T20:07:37.262Z",
          "queuedCount": 2,
          "priority": 2,
          "itemSize": 1,
          "ivr": {
            "businessTime": 0,
            "time": 0
          },
          "updatedAt": "2022-03-01T20:14:35.186Z",
          "modifiedAt": "2022-03-01T20:07:37.285Z",
          "createdAt": "2022-03-01T20:07:37.262Z",
          "resourceRev": 11,
          "resourceCreatedAt": "2022-03-01T20:07:33.443Z",
          "resourceDirection": "in",
          "resourceFirstQueueTime": 421743,
          "rev": 3,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2022-03-01T20:14:35.186Z",
            "queueTime": 417406,
            "queueBusinessTime": 417406
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            },
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "621e7d0534b1800f59590a62"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "621e7d095e6129c552e9427a"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5d9fbc698d1a94001a7b9950"
            },
            "links": {
              "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
            }
          },
          "rule": {
            "data": {
              "type": "queue-rule",
              "id": "5d9fb78ce829000019027bb7"
            },
            "links": {
              "self": "/v1/routing/queue-rules/5d9fb78ce829000019027bb7"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-items/621e7d095e6129b4f6e94279"
        }
      },
      "createdAt": "2022-03-01T20:14:35.193Z",
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
          "priority": {
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
            "before": "2022-03-01T20:14:34.668Z",
            "after": "2022-03-01T20:14:35.186Z"
          },
          "resourceFirstQueueTime": {
            "op": "add",
            "after": 421743
          },
          "rev": {
            "op": "replace",
            "before": 2,
            "after": 3
          },
          "lastRevision": {
            "op": "replace",
            "before": {
              "enteredQueueAt": "2022-03-01T20:07:37.262Z",
              "queueTime": 417406,
              "queueBusinessTime": 417406
            },
            "after": {
              "enteredQueueAt": "2022-03-01T20:14:35.186Z",
              "queueTime": 417406,
              "queueBusinessTime": 417406
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
                "id": "5d9fbc698d1a94001a7b9950"
              },
              "links": {
                "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
              }
            }
          },
          "rule": {
            "op": "add",
            "before": null,
            "after": {
              "data": {
                "type": "queue-rule",
                "id": "5d9fb78ce829000019027bb7"
              },
              "links": {
                "self": "/v1/routing/queue-rules/5d9fb78ce829000019027bb7"
              }
            }
          }
        }
      },
      "client": "routing-worker",
      "isSync": false,
      "routingReasons": [
        {
          "meta": {
            "conversationRev": 53
          },
          "action": "QUEUE_WORK_ITEM",
          "code": "QUEUE_RULES_HIT"
        },
        {
          "meta": {
            "data": {
              "queue": {
                "id": "5d9fbc698d1a94001a7b9950",
                "rule": "5d9fb78ce829000019027bb7"
              },
              "rev": 2
            },
            "commandName": "queueCommandParams"
          },
          "action": "UPDATE_COMMAND",
          "code": "WORK_ITEM_UPDATE_CMD"
        }
      ]
    },
    "publishedAt": "2022-03-01T20:14:35.193Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2022-03-01T20:14:35.193Z",
  "v": 0,
  "dd": {
    "trace_id": "1589828326055696018",
    "span_id": "6186097874697041560",
    "service": "routing-api",
    "version": "release-v0.1.210"
  }
}
```

### Work Item rev 2

* Queue: None
  * Before: 5fa2a5a910e1be0019cda332
  * Convo rev 53 caused queue to be removed
  * Makes total sense as api removed queue from convo

```json
{
  "name": "event",
  "hostname": "a80d266da1f9",
  "pid": 1,
  "level": 30,
  "fullBodyLength": 2118,
  "body": {
    "id": "621e7eaac35286e516d39a4f",
    "name": "kustomer.work-item.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eaac3528652bbd39a4e",
      "name": "kustomer.work-item.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "id": "621e7d095e6129b4f6e94279",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "ivr",
          "paused": false,
          "channel": "whatsapp",
          "firstEnterQueueAt": "2022-03-01T20:07:37.262Z",
          "queuedCount": 1,
          "priority": 1,
          "itemSize": 1,
          "updatedAt": "2022-03-01T20:14:34.668Z",
          "modifiedAt": "2022-03-01T20:07:37.285Z",
          "createdAt": "2022-03-01T20:07:37.262Z",
          "resourceRev": 11,
          "resourceCreatedAt": "2022-03-01T20:07:33.443Z",
          "resourceDirection": "in",
          "rev": 2,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2022-03-01T20:07:37.262Z",
            "queueTime": 417406,
            "queueBusinessTime": 417406
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            },
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "621e7d0534b1800f59590a62"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "621e7d095e6129c552e9427a"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-items/621e7d095e6129b4f6e94279"
        }
      },
      "createdAt": "2022-03-01T20:14:34.682Z",
      "changes": {
        "attributes": {
          "status": {
            "op": "replace",
            "before": "queued",
            "after": "ivr"
          },
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:07:37.285Z",
            "after": "2022-03-01T20:14:34.668Z"
          },
          "rev": {
            "op": "replace",
            "before": 1,
            "after": 2
          },
          "lastRevision": {
            "op": "replace",
            "before": {
              "enteredQueueAt": "2022-03-01T20:07:37.262Z"
            },
            "after": {
              "enteredQueueAt": "2022-03-01T20:07:37.262Z",
              "queueTime": 417406,
              "queueBusinessTime": 417406
            }
          }
        },
        "relationships": {
          "queue": {
            "op": "remove",
            "before": {
              "data": {
                "type": "queue",
                "id": "5fa2a5a910e1be0019cda332"
              },
              "links": {
                "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
              }
            },
            "after": null
          }
        }
      },
      "client": "routing-worker",
      "isSync": true,
      "routingReasons": [
        {
          "meta": {
            "data": {
              "queue": {
                "id": null
              },
              "rev": 1,
              "resource": {
                "rev": 53
              }
            },
            "commandName": "dequeueCommandParams"
          },
          "action": "UPDATE_COMMAND",
          "code": "WORK_ITEM_UPDATE_CMD"
        }
      ]
    },
    "publishedAt": "2022-03-01T20:14:34.682Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2022-03-01T20:14:34.682Z",
  "v": 0,
  "dd": {
    "trace_id": "8059392250223692720",
    "span_id": "5831812133604263350",
    "service": "routing-api",
    "version": "release-v0.1.210"
  }
}
```

### Work Item Rev 1

* Queue: 5fa2a5a910e1be0019cda332
* ConvoRev: 11

```json
{
  "name": "event",
  "hostname": "cfea4ab8b905",
  "pid": 1,
  "level": 30,
  "fullBodyLength": 1427,
  "body": {
    "id": "621e7d095e6129fb77e94280",
    "name": "kustomer.work-item.create",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7d095e6129d01de9427f",
      "name": "kustomer.work-item.create",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "id": "621e7d095e6129b4f6e94279",
        "type": "work_item",
        "attributes": {
          "resourceType": "conversation",
          "status": "queued",
          "paused": false,
          "channel": "whatsapp",
          "firstEnterQueueAt": "2022-03-01T20:07:37.262Z",
          "queuedCount": 1,
          "priority": 1,
          "itemSize": 1,
          "updatedAt": "2022-03-01T20:07:37.285Z",
          "modifiedAt": "2022-03-01T20:07:37.285Z",
          "createdAt": "2022-03-01T20:07:37.262Z",
          "resourceRev": 11,
          "resourceCreatedAt": "2022-03-01T20:07:33.443Z",
          "resourceDirection": "in",
          "rev": 1,
          "workItemNumber": 1,
          "lastRevision": {
            "enteredQueueAt": "2022-03-01T20:07:37.262Z"
          }
        },
        "relationships": {
          "org": {
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            },
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            }
          },
          "resource": {
            "data": {
              "type": "conversation",
              "id": "621e7d0534b1800f59590a62"
            }
          },
          "lastRevision": {
            "data": {
              "type": "work_item_revision",
              "id": "621e7d095e6129c552e9427a"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5fa2a5a910e1be0019cda332"
            },
            "links": {
              "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
            }
          }
        },
        "links": {
          "self": "/v1/routing/work-items/621e7d095e6129b4f6e94279"
        }
      },
      "createdAt": "2022-03-01T20:07:37.299Z",
      "client": "routing-worker",
      "routingReasons": []
    },
    "publishedAt": "2022-03-01T20:07:37.299Z",
    "version": 3
  },
  "producer": "SNSEventProducer",
  "msg": "",
  "time": "2022-03-01T20:07:37.299Z",
  "v": 0,
  "dd": {
    "trace_id": "4319893758044166862",
    "span_id": "2805590623002281249",
    "service": "routing-api",
    "version": "release-v0.1.210"
  }
}
```

## CONVERSATION revs

### Convo rev 60

* Queue: 5d9fbc698d1a94001a7b9950
  * Before: 5fa2a5a910e1be0019cda332
  * client: routing-worker
* PublishedAt: "20:14:36.21"

```json
{
  "level": 30,
  "time": 1646165676211,
  "pid": 1,
  "hostname": "0656faacd39f",
  "name": "event",
  "dd": {
    "trace_id": "5975515570340052903",
    "span_id": "5132478640813232575",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 4203,
  "body": {
    "id": "621e7eacb2467d81ee1a775a",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eac5746ae3762045ca7",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 14,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:36.202Z",
          "modifiedAt": "2022-03-01T20:14:35.453Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:35.413Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 7,
          "inboundMessageCount": 7,
          "rev": 60,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5d9fbc698d1a94001a7b9950"
            },
            "links": {
              "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:36.210Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:35.860Z",
            "after": "2022-03-01T20:14:36.202Z"
          },
          "rev": {
            "op": "replace",
            "before": 59,
            "after": 60
          }
        },
        "relationships": {
          "queue": {
            "op": "replace",
            "before": {
              "data": {
                "type": "queue",
                "id": "5fa2a5a910e1be0019cda332"
              },
              "links": {
                "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
              }
            },
            "after": {
              "data": {
                "type": "queue",
                "id": "5d9fbc698d1a94001a7b9950"
              },
              "links": {
                "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
              }
            }
          }
        }
      },
      "persist": true,
      "isSync": true,
      "client": "routing-worker"
    },
    "publishedAt": "2022-03-01T20:14:36.210Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo rev 59

* Queue: 5fa2a5a910e1be0019cda332
  * Before: same
* PublishedAt: "2022-03-01T20:14:35.868Z",

```json
{
  "level": 30,
  "time": 1646165675868,
  "pid": 1,
  "hostname": "e50b1dd59b19",
  "name": "event",
  "dd": {
    "trace_id": "6593492765195455528",
    "span_id": "3323143328456786857",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 3962,
  "body": {
    "id": "621e7eab60401e68a793d1a6",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eabd5b22f59dabcb2a0",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 14,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:35.860Z",
          "modifiedAt": "2022-03-01T20:14:35.453Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:35.413Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 7,
          "inboundMessageCount": 7,
          "rev": 59,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5fa2a5a910e1be0019cda332"
            },
            "links": {
              "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:35.868Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:35.488Z",
            "after": "2022-03-01T20:14:35.860Z"
          },
          "rev": {
            "op": "replace",
            "before": 58,
            "after": 59
          }
        },
        "relationships": {}
      },
      "persist": true,
      "client": "workflow",
      "sourceId": "61eecb42b34add487fdbdb5b",
      "sourceType": "workflow"
    },
    "publishedAt": "2022-03-01T20:14:35.868Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo rev 58

* Queue: 5fa2a5a910e1be0019cda332
  * Before: 5d9fbc698d1a94001a7b9950
  * Client: Workflow
* PublishedAt: "2022-03-01T20:14:35.510Z"

```json
{
  "level": 30,
  "time": 1646165675510,
  "pid": 1,
  "hostname": "853e2ff56f7a",
  "name": "event",
  "dd": {
    "trace_id": "6593492765195455528",
    "span_id": "3719024137018194230",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 4245,
  "body": {
    "id": "621e7eab56bdb3152dfc9e3c",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eab08413f62a436079f",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 14,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:35.488Z",
          "modifiedAt": "2022-03-01T20:14:35.453Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:35.413Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 7,
          "inboundMessageCount": 7,
          "rev": 58,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5fa2a5a910e1be0019cda332"
            },
            "links": {
              "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:35.507Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:35.453Z",
            "after": "2022-03-01T20:14:35.488Z"
          },
          "rev": {
            "op": "replace",
            "before": 57,
            "after": 58
          }
        },
        "relationships": {
          "queue": {
            "op": "replace",
            "before": {
              "data": {
                "type": "queue",
                "id": "5d9fbc698d1a94001a7b9950"
              },
              "links": {
                "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
              }
            },
            "after": {
              "data": {
                "type": "queue",
                "id": "5fa2a5a910e1be0019cda332"
              },
              "links": {
                "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
              }
            }
          }
        }
      },
      "persist": true,
      "client": "workflow",
      "sourceId": "61eecb42b34add487fdbdb5b",
      "sourceType": "workflow"
    },
    "publishedAt": "2022-03-01T20:14:35.510Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo rev 57

* Queue: 5d9fbc698d1a94001a7b9950
  * No change

```json
{
  "level": 30,
  "time": 1646165675464,
  "pid": 1,
  "hostname": "0fdf1c8d4b72",
  "name": "event",
  "dd": {
    "trace_id": "2744545437572305922",
    "span_id": "6017123422687570565",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 4220,
  "body": {
    "id": "621e7eab08caccb92aaa58a8",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eabafeaf22834482361",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 14,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:35.453Z",
          "modifiedAt": "2022-03-01T20:14:35.453Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:35.413Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 7,
          "inboundMessageCount": 7,
          "rev": 57,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5d9fbc698d1a94001a7b9950"
            },
            "links": {
              "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:35.463Z",
      "changes": {
        "attributes": {
          "messageCount": {
            "op": "replace",
            "before": 13,
            "after": 14
          },
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:35.322Z",
            "after": "2022-03-01T20:14:35.453Z"
          },
          "modifiedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:34.495Z",
            "after": "2022-03-01T20:14:35.453Z"
          },
          "lastMessageAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:34.171Z",
            "after": "2022-03-01T20:14:35.413Z"
          },
          "outboundMessageCount": {
            "op": "replace",
            "before": 6,
            "after": 7
          },
          "rev": {
            "op": "replace",
            "before": 56,
            "after": 57
          }
        },
        "relationships": {}
      },
      "persist": false,
      "client": "drafts"
    },
    "publishedAt": "2022-03-01T20:14:35.464Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo Rev 56

* Queue: 5d9fbc698d1a94001a7b9950
  * No change

```json
{
  "level": 30,
  "time": 1646165675333,
  "pid": 1,
  "hostname": "6e427d0e7619",
  "name": "event",
  "dd": {
    "trace_id": "6593492765195455528",
    "span_id": "998399807175378784",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 3962,
  "body": {
    "id": "621e7eab5c3809a0be416097",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eabac798a52fca786f8",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 13,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:35.322Z",
          "modifiedAt": "2022-03-01T20:14:34.495Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:34.171Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 6,
          "inboundMessageCount": 7,
          "rev": 56,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5d9fbc698d1a94001a7b9950"
            },
            "links": {
              "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:35.333Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:35.196Z",
            "after": "2022-03-01T20:14:35.322Z"
          },
          "rev": {
            "op": "replace",
            "before": 55,
            "after": 56
          }
        },
        "relationships": {}
      },
      "persist": true,
      "client": "workflow",
      "sourceId": "61eecb42b34add487fdbdb5b",
      "sourceType": "workflow"
    },
    "publishedAt": "2022-03-01T20:14:35.333Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo Rev 55

* Queue: 5d9fbc698d1a94001a7b9950
  * No change

```json
{
  "level": 30,
  "time": 1646165675223,
  "pid": 1,
  "hostname": "1af0995ca0d4",
  "name": "event",
  "dd": {
    "trace_id": "6593492765195455528",
    "span_id": "9212252389816869932",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 3962,
  "body": {
    "id": "621e7eab7424d27c57ca556c",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eab47086473294aba2a",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 13,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:35.196Z",
          "modifiedAt": "2022-03-01T20:14:34.495Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:34.171Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 6,
          "inboundMessageCount": 7,
          "rev": 55,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5d9fbc698d1a94001a7b9950"
            },
            "links": {
              "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:35.220Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:35.043Z",
            "after": "2022-03-01T20:14:35.196Z"
          },
          "rev": {
            "op": "replace",
            "before": 54,
            "after": 55
          }
        },
        "relationships": {}
      },
      "persist": true,
      "client": "workflow",
      "sourceId": "61eecb42b34add487fdbdb5b",
      "sourceType": "workflow"
    },
    "publishedAt": "2022-03-01T20:14:35.221Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo rev 54

* Queue: 5d9fbc698d1a94001a7b9950
  * Before: null
  * Client: routing-worker
  * This is the queue rules hit!!!
* PublishedAt: "2022-03-01T20:14:35.061Z",

```json
{
  "level": 30,
  "time": 1646165675064,
  "pid": 1,
  "hostname": "4f806b9ca89b",
  "name": "event",
  "dd": {
    "trace_id": "1589828326055696018",
    "span_id": "7110554301996874131",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 4069,
  "body": {
    "id": "621e7eab11e0327da16a5e76",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eabc926cb400ab976ad",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 13,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:35.043Z",
          "modifiedAt": "2022-03-01T20:14:34.495Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:34.171Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 6,
          "inboundMessageCount": 7,
          "rev": 54,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5d9fbc698d1a94001a7b9950"
            },
            "links": {
              "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:35.061Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:34.495Z",
            "after": "2022-03-01T20:14:35.043Z"
          },
          "rev": {
            "op": "replace",
            "before": 53,
            "after": 54
          }
        },
        "relationships": {
          "queue": {
            "op": "add",
            "before": null,
            "after": {
              "data": {
                "type": "queue",
                "id": "5d9fbc698d1a94001a7b9950"
              },
              "links": {
                "self": "/v1/routing/queues/5d9fbc698d1a94001a7b9950"
              }
            }
          }
        }
      },
      "persist": true,
      "client": "routing-worker"
    },
    "publishedAt": "2022-03-01T20:14:35.061Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo rev 53

* Queue: None
  * Removed 5fa2a5a910e1be0019cda332
  * Client: API

```json
{
  "level": 30,
  "time": 1646165674510,
  "pid": 1,
  "hostname": "a4c68b35e0d5",
  "name": "event",
  "dd": {
    "trace_id": "290507238907372356",
    "span_id": "4062597103820234858",
    "service": "sobjects-conversations",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 4051,
  "body": {
    "id": "621e7eaa1fdf38405fdd4dd1",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eaa3aeced3fea5533c3",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "orgName": "rappi",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 13,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:34.495Z",
          "modifiedAt": "2022-03-01T20:14:34.495Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:34.171Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 6,
          "inboundMessageCount": 7,
          "rev": 53,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:34.508Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:34.318Z",
            "after": "2022-03-01T20:14:34.495Z"
          },
          "modifiedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:34.191Z",
            "after": "2022-03-01T20:14:34.495Z"
          },
          "rev": {
            "op": "replace",
            "before": 52,
            "after": 53
          }
        },
        "relationships": {
          "queue": {
            "op": "remove",
            "before": {
              "data": {
                "type": "queue",
                "id": "5fa2a5a910e1be0019cda332"
              },
              "links": {
                "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
              }
            },
            "after": null
          }
        }
      },
      "persist": true,
      "client": "api"
    },
    "publishedAt": "2022-03-01T20:14:34.509Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo rev 52

* Queue: 5fa2a5a910e1be0019cda332

```json
{
  "level": 30,
  "time": 1646165674335,
  "pid": 1,
  "hostname": "6d701551cd05",
  "name": "event",
  "dd": {
    "trace_id": "290507238907372356",
    "span_id": "357615176597863959",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 4331,
  "body": {
    "id": "621e7eaaa25c4873c211064b",
    "name": "kustomer.conversation.update",
    "partition": "5d2f98fec7a28e001a2cfe04",
    "body": {
      "id": "621e7eaab939617c0a16f1b1",
      "name": "kustomer.conversation.update",
      "org": "5d2f98fec7a28e001a2cfe04",
      "partition": "5d2f98fec7a28e001a2cfe04",
      "data": {
        "type": "conversation",
        "id": "621e7d0534b1800f59590a62",
        "attributes": {
          "externalId": "whatsapp:+5715140348.whatsapp:+573178832237",
          "name": "hola buenas tardes",
          "preview": "de tienda",
          "channels": [
            "whatsapp"
          ],
          "status": "open",
          "messageCount": 13,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-01T20:07:33.443Z",
          "updatedAt": "2022-03-01T20:14:34.318Z",
          "modifiedAt": "2022-03-01T20:14:34.191Z",
          "lastActivityAt": "2022-03-01T20:14:31.901Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "5d432edad7b79f001a03a3eb",
            "5ff8971b8991bb8b19219039",
            "60071ec01c9333c3ac9c073f",
            "61a82000af595619b3b5b66b",
            "5d8d28023b78f500147bcf96",
            "5fd3e8c059a9a4dbcb80fc5a",
            "603002aeecf6ed3469c40a04"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z",
            "directionType": "initial-in",
            "channel": "whatsapp",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            }
          },
          "firstMessageOut": {
            "createdByTeams": []
          },
          "lastMessageIn": {
            "id": "621e7ea7f8077633caa482f6",
            "sentAt": "2022-03-01T20:14:31.901Z",
            "createdAt": "2022-03-01T20:14:32.252Z",
            "meta": {
              "from": "whatsapp:+573178832237",
              "to": "whatsapp:+5715140348",
              "attachmentNum": 0
            },
            "channel": "whatsapp"
          },
          "lastMessageAt": "2022-03-01T20:14:34.171Z",
          "lastMessageUnrespondedTo": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "lastMessageUnrespondedToSinceLastDone": {
            "id": "621e7d05f8077633ca06e660",
            "sentAt": "2022-03-01T20:07:33.094Z",
            "createdAt": "2022-03-01T20:07:33.492Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastResponse": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "firstDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "lastDone": {
            "createdByTeams": [],
            "assignedTeams": [],
            "assignedUsers": []
          },
          "direction": "in",
          "custom": {
            "countryStr": "co",
            "authorTypeStr": "partner",
            "operationTeamStr": "SS",
            "unknowInputsStr": "0",
            "orderIdObligatorioStr": "",
            "partnerIntegrateStr": "",
            "storeIdStr": "",
            "segmentationStr": "unknown"
          },
          "lastMessageDirection": "out",
          "outboundMessageCount": 6,
          "inboundMessageCount": 7,
          "rev": 52,
          "priority": 3,
          "defaultLang": "es",
          "locale": null,
          "roleGroupVersions": [],
          "accessOverride": [],
          "assistant": {
            "fac": {
              "reasons": []
            },
            "assistantId": []
          },
          "phase": "active"
        },
        "relationships": {
          "messages": {
            "links": {
              "self": "/v1/conversations/621e7d0534b1800f59590a62/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/5fe0d2ef108fe72f018db792"
            },
            "data": {
              "type": "user",
              "id": "5fe0d2ef108fe72f018db792"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d2f98fec7a28e001a2cfe04"
            },
            "data": {
              "type": "org",
              "id": "5d2f98fec7a28e001a2cfe04"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "5febd39fb616a059ef052ad0"
            },
            "links": {
              "self": "/v1/customers/5febd39fb616a059ef052ad0"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5fa2a5a910e1be0019cda332"
            },
            "links": {
              "self": "/v1/routing/queues/5fa2a5a910e1be0019cda332"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf791a124be4f2960cb0c4"
            },
            "links": {
              "self": "/v1/brands/5daf791a124be4f2960cb0c4"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621e7d0534b1800f59590a62"
        }
      },
      "createdAt": "2022-03-01T20:14:34.334Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-01T20:14:34.191Z",
            "after": "2022-03-01T20:14:34.318Z"
          },
          "tags": {
            "op": "replace",
            "before": [
              "5d432edad7b79f001a03a3eb",
              "5ff8971b8991bb8b19219039",
              "60071ec01c9333c3ac9c073f",
              "61a82000af595619b3b5b66b",
              "5d8d28023b78f500147bcf96"
            ],
            "after": [
              "5d432edad7b79f001a03a3eb",
              "5ff8971b8991bb8b19219039",
              "60071ec01c9333c3ac9c073f",
              "61a82000af595619b3b5b66b",
              "5d8d28023b78f500147bcf96",
              "5fd3e8c059a9a4dbcb80fc5a",
              "603002aeecf6ed3469c40a04"
            ]
          },
          "rev": {
            "op": "replace",
            "before": 51,
            "after": 52
          }
        },
        "relationships": {}
      },
      "persist": true,
      "client": "workflow",
      "sourceId": "61eecb42b34add487fdbdb5b",
      "sourceType": "workflow"
    },
    "publishedAt": "2022-03-01T20:14:34.334Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```