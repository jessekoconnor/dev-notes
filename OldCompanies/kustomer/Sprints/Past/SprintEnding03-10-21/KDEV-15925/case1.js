/*  Case 1
Kibana Query: ("60277f56264a9600131673d4" AND "kustomer.work-item.update") OR ("60277f53d72347298d9446cb" AND "kustomer.conversation.update") OR "/opt/app/services/work_item_command/queue.js:18:25"
Kibana link: https://44d6db9654b25134.kustomer.sdm.network/_plugin/kibana/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:'2021-02-13T05:00:00.000Z',to:'2021-02-14T04:30:00.000Z'))&_a=(columns:!(data.name,message),index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,interval:auto,query:(language:lucene,query:'(%2260277f56264a9600131673d4%22%20AND%20%22kustomer.work-item.update%22)%20OR%20(%2260277f53d72347298d9446cb%22%20AND%20%22kustomer.conversation.update%22)%20OR%20%22%2Fopt%2Fapp%2Fservices%2Fwork_item_command%2Fqueue.js:18:25%22'),sort:!(!('@timestamp',desc)))

WorkItem timeline:
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
*/

let case1 = {
    "workItemUpdates": [
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
    ],
    "conversationUpdates": [
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
                      "org": "5f15ebf357f2a300191ca22c",
                      "partition": "5f15ebf357f2a300191ca22c",
                      "orgName": "luminskin",
                      "data": {
                        "type": "conversation",
                        "id": "60277f53d72347298d9446cb",
                        "attributes": {
                          "externalId": null,
                          "name": "Cancel",
                          "preview": "Cancel my order that renewed and subscription immediately and I want a fullrnrefund of the amount. This is ridiculous",
                          "channels": [
                            "email"
                          ],
                          "replyChannel": null,
                          "status": "open",
                          "snooze": null,
                          "messageCount": 2,
                          "noteCount": 3,
                          "satisfaction": 0,
                          "satisfactionLevel": {
                            "sentByTeams": []
                          },
                          "createdAt": "2021-02-13T07:27:15.931Z",
                          "updatedAt": "2021-02-13T07:27:24.201Z",
                          "modifiedAt": "2021-02-13T07:27:24.201Z",
                          "lastActivityAt": "2021-02-13T07:27:22.683Z",
                          "deleted": null,
                          "deletedAt": null,
                          "locked": null,
                          "lockedAt": null,
                          "pinned": null,
                          "pinnedAt": null,
                          "spam": false,
                          "ended": false,
                          "endedAt": null,
                          "endedReason": null,
                          "endedByType": null,
                          "importedAt": null,
                          "tags": [
                            "5f651d6e4d12910019a7df95",
                            "5f5bc9bf4e41a80019e75cc9",
                            "5faf60bcc246dfc1b4ecc738",
                            "5f5bc95681591600191eb757"
                          ],
                          "suggestedTags": [],
                          "predictions": [],
                          "sentiment": null,
                          "suggestedShortcuts": [],
                          "firstMessageIn": {
                            "id": "60277f53a1d74e7e69250d85",
                            "sentAt": "2021-02-13T07:27:01.000Z",
                            "createdAt": "2021-02-13T07:27:15.975Z",
                            "directionType": "initial-in",
                            "channel": "email",
                            "meta": {
                              "subject": "Cancel",
                              "from": "jackrowland20@gmail.com",
                              "to": [
                                {
                                  "email": "support@luminskin.com"
                                }
                              ],
                              "cc": [],
                              "recipient": {
                                "email": "support@luminskin.mail.kustomerapp.com",
                                "mailboxHash": ""
                              }
                            }
                          },
                          "firstMessageOut": {
                            "createdByTeams": []
                          },
                          "lastMessageIn": {
                            "id": "60277f53a1d74e7e69250d85",
                            "sentAt": "2021-02-13T07:27:01.000Z",
                            "createdAt": "2021-02-13T07:27:15.975Z",
                            "meta": {
                              "subject": "Cancel",
                              "from": "jackrowland20@gmail.com",
                              "to": [
                                {
                                  "email": "support@luminskin.com"
                                }
                              ],
                              "cc": [],
                              "recipient": {
                                "email": "support@luminskin.mail.kustomerapp.com",
                                "mailboxHash": ""
                              }
                            }
                          },
                          "lastMessageOut": null,
                          "lastMessageAt": "2021-02-13T07:27:22.857Z",
                          "lastMessageUnrespondedTo": {
                            "id": "60277f53a1d74e7e69250d85",
                            "sentAt": "2021-02-13T07:27:01.000Z",
                            "createdAt": "2021-02-13T07:27:15.975Z"
                          },
                          "lastMessageUnrespondedToSinceLastDone": {
                            "id": "60277f53a1d74e7e69250d85",
                            "sentAt": "2021-02-13T07:27:01.000Z",
                            "createdAt": "2021-02-13T07:27:15.975Z"
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
                          "doneCount": null,
                          "snoozeCount": null,
                          "reopenCount": null,
                          "direction": "in",
                          "custom": {
                            "brandStr": "Lumin Skin",
                            "meridianContactReasonTree": "lumin_skin"
                          },
                          "lastMessageDirection": "out",
                          "outboundMessageCount": 1,
                          "inboundMessageCount": 1,
                          "rev": 19,
                          "priority": 3,
                          "defaultLang": "en_us",
                          "locale": null,
                          "externalQueue": null,
                          "firstCompany": null,
                          "totalSnooze": null,
                          "totalDone": null,
                          "totalOpen": null,
                          "roleGroupVersions": [],
                          "accessOverride": [],
                          "lastDeflection": null,
                          "assistant": {
                            "assistantId": []
                          }
                        },
                        "relationships": {
                          "messages": {
                            "links": {
                              "self": "/v1/conversations/60277f53d72347298d9446cb/messages"
                            }
                          },
                          "createdBy": null,
                          "modifiedBy": {
                            "links": {
                              "self": "/v1/users/5f7d064afcc10579957f9217"
                            },
                            "data": {
                              "type": "user",
                              "id": "5f7d064afcc10579957f9217"
                            }
                          },
                          "deletedBy": null,
                          "lockedBy": null,
                          "pinnedBy": null,
                          "org": {
                            "links": {
                              "self": "/v1/orgs/5f15ebf357f2a300191ca22c"
                            },
                            "data": {
                              "type": "org",
                              "id": "5f15ebf357f2a300191ca22c"
                            }
                          },
                          "customer": {
                            "data": {
                              "type": "customer",
                              "id": "5ff068655a2f5d33c5fbeab2"
                            },
                            "links": {
                              "self": "/v1/customers/5ff068655a2f5d33c5fbeab2"
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
                          }
                        },
                        "links": {
                          "self": "/v1/conversations/60277f53d72347298d9446cb"
                        }
                      },
                      "createdAt": "2021-02-13T07:27:24.209Z",
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
                      },
                      "persist": true,
                      "isSync": null,
                      "client": "api",
                      "sourceId": null,
                      "sourceType": null,
                      "uiSourceId": null,
                      "uiSourceType": null,
                      "rawMessage": {
                        "MessageId": "f8f9e990-a901-413b-a11c-f631e1d4eff9",
                        "Attributes": {
                          "ApproximateReceiveCount": "1"
                        }
                      }
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
    ]
}