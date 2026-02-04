# Investigate reverse sync of De-Queue


## Reverse sync under investigation

```json
{
  "name": "routing-worker",
  "hostname": "a0f005ba34c0",
  "pid": 1,
  "level": 30,
  "event": {},
  "obj": {},
  "conversationId": "621f80b634b1800f5978c7e4",
  "workItemId": "621f80d0fc9a8e280afa9833",
  "updatedConversation": {
    "queue": {
      "id": null
    },
    "rev": 34
  },
  "msg": "CONVERSATION_SYNC_AUDIT",
  "time": "2022-03-02T14:43:59.463Z",
  "v": 0,
  "dd": {
    "trace_id": "6595609784336128742",
    "span_id": "6595609784336128742",
    "service": "routing-worker",
    "version": "release-v0.1.147"
  }
}
```

## WORK_ITEM revs

### Work Item Rev

```json

```

### Work Item Rev

```json

```

## CONVERSATION revs

### Convo rev 34

* Queue: 5d49b1f8df500f001a960380
  * before: null
* Client: routing-worker  

```json
{
  "level": 30,
  "time": 1646232238916,
  "pid": 1,
  "hostname": "27b56e6cdb9a",
  "name": "event",
  "dd": {
    "trace_id": "6937650339178295292",
    "span_id": "5216231901473054298",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 6615,
  "body": {
    "id": "621f82aec02f64724c2f7dbf",
    "name": "kustomer.conversation.update",
    "partition": "5d1cb247d09f6b001a0f11a9",
    "body": {
      "id": "621f82ae6029289fc3419c8b",
      "name": "kustomer.conversation.update",
      "org": "5d1cb247d09f6b001a0f11a9",
      "partition": "5d1cb247d09f6b001a0f11a9",
      "data": {
        "type": "conversation",
        "id": "621f80b634b1800f5978c7e4",
        "attributes": {
          "name": "Voicemail from Test IVR / SMS Request via UJET",
          "preview": "We canceled our Spot & Tango auto shipment a few weeks ago but I just got an email saying my shipment is out. I do not need it. Please reimburse me.",
          "channels": [
            "email",
            "sms",
            "voice"
          ],
          "status": "open",
          "snooze": null,
          "messageCount": 9,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-02T14:35:34.848Z",
          "updatedAt": "2022-03-02T14:43:58.909Z",
          "modifiedAt": "2022-03-02T14:43:58.574Z",
          "lastActivityAt": "2022-03-02T14:43:58.708Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "60fabf150c32ee0de4860b2b",
            "5f8f30dcc4b1ec205648794b",
            "5d5c52a601917c001abd9453",
            "5e9e1fab2041ae0019d14f46",
            "5ebc64cdd50b78001a8d2b73",
            "5eed1763507eeb001922abe4",
            "5f8f30f7b1490682633d047c",
            "613fbfff3d6283b9b902e795",
            "613fc005602435d3b1c43c53",
            "5d8ae0f91f70ea0013668885",
            "5d481dbc619ea900191c0623",
            "5ecddb75653cb70013d56b48",
            "612bbf00fc9be71f1489b354",
            "5d8addff5612060013d62d66",
            "5d69412ecba2c4001a1f90c7",
            "5f8f30bf14e69b8ddbffdb18",
            "6033d724c1a0abd4fca9f35e",
            "5d3918a49dff3c0013a6606d",
            "5d481ac0b7c2fc001a24ee17",
            "5f22c3b3b278fe00130168e4",
            "5f8f310c4ddfe4ed6da28dc5",
            "5f8f4561dba9adc7a10cb398",
            "5f8f39f603d37a307251957d",
            "5f4412f905e544001ad59389",
            "5f8f3457e502190edfcbc153",
            "5f8f4662113c9284ced160d7"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621f80b6e6c0ec03e28e0419",
            "sentAt": "2022-03-02T14:35:34.786Z",
            "createdAt": "2022-03-02T14:35:34.954Z",
            "directionType": "initial-in",
            "channel": "voice",
            "meta": {
              "subject": "Voicemail Test IVR / SMS Request via UJET",
              "from": "+1 404 671 6729",
              "to": "+1 718 514 6292",
              "placedAt": "2022-03-02T14:35:34.786Z",
              "status": "wip"
            }
          },
          "firstMessageOut": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "createdAt": "2022-03-02T14:39:36.539Z",
            "channel": "sms",
            "directionType": "response-out",
            "createdBy": "61534348e1b09f001a2aff07"
          },
          "lastMessageIn": {
            "id": "621f81def8077633ca3fa119",
            "sentAt": "2022-03-02T14:40:30.391Z",
            "createdAt": "2022-03-02T14:40:31.041Z",
            "meta": {
              "from": "+14046716729",
              "to": "+17185146292",
              "proxy": "+17185146292",
              "attachmentNum": 0
            },
            "channel": "sms"
          },
          "lastMessageOut": {
            "id": "621f81071319ac95f3ef5a9f",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07"
          },
          "lastMessageAt": "2022-03-02T14:40:30.391Z",
          "lastMessageUnrespondedTo": {
            "id": "621f81cdf8077633ca3cd63a",
            "sentAt": "2022-03-02T14:40:08.000Z",
            "createdAt": "2022-03-02T14:40:14.450Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "assignedTeams": [],
            "assignedUsers": [
              "61534348e1b09f001a2aff07"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "time": 241653,
            "businessTime": 241653,
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "responseTime": 241653
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "assignedTeams": [],
            "assignedUsers": [
              "61534348e1b09f001a2aff07"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "time": 241653,
            "businessTime": 241653,
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "responseTime": 241653
          },
          "lastResponse": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "assignedTeams": [],
            "assignedUsers": [
              "61534348e1b09f001a2aff07"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "time": 241653,
            "businessTime": 241653,
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07"
          },
          "firstDone": {
            "createdByTeams": null,
            "assignedTeams": [],
            "assignedUsers": [],
            "time": 1457,
            "businessTime": 1457,
            "createdAt": "2022-03-02T14:35:36.305Z",
            "createdBy": null,
            "noteCount": 0,
            "messageCount": 2,
            "messageCountByChannel": {
              "voice": 1,
              "sms": 1
            },
            "outboundMessageCount": 1,
            "outboundMessageCountByChannel": {
              "sms": 1
            },
            "lastMessageDirection": "out",
            "lastMessageDirectionType": "response-out"
          },
          "lastDone": {
            "createdByTeams": null,
            "assignedTeams": [],
            "assignedUsers": [],
            "time": 1457,
            "businessTime": 1457,
            "createdAt": "2022-03-02T14:35:36.305Z",
            "createdBy": null,
            "noteCount": 0,
            "messageCount": 2,
            "messageCountByChannel": {
              "voice": 1,
              "sms": 1
            },
            "outboundMessageCount": 1,
            "outboundMessageCountByChannel": {
              "sms": 1
            },
            "lastMessageDirection": "out",
            "lastMessageDirectionType": "response-out"
          },
          "doneCount": 1,
          "snoozeCount": 0,
          "reopenCount": 0,
          "reopenFromDoneCount": 0,
          "direction": "in",
          "custom": {
            "convoTaggingTree": "convo_topic_requires_selection_un_known",
            "doNotSendStellaConnectBool": false,
            "conversationReasonTree": "unclassified_do_not_select_admin_use_only"
          },
          "lastMessageDirection": "in",
          "outboundMessageCount": 3,
          "inboundMessageCount": 6,
          "rev": 34,
          "priority": 3,
          "totalDone": {
            "businessTime": 22140,
            "time": 22140
          },
          "totalOpen": {
            "time": 1351,
            "businessTime": 1351,
            "businessTimeBySchedule": 1351,
            "timeSinceLastDone": 0,
            "businessTimeSinceLastDone": 0,
            "businessTimeByScheduleSinceLastDone": 0
          },
          "roleGroupVersions": [],
          "accessOverride": [],
          "linkedConversations": [],
          "mergedTarget": true,
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
              "self": "/v1/conversations/621f80b634b1800f5978c7e4/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/61534348e1b09f001a2aff07"
            },
            "data": {
              "type": "user",
              "id": "61534348e1b09f001a2aff07"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d1cb247d09f6b001a0f11a9"
            },
            "data": {
              "type": "org",
              "id": "5d1cb247d09f6b001a0f11a9"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "619bc15f5665e7c26dce8dc9"
            },
            "links": {
              "self": "/v1/customers/619bc15f5665e7c26dce8dc9"
            }
          },
          "queue": {
            "data": {
              "type": "queue",
              "id": "5d49b1f8df500f001a960380"
            },
            "links": {
              "self": "/v1/routing/queues/5d49b1f8df500f001a960380"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf7919124be4f2960cb092"
            },
            "links": {
              "self": "/v1/brands/5daf7919124be4f2960cb092"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621f80b634b1800f5978c7e4"
        }
      },
      "createdAt": "2022-03-02T14:43:58.915Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-02T14:43:58.708Z",
            "after": "2022-03-02T14:43:58.909Z"
          },
          "rev": {
            "op": "replace",
            "before": 33,
            "after": 34
          }
        },
        "relationships": {
          "queue": {
            "op": "add",
            "before": null,
            "after": {
              "data": {
                "type": "queue",
                "id": "5d49b1f8df500f001a960380"
              },
              "links": {
                "self": "/v1/routing/queues/5d49b1f8df500f001a960380"
              }
            }
          }
        }
      },
      "persist": true,
      "client": "routing-worker"
    },
    "publishedAt": "2022-03-02T14:43:58.916Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```

