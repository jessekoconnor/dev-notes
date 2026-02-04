# IDs
consersation: 6033f1f5d72347298d7b11c7
work-item: 6033f1f7bd3ebb00197360a1
queue: 5bc5de5b9967d6001c44fdbc

# Summary
I took a look through the audit logs posted by Oren from and it shows that the routing worker simply adds the default queue back to both the conversation & work-item almost immediately after the business rules worker removes it from them both. 
Sadly im not sure that this can help us.. 

Would anyone care to guess why the routing-worker almost immediately sets the default queue the business rules unset it for both work-item and conversation? It was ~0.3s later in both cases. 
From my perspective, it seems like the queue rules did manage to run again, however there was still no matching rule found for some unknown reason... 

# Timeline of important events (from history to present order or asc)
1)2021-02-22T18:03:35.959Z [Work-Item is Created]
  * Work-item has no queue
2)2021-02-22T18:03:36.293Z [Routing-worker -> Work-Item] Assign default queue
  * Work-item gets assigned default queue
3)2021-02-22T18:03:36.670Z [Routing-worker -> Conversation] Assign default queue
  * Conversation gets assigned default queue
  * It had no queue before
4)2021-02-22T18:03:36.984Z [Biz-Rules-Worker -> Work-Item] Remove default queue
  * work-item gets queue removed
5)2021-02-22T18:03:37.283Z [Biz-Rules-Worker => Conversation] Remove queue
  * conversation get queue removed
6)2021-02-22T18:03:37.317Z [Routing-Worker -> Work-Item] Assign default queue
  * work-item gets queue added right back
7)2021-02-22T18:03:37.618Z [Routing-Worker -> Conversation] Assign default queue
  * conversation gets queue added right back
8)2021-02-23T15:28:55.731Z [Manual Queue Change]
  * A day later, somebody manually changes the queue of the conversation

# 2021-02-23T15:28:55.731Z [Manual Queue Change]
* A day later, somebody manually changes the queue of the conversation
```
{
      "type": "audit_log",
      "id": "60351f37834e7f768b2f31f3",
      "attributes": {
        "eventName": "kustomer.conversation.update",
        "eventVerb": "update",
        "org": "5bc5de5b5f2b2a001142dfa0",
        "userId": "5bd74686c27bd5001dd0c29d",
        "userType": "user",
        "objectId": "6033f1f5d72347298d7b11c7",
        "objectType": "conversation",
        "client": "api",
        "ip": null,
        "changes": {
          "attributes": {},
          "relationships": {
            "queue": {
              "op": "replace",
              "before": "5bc5de5b9967d6001c44fdbc",
              "after": "5ef644b4d78971001a892b16"
            }
          }
        },
        "createdAt": "2021-02-23T15:28:56.354Z",
        "publishedAt": "2021-02-23T15:28:55.731Z",
        "expiresAt": "2021-05-24T15:28:56.354Z"
      },
      "relationships": {
        "customer": {
          "links": {
            "self": "/v1/customers/601f1d6dd7c4f3a0664544cd"
          },
          "data": {
            "type": "customer",
            "id": "601f1d6dd7c4f3a0664544cd"
          }
        },
        "user": {
          "links": {
            "self": "/v1/users/5bd74686c27bd5001dd0c29d"
          },
          "data": {
            "type": "user",
            "id": "5bd74686c27bd5001dd0c29d"
          }
        }
      },
      "publishedAt": "2021-02-23T15:28:55.731Z",
      "createdAt": "2021-02-23T15:28:56.354Z",
      "expiresAt": "2021-05-24T15:28:56.354Z",
      "originalIndex": 8
    },
```

