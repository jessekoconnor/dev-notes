# Notes

## Bulk update

```bash
curl -X PUT "${LOCAL_API_URL}/v1/conversations/bulk?ids=6079b9b0a651aff4a55b8b53" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "queue": {
    "id": null
  }
}' | jq

{
  "data": {
    "type": "bulk",
    "id": "60f1a19734f7b60015e684c4",
    "attributes": {
      "ids": [
        "6079b9b0a651aff4a55b8b53"
      ],
      "context": "api.sobjects.conversations.bulk-update",
      "payload": {
        "api": {
          "method": "PUT",
          "service": "sobjects",
          "requestId": "60f1a1966f84cc53f205a6f0",
          "user": {
            "org": "6041403c1eeac59bc5ac8075",
            "subject": "604142f91eeac5a224ac80f0",
            "orgName": "local-joconnor-03-04-21-1",
            "roles": [
              "org"
            ],
            "userType": "machine",
            "id": "604142f91eeac5a224ac80f0",
            "iat": 1626448279,
            "aud": "urn:api",
            "iss": "urn:api",
            "sub": "604142f91eeac5a224ac80f0"
          },
          "path": "/v1/conversations/:id",
          "data": {
            "queue": {
              "id": null
            }
          }
        }
      },
      "createdAt": "2021-07-16T15:11:19.141Z",
      "updatedAt": "2021-07-16T15:11:19.141Z",
      "status": "running",
      "batchErrors": false,
      "completed": false,
      "v2": true,
      "batches": {
        "complete": 0
      }
    },
    "relationships": {
      "org": {
        "links": {
          "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
        },
        "data": {
          "type": "org",
          "id": "6041403c1eeac59bc5ac8075"
        }
      },
      "createdBy": {
        "links": {
          "self": "/v1/users/604142f91eeac5a224ac80f0"
        },
        "data": {
          "type": "user",
          "id": "604142f91eeac5a224ac80f0"
        }
      }
    },
    "links": {
      "self": "/v1/bulk/60f1a19734f7b60015e684c4"
    }
  }
}
```

## Get work-items by queue

```bash
curl -X GET "${LOCAL_API_URL}/v1/routing/queues/604142274df46d0014f7f3c7/work-items" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
| jq
```