### Convo rev 33

* Queue: null
  * before: 5d49b1f8df500f001a960380
* client: biz-rules-worker

```json
{
  "level": 30,
  "time": 1646232238719,
  "pid": 1,
  "hostname": "77c0a8cf6073",
  "name": "event",
  "dd": {
    "trace_id": "8936184278344389014",
    "span_id": "2862750754117913842",
    "service": "sobjects",
    "version": "release-v0.1.912"
  },
  "fullBodyLength": 6596,
  "body": {
    "id": "621f82ae62cef81ba3509edb",
    "name": "kustomer.conversation.update",
    "partition": "5d1cb247d09f6b001a0f11a9",
    "body": {
      "id": "621f82aea26c931a3bac7fcd",
      "name": "kustomer.conversation.update",
      "org": "5d1cb247d09f6b001a0f11a9",
      "partition": "5d1cb247d09f6b001a0f11a9",
      "data": {
        "type": "conversation",
        "id": "621f80b634b1800f5978c7e4",
        "attributes": {
          "name": "Voicemail from Test IVR / SMS Request via UJET",
          "preview": "We canceled our Spot & Tango auto shipment a few weeks ago but I just got an email saying my shipment is out. I do not need it. Please reimburse me.",
          "channels": [
            "email",
            "sms",
            "voice"
          ],
          "status": "open",
          "snooze": null,
          "messageCount": 9,
          "noteCount": 0,
          "satisfaction": 0,
          "satisfactionLevel": {
            "sentByTeams": [],
            "answers": []
          },
          "createdAt": "2022-03-02T14:35:34.848Z",
          "updatedAt": "2022-03-02T14:43:58.708Z",
          "modifiedAt": "2022-03-02T14:43:58.574Z",
          "lastActivityAt": "2022-03-02T14:43:58.708Z",
          "spam": false,
          "ended": false,
          "importedAt": null,
          "tags": [
            "60fabf150c32ee0de4860b2b",
            "5f8f30dcc4b1ec205648794b",
            "5d5c52a601917c001abd9453",
            "5e9e1fab2041ae0019d14f46",
            "5ebc64cdd50b78001a8d2b73",
            "5eed1763507eeb001922abe4",
            "5f8f30f7b1490682633d047c",
            "613fbfff3d6283b9b902e795",
            "613fc005602435d3b1c43c53",
            "5d8ae0f91f70ea0013668885",
            "5d481dbc619ea900191c0623",
            "5ecddb75653cb70013d56b48",
            "612bbf00fc9be71f1489b354",
            "5d8addff5612060013d62d66",
            "5d69412ecba2c4001a1f90c7",
            "5f8f30bf14e69b8ddbffdb18",
            "6033d724c1a0abd4fca9f35e",
            "5d3918a49dff3c0013a6606d",
            "5d481ac0b7c2fc001a24ee17",
            "5f22c3b3b278fe00130168e4",
            "5f8f310c4ddfe4ed6da28dc5",
            "5f8f4561dba9adc7a10cb398",
            "5f8f39f603d37a307251957d",
            "5f4412f905e544001ad59389",
            "5f8f3457e502190edfcbc153",
            "5f8f4662113c9284ced160d7"
          ],
          "suggestedTags": [],
          "predictions": [],
          "suggestedShortcuts": [],
          "firstMessageIn": {
            "id": "621f80b6e6c0ec03e28e0419",
            "sentAt": "2022-03-02T14:35:34.786Z",
            "createdAt": "2022-03-02T14:35:34.954Z",
            "directionType": "initial-in",
            "channel": "voice",
            "meta": {
              "subject": "Voicemail Test IVR / SMS Request via UJET",
              "from": "+1 404 671 6729",
              "to": "+1 718 514 6292",
              "placedAt": "2022-03-02T14:35:34.786Z",
              "status": "wip"
            }
          },
          "firstMessageOut": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "createdAt": "2022-03-02T14:39:36.539Z",
            "channel": "sms",
            "directionType": "response-out",
            "createdBy": "61534348e1b09f001a2aff07"
          },
          "lastMessageIn": {
            "id": "621f81def8077633ca3fa119",
            "sentAt": "2022-03-02T14:40:30.391Z",
            "createdAt": "2022-03-02T14:40:31.041Z",
            "meta": {
              "from": "+14046716729",
              "to": "+17185146292",
              "proxy": "+17185146292",
              "attachmentNum": 0
            },
            "channel": "sms"
          },
          "lastMessageOut": {
            "id": "621f81071319ac95f3ef5a9f",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07"
          },
          "lastMessageAt": "2022-03-02T14:40:30.391Z",
          "lastMessageUnrespondedTo": {
            "id": "621f81cdf8077633ca3cd63a",
            "sentAt": "2022-03-02T14:40:08.000Z",
            "createdAt": "2022-03-02T14:40:14.450Z"
          },
          "assignedUsers": [],
          "assignedTeams": [],
          "firstResponse": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "assignedTeams": [],
            "assignedUsers": [
              "61534348e1b09f001a2aff07"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "time": 241653,
            "businessTime": 241653,
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "responseTime": 241653
          },
          "firstResponseSinceLastDone": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "assignedTeams": [],
            "assignedUsers": [
              "61534348e1b09f001a2aff07"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "time": 241653,
            "businessTime": 241653,
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07",
            "sentAt": "2022-03-02T14:39:36.506Z",
            "responseTime": 241653
          },
          "lastResponse": {
            "createdByTeams": [
              "5fb5693d4d92eaf8702d456d"
            ],
            "assignedTeams": [],
            "assignedUsers": [
              "61534348e1b09f001a2aff07"
            ],
            "id": "621f81071319ac95f3ef5a9f",
            "time": 241653,
            "businessTime": 241653,
            "createdAt": "2022-03-02T14:39:36.539Z",
            "createdBy": "61534348e1b09f001a2aff07"
          },
          "firstDone": {
            "createdByTeams": null,
            "assignedTeams": [],
            "assignedUsers": [],
            "time": 1457,
            "businessTime": 1457,
            "createdAt": "2022-03-02T14:35:36.305Z",
            "createdBy": null,
            "noteCount": 0,
            "messageCount": 2,
            "messageCountByChannel": {
              "voice": 1,
              "sms": 1
            },
            "outboundMessageCount": 1,
            "outboundMessageCountByChannel": {
              "sms": 1
            },
            "lastMessageDirection": "out",
            "lastMessageDirectionType": "response-out"
          },
          "lastDone": {
            "createdByTeams": null,
            "assignedTeams": [],
            "assignedUsers": [],
            "time": 1457,
            "businessTime": 1457,
            "createdAt": "2022-03-02T14:35:36.305Z",
            "createdBy": null,
            "noteCount": 0,
            "messageCount": 2,
            "messageCountByChannel": {
              "voice": 1,
              "sms": 1
            },
            "outboundMessageCount": 1,
            "outboundMessageCountByChannel": {
              "sms": 1
            },
            "lastMessageDirection": "out",
            "lastMessageDirectionType": "response-out"
          },
          "doneCount": 1,
          "snoozeCount": 0,
          "reopenCount": 0,
          "reopenFromDoneCount": 0,
          "direction": "in",
          "custom": {
            "convoTaggingTree": "convo_topic_requires_selection_un_known",
            "doNotSendStellaConnectBool": false,
            "conversationReasonTree": "unclassified_do_not_select_admin_use_only"
          },
          "lastMessageDirection": "in",
          "outboundMessageCount": 3,
          "inboundMessageCount": 6,
          "rev": 33,
          "priority": 3,
          "totalDone": {
            "businessTime": 22140,
            "time": 22140
          },
          "totalOpen": {
            "time": 1351,
            "businessTime": 1351,
            "businessTimeBySchedule": 1351,
            "timeSinceLastDone": 0,
            "businessTimeSinceLastDone": 0,
            "businessTimeByScheduleSinceLastDone": 0
          },
          "roleGroupVersions": [],
          "accessOverride": [],
          "linkedConversations": [],
          "mergedTarget": true,
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
              "self": "/v1/conversations/621f80b634b1800f5978c7e4/messages"
            }
          },
          "modifiedBy": {
            "links": {
              "self": "/v1/users/61534348e1b09f001a2aff07"
            },
            "data": {
              "type": "user",
              "id": "61534348e1b09f001a2aff07"
            }
          },
          "org": {
            "links": {
              "self": "/v1/orgs/5d1cb247d09f6b001a0f11a9"
            },
            "data": {
              "type": "org",
              "id": "5d1cb247d09f6b001a0f11a9"
            }
          },
          "customer": {
            "data": {
              "type": "customer",
              "id": "619bc15f5665e7c26dce8dc9"
            },
            "links": {
              "self": "/v1/customers/619bc15f5665e7c26dce8dc9"
            }
          },
          "brand": {
            "data": {
              "type": "brand",
              "id": "5daf7919124be4f2960cb092"
            },
            "links": {
              "self": "/v1/brands/5daf7919124be4f2960cb092"
            }
          }
        },
        "links": {
          "self": "/v1/conversations/621f80b634b1800f5978c7e4"
        }
      },
      "createdAt": "2022-03-02T14:43:58.717Z",
      "changes": {
        "attributes": {
          "updatedAt": {
            "op": "replace",
            "before": "2022-03-02T14:43:58.574Z",
            "after": "2022-03-02T14:43:58.708Z"
          },
          "lastActivityAt": {
            "op": "replace",
            "before": "2022-03-02T14:42:53.519Z",
            "after": "2022-03-02T14:43:58.708Z"
          },
          "rev": {
            "op": "replace",
            "before": 32,
            "after": 33
          }
        },
        "relationships": {
          "queue": {
            "op": "remove",
            "before": {
              "data": {
                "type": "queue",
                "id": "5d49b1f8df500f001a960380"
              },
              "links": {
                "self": "/v1/routing/queues/5d49b1f8df500f001a960380"
              }
            },
            "after": null
          }
        }
      },
      "persist": true,
      "client": "biz-rules-worker"
    },
    "publishedAt": "2022-03-02T14:43:58.718Z",
    "version": 3
  },
  "producer": "SNSEventProducer"
}
```