# 2021-02-22T18:03:37.618Z [Routing-Worker -> Conversation] Assign default queue
* conversation gets queue added right back
```
{
      "type": "audit_log",
      "id": "6033f1f9402efae50b765602",
      "attributes": {
        "eventName": "kustomer.conversation.update",
        "eventVerb": "update",
        "org": "5bc5de5b5f2b2a001142dfa0",
        "userId": null,
        "userType": "system",
        "objectId": "6033f1f5d72347298d7b11c7",
        "objectType": "conversation",
        "client": "routing-worker",
        "ip": null,
        "changes": {
          "attributes": {},
          "relationships": {
            "queue": {
              "op": "add",
              "before": null,
              "after": "5bc5de5b9967d6001c44fdbc"
            }
          }
        },
        "createdAt": "2021-02-22T18:03:37.909Z",
        "publishedAt": "2021-02-22T18:03:37.618Z",
        "expiresAt": "2021-05-23T18:03:37.909Z"
      },
      "relationships": {
        "customer": {
          "links": {
            "self": "/v1/customers/601f1d6dd7c4f3a0664544cd"
          },
          "data": {
            "type": "customer",
            "id": "601f1d6dd7c4f3a0664544cd"
          }
        },
        "user": {
          "links": {
            "self": "/v1/users/null"
          },
          "data": {
            "type": "user",
            "id": null
          }
        }
      },
      "publishedAt": "2021-02-22T18:03:37.618Z",
      "createdAt": "2021-02-22T18:03:37.909Z",
      "expiresAt": "2021-05-23T18:03:37.909Z",
      "originalIndex": 12
    },
```

# 2021-02-22T18:03:37.317Z [Routing-Worker -> Work-Item] Assign default queue
* work-item gets queue added right back
```
{
      "type": "audit_log",
      "id": "6033f1f9ad78b5001a89e6fc",
      "attributes": {
        "eventName": "kustomer.work-item.update",
        "eventVerb": "update",
        "org": "5bc5de5b5f2b2a001142dfa0",
        "userId": null,
        "userType": "system",
        "objectId": "6033f1f7bd3ebb00197360a1",
        "objectType": "work_item",
        "client": "routing-worker",
        "ip": null,
        "changes": {
          "attributes": {
            "status": {
              "op": "replace",
              "before": "ivr",
              "after": "queued"
            }
          },
          "relationships": {
            "queue": {
              "op": "add",
              "before": null,
              "after": "5bc5de5b9967d6001c44fdbc"
            }
          }
        },
        "createdAt": "2021-02-22T18:03:37.873Z",
        "publishedAt": "2021-02-22T18:03:37.317Z",
        "expiresAt": "2021-05-23T18:03:37.873Z"
      },
      "relationships": {
        "conversation": {
          "links": {
            "self": "/v1/conversations/6033f1f5d72347298d7b11c7"
          },
          "data": {
            "type": "conversation",
            "id": "6033f1f5d72347298d7b11c7"
          }
        },
        "user": {
          "links": {
            "self": "/v1/users/null"
          },
          "data": {
            "type": "user",
            "id": null
          }
        }
      },
      "publishedAt": "2021-02-22T18:03:37.317Z",
      "createdAt": "2021-02-22T18:03:37.873Z",
      "expiresAt": "2021-05-23T18:03:37.873Z",
      "originalIndex": 11
    },
```

