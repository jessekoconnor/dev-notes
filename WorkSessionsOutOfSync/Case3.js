/* [Feb 8] Case Three: 
"id": "60219fa483d5810019a64ea0",
"name": "kustomer.work-session.update",
"data": {
    "capacityRemaining": 4,
    "totalCapacity": 3,


query:  "org: 5f77639c81d6d6462d6b1c04" AND "span_id: 8809011127692612242"
*/

let workSessionUpdate = {
    "dd": {
      "trace_id": "925889237818128496",
      "span_id": "8809011127692612242"
    },
    "name": "event",
    "hostname": "cdff11c70f82",
    "pid": 25,
    "level": 30,
    "fullBodyLength": 5043,
    "body": {
      "id": "60219fa483d5810019a64ea1",
      "name": "kustomer.work-session.update",
      "partition": "5f77639c81d6d6462d6b1c04",
      "body": {
        "id": "60219fa483d5810019a64ea0",
        "name": "kustomer.work-session.update",
        "org": "5f77639c81d6d6462d6b1c04",
        "partition": "5f77639c81d6d6462d6b1c04",
        "data": {
          "id": "6021541b2819dc001bda6686",
          "type": "work_session",
          "attributes": {
            "routable": false,
            "statusType": "offline",
            "workItemCount": 2,
            "pausedWorkItemCount": 3,
            "signedInAt": "2021-02-08T15:09:15.058Z",
            "signedOutAt": "2021-02-08T20:31:32.047Z",
            "capacity": [],
            "capacityRemaining": 4,
            "totalCapacity": 3,
            "handledItemCount": 29,
            "handledConversationCount": 28,
            "totalAvailable": {
              "statusAt": "2021-02-08T19:52:28.228Z",
              "businessTime": 16290633,
              "time": 16290633
            },
            "totalAvailableIdleCapacity": {
              "businessTime": 2343819,
              "time": 2343819
            },
            "totalAvailableNotAtCapacity": {
              "businessTime": 13946814,
              "time": 13946814
            },
            "totalUnavailable": {
              "statusAt": "2021-02-08T19:15:22.181Z",
              "businessTime": 3046356,
              "time": 3046356
            },
            "totalUnavailableIdleCapacity": {
              "businessTime": 2226047,
              "time": 2226047
            },
            "totalUnavailableNotAtCapacity": {
              "businessTime": 820309,
              "time": 820309
            },
            "totalTimeByStatus": {
              "5f7763a0ead38a001a5a526a": {
                "statusAt": "2021-02-08T19:52:28.228Z",
                "businessTime": 16290633,
                "time": 16290633,
                "statusSelectedCount": 2
              },
              "5f7763a0ead38a001a5a526b": {
                "statusAt": "2021-02-08T19:15:22.181Z",
                "statusSelectedCount": 2,
                "businessTime": 3046356,
                "time": 3046356
              },
              "5f7763a0ead38a001a5a526d": {
                "statusAt": "2021-02-08T20:31:32.047Z",
                "statusSelectedCount": 1
              }
            },
            "capacityStatus": "idle",
            "lastAssignedItemAt": "2021-02-08T20:08:09.787Z",
            "updatedAt": "2021-02-08T20:31:32.047Z",
            "modifiedAt": "2021-02-08T20:31:32.047Z",
            "createdAt": "2021-02-08T15:09:15.058Z",
            "rev": 110,
            "lastRevision": {
              "handledItemCount": 0
            }
          },
          "relationships": {
            "org": {
              "data": {
                "type": "org",
                "id": "5f77639c81d6d6462d6b1c04"
              },
              "links": {
                "self": "/v1/orgs/5f77639c81d6d6462d6b1c04"
              }
            },
            "user": {
              "data": {
                "type": "user",
                "id": "5f9353ffb29391aa965fce71"
              },
              "links": {
                "self": "/v1/users/5f9353ffb29391aa965fce71"
              }
            },
            "team": {
              "data": {
                "type": "team",
                "id": "5f93540c87b6a4353c42af4f"
              },
              "links": {
                "self": "/v1/teams/5f93540c87b6a4353c42af4f"
              }
            },
            "routingSettings": {
              "data": {
                "type": "team_routing_settings",
                "id": "5fa56c30c28783c9e1b2534b"
              },
              "links": {
                "self": "/v1/routing/settings/5fa56c30c28783c9e1b2534b"
              }
            },
            "status": {
              "data": {
                "type": "status",
                "id": "5f7763a0ead38a001a5a526d"
              },
              "links": {
                "self": "/v1/routing/statuses/5f7763a0ead38a001a5a526d"
              }
            },
            "modifiedBy": {
              "data": {
                "type": "user",
                "id": "5f9353ffb29391aa965fce71"
              },
              "links": {
                "self": "/v1/users/5f9353ffb29391aa965fce71"
              }
            },
            "queues": {
              "data": [
                {
                  "type": "queue",
                  "id": "5fb5848c60b16f001910cd61"
                }
              ]
            },
            "lastRevision": {
              "data": {
                "type": "work_session_revision",
                "id": "6021541b2819dc001bda6687"
              }
            }
          },
          "links": {
            "self": "/v1/routing/work-sessions/6021541b2819dc001bda6686"
          }
        },
        "createdAt": "2021-02-08T20:31:32.053Z",
        "changes": {
          "attributes": {
            "routable": {
              "op": "replace",
              "before": true,
              "after": false
            },
            "statusType": {
              "op": "replace",
              "before": "available",
              "after": "offline"
            },
            "signedOutAt": {
              "op": "add",
              "after": "2021-02-08T20:31:32.047Z"
            },
            "totalAvailable": {
              "op": "replace",
              "before": {
                "statusAt": "2021-02-08T19:52:28.228Z",
                "businessTime": 13946814,
                "time": 13946814
              },
              "after": {
                "statusAt": "2021-02-08T19:52:28.228Z",
                "businessTime": 16290633,
                "time": 16290633
              }
            },
            "totalAvailableIdleCapacity": {
              "op": "add",
              "after": {
                "businessTime": 2343819,
                "time": 2343819
              }
            },
            "totalTimeByStatus": {
              "op": "replace",
              "before": {
                "5f7763a0ead38a001a5a526a": {
                  "statusAt": "2021-02-08T19:52:28.228Z",
                  "businessTime": 13946814,
                  "time": 13946814,
                  "statusSelectedCount": 2
                },
                "5f7763a0ead38a001a5a526b": {
                  "statusAt": "2021-02-08T19:15:22.181Z",
                  "statusSelectedCount": 2,
                  "businessTime": 3046356,
                  "time": 3046356
                }
              },
              "after": {
                "5f7763a0ead38a001a5a526a": {
                  "statusAt": "2021-02-08T19:52:28.228Z",
                  "businessTime": 16290633,
                  "time": 16290633,
                  "statusSelectedCount": 2
                },
                "5f7763a0ead38a001a5a526b": {
                  "statusAt": "2021-02-08T19:15:22.181Z",
                  "statusSelectedCount": 2,
                  "businessTime": 3046356,
                  "time": 3046356
                },
                "5f7763a0ead38a001a5a526d": {
                  "statusAt": "2021-02-08T20:31:32.047Z",
                  "statusSelectedCount": 1
                }
              }
            },
            "updatedAt": {
              "op": "replace",
              "before": "2021-02-08T20:28:25.375Z",
              "after": "2021-02-08T20:31:32.047Z"
            },
            "modifiedAt": {
              "op": "replace",
              "before": "2021-02-08T20:08:09.787Z",
              "after": "2021-02-08T20:31:32.047Z"
            },
            "rev": {
              "op": "replace",
              "before": 109,
              "after": 110
            }
          },
          "relationships": {
            "status": {
              "op": "replace",
              "before": {
                "data": {
                  "type": "status",
                  "id": "5f7763a0ead38a001a5a526a"
                },
                "links": {
                  "self": "/v1/routing/statuses/5f7763a0ead38a001a5a526a"
                }
              },
              "after": {
                "data": {
                  "type": "status",
                  "id": "5f7763a0ead38a001a5a526d"
                },
                "links": {
                  "self": "/v1/routing/statuses/5f7763a0ead38a001a5a526d"
                }
              }
            },
            "workItems": {
              "op": "remove",
              "before": {
                "data": [
                  {
                    "type": "work_item",
                    "id": "60217c6f2819dc001bdcd968"
                  },
                  {
                    "type": "work_item",
                    "id": "60217d621767fc0019c813a9"
                  }
                ]
              },
              "after": null
            }
          }
        },
        "client": "api"
      },
      "publishedAt": "2021-02-08T20:31:32.053Z",
      "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-02-08T20:31:32.055Z",
    "v": 0
  };

let workItemEvent1 = {
    "dd": {
      "trace_id": "925889237818128496",
      "span_id": "8809011127692612242"
    },
    "name": "event",
    "hostname": "cdff11c70f82",
    "pid": 25,
    "level": 30,
    "fullBodyLength": 4339,
    "body": {
      "id": "60219fa483d5810019a64ea4",
      "name": "kustomer.work-item.update",
      "partition": "5f77639c81d6d6462d6b1c04",
      "body": {
        "id": "60219fa483d5810019a64ea3",
        "name": "kustomer.work-item.update",
        "org": "5f77639c81d6d6462d6b1c04",
        "partition": "5f77639c81d6d6462d6b1c04",
        "data": {
          "id": "60217c6f2819dc001bdcd968",
          "type": "work_item",
          "attributes": {
            "resourceType": "conversation",
            "status": "queued",
            "paused": true,
            "channel": "chat",
            "firstEnterQueueAt": "2021-02-08T18:01:19.993Z",
            "queuedCount": 2,
            "priority": 1,
            "itemSize": 1,
            "ivr": {
              "businessTime": 0,
              "time": 0
            },
            "updatedAt": "2021-02-08T20:31:32.047Z",
            "modifiedAt": "2021-02-08T20:31:32.047Z",
            "createdAt": "2021-02-08T18:01:19.491Z",
            "resourceRev": 7,
            "resourceCreatedAt": "2021-02-08T18:01:16.494Z",
            "resourceDirection": "in",
            "resourceFirstQueueTime": 3499,
            "resourceFirstRouteTime": 4010,
            "resourceFirstAssignTime": 10031,
            "rev": 7,
            "workItemNumber": 1,
            "firstRoutedResponse": {
              "businessTime": 52099,
              "time": 52099,
              "id": "60217c908f2322001a98d6d7",
              "createdAt": "2021-02-08T18:02:18.624Z"
            },
            "lastRevision": {
              "enteredQueueAt": "2021-02-08T20:31:32.047Z"
            }
          },
          "relationships": {
            "org": {
              "data": {
                "type": "org",
                "id": "5f77639c81d6d6462d6b1c04"
              },
              "links": {
                "self": "/v1/orgs/5f77639c81d6d6462d6b1c04"
              }
            },
            "modifiedBy": {
              "data": {
                "type": "user",
                "id": "5f9353ffb29391aa965fce71"
              },
              "links": {
                "self": "/v1/users/5f9353ffb29391aa965fce71"
              }
            },
            "resource": {
              "data": {
                "type": "conversation",
                "id": "60217c6c6505c00095f5db57"
              }
            },
            "lastRevision": {
              "data": {
                "type": "work_item_revision",
                "id": "60219fa483d5810019a64ea2"
              }
            },
            "queue": {
              "data": {
                "type": "queue",
                "id": "5fb5848c60b16f001910cd61"
              },
              "links": {
                "self": "/v1/routing/queues/5fb5848c60b16f001910cd61"
              }
            }
          },
          "links": {
            "self": "/v1/routing/work-item/60217c6f2819dc001bdcd968"
          }
        },
        "createdAt": "2021-02-08T20:31:32.085Z",
        "changes": {
          "attributes": {
            "status": {
              "op": "replace",
              "before": "assigned",
              "after": "queued"
            },
            "queuedCount": {
              "op": "replace",
              "before": 1,
              "after": 2
            },
            "updatedAt": {
              "op": "replace",
              "before": "2021-02-08T18:06:54.643Z",
              "after": "2021-02-08T20:31:32.047Z"
            },
            "modifiedAt": {
              "op": "replace",
              "before": "2021-02-08T18:01:26.525Z",
              "after": "2021-02-08T20:31:32.047Z"
            },
            "rev": {
              "op": "replace",
              "before": 6,
              "after": 7
            },
            "lastRevision": {
              "op": "replace",
              "before": {
                "enteredQueueAt": "2021-02-08T18:01:19.993Z",
                "queueTime": 511,
                "queueBusinessTime": 511,
                "routedAt": "2021-02-08T18:01:20.504Z",
                "acceptedAt": "2021-02-08T18:01:26.525Z"
              },
              "after": {
                "enteredQueueAt": "2021-02-08T20:31:32.047Z"
              }
            }
          },
          "relationships": {
            "lastRevision": {
              "op": "replace",
              "before": {
                "data": {
                  "type": "work_item_revision",
                  "id": "60217c6f2819dc001bdcd969"
                }
              },
              "after": {
                "data": {
                  "type": "work_item_revision",
                  "id": "60219fa483d5810019a64ea2"
                }
              }
            },
            "team": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "team",
                  "id": "5f93540c87b6a4353c42af4f"
                },
                "links": {
                  "self": "/v1/teams/5f93540c87b6a4353c42af4f"
                }
              },
              "after": null
            },
            "workSession": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "work_session",
                  "id": "6021541b2819dc001bda6686"
                },
                "links": {
                  "self": "/v1/routing/work-session/6021541b2819dc001bda6686"
                }
              },
              "after": null
            },
            "routedToSession": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "work_session",
                  "id": "6021541b2819dc001bda6686"
                },
                "links": {
                  "self": "/v1/routing/work-session/6021541b2819dc001bda6686"
                }
              },
              "after": null
            },
            "routedTo": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "user",
                  "id": "5f9353ffb29391aa965fce71"
                },
                "links": {
                  "self": "/v1/users/5f9353ffb29391aa965fce71"
                }
              },
              "after": null
            },
            "assignedTo": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "user",
                  "id": "5f9353ffb29391aa965fce71"
                },
                "links": {
                  "self": "/v1/users/5f9353ffb29391aa965fce71"
                }
              },
              "after": null
            },
            "rule": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "queue-rule",
                  "id": "5fbd24a29aa503001964bd34"
                },
                "links": {
                  "self": "/v1/routing/queue-rules/5fbd24a29aa503001964bd34"
                }
              },
              "after": null
            },
            "acceptedBy": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "user",
                  "id": "5f9353ffb29391aa965fce71"
                },
                "links": {
                  "self": "/v1/users/5f9353ffb29391aa965fce71"
                }
              },
              "after": null
            }
          }
        },
        "client": "api"
      },
      "publishedAt": "2021-02-08T20:31:32.085Z",
      "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-02-08T20:31:32.086Z",
    "v": 0
  };

