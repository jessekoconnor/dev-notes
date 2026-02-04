/*
Case 2 of capacityRemaining > totalCapacity:
EventDate: Feb 11, 2021 @ 08:56:42.117	
Work Session: 60250e2e85523500193bd269

This work session has a pendingItem. That pending item is put into the wrap-up 
state at some point. Finally, the work-item gets paused (as seen in this update 
event) and the capacity remaining increases.  

Steps to reporoduce:
1) Setup QnR w/: 
    * pendingItem enabled (w/ enough time for you to complete remianing steps)
    * queue w/ your agent subscribes and rules to get conversations to your queue
2) Begin a work-session and remain in the `available` state.
3) Without actually accepting the work-item, Create a new 
   converstaion and let its associated work-item become 
   your agents pending item. Do not accept the work-item, 
   it must remain as the agents pendingItem.
4) Find the associated conversation and put the work-item in the wrap-up state.
5) Snooze the converstaion. 
    * Your work session is now out of sync.
6) Set work-session back to available and observe a negative capacity.


More Info:
Curl command to end a conversation and trigger a work-item's wrap-up state
```shell
curl -X PATCH "${STAGING_API_URL}/v1/conversations/<<ConversationId>>" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "ended": true
}' | jq

To find a converstaionId of a session pendingItem: 
```shell
1) Find the pendingWorkItem from the currentSession.relationships.pendingItem (Chrome DevTools)
2) Find the conversationId from that workItem (mongo)
```

*/