```bash
{
  "meta": {
    "pageSize": 100,
    "page": 1
  },
  "links": {
    "self": "/v1/routing/queues/604142274df46d0014f7f3c7/work-items?page=1&pageSize=100",
    "first": "/v1/routing/queues/604142274df46d0014f7f3c7/work-items?page=1&pageSize=100",
    "prev": null,
    "next": null
  },
  "data": [
    {
      "id": "60f068086e3e870015960acf",
      "type": "work_item",
      "attributes": {
        "resourceType": "conversation",
        "status": "queued",
        "paused": false,
        "channel": "email",
        "firstEnterQueueAt": "2021-07-15T16:53:29.329Z",
        "queuedCount": 14,
        "priority": 1,
        "itemSize": 1,
        "ivr": {
          "businessTime": 0,
          "time": 0
        },
        "updatedAt": "2021-07-16T17:06:56.133Z",
        "modifiedAt": "2021-07-15T16:53:28.290Z",
        "createdAt": "2021-07-15T16:53:28.235Z",
        "resourceRev": 1141,
        "resourceCreatedAt": "2021-04-16T16:22:09.174Z",
        "resourceDirection": "in",
        "rev": 28,
        "workItemNumber": 6,
        "lastRevision": {
          "enteredQueueAt": "2021-07-16T17:06:56.133Z",
          "routedAt": "2021-07-15T16:53:29.854Z",
          "lastTimedoutAt": "2021-07-15T16:59:25.749Z",
          "timedout": true
        }
      },
      "relationships": {
        "org": {
          "data": {
            "type": "org",
            "id": "6041403c1eeac59bc5ac8075"
          },
          "links": {
            "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
          }
        },
        "resource": {
          "data": {
            "type": "conversation",
            "id": "6079b9b0a651aff4a55b8b53"
          }
        },
        "routedToSession": {
          "data": {
            "type": "work_session",
            "id": "60e73707aad9c46624b07b33"
          },
          "links": {
            "self": "/v1/routing/work-session/60e73707aad9c46624b07b33"
          }
        },
        "routedTo": {
          "data": {
            "type": "user",
            "id": "6041403d1eeac5fc4bac807a"
          },
          "links": {
            "self": "/v1/users/6041403d1eeac5fc4bac807a"
          }
        },
        "lastRevision": {
          "data": {
            "type": "work_item_revision",
            "id": "60f068086e3e870015960ad0"
          }
        },
        "queue": {
          "data": {
            "type": "queue",
            "id": "604142274df46d0014f7f3c7"
          },
          "links": {
            "self": "/v1/routing/queues/604142274df46d0014f7f3c7"
          }
        },
        "rule": {
          "data": {
            "type": "queue-rule",
            "id": "6041423e4df46d0014f7f3ce"
          },
          "links": {
            "self": "/v1/routing/queue-rules/6041423e4df46d0014f7f3ce"
          }
        }
      },
      "links": {
        "self": "/v1/routing/work-item/60f068086e3e870015960acf"
      }
    },
    {
      "id": "60e72fa0aad9c47732b07ad8",
      "type": "work_item",
      "attributes": {
        "resourceType": "conversation",
        "status": "completed",
        "paused": false,
        "channel": "email",
        "firstEnterQueueAt": "2021-07-08T17:02:24.660Z",
        "queuedCount": 0,
        "priority": 1,
        "itemSize": 1,
        "handle": {
          "time": 893912,
          "businessTime": 893912,
          "completedAt": "2021-07-08T17:17:18.572Z"
        },
        "completedAt": "2021-07-08T17:17:18.572Z",
        "updatedAt": "2021-07-08T17:17:18.572Z",
        "modifiedAt": "2021-07-08T17:02:24.730Z",
        "createdAt": "2021-07-08T17:02:24.660Z",
        "resourceRev": 741,
        "resourceCreatedAt": "2021-04-16T16:22:09.174Z",
        "resourceDirection": "in",
        "rev": 2,
        "workItemNumber": 5,
        "lastRevision": {
          "enteredQueueAt": "2021-07-08T17:02:24.660Z",
          "acceptedAt": "2021-07-08T17:02:24.660Z"
        }
      },
      "relationships": {
        "org": {
          "data": {
            "type": "org",
            "id": "6041403c1eeac59bc5ac8075"
          },
          "links": {
            "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
          }
        },
        "team": {
          "data": {
            "type": "team",
            "id": "604142761eeac56e04ac80e0"
          },
          "links": {
            "self": "/v1/teams/604142761eeac56e04ac80e0"
          }
        },
        "resource": {
          "data": {
            "type": "conversation",
            "id": "6079b9b0a651aff4a55b8b53"
          }
        },
        "workSession": {
          "data": {
            "type": "work_session",
            "id": "60de145b2ea8f27777329ffc"
          },
          "links": {
            "self": "/v1/routing/work-session/60de145b2ea8f27777329ffc"
          }
        },
        "lastRevision": {
          "data": {
            "type": "work_item_revision",
            "id": "60e72fa0aad9c4fbe2b07ad9"
          }
        },
        "assignedTo": {
          "data": {
            "type": "user",
            "id": "6041403d1eeac5fc4bac807a"
          },
          "links": {
            "self": "/v1/users/6041403d1eeac5fc4bac807a"
          }
        },
        "queue": {
          "data": {
            "type": "queue",
            "id": "604142274df46d0014f7f3c7"
          },
          "links": {
            "self": "/v1/routing/queues/604142274df46d0014f7f3c7"
          }
        },
        "acceptedBy": {
          "data": {
            "type": "user",
            "id": "6041403d1eeac5fc4bac807a"
          },
          "links": {
            "self": "/v1/users/6041403d1eeac5fc4bac807a"
          }
        }
      },
      "links": {
        "self": "/v1/routing/work-item/60e72fa0aad9c47732b07ad8"
      }
    }
  ]
}
```