# 2021-02-22T18:03:37.283Z [Biz-Rules-Worker => Conversation] Remove queue
* conversation get queue removed
```
{
      "type": "audit_log",
      "id": "6033f1f9ca47b64b963e1779",
      "attributes": {
        "eventName": "kustomer.conversation.update",
        "eventVerb": "update",
        "org": "5bc5de5b5f2b2a001142dfa0",
        "userId": null,
        "userType": "system",
        "objectId": "6033f1f5d72347298d7b11c7",
        "objectType": "conversation",
        "client": "biz-rules-worker",
        "ip": null,
        "changes": {
          "attributes": {
            "custom": {
              "op": "replace",
              "before": {
                "estimatedBillDateAt": "2021-03-04T14:30:00.000Z",
                "lastBillDateAt": "2021-02-06T23:03:30.000Z"
              },
              "after": {
                "estimatedBillDateAt": "2021-03-04T14:30:00.000Z",
                "lastBillDateAt": "2021-02-06T23:03:30.000Z",
                "contactReasonsTree": "account_subscription.billing1"
              }
            }
          },
          "relationships": {
            "queue": {
              "op": "remove",
              "before": "5bc5de5b9967d6001c44fdbc",
              "after": null
            }
          }
        },
        "createdAt": "2021-02-22T18:03:38.392Z",
        "publishedAt": "2021-02-22T18:03:37.283Z",
        "expiresAt": "2021-05-23T18:03:38.392Z"
      },
      "relationships": {
        "customer": {
          "links": {
            "self": "/v1/customers/601f1d6dd7c4f3a0664544cd"
          },
          "data": {
            "type": "customer",
            "id": "601f1d6dd7c4f3a0664544cd"
          }
        },
        "user": {
          "links": {
            "self": "/v1/users/null"
          },
          "data": {
            "type": "user",
            "id": null
          }
        }
      },
      "publishedAt": "2021-02-22T18:03:37.283Z",
      "createdAt": "2021-02-22T18:03:38.392Z",
      "expiresAt": "2021-05-23T18:03:38.392Z",
      "originalIndex": 10
    },
```

# 2021-02-22T18:03:36.984Z [Biz-Rules-Worker -> Work-Item] Remove default queue
* work-item gets queue removed
```
{
    "type": "audit_log",
    "id": "6033f1f8d36bdd00196d3712",
    "attributes": {
        "eventName": "kustomer.work-item.update",
        "eventVerb": "update",
        "org": "5bc5de5b5f2b2a001142dfa0",
        "userId": null,
        "userType": "system",
        "objectId": "6033f1f7bd3ebb00197360a1",
        "objectType": "work_item",
        "client": "biz-rules-worker",
        "ip": null,
        "changes": {
        "attributes": {
            "status": {
            "op": "replace",
            "before": "queued",
            "after": "ivr"
            }
        },
        "relationships": {
            "queue": {
            "op": "remove",
            "before": "5bc5de5b9967d6001c44fdbc",
            "after": null
            }
        }
        },
        "createdAt": "2021-02-22T18:03:38.071Z",
        "publishedAt": "2021-02-22T18:03:36.984Z",
        "expiresAt": "2021-05-23T18:03:38.071Z"
    },
    "relationships": {
        "conversation": {
        "links": {
            "self": "/v1/conversations/6033f1f5d72347298d7b11c7"
        },
        "data": {
            "type": "conversation",
            "id": "6033f1f5d72347298d7b11c7"
        }
        },
        "user": {
        "links": {
            "self": "/v1/users/null"
        },
        "data": {
            "type": "user",
            "id": null
        }
        }
    },
    "publishedAt": "2021-02-22T18:03:36.984Z",
    "createdAt": "2021-02-22T18:03:38.071Z",
    "expiresAt": "2021-05-23T18:03:38.071Z",
    "originalIndex": 13
},
```

# 2021-02-22T18:03:36.670Z [Routing-worker -> Conversation] Assign default queue
* Conversation gets assigned default queue
* It had no queue before
```
{
    "type": "audit_log",
    "id": "6033f1f8c71f691be38d2d84",
    "attributes": {
      "eventName": "kustomer.conversation.update",
      "eventVerb": "update",
      "org": "5bc5de5b5f2b2a001142dfa0",
      "userId": null,
      "userType": "system",
      "objectId": "6033f1f5d72347298d7b11c7",
      "objectType": "conversation",
      "client": "routing-worker",
      "ip": null,
      "changes": {
        "attributes": {},
        "relationships": {
          "queue": {
            "op": "add",
            "before": null,
            "after": "5bc5de5b9967d6001c44fdbc"
          }
        }
      },
      "createdAt": "2021-02-22T18:03:37.310Z",
      "publishedAt": "2021-02-22T18:03:36.670Z",
      "expiresAt": "2021-05-23T18:03:37.310Z"
    },
    "relationships": {
      "customer": {
        "links": {
          "self": "/v1/customers/601f1d6dd7c4f3a0664544cd"
        },
        "data": {
          "type": "customer",
          "id": "601f1d6dd7c4f3a0664544cd"
        }
      },
      "user": {
        "links": {
          "self": "/v1/users/null"
        },
        "data": {
          "type": "user",
          "id": null
        }
      }
    },
    "publishedAt": "2021-02-22T18:03:36.670Z",
    "createdAt": "2021-02-22T18:03:37.310Z",
    "expiresAt": "2021-05-23T18:03:37.310Z",
    "originalIndex": 14
  },
```

