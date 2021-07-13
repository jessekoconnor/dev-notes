/* [] Case 1, (Jan 29, Pausing an item):
    "capacityRemaining": 4,
    "totalCapacity": 3,

    "changes": {
        "pausedWorkItemCount": {
            "op": "replace",
            "before": 0,
            "after": 1
        },
        "capacityRemaining": {
            "op": "replace",
            "before": 3,
            "after": 4
        },
    }


Observations:
    This worksession is interesting because it is a very short/simple example. 
    1) A Work session is created, totalCapacity and capacityRemaining are both set to 3.
    1) A work-item exists, and it is updated from `routed` -> `wrap-up`.
    3) The work-item is somehow placed as a pendingItem on the above workSession. (cannot find where this happens in the logs, seems to be missing from event changes)
    4) At a key time X, A work-item is updated with paused: true.
    5) Also at time X, the workSession who has the work-item as a pendingItem, is updated with the following:
        - capacityRemaining:    3 -> 4 (should not go over 3)
        - pausedWorkItemCount:  0 -> 1

Current Hypothesis: 
    1) Bug in WorkItem Pausing:
        After a workitem becomes a pendingItem in a work-session, pause the workitem. 
            Will remainingCapacity increase above totalCapacity?

Links:
    * work-session create and updates: https://44d6db9654b25134.kustomer.sdm.network/_plugin/kibana/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2021-01-28T13:00:00.000Z',to:'2021-01-29T16:00:00.000Z'))&_a=(columns:!(message),filters:!(('$state':(store:appState),exists:(field:message),meta:(alias:!n,disabled:!f,index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,key:message,negate:!f,type:exists,value:exists))),index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,interval:auto,query:(language:kuery,query:'(%22kustomer.work-session.update%22%20OR%20%22kustomer.work-session.create%22)%20AND%20%22org:%205f77639c81d6d6462d6b1c04%22%20AND%20%22id:%20601425193105f8001259fb4d%22'),sort:!(!('@timestamp',desc)))
    * span_id search for capacityRemaining update: https://44d6db9654b25134.kustomer.sdm.network/_plugin/kibana/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2021-01-28T13:00:00.000Z',to:'2021-01-29T16:00:00.000Z'))&_a=(columns:!(message),filters:!(('$state':(store:appState),exists:(field:message),meta:(alias:!n,disabled:!f,index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,key:message,negate:!f,type:exists,value:exists))),index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,interval:auto,query:(language:kuery,query:'%22org:%205f77639c81d6d6462d6b1c04%22%20AND%20%22span_id:%208291423475877904175%22'),sort:!(!('@timestamp',desc)))
    * all workItem create/update for the pendingWorkItem mentioned: https://44d6db9654b25134.kustomer.sdm.network/_plugin/kibana/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2021-01-28T13:00:00.000Z',to:'2021-01-29T16:00:00.000Z'))&_a=(columns:!(message),filters:!(('$state':(store:appState),exists:(field:message),meta:(alias:!n,disabled:!f,index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,key:message,negate:!f,type:exists,value:exists))),index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,interval:auto,query:(language:kuery,query:'(%22kustomer.work-item.create%22%20OR%20%22kustomer.work-item.update%22)%20AND%20%22org:%205f77639c81d6d6462d6b1c04%22%20AND%20%22id:%206014296dcd4fe30012ecb4d4%22'),sort:!(!('@timestamp',desc))) 
*/

