/* Case 2: The mysterious case of going offline
    "capacityRemaining": 4,
    "totalCapacity": 3,
    

    "changes": {
        "statusType": {
            "op": "replace",
            "before": "available",
            "after": "offline"
        },
    }

    No trace of other work-item updates - may be due to the 3 week window mark
*/

 let caseTwo = {
    "dd": {
        "trace_id": "6096588502178538224",
        "span_id": "4000460610576206164"
    },
    "name": "event",
    "hostname": "e04e06703e98",
    "pid": 18,
    "level": 30,
    "fullBodyLength": 4455,
    "body": {
        "id": "60142b0960ba320012a2da69",
        "name": "kustomer.work-session.update",
        "partition": "5f77639c81d6d6462d6b1c04",
        "body": {
            "id": "60142b0960ba320012a2da68",
            "name": "kustomer.work-session.update",
            "org": "5f77639c81d6d6462d6b1c04",
            "partition": "5f77639c81d6d6462d6b1c04",
            "data": {
                "id": "601425193105f8001259fb4d",
                "type": "work_session",
                "attributes": {
                    "routable": false,
                    "statusType": "offline",
                    "workItemCount": 0,
                    "pausedWorkItemCount": 1,
                    "signedInAt": "2021-01-29T15:09:13.346Z",
                    "signedOutAt": "2021-01-29T15:34:33.815Z",
                    "capacity": [],
                    "capacityRemaining": 4,
                    "totalCapacity": 3,
                    "handledItemCount": 0,
                    "handledConversationCount": 0,
                    "totalAvailable": {
                        "statusAt": "2021-01-29T15:09:13.346Z",
                        "businessTime": 1520469,
                        "time": 1520469
                    },
                    "totalAvailableIdleCapacity": {
                        "businessTime": 1520469,
                        "time": 1520469
                    },
                    "totalTimeByStatus": {
                        "5f7763a0ead38a001a5a526a": {
                            "statusAt": "2021-01-29T15:09:13.346Z",
                            "businessTime": 1520469,
                            "time": 1520469
                        },
                        "5f7763a0ead38a001a5a526d": {
                            "statusAt": "2021-01-29T15:34:33.815Z",
                            "statusSelectedCount": 1
                        }
                    },
                    "capacityStatus": "idle",
                    "updatedAt": "2021-01-29T15:34:33.815Z",
                    "modifiedAt": "2021-01-29T15:34:33.815Z",
                    "createdAt": "2021-01-29T15:09:13.346Z",
                    "rev": 4,
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
                            "id": "601425193105f8001259fb4e"
                        }
                    }
                },
                "links": {
                    "self": "/v1/routing/work-sessions/601425193105f8001259fb4d"
                }
            },
            "createdAt": "2021-01-29T15:34:33.824Z",
            "changes": {
                "attributes": {
                    "statusType": {
                        "op": "replace",
                        "before": "available",
                        "after": "offline"
                    },
                    "signedOutAt": {
                        "op": "add",
                        "after": "2021-01-29T15:34:33.815Z"
                    },
                    "totalAvailable": {
                        "op": "replace",
                        "before": {
                            "statusAt": "2021-01-29T15:09:13.346Z"
                        },
                        "after": {
                            "statusAt": "2021-01-29T15:09:13.346Z",
                            "businessTime": 1520469,
                            "time": 1520469
                        }
                    },
                    "totalAvailableIdleCapacity": {
                        "op": "add",
                        "after": {
                            "businessTime": 1520469,
                            "time": 1520469
                        }
                    },
                    "totalTimeByStatus": {
                        "op": "replace",
                        "before": {
                            "5f7763a0ead38a001a5a526a": {
                                "statusAt": "2021-01-29T15:09:13.346Z"
                            }
                        },
                        "after": {
                            "5f7763a0ead38a001a5a526a": {
                                "statusAt": "2021-01-29T15:09:13.346Z",
                                "businessTime": 1520469,
                                "time": 1520469
                            },
                            "5f7763a0ead38a001a5a526d": {
                                "statusAt": "2021-01-29T15:34:33.815Z",
                                "statusSelectedCount": 1
                            }
                        }
                    },
                    "updatedAt": {
                        "op": "replace",
                        "before": "2021-01-29T15:29:28.296Z",
                        "after": "2021-01-29T15:34:33.815Z"
                    },
                    "modifiedAt": {
                        "op": "replace",
                        "before": "2021-01-29T15:09:13.346Z",
                        "after": "2021-01-29T15:34:33.815Z"
                    },
                    "rev": {
                        "op": "replace",
                        "before": 3,
                        "after": 4
                    }
                },
                "relationships": {
                    "status": {
                        "op": "replace",
                        "before": {
                            "data": {
                                "type": "status",
                                "id": {
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
                                }
                            },
                            "links": {
                                "self": "/v1/routing/statuses/[object Object]"
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
                    "pendingItem": {
                        "op": "remove",
                        "before": {
                            "data": {
                                "type": "work_item",
                                "id": "6014296dcd4fe30012ecb4d4"
                            },
                            "links": {
                                "self": "/v1/routing/work-items/6014296dcd4fe30012ecb4d4"
                            }
                        },
                        "after": null
                    }
                }
            },
            "client": "api"
        },
        "publishedAt": "2021-01-29T15:34:33.824Z",
        "version": 3
    },
    "producer": "SNSEventProducer",
    "msg": "",
    "time": "2021-01-29T15:34:33.825Z",
    "v": 0
};