## Get work-items by queue (Paging)

```bash
curl -X GET "${LOCAL_API_URL}/v1/routing/queues/604142274df46d0014f7f3c7/work-items/?pageSize=1&page=1" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
| jq
```

```bash
{
  "meta": {
    "pageSize": 100,
    "page": 1
  },
  "links": {
    "self": "/v1/routing/queues/604142274df46d0014f7f3c7/work-items?page=1&pageSize=100",
    "first": "/v1/routing/queues/604142274df46d0014f7f3c7/work-items?page=1&pageSize=100",
    "prev": null,
    "next": null
  },
  "data": [
    {
      "id": "60f068086e3e870015960acf",
      "type": "work_item",
      "attributes": {
        "resourceType": "conversation",
        "status": "queued",
        "paused": false,
        "channel": "email",
        "firstEnterQueueAt": "2021-07-15T16:53:29.329Z",
        "queuedCount": 14,
        "priority": 1,
        "itemSize": 1,
        "ivr": {
          "businessTime": 0,
          "time": 0
        },
        "updatedAt": "2021-07-16T17:06:56.133Z",
        "modifiedAt": "2021-07-15T16:53:28.290Z",
        "createdAt": "2021-07-15T16:53:28.235Z",
        "resourceRev": 1141,
        "resourceCreatedAt": "2021-04-16T16:22:09.174Z",
        "resourceDirection": "in",
        "rev": 28,
        "workItemNumber": 6,
        "lastRevision": {
          "enteredQueueAt": "2021-07-16T17:06:56.133Z",
          "routedAt": "2021-07-15T16:53:29.854Z",
          "lastTimedoutAt": "2021-07-15T16:59:25.749Z",
          "timedout": true
        }
      },
      "relationships": {
        "org": {
          "data": {
            "type": "org",
            "id": "6041403c1eeac59bc5ac8075"
          },
          "links": {
            "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
          }
        },
        "resource": {
          "data": {
            "type": "conversation",
            "id": "6079b9b0a651aff4a55b8b53"
          }
        },
        "routedToSession": {
          "data": {
            "type": "work_session",
            "id": "60e73707aad9c46624b07b33"
          },
          "links": {
            "self": "/v1/routing/work-session/60e73707aad9c46624b07b33"
          }
        },
        "routedTo": {
          "data": {
            "type": "user",
            "id": "6041403d1eeac5fc4bac807a"
          },
          "links": {
            "self": "/v1/users/6041403d1eeac5fc4bac807a"
          }
        },
        "lastRevision": {
          "data": {
            "type": "work_item_revision",
            "id": "60f068086e3e870015960ad0"
          }
        },
        "queue": {
          "data": {
            "type": "queue",
            "id": "604142274df46d0014f7f3c7"
          },
          "links": {
            "self": "/v1/routing/queues/604142274df46d0014f7f3c7"
          }
        },
        "rule": {
          "data": {
            "type": "queue-rule",
            "id": "6041423e4df46d0014f7f3ce"
          },
          "links": {
            "self": "/v1/routing/queue-rules/6041423e4df46d0014f7f3ce"
          }
        }
      },
      "links": {
        "self": "/v1/routing/work-item/60f068086e3e870015960acf"
      }
    },
    {
      "id": "60e72fa0aad9c47732b07ad8",
      "type": "work_item",
      "attributes": {
        "resourceType": "conversation",
        "status": "completed",
        "paused": false,
        "channel": "email",
        "firstEnterQueueAt": "2021-07-08T17:02:24.660Z",
        "queuedCount": 0,
        "priority": 1,
        "itemSize": 1,
        "handle": {
          "time": 893912,
          "businessTime": 893912,
          "completedAt": "2021-07-08T17:17:18.572Z"
        },
        "completedAt": "2021-07-08T17:17:18.572Z",
        "updatedAt": "2021-07-08T17:17:18.572Z",
        "modifiedAt": "2021-07-08T17:02:24.730Z",
        "createdAt": "2021-07-08T17:02:24.660Z",
        "resourceRev": 741,
        "resourceCreatedAt": "2021-04-16T16:22:09.174Z",
        "resourceDirection": "in",
        "rev": 2,
        "workItemNumber": 5,
        "lastRevision": {
          "enteredQueueAt": "2021-07-08T17:02:24.660Z",
          "acceptedAt": "2021-07-08T17:02:24.660Z"
        }
      },
      "relationships": {
        "org": {
          "data": {
            "type": "org",
            "id": "6041403c1eeac59bc5ac8075"
          },
          "links": {
            "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
          }
        },
        "team": {
          "data": {
            "type": "team",
            "id": "604142761eeac56e04ac80e0"
          },
          "links": {
            "self": "/v1/teams/604142761eeac56e04ac80e0"
          }
        },
        "resource": {
          "data": {
            "type": "conversation",
            "id": "6079b9b0a651aff4a55b8b53"
          }
        },
        "workSession": {
          "data": {
            "type": "work_session",
            "id": "60de145b2ea8f27777329ffc"
          },
          "links": {
            "self": "/v1/routing/work-session/60de145b2ea8f27777329ffc"
          }
        },
        "lastRevision": {
          "data": {
            "type": "work_item_revision",
            "id": "60e72fa0aad9c4fbe2b07ad9"
          }
        },
        "assignedTo": {
          "data": {
            "type": "user",
            "id": "6041403d1eeac5fc4bac807a"
          },
          "links": {
            "self": "/v1/users/6041403d1eeac5fc4bac807a"
          }
        },
        "queue": {
          "data": {
            "type": "queue",
            "id": "604142274df46d0014f7f3c7"
          },
          "links": {
            "self": "/v1/routing/queues/604142274df46d0014f7f3c7"
          }
        },
        "acceptedBy": {
          "data": {
            "type": "user",
            "id": "6041403d1eeac5fc4bac807a"
          },
          "links": {
            "self": "/v1/users/6041403d1eeac5fc4bac807a"
          }
        }
      },
      "links": {
        "self": "/v1/routing/work-item/60e72fa0aad9c47732b07ad8"
      }
    }
  ]
}
```

## Service logs of this working

* 

```bash
  {
   "legend": {
     "emailQueue": "604142274df46d0014f7f3c7",
     "toDel": "60f71f76e6009e10be062efb"
   }
 }

 Orens Line1 {
   "queue": {
     "jsonType": "queue",
     "id": "60f71f76e6009e10be062efb",
     "name": "fsd",
     "displayName": "fds",
     "priority": 1,
     "itemSize": 1,
     "restrictTransfersByUsers": false,
     "system": false,
     "description": "",
     "updatedAt": "2021-07-20T19:12:38.387Z",
     "createdAt": "2021-07-20T19:09:42.780Z",
     "modifiedAt": "2021-07-20T19:12:38.387Z",
     "deletedAt": "2021-07-20T19:12:38.387Z",
     "deleted": true,
     "org": "6041403c1eeac59bc5ac8075",
     "createdBy": "6041403d1eeac5fc4bac807a",
     "modifiedBy": "6041403d1eeac5fc4bac807a",
     "deletedBy": "6041403d1eeac5fc4bac807a"
   },
   "queue.deleted": true
 }
 Orens Line2 {
   "data": {
     "resource": {
       "id": "6079b9b0a651aff4a55b8b53",
       "type": "conversation",
       "rev": 1236,
       "createdAt": "2021-04-16T16:22:09.174Z",
       "direction": "in"
     },
     "channel": "email"
   }
 }
 syncing {
   "updatedConversation": {},
   "legend": {
     "emailQueue": "604142274df46d0014f7f3c7",
     "toDel": "60f71f76e6009e10be062efb"
   }
 }
 syncing {
   "updatedConversation": {
     "assignedUsers": [],
     "queue": {
       "id": "604142274df46d0014f7f3c7"
     }
   },
   "legend": {
     "emailQueue": "604142274df46d0014f7f3c7",
     "toDel": "60f71f76e6009e10be062efb"
   }
 }
```