let workSessionUpdate = {
    "dd": {
        "trace_id": "3144231915270880926",
        "span_id": "8291423475877904175"
    },
    "name": "event",
    "hostname": "960f8aa4b1ef",
    "pid": 18,
    "level": 30,
    "fullBodyLength": 2985,
    "body": {
        "id": "601429d8e3b9b40012aafb00",
        "name": "kustomer.work-session.update",
        "partition": "5f77639c81d6d6462d6b1c04",
        "body": {
            "id": "601429d8e3b9b40012aafaff",
            "name": "kustomer.work-session.update",
            "org": "5f77639c81d6d6462d6b1c04",
            "partition": "5f77639c81d6d6462d6b1c04",
            "data": {
                "id": "601425193105f8001259fb4d",
                "type": "work_session",
                "attributes": {
                    "routable": false,
                    "statusType": "available",
                    "workItemCount": 0,
                    "pausedWorkItemCount": 1,
                    "signedInAt": "2021-01-29T15:09:13.346Z",
                    "capacity": [],
                    "capacityRemaining": 4,
                    "totalCapacity": 3,
                    "handledItemCount": 0,
                    "handledConversationCount": 0,
                    "totalAvailable": {
                        "statusAt": "2021-01-29T15:09:13.346Z"
                    },
                    "totalTimeByStatus": {
                        "5f7763a0ead38a001a5a526a": {
                            "statusAt": "2021-01-29T15:09:13.346Z"
                        }
                    },
                    "capacityStatus": "idle",
                    "updatedAt": "2021-01-29T15:29:28.296Z",
                    "modifiedAt": "2021-01-29T15:09:13.346Z",
                    "createdAt": "2021-01-29T15:09:13.346Z",
                    "rev": 3,
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
                            "id": "5f7763a0ead38a001a5a526a"
                        },
                        "links": {
                            "self": "/v1/routing/statuses/5f7763a0ead38a001a5a526a"
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
                    "pendingItem": {
                        "data": {
                            "type": "work_item",
                            "id": "6014296dcd4fe30012ecb4d4"    //  Same workItem Id as below
                        },
                        "links": {
                            "self": "/v1/routing/work-items/6014296dcd4fe30012ecb4d4"
                        }
                    },
                    "lastRevision": {
                        "data": {
                            "type": "work_session_revision",
                            "id": "601425193105f8001259fb4e"
                        }
                    }
                },
                "links": {
                    "self": "/v1/routing/work-sessions/601425193105f8001259fb4d"
                }
            },
            "createdAt": "2021-01-29T15:29:28.313Z",
            "changes": {
                "attributes": {
                    "pausedWorkItemCount": {
                        "op": "replace",
                        "before": 0,
                        "after": 1
                    },
                    "capacityRemaining": {
                        "op": "replace",
                        "before": 3,
                        "after": 4
                    },
                    "updatedAt": {
                        "op": "replace",
                        "before": "2021-01-29T15:27:42.438Z",
                        "after": "2021-01-29T15:29:28.296Z"
                    },
                    "rev": {
                        "op": "replace",
                        "before": 2,
                        "after": 3
                    }
                },
                "relationships": {}
            },
            "client": "routing-worker"
        },
        "publishedAt": "2021-01-29T15:29:28.313Z",
        "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-01-29T15:29:28.314Z",
    "v": 0
};




let workItemUpdate = {
    "dd": {
      "trace_id": "3144231915270880926",
      "span_id": "8291423475877904175"    // Same SpanId as the workSession
    },
    "name": "event",
    "hostname": "960f8aa4b1ef",
    "pid": 18,
    "level": 30,
    "fullBodyLength": 4177,
    "body": {
      "id": "601429d8e3b9b40012aafb02",
      "name": "kustomer.work-item.update",
      "partition": "5f77639c81d6d6462d6b1c04",
      "body": {
        "id": "601429d8e3b9b40012aafb01",
        "name": "kustomer.work-item.update",
        "org": "5f77639c81d6d6462d6b1c04",
        "partition": "5f77639c81d6d6462d6b1c04",
        "data": {
          "id": "6014296dcd4fe30012ecb4d4",
          "type": "work_item",
          "attributes": {
            "resourceType": "conversation",
            "status": "wrap-up",
            "paused": true,
            "channel": "chat",
            "firstEnterQueueAt": "2021-01-29T15:27:42.018Z",
            "queuedCount": 1,
            "priority": 1,
            "itemSize": 1,
            "ivr": {
              "businessTime": 0,
              "time": 0
            },
            "wrapUp": {
              "enteredAt": "2021-01-29T15:27:45.685Z"
            },
            "updatedAt": "2021-01-29T15:29:28.296Z",
            "modifiedAt": "2021-01-29T15:27:41.692Z",
            "createdAt": "2021-01-29T15:27:41.686Z",
            "resourceRev": 5,
            "resourceCreatedAt": "2021-01-29T15:27:40.397Z",
            "resourceDirection": "in",
            "resourceFirstQueueTime": 1621,
            "resourceFirstRouteTime": 2041,
            "rev": 5,
            "workItemNumber": 1,
            "lastRevision": {
              "enteredQueueAt": "2021-01-29T15:27:42.018Z",
              "queueTime": 420,
              "queueBusinessTime": 420,
              "routedAt": "2021-01-29T15:27:42.438Z"
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
            "resource": {
              "data": {
                "type": "conversation",
                "id": "6014296ca73042008eba25ae"
              }
            },
            "workSession": {
              "data": {
                "type": "work_session",
                "id": "601425193105f8001259fb4d"
              },
              "links": {
                "self": "/v1/routing/work-session/601425193105f8001259fb4d"
              }
            },
            "routedToSession": {
              "data": {
                "type": "work_session",
                "id": "601425193105f8001259fb4d"
              },
              "links": {
                "self": "/v1/routing/work-session/601425193105f8001259fb4d"
              }
            },
            "routedTo": {
              "data": {
                "type": "user",
                "id": "5f9353ffb29391aa965fce71"
              },
              "links": {
                "self": "/v1/users/5f9353ffb29391aa965fce71"
              }
            },
            "lastRevision": {
              "data": {
                "type": "work_item_revision",
                "id": "6014296dcd4fe30012ecb4d5"
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
            },
            "rule": {
              "data": {
                "type": "queue-rule",
                "id": "5fbd24a29aa503001964bd34"
              },
              "links": {
                "self": "/v1/routing/queue-rules/5fbd24a29aa503001964bd34"
              }
            }
          },
          "links": {
            "self": "/v1/routing/work-item/6014296dcd4fe30012ecb4d4"
          }
        },
        "createdAt": "2021-01-29T15:29:28.342Z",
        "changes": {
          "attributes": {
            "paused": {
              "op": "replace",
              "before": false,
              "after": true
            },
            "updatedAt": {
              "op": "replace",
              "before": "2021-01-29T15:27:45.685Z",
              "after": "2021-01-29T15:29:28.296Z"
            },
            "rev": {
              "op": "replace",
              "before": 4,
              "after": 5
            }
          },
          "relationships": {
            "workSession": {
              "op": "replace",
              "before": {
                "data": {
                  "type": "work_session",
                  "id": {
                    "_id": "601425193105f8001259fb4d",
                    "lastRevision": {
                      "handledItemCount": 0,
                      "id": "601425193105f8001259fb4e"
                    },
                    "routable": false,
                    "totalCapacity": 3,
                    "queues": [
                      "5fb5848c60b16f001910cd61"
                    ],
                    "hasPendingItem": true,
                    "workItems": [],
                    "workItemCount": 0,
                    "pausedWorkItemCount": 0,
                    "active": true,
                    "handledItemCount": 0,
                    "handledConversationCount": 0,
                    "rev": 2,
                    "org": "5f77639c81d6d6462d6b1c04",
                    "user": "5f9353ffb29391aa965fce71",
                    "team": "5f93540c87b6a4353c42af4f",
                    "signedInAt": "2021-01-29T15:09:13.346Z",
                    "routingSettings": "5fa56c30c28783c9e1b2534b",
                    "createdAt": "2021-01-29T15:09:13.346Z",
                    "updatedAt": "2021-01-29T15:27:42.438Z",
                    "capacityRemaining": 3,
                    "capacityStatus": "idle",
                    "status": {
                      "_id": "5f7763a0ead38a001a5a526a",
                      "statusType": "available",
                      "selectable": true,
                      "system": true,
                      "enabled": true,
                      "org": "5f77639c81d6d6462d6b1c04",
                      "createdAt": "2020-10-02T17:30:08.075Z",
                      "name": "available",
                      "updatedAt": "2020-10-02T17:30:08.076Z",
                      "__v": 0
                    },
                    "statusType": "available",
                    "totalAvailable": {
                      "statusAt": "2021-01-29T15:09:13.346Z"
                    },
                    "totalTimeByStatus": {
                      "5f7763a0ead38a001a5a526a": {
                        "statusAt": "2021-01-29T15:09:13.346Z"
                      }
                    },
                    "modifiedAt": "2021-01-29T15:09:13.346Z",
                    "modifiedBy": "5f9353ffb29391aa965fce71",
                    "capacity": [],
                    "pendingItem": "6014296dcd4fe30012ecb4d4"
                  }
                },
                "links": {
                  "self": "/v1/routing/work-session/[object Object]"
                }
              },
              "after": {
                "data": {
                  "type": "work_session",
                  "id": "601425193105f8001259fb4d"
                },
                "links": {
                  "self": "/v1/routing/work-session/601425193105f8001259fb4d"
                }
              }
            }
          }
        },
        "client": "routing-worker",
        "isSync": true
      },
      "publishedAt": "2021-01-29T15:29:28.342Z",
      "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-01-29T15:29:28.343Z",
    "v": 0
  };

let previousWorkItemUpdate = {
    "dd": {
      "trace_id": "1536468789873665331",
      "span_id": "3194073993985328508"
    },
    "name": "event",
    "hostname": "575759016c53",
    "pid": 19,
    "level": 30,
    "fullBodyLength": 4271,
    "body": {
      "id": "601429716dd20100131edc74",
      "name": "kustomer.work-item.update",
      "partition": "5f77639c81d6d6462d6b1c04",
      "body": {
        "id": "601429716dd20100131edc73",
        "name": "kustomer.work-item.update",
        "org": "5f77639c81d6d6462d6b1c04",
        "partition": "5f77639c81d6d6462d6b1c04",
        "data": {
          "id": "6014296dcd4fe30012ecb4d4",
          "type": "work_item",
          "attributes": {
            "resourceType": "conversation",
            "status": "wrap-up",
            "paused": false,
            "channel": "chat",
            "firstEnterQueueAt": "2021-01-29T15:27:42.018Z",
            "queuedCount": 1,
            "priority": 1,
            "itemSize": 1,
            "ivr": {
              "businessTime": 0,
              "time": 0
            },
            "wrapUp": {
              "enteredAt": "2021-01-29T15:27:45.685Z"
            },
            "updatedAt": "2021-01-29T15:27:45.685Z",
            "modifiedAt": "2021-01-29T15:27:41.692Z",
            "createdAt": "2021-01-29T15:27:41.686Z",
            "resourceRev": 5,
            "resourceCreatedAt": "2021-01-29T15:27:40.397Z",
            "resourceDirection": "in",
            "resourceFirstQueueTime": 1621,
            "resourceFirstRouteTime": 2041,
            "rev": 4,
            "workItemNumber": 1,
            "lastRevision": {
              "enteredQueueAt": "2021-01-29T15:27:42.018Z",
              "queueTime": 420,
              "queueBusinessTime": 420,
              "routedAt": "2021-01-29T15:27:42.438Z"
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
            "resource": {
              "data": {
                "type": "conversation",
                "id": "6014296ca73042008eba25ae"
              }
            },
            "workSession": {
              "data": {
                "type": "work_session",
                "id": "601425193105f8001259fb4d"
              },
              "links": {
                "self": "/v1/routing/work-session/601425193105f8001259fb4d"
              }
            },
            "routedToSession": {
              "data": {
                "type": "work_session",
                "id": "601425193105f8001259fb4d"
              },
              "links": {
                "self": "/v1/routing/work-session/601425193105f8001259fb4d"
              }
            },
            "routedTo": {
              "data": {
                "type": "user",
                "id": "5f9353ffb29391aa965fce71"
              },
              "links": {
                "self": "/v1/users/5f9353ffb29391aa965fce71"
              }
            },
            "lastRevision": {
              "data": {
                "type": "work_item_revision",
                "id": "6014296dcd4fe30012ecb4d5"
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
            },
            "rule": {
              "data": {
                "type": "queue-rule",
                "id": "5fbd24a29aa503001964bd34"
              },
              "links": {
                "self": "/v1/routing/queue-rules/5fbd24a29aa503001964bd34"
              }
            }
          },
          "links": {
            "self": "/v1/routing/work-item/6014296dcd4fe30012ecb4d4"
          }
        },
        "createdAt": "2021-01-29T15:27:45.705Z",
        "changes": {
          "attributes": {
            "status": {
              "op": "replace",
              "before": "routed",
              "after": "wrap-up"
            },
            "wrapUp": {
              "op": "add",
              "after": {
                "enteredAt": "2021-01-29T15:27:45.685Z"
              }
            },
            "updatedAt": {
              "op": "replace",
              "before": "2021-01-29T15:27:42.438Z",
              "after": "2021-01-29T15:27:45.685Z"
            },
            "rev": {
              "op": "replace",
              "before": 3,
              "after": 4
            }
          },
          "relationships": {
            "workSession": {
              "op": "replace",
              "before": {
                "data": {
                  "type": "work_session",
                  "id": {
                    "_id": "601425193105f8001259fb4d",
                    "lastRevision": {
                      "handledItemCount": 0,
                      "id": "601425193105f8001259fb4e"
                    },
                    "routable": false,
                    "totalCapacity": 3,
                    "queues": [
                      "5fb5848c60b16f001910cd61"
                    ],
                    "hasPendingItem": true,
                    "workItems": [],
                    "workItemCount": 0,
                    "pausedWorkItemCount": 0,
                    "active": true,
                    "handledItemCount": 0,
                    "handledConversationCount": 0,
                    "rev": 2,
                    "org": "5f77639c81d6d6462d6b1c04",
                    "user": "5f9353ffb29391aa965fce71",
                    "team": "5f93540c87b6a4353c42af4f",
                    "signedInAt": "2021-01-29T15:09:13.346Z",
                    "routingSettings": "5fa56c30c28783c9e1b2534b",
                    "createdAt": "2021-01-29T15:09:13.346Z",
                    "updatedAt": "2021-01-29T15:27:42.438Z",
                    "capacityRemaining": 3,
                    "capacityStatus": "idle",
                    "status": {
                      "_id": "5f7763a0ead38a001a5a526a",
                      "statusType": "available",
                      "selectable": true,
                      "system": true,
                      "enabled": true,
                      "org": "5f77639c81d6d6462d6b1c04",
                      "createdAt": "2020-10-02T17:30:08.075Z",
                      "name": "available",
                      "updatedAt": "2020-10-02T17:30:08.076Z",
                      "__v": 0
                    },
                    "statusType": "available",
                    "totalAvailable": {
                      "statusAt": "2021-01-29T15:09:13.346Z"
                    },
                    "totalTimeByStatus": {
                      "5f7763a0ead38a001a5a526a": {
                        "statusAt": "2021-01-29T15:09:13.346Z"
                      }
                    },
                    "modifiedAt": "2021-01-29T15:09:13.346Z",
                    "modifiedBy": "5f9353ffb29391aa965fce71",
                    "capacity": [],
                    "pendingItem": "6014296dcd4fe30012ecb4d4"
                  }
                },
                "links": {
                  "self": "/v1/routing/work-session/[object Object]"
                }
              },
              "after": {
                "data": {
                  "type": "work_session",
                  "id": "601425193105f8001259fb4d"
                },
                "links": {
                  "self": "/v1/routing/work-session/601425193105f8001259fb4d"
                }
              }
            }
          }
        },
        "client": "routing-worker",
        "isSync": true
      },
      "publishedAt": "2021-01-29T15:27:45.705Z",
      "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-01-29T15:27:45.706Z",
    "v": 0
  }



// This is the only preceding work-session update|create in the logs
let singlePrecedingWorkSessionEvent = {
    "dd": {
      "trace_id": "6599408602778186806",
      "span_id": "627240657991874426"
    },
    "name": "event",
    "hostname": "29413fb3fb21",
    "pid": 18,
    "level": 30,
    "fullBodyLength": 2537,
    "body": {
      "id": "601425193105f8001259fb51",
      "name": "kustomer.work-session.create",
      "partition": "5f77639c81d6d6462d6b1c04",
      "body": {
        "id": "601425193105f8001259fb50",
        "name": "kustomer.work-session.create",
        "org": "5f77639c81d6d6462d6b1c04",
        "partition": "5f77639c81d6d6462d6b1c04",
        "data": {
          "id": "601425193105f8001259fb4d",
          "type": "work_session",
          "attributes": {
            "routable": true,
            "statusType": "available",
            "workItemCount": 0,
            "pausedWorkItemCount": 0,
            "signedInAt": "2021-01-29T15:09:13.346Z",
            "capacity": [],
            "capacityRemaining": 3,
            "totalCapacity": 3,
            "handledItemCount": 0,
            "handledConversationCount": 0,
            "totalAvailable": {
              "statusAt": "2021-01-29T15:09:13.346Z"
            },
            "totalTimeByStatus": {
              "5f7763a0ead38a001a5a526a": {
                "statusAt": "2021-01-29T15:09:13.346Z"
              }
            },
            "capacityStatus": "idle",
            "updatedAt": "2021-01-29T15:09:13.346Z",
            "modifiedAt": "2021-01-29T15:09:13.346Z",
            "createdAt": "2021-01-29T15:09:13.346Z",
            "rev": 1,
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
                "id": "5f7763a0ead38a001a5a526a"
              },
              "links": {
                "self": "/v1/routing/statuses/5f7763a0ead38a001a5a526a"
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
                "id": "601425193105f8001259fb4e"
              }
            }
          },
          "links": {
            "self": "/v1/routing/work-sessions/601425193105f8001259fb4d"
          }
        },
        "createdAt": "2021-01-29T15:09:13.359Z",
        "client": "api"
      },
      "publishedAt": "2021-01-29T15:09:13.359Z",
      "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-01-29T15:09:13.360Z",
    "v": 0
  };