let ws1 = {
    "dd": {
        "trace_id": "8281622862970498361",
        "span_id": "3345286914881475984"
    },
    "name": "event",
    "hostname": "4d4fe5c4e83a",
    "pid": 26,
    "level": 30,
    "fullBodyLength": 3306,
    "body": {
        "id": "602537993cfb82001af6e485",
        "name": "kustomer.work-session.update",
        "partition": "5ac6643a05beb7764345388c",
        "body": {
            "id": "602537993cfb82001af6e484",
            "name": "kustomer.work-session.update",
            "org": "5ac6643a05beb7764345388c",
            "partition": "5ac6643a05beb7764345388c",
            "data": {
                "id": "60250e2e85523500193bd269",
                "type": "work_session",
                "attributes": {
                    "routable": false,
                    "statusType": "available",
                    "workItemCount": 0,
                    "pausedWorkItemCount": -1,
                    "signedInAt": "2021-02-11T10:59:58.814Z",
                    "capacity": [
                        {
                            "priority": 1,
                            "limit": 2,
                            "remaining": 3
                        }
                    ],
                    "capacityRemaining": 3,
                    "totalCapacity": 2,
                    "handledItemCount": 57,
                    "handledConversationCount": 56,
                    "totalAvailable": {
                        "statusAt": "2021-02-11T10:59:58.814Z"
                    },
                    "totalTimeByStatus": {
                        "5b698101f5320ab3dedb4101": {
                            "statusAt": "2021-02-11T10:59:58.814Z"
                        }
                    },
                    "capacityStatus": "idle",
                    "lastAssignedItemAt": "2021-02-11T13:54:10.878Z",
                    "updatedAt": "2021-02-11T13:56:41.557Z",
                    "modifiedAt": "2021-02-11T13:54:10.878Z",
                    "createdAt": "2021-02-11T10:59:58.814Z",
                    "rev": 173,
                    "lastRevision": {
                        "handledItemCount": 0
                    }
                },
                "relationships": {
                    "org": {
                        "data": {
                            "type": "org",
                            "id": "5ac6643a05beb7764345388c"
                        },
                        "links": {
                            "self": "/v1/orgs/5ac6643a05beb7764345388c"
                        }
                    },
                    "user": {
                        "data": {
                            "type": "user",
                            "id": "5cb478e0bb33f4001a27cb58"
                        },
                        "links": {
                            "self": "/v1/users/5cb478e0bb33f4001a27cb58"
                        }
                    },
                    "team": {
                        "data": {
                            "type": "team",
                            "id": "5bd6f275f7a2b9001c468489"
                        },
                        "links": {
                            "self": "/v1/teams/5bd6f275f7a2b9001c468489"
                        }
                    },
                    "routingSettings": {
                        "data": {
                            "type": "team_routing_settings",
                            "id": "5bd95ab46c3b5ea7297b44e1"
                        },
                        "links": {
                            "self": "/v1/routing/settings/5bd95ab46c3b5ea7297b44e1"
                        }
                    },
                    "status": {
                        "data": {
                            "type": "status",
                            "id": "5b698101f5320ab3dedb4101"
                        },
                        "links": {
                            "self": "/v1/routing/statuses/5b698101f5320ab3dedb4101"
                        }
                    },
                    "modifiedBy": {
                        "data": {
                            "type": "user",
                            "id": "5cb478e0bb33f4001a27cb58"
                        },
                        "links": {
                            "self": "/v1/users/5cb478e0bb33f4001a27cb58"
                        }
                    },
                    "queues": {
                        "data": [
                            {
                                "type": "queue",
                                "id": "5bcf07f7fa0e9500213a3ed8"
                            }
                        ]
                    },
                    "pendingItem": {
                        "data": {
                            "type": "work_item",
                            "id": "60253798d161ca00198a9958"
                        },
                        "links": {
                            "self": "/v1/routing/work-items/60253798d161ca00198a9958"
                        }
                    },
                    "lastRevision": {
                        "data": {
                            "type": "work_session_revision",
                            "id": "60250e2e85523500193bd26a"
                        }
                    }
                },
                "links": {
                    "self": "/v1/routing/work-sessions/60250e2e85523500193bd269"
                }
            },
            "createdAt": "2021-02-11T13:56:41.600Z",
            "changes": {
                "attributes": {
                    "routable": {
                        "op": "replace",
                        "before": true,
                        "after": false
                    },
                    "capacity": {
                        "op": "replace",
                        "before": [
                            {
                                "priority": 1,
                                "limit": 2,
                                "remaining": 3,
                                "id": null
                            }
                        ],
                        "after": [
                            {
                                "priority": 1,
                                "limit": 2,
                                "remaining": 3
                            }
                        ]
                    },
                    "updatedAt": {
                        "op": "replace",
                        "before": "2021-02-11T13:56:34.370Z",
                        "after": "2021-02-11T13:56:41.557Z"
                    },
                    "rev": {
                        "op": "replace",
                        "before": 172,
                        "after": 173
                    }
                },
                "relationships": {
                    "pendingItem": {
                        "op": "add",
                        "before": null,
                        "after": {
                            "data": {
                                "type": "work_item",
                                "id": "60253798d161ca00198a9958"
                            },
                            "links": {
                                "self": "/v1/routing/work-items/60253798d161ca00198a9958"
                            }
                        }
                    }
                }
            },
            "client": "routing-worker"
        },
        "publishedAt": "2021-02-11T13:56:41.600Z",
        "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-02-11T13:56:41.600Z",
    "v": 0
};

let firstEventOutOfSync = {
    "id": "6025148503a4e800191ccde3",
    "name": "kustomer.work-session.update",
    "partition": "5ac6643a05beb7764345388c",
    "body": {
        "id": "6025148503a4e800191ccde2",
        "name": "kustomer.work-session.update",
        "org": "5ac6643a05beb7764345388c",
        "partition": "5ac6643a05beb7764345388c",
        "data": {
            "id": "60250e2e85523500193bd269",
            "type": "work_session",
            "attributes": {
                "routable": false,
                "statusType": "available",
                "workItemCount": 1,
                "pausedWorkItemCount": 1,
                "signedInAt": "2021-02-11T10:59:58.814Z",
                "capacity": [
                    {
                        "priority": 1,
                        "limit": 2,
                        "remaining": 2
                    }
                ],
                "capacityRemaining": 2,
                "totalCapacity": 2,
                "handledItemCount": 6,
                "handledConversationCount": 6,
                "totalAvailable": {
                    "statusAt": "2021-02-11T10:59:58.814Z"
                },
                "totalTimeByStatus": {
                    "5b698101f5320ab3dedb4101": {
                        "statusAt": "2021-02-11T10:59:58.814Z"
                    }
                },
                "capacityStatus": "idle",
                "lastAssignedItemAt": "2021-02-11T11:23:19.323Z",
                "updatedAt": "2021-02-11T11:27:01.161Z",
                "modifiedAt": "2021-02-11T11:23:19.323Z",
                "createdAt": "2021-02-11T10:59:58.814Z",
                "rev": 23,
                "lastRevision": {
                    "handledItemCount": 0
                }
            },
            "relationships": {
                "org": {
                    "data": {
                        "type": "org",
                        "id": "5ac6643a05beb7764345388c"
                    },
                    "links": {
                        "self": "/v1/orgs/5ac6643a05beb7764345388c"
                    }
                },
                "user": {
                    "data": {
                        "type": "user",
                        "id": "5cb478e0bb33f4001a27cb58"
                    },
                    "links": {
                        "self": "/v1/users/5cb478e0bb33f4001a27cb58"
                    }
                },
                "team": {
                    "data": {
                        "type": "team",
                        "id": "5bd6f275f7a2b9001c468489"
                    },
                    "links": {
                        "self": "/v1/teams/5bd6f275f7a2b9001c468489"
                    }
                },
                "routingSettings": {
                    "data": {
                        "type": "team_routing_settings",
                        "id": "5bd95ab46c3b5ea7297b44e1"
                    },
                    "links": {
                        "self": "/v1/routing/settings/5bd95ab46c3b5ea7297b44e1"
                    }
                },
                "status": {
                    "data": {
                        "type": "status",
                        "id": "5b698101f5320ab3dedb4101"
                    },
                    "links": {
                        "self": "/v1/routing/statuses/5b698101f5320ab3dedb4101"
                    }
                },
                "modifiedBy": {
                    "data": {
                        "type": "user",
                        "id": "5cb478e0bb33f4001a27cb58"
                    },
                    "links": {
                        "self": "/v1/users/5cb478e0bb33f4001a27cb58"
                    }
                },
                "queues": {
                    "data": [
                        {
                            "type": "queue",
                            "id": "5bcf07f7fa0e9500213a3ed8"
                        }
                    ]
                },
                "workItems": {
                    "data": [
                        {
                            "type": "work_item",
                            "id": "602513a434585a001933a4d4"
                        }
                    ]
                },
                "pendingItem": {
                    "data": {
                        "type": "work_item",
                        "id": "6025143fb0dcb40019545929"
                    },
                    "links": {
                        "self": "/v1/routing/work-items/6025143fb0dcb40019545929"
                    }
                },
                "lastRevision": {
                    "data": {
                        "type": "work_session_revision",
                        "id": "60250e2e85523500193bd26a"
                    }
                }
            },
            "links": {
                "self": "/v1/routing/work-sessions/60250e2e85523500193bd269"
            }
        },
        "createdAt": "2021-02-11T11:27:01.179Z",
        "changes": {
            "attributes": {
                "pausedWorkItemCount": {
                    "op": "replace",
                    "before": 0,
                    "after": 1
                },
                "capacity": {
                    "op": "replace",
                    "before": [
                        {
                            "priority": 1,
                            "limit": 2,
                            "remaining": 1,
                            "id": null
                        }
                    ],
                    "after": [
                        {
                            "priority": 1,
                            "limit": 2,
                            "remaining": 2
                        }
                    ]
                },
                "capacityRemaining": {
                    "op": "replace",
                    "before": 1,
                    "after": 2
                },
                "capacityStatus": {
                    "op": "replace",
                    "before": "not-at-capacity",
                    "after": "idle"
                },
                "updatedAt": {
                    "op": "replace",
                    "before": "2021-02-11T11:26:59.936Z",
                    "after": "2021-02-11T11:27:01.161Z"
                },
                "rev": {
                    "op": "replace",
                    "before": 22,
                    "after": 23
                }
            },
            "relationships": {}
        },
        "client": "routing-worker"
    },
    "publishedAt": "2021-02-11T11:27:01.179Z",
    "version": 3
}

let relevantWorkItemChange = {
    "dd": {
        "trace_id": "8506867521769070492",
        "span_id": "6331422797999271460"
    },
    "name": "event",
    "hostname": "c9c9b560c75d",
    "pid": 25,
    "level": 30,
    "fullBodyLength": 2566,
    "body": {
        "id": "6025148503a4e800191ccde5",
        "name": "kustomer.work-item.update",
        "partition": "5ac6643a05beb7764345388c",
        "body": {
            "id": "6025148503a4e800191ccde4",
            "name": "kustomer.work-item.update",
            "org": "5ac6643a05beb7764345388c",
            "partition": "5ac6643a05beb7764345388c",
            "data": {
                "id": "6025143fb0dcb40019545929",
                "type": "work_item",
                "attributes": {
                    "resourceType": "conversation",
                    "status": "wrap-up",
                    "paused": true,
                    "channel": "chat",
                    "firstEnterQueueAt": "2021-02-11T11:25:51.763Z",
                    "queuedCount": 3,
                    "priority": 1,
                    "itemSize": 1,
                    "ivr": {
                        "businessTime": 0,
                        "time": 0
                    },
                    "wrapUp": {
                        "enteredAt": "2021-02-11T11:27:00.671Z"
                    },
                    "updatedAt": "2021-02-11T11:27:01.161Z",
                    "modifiedAt": "2021-02-11T11:25:51.520Z",
                    "createdAt": "2021-02-11T11:25:51.515Z",
                    "resourceRev": 19,
                    "resourceCreatedAt": "2021-02-11T11:25:47.566Z",
                    "resourceDirection": "in",
                    "resourceFirstQueueTime": 4197,
                    "resourceFirstRouteTime": 72370,
                    "rev": 11,
                    "workItemNumber": 1,
                    "lastRevision": {
                        "enteredQueueAt": "2021-02-11T11:26:59.737Z",
                        "queueTime": 199,
                        "queueBusinessTime": 199,
                        "routedAt": "2021-02-11T11:26:59.936Z"
                    }
                },
                "relationships": {
                    "org": {
                        "data": {
                            "type": "org",
                            "id": "5ac6643a05beb7764345388c"
                        },
                        "links": {
                            "self": "/v1/orgs/5ac6643a05beb7764345388c"
                        }
                    },
                    "resource": {
                        "data": {
                            "type": "conversation",
                            "id": "6025143b13eb6c00951fa0d0"
                        }
                    },
                    "workSession": {
                        "data": {
                            "type": "work_session",
                            "id": "60250e2e85523500193bd269"
                        },
                        "links": {
                            "self": "/v1/routing/work-session/60250e2e85523500193bd269"
                        }
                    },
                    "routedToSession": {
                        "data": {
                            "type": "work_session",
                            "id": "60250e2e85523500193bd269"
                        },
                        "links": {
                            "self": "/v1/routing/work-session/60250e2e85523500193bd269"
                        }
                    },
                    "routedTo": {
                        "data": {
                            "type": "user",
                            "id": "5cb478e0bb33f4001a27cb58"
                        },
                        "links": {
                            "self": "/v1/users/5cb478e0bb33f4001a27cb58"
                        }
                    },
                    "lastRevision": {
                        "data": {
                            "type": "work_item_revision",
                            "id": "6025143fb0dcb4001954592a"
                        }
                    },
                    "queue": {
                        "data": {
                            "type": "queue",
                            "id": "5bcf07f7fa0e9500213a3ed8"
                        },
                        "links": {
                            "self": "/v1/routing/queues/5bcf07f7fa0e9500213a3ed8"
                        }
                    }
                },
                "links": {
                    "self": "/v1/routing/work-item/6025143fb0dcb40019545929"
                }
            },
            "createdAt": "2021-02-11T11:27:01.198Z",
            "changes": {
                "attributes": {
                    "paused": {
                        "op": "replace",
                        "before": false,
                        "after": true
                    },
                    "updatedAt": {
                        "op": "replace",
                        "before": "2021-02-11T11:27:00.671Z",
                        "after": "2021-02-11T11:27:01.161Z"
                    },
                    "rev": {
                        "op": "replace",
                        "before": 10,
                        "after": 11
                    }
                },
                "relationships": {}
            },
            "client": "routing-worker",
            "isSync": true
        },
        "publishedAt": "2021-02-11T11:27:01.198Z",
        "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-02-11T11:27:01.198Z",
    "v": 0
}

let workItemMinus1 = {
    "dd": {
        "trace_id": "1403045960025904902",
        "span_id": "4235542803696321225"
    },
    "name": "event",
    "hostname": "52302b7b497d",
    "pid": 26,
    "level": 30,
    "fullBodyLength": 2820,
    "body": {
        "id": "602514838f55b5001a724dfb",
        "name": "kustomer.work-item.update",
        "partition": "5ac6643a05beb7764345388c",
        "body": {
            "id": "602514838f55b5001a724dfa",
            "name": "kustomer.work-item.update",
            "org": "5ac6643a05beb7764345388c",
            "partition": "5ac6643a05beb7764345388c",
            "data": {
                "id": "6025143fb0dcb40019545929",
                "type": "work_item",
                "attributes": {
                    "resourceType": "conversation",
                    "status": "queued",
                    "paused": false,
                    "channel": "chat",
                    "firstEnterQueueAt": "2021-02-11T11:25:51.763Z",
                    "queuedCount": 3,
                    "priority": 1,
                    "itemSize": 1,
                    "ivr": {
                        "businessTime": 0,
                        "time": 0
                    },
                    "updatedAt": "2021-02-11T11:26:59.737Z",
                    "modifiedAt": "2021-02-11T11:25:51.520Z",
                    "createdAt": "2021-02-11T11:25:51.515Z",
                    "resourceRev": 19,
                    "resourceCreatedAt": "2021-02-11T11:25:47.566Z",
                    "resourceDirection": "in",
                    "resourceFirstQueueTime": 4197,
                    "rev": 8,
                    "workItemNumber": 1,
                    "lastRevision": {
                        "enteredQueueAt": "2021-02-11T11:26:59.737Z"
                    }
                },
                "relationships": {
                    "org": {
                        "data": {
                            "type": "org",
                            "id": "5ac6643a05beb7764345388c"
                        },
                        "links": {
                            "self": "/v1/orgs/5ac6643a05beb7764345388c"
                        }
                    },
                    "resource": {
                        "data": {
                            "type": "conversation",
                            "id": "6025143b13eb6c00951fa0d0"
                        }
                    },
                    "lastRevision": {
                        "data": {
                            "type": "work_item_revision",
                            "id": "6025143fb0dcb4001954592a"
                        }
                    },
                    "queue": {
                        "data": {
                            "type": "queue",
                            "id": "5bcf07f7fa0e9500213a3ed8"
                        },
                        "links": {
                            "self": "/v1/routing/queues/5bcf07f7fa0e9500213a3ed8"
                        }
                    }
                },
                "links": {
                    "self": "/v1/routing/work-item/6025143fb0dcb40019545929"
                }
            },
            "createdAt": "2021-02-11T11:26:59.749Z",
            "changes": {
                "attributes": {
                    "queuedCount": {
                        "op": "replace",
                        "before": 2,
                        "after": 3
                    },
                    "updatedAt": {
                        "op": "replace",
                        "before": "2021-02-11T11:26:59.165Z",
                        "after": "2021-02-11T11:26:59.737Z"
                    },
                    "rev": {
                        "op": "replace",
                        "before": 7,
                        "after": 8
                    },
                    "lastRevision": {
                        "op": "replace",
                        "before": {
                            "enteredQueueAt": "2021-02-11T11:26:59.165Z"
                        },
                        "after": {
                            "enteredQueueAt": "2021-02-11T11:26:59.737Z"
                        }
                    }
                },
                "relationships": {
                    "queue": {
                        "op": "replace",
                        "before": {
                            "data": {
                                "type": "queue",
                                "id": "5b69813f3a4b55b65205ba2f"
                            },
                            "links": {
                                "self": "/v1/routing/queues/5b69813f3a4b55b65205ba2f"
                            }
                        },
                        "after": {
                            "data": {
                                "type": "queue",
                                "id": "5bcf07f7fa0e9500213a3ed8"
                            },
                            "links": {
                                "self": "/v1/routing/queues/5bcf07f7fa0e9500213a3ed8"
                            }
                        }
                    }
                }
            },
            "client": "routing-worker",
            "isSync": true
        },
        "publishedAt": "2021-02-11T11:26:59.749Z",
        "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-02-11T11:26:59.750Z",
    "v": 0
}

// Before
curl -X PATCH "${STAGING_API_URL}/v1/conversations/6022e11956ef39008e0ccb74" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "ended": true
}'

// Curl to update a conversation to wrapup
curl "https://staging-joconnor-01-05-21.api.helpapp.io/v1/conversations/6022e69756ef39008e0ccd25" \
  -X 'PATCH' \
  -H 'x-csrf-token: VXeGZM3S-qKahC0sR-b4q4gM3gNCM4khVssU' \
  -H 'content-type: application/json' \
  -H 'x-kustomer-client-request-id: af8d0ecb-7803-4473-b77b-260662b3eeec' \
  -H 'x-kustomer-client: web' \
  -H 'cookie: _BEAMER_USER_ID_RSYRpgEV3232=a0875fcf-284b-4689-b67f-efec3c53ba1c; _BEAMER_FIRST_VISIT_RSYRpgEV3232=2020-12-14T23:21:08.127Z; orgNames=%5B%22zzz-milkshake%22%2C%22rawsome%22%2C%22staging-joconnor-01-05-21%22%5D; _csrf=c-O1_PEkbkRpDYocptozy7u1; ajs_user_id=%225ff4bc4212351668002610fd%22; ajs_anonymous_id=%223affe849-4483-40b2-a63e-c412d4eed85d%22; __cfduid=d7a3f35b0f0c4c404a0d79093f834dd4a1612964346; x-kustomer-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjU2NjUwYzI1NmExMDA5NmI1MmViNiIsInVzZXIiOiI1ZmY0YmM0MjEyMzUxNjY4MDAyNjEwZmQiLCJvcmciOiI1ZmY0YmMyYjVjMTUyYTBlMjcyYzkyM2EiLCJvcmdOYW1lIjoic3RhZ2luZy1qb2Nvbm5vci0wMS0wNS0yMSIsInVzZXJUeXBlIjoidXNlciIsInBvZCI6InN0YWdpbmciLCJyb2xlcyI6W10sImV4cCI6MTYxNTY1NTc2MCwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjVmZjRiYzQyMTIzNTE2NjgwMDI2MTBmZCJ9._kKXKJRbOuVEoRraa_JK0ohMTXhJlPhhizYEGeAClSs; _hp2_ses_props.673492345=%7B%22r%22%3A%22https%3A%2F%2Fstaging-joconnor-01-05-21.helpapp.io%2Fapp%2Fcustomers%2F6022dae551176ad9404572d8%22%2C%22ts%22%3A1613071229167%2C%22d%22%3A%22staging-joconnor-01-05-21.helpapp.io%22%2C%22h%22%3A%22%2Finactive%22%2C%22q%22%3A%22%3FreturnURL%3D%2Fapp%2Fcustomers%2F6022dae551176ad9404572d8%2Fevent%2F6022e69756ef39008e0ccd25%22%7D; _BEAMER_FILTER_BY_URL_RSYRpgEV3232=false; _hp2_id.673492345=%7B%22userId%22%3A%226558737777459611%22%2C%22pageviewId%22%3A%224889985600815254%22%2C%22sessionId%22%3A%224826716287545108%22%2C%22identity%22%3A%225ff4bc4212351668002610fd%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%2C%22oldIdentity%22%3Anull%7D' \
  --data-binary '{"status":"wrap-up"}' \
  --compressed | jq