# 2021-02-22T18:03:36.293Z [Routing-worker -> Work-Item] Assign default queue
* Work-item gets assigned default queue
```
{
      "type": "audit_log",
      "id": "6033f1f874ea620019ecf080",
      "attributes": {
        "eventName": "kustomer.work-item.update",
        "eventVerb": "update",
        "org": "5bc5de5b5f2b2a001142dfa0",
        "userId": null,
        "userType": "system",
        "objectId": "6033f1f7bd3ebb00197360a1",
        "objectType": "work_item",
        "client": "routing-worker",
        "ip": null,
        "changes": {
          "attributes": {
            "status": {
              "op": "replace",
              "before": "ivr",
              "after": "queued"
            },
            "firstEnterQueueAt": {
              "op": "add",
              "before": null,
              "after": "2021-02-22T18:03:36.284Z"
            }
          },
          "relationships": {
            "queue": {
              "op": "add",
              "before": null,
              "after": "5bc5de5b9967d6001c44fdbc"
            }
          }
        },
        "createdAt": "2021-02-22T18:03:36.813Z",
        "publishedAt": "2021-02-22T18:03:36.293Z",
        "expiresAt": "2021-05-23T18:03:36.813Z"
      },
      "relationships": {
        "conversation": {
          "links": {
            "self": "/v1/conversations/6033f1f5d72347298d7b11c7"
          },
          "data": {
            "type": "conversation",
            "id": "6033f1f5d72347298d7b11c7"
          }
        },
        "user": {
          "links": {
            "self": "/v1/users/null"
          },
          "data": {
            "type": "user",
            "id": null
          }
        }
      },
      "publishedAt": "2021-02-22T18:03:36.293Z",
      "createdAt": "2021-02-22T18:03:36.813Z",
      "expiresAt": "2021-05-23T18:03:36.813Z",
      "originalIndex": 15
    },
```

# 2021-02-22T18:03:35.959Z [Work-Item is Created]
* Work-item has no queue
```
{
      "type": "audit_log",
      "id": "6033f1f7bd3ebb00197360a4",
      "attributes": {
        "eventName": "kustomer.work-item.create",
        "eventVerb": "create",
        "org": "5bc5de5b5f2b2a001142dfa0",
        "userId": null,
        "userType": "user",
        "objectId": "6033f1f7bd3ebb00197360a1",
        "objectType": "work_item",
        "client": null,
        "ip": null,
        "changes": null,
        "createdAt": "2021-02-22T18:03:36.795Z",
        "publishedAt": "2021-02-22T18:03:35.959Z",
        "expiresAt": "2021-05-23T18:03:36.795Z"
      },
      "relationships": {
        "conversation": {
          "links": {
            "self": "/v1/conversations/6033f1f5d72347298d7b11c7"
          },
          "data": {
            "type": "conversation",
            "id": "6033f1f5d72347298d7b11c7"
          }
        },
        "user": {
          "links": {
            "self": "/v1/users/null"
          },
          "data": {
            "type": "user",
            "id": null
          }
        }
      },
      "publishedAt": "2021-02-22T18:03:35.959Z",
      "createdAt": "2021-02-22T18:03:36.795Z",
      "expiresAt": "2021-05-23T18:03:36.795Z",
      "originalIndex": 16
    },
```