let workItemEvent2 = {
    "dd": {
      "trace_id": "925889237818128496",
      "span_id": "8809011127692612242"
    },
    "name": "event",
    "hostname": "cdff11c70f82",
    "pid": 25,
    "level": 30,
    "fullBodyLength": 4449,
    "body": {
      "id": "60219fa483d5810019a64ea8",
      "name": "kustomer.work-item.update",
      "partition": "5f77639c81d6d6462d6b1c04",
      "body": {
        "id": "60219fa483d5810019a64ea7",
        "name": "kustomer.work-item.update",
        "org": "5f77639c81d6d6462d6b1c04",
        "partition": "5f77639c81d6d6462d6b1c04",
        "data": {
          "id": "60217d621767fc0019c813a9",
          "type": "work_item",
          "attributes": {
            "resourceType": "conversation",
            "status": "queued",
            "paused": true,
            "channel": "chat",
            "firstEnterQueueAt": "2021-02-08T18:05:22.300Z",
            "queuedCount": 2,
            "priority": 1,
            "itemSize": 1,
            "ivr": {
              "businessTime": 0,
              "time": 0
            },
            "handle": {
              "time": 597669,
              "businessTime": 597669,
              "completedAt": "2021-02-08T18:15:26.882Z"
            },
            "wrapUp": {
              "enteredAt": "2021-02-08T18:15:26.882Z"
            },
            "updatedAt": "2021-02-08T20:31:32.047Z",
            "modifiedAt": "2021-02-08T20:31:32.047Z",
            "createdAt": "2021-02-08T18:05:22.012Z",
            "resourceRev": 7,
            "resourceCreatedAt": "2021-02-08T18:05:19.593Z",
            "resourceDirection": "in",
            "resourceFirstQueueTime": 2707,
            "resourceFirstRouteTime": 3159,
            "resourceFirstAssignTime": 9620,
            "rev": 10,
            "workItemNumber": 1,
            "firstRoutedResponse": {
              "businessTime": 35297,
              "time": 35297,
              "id": "60217d8078839b0019b9bc22",
              "createdAt": "2021-02-08T18:06:04.510Z"
            },
            "lastRevision": {
              "enteredQueueAt": "2021-02-08T20:31:32.047Z"
            }
          },
          "relationships": {
            "org": {
              "data": {
                "type": "org",
                "id": "5f77639c81d6d6462d6b1c04"
              },
              "links": {
                "self": "/v1/orgs/5f77639c81d6d6462d6b1c04"
              }
            },
            "modifiedBy": {
              "data": {
                "type": "user",
                "id": "5f9353ffb29391aa965fce71"
              },
              "links": {
                "self": "/v1/users/5f9353ffb29391aa965fce71"
              }
            },
            "resource": {
              "data": {
                "type": "conversation",
                "id": "60217d5f05d49100964c542a"
              }
            },
            "lastRevision": {
              "data": {
                "type": "work_item_revision",
                "id": "60219fa483d5810019a64ea6"
              }
            },
            "queue": {
              "data": {
                "type": "queue",
                "id": "5fb5848c60b16f001910cd61"
              },
              "links": {
                "self": "/v1/routing/queues/5fb5848c60b16f001910cd61"
              }
            }
          },
          "links": {
            "self": "/v1/routing/work-item/60217d621767fc0019c813a9"
          }
        },
        "createdAt": "2021-02-08T20:31:32.111Z",
        "changes": {
          "attributes": {
            "status": {
              "op": "replace",
              "before": "wrap-up",
              "after": "queued"
            },
            "queuedCount": {
              "op": "replace",
              "before": 1,
              "after": 2
            },
            "updatedAt": {
              "op": "replace",
              "before": "2021-02-08T18:19:16.934Z",
              "after": "2021-02-08T20:31:32.047Z"
            },
            "modifiedAt": {
              "op": "replace",
              "before": "2021-02-08T18:05:29.213Z",
              "after": "2021-02-08T20:31:32.047Z"
            },
            "rev": {
              "op": "replace",
              "before": 9,
              "after": 10
            },
            "lastRevision": {
              "op": "replace",
              "before": {
                "enteredQueueAt": "2021-02-08T18:05:22.300Z",
                "queueTime": 452,
                "queueBusinessTime": 452,
                "routedAt": "2021-02-08T18:05:22.752Z",
                "acceptedAt": "2021-02-08T18:05:29.213Z"
              },
              "after": {
                "enteredQueueAt": "2021-02-08T20:31:32.047Z"
              }
            }
          },
          "relationships": {
            "lastRevision": {
              "op": "replace",
              "before": {
                "data": {
                  "type": "work_item_revision",
                  "id": "60217d621767fc0019c813aa"
                }
              },
              "after": {
                "data": {
                  "type": "work_item_revision",
                  "id": "60219fa483d5810019a64ea6"
                }
              }
            },
            "team": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "team",
                  "id": "5f93540c87b6a4353c42af4f"
                },
                "links": {
                  "self": "/v1/teams/5f93540c87b6a4353c42af4f"
                }
              },
              "after": null
            },
            "workSession": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "work_session",
                  "id": "6021541b2819dc001bda6686"
                },
                "links": {
                  "self": "/v1/routing/work-session/6021541b2819dc001bda6686"
                }
              },
              "after": null
            },
            "routedToSession": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "work_session",
                  "id": "6021541b2819dc001bda6686"
                },
                "links": {
                  "self": "/v1/routing/work-session/6021541b2819dc001bda6686"
                }
              },
              "after": null
            },
            "routedTo": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "user",
                  "id": "5f9353ffb29391aa965fce71"
                },
                "links": {
                  "self": "/v1/users/5f9353ffb29391aa965fce71"
                }
              },
              "after": null
            },
            "assignedTo": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "user",
                  "id": "5f9353ffb29391aa965fce71"
                },
                "links": {
                  "self": "/v1/users/5f9353ffb29391aa965fce71"
                }
              },
              "after": null
            },
            "rule": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "queue-rule",
                  "id": "5fbd24a29aa503001964bd34"
                },
                "links": {
                  "self": "/v1/routing/queue-rules/5fbd24a29aa503001964bd34"
                }
              },
              "after": null
            },
            "acceptedBy": {
              "op": "remove",
              "before": {
                "data": {
                  "type": "user",
                  "id": "5f9353ffb29391aa965fce71"
                },
                "links": {
                  "self": "/v1/users/5f9353ffb29391aa965fce71"
                }
              },
              "after": null
            }
          }
        },
        "client": "api"
      },
      "publishedAt": "2021-02-08T20:31:32.111Z",
      "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-02-08T20:31:32.112Z",
    "v": 0
  };