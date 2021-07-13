# KDEV-22218

# New info to consider
1) A work-item is created after this permission is checked (i.e. later on in this same promise chain as the code referenced in this story) meaning that a new convo has no work-items at the time the referred code executes
2) When a convo is reopened, it will have at least one completed work-item w/ `workItemNumber >= 1`. Its not until later on in the root promise chain that the work-item w/ `workItemNumber === 2` is created.

So we have two paths forward then:
1) Use the conversations `reopenCount` field. Its null for new conversations, and its 1 for a newly reOpened conversation, and increments on each reOpen. This would save us a network request.
2) Since we cannot peak at the "work-item about to be created down the promise chain" to determine a reopen, we could try and assume that if a `kustomer.conversation.update` is emmitted and its associated with at least one completed work-item, then assume this is a reopen. 



## Videos
### Before on QA
https://share.getcloudapp.com/z8u6nv92

### After on QA

## Do the following scenarious 

## Example args for overideAssignmentSettings;
```
# Entered overrideAssignmentSetting()
Data {
  "resource": {
    "id": "606b49c7c8d303b751c247bd",
    "type": "conversation",
    "rev": 4,
    "createdAt": "2021-04-05T17:32:55.405Z",
    "direction": "out"
  },
  "channel": "email"
}
Obj {
  "jsonType": "conversation",
  "id": "606b49c7c8d303b751c247bd",
  "externalId": null,
  "name": "fdsfdsa",
  "preview": "fdsfdasf",
  "channels": [
    "email"
  ],
  "replyChannel": null,
  "status": "open",
  "snooze": null,
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-04-05T17:32:55.405Z",
  "updatedAt": "2021-04-05T17:33:00.558Z",
  "modifiedAt": "2021-04-05T17:33:00.087Z",
  "lastActivityAt": "2021-04-05T17:32:55.414Z",
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
  "tags": [],
  "suggestedTags": [],
  "predictions": [],
  "sentiment": null,
  "suggestedShortcuts": [],
  "firstMessageIn": null,
  "firstMessageOut": {
    "createdByTeams": [
      "604142ae1eeac51809ac80e8",
      "604142611eeac5b1c8ac80dc",
      "604142761eeac56e04ac80e0"
    ],
    "id": "606b49c71215c6122a5136c5",
    "sentAt": "2021-04-05T17:32:59.936Z",
    "createdAt": "2021-04-05T17:33:00.087Z",
    "channel": "email",
    "directionType": "initial-out",
    "createdBy": "6041403d1eeac5fc4bac807a"
  },
  "lastMessageIn": null,
  "lastMessageOut": {
    "id": "606b49c71215c6122a5136c5",
    "sentAt": "2021-04-05T17:32:59.936Z",
    "createdAt": "2021-04-05T17:33:00.087Z"
  },
  "lastMessageAt": "2021-04-05T17:32:59.936Z",
  "lastMessageUnrespondedTo": null,
  "lastMessageUnrespondedToSinceLastDone": null,
  "assignedUsers": [
    "6041403d1eeac5fc4bac807a"
  ],
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
  "direction": "out",
  "custom": null,
  "lastMessageDirection": "out",
  "outboundMessageCount": 1,
  "inboundMessageCount": 0,
  "rev": 4,
  "priority": 3,
  "defaultLang": null,
  "locale": null,
  "externalQueue": null,
  "firstCompany": {
    "id": "6058a7e36b12c821e9dc936a",
    "name": "NewCompany"
  },
  "totalSnooze": null,
  "totalDone": null,
  "totalOpen": null,
  "roleGroupVersions": [],
  "accessOverride": [],
  "lastDeflection": null,
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "createdBy": "6041403d1eeac5fc4bac807a",
  "modifiedBy": "6041403d1eeac5fc4bac807a",
  "deletedBy": false,
  "lockedBy": false,
  "pinnedBy": false,
  "org": "6041403c1eeac59bc5ac8075",
  "customer": "604147361eeac524c3ac8198"
}
Settings {
  "jsonType": "category-setting",
  "autoAccept": false,
  "acceptTimeout": 299000,
  "idleTimeout": 2700000,
  "overrideAssignment": true,
  "putBackItemsOnOffline": true,
  "blockLowerPriorities": true,
  "routeInternalConversations": false,
  "routeAllConversations": true,
  "routeReOpenedConversationsInOriginalPosition": false,
  "org": "6041403c1eeac59bc5ac8075"
}
```

## Example event that triggers this code
```
{
  "id": "606b4c06c8d3037c94c24814",
  "name": "kustomer.conversation.update",
  "org": "6041403c1eeac59bc5ac8075",
  "partition": "6041403c1eeac59bc5ac8075",
  "orgName": null,
  "data": {
    "type": "conversation",
    "id": "606b4c01c8d3034f0ec247f9",
    "attributes": {
      "externalId": null,
      "name": "fdsafa",
      "preview": "dsafas",
      "channels": [
        "email"
      ],
      "replyChannel": null,
      "status": "open",
      "snooze": null,
      "messageCount": 1,
      "noteCount": 0,
      "satisfaction": 0,
      "satisfactionLevel": {
        "sentByTeams": []
      },
      "createdAt": "2021-04-05T17:42:25.368Z",
      "updatedAt": "2021-04-05T17:42:30.148Z",
      "modifiedAt": "2021-04-05T17:42:29.676Z",
      "lastActivityAt": "2021-04-05T17:42:25.371Z",
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
      "tags": [],
      "suggestedTags": [],
      "predictions": [],
      "sentiment": null,
      "suggestedShortcuts": [],
      "firstMessageIn": null,
      "firstMessageOut": {
        "createdByTeams": [
          "604142ae1eeac51809ac80e8",
          "604142611eeac5b1c8ac80dc",
          "604142761eeac56e04ac80e0"
        ],
        "id": "606b4c011215c69e825136dc",
        "sentAt": "2021-04-05T17:42:29.564Z",
        "createdAt": "2021-04-05T17:42:29.676Z",
        "channel": "email",
        "directionType": "initial-out",
        "createdBy": "6041403d1eeac5fc4bac807a"
      },
      "lastMessageIn": null,
      "lastMessageOut": {
        "id": "606b4c011215c69e825136dc",
        "sentAt": "2021-04-05T17:42:29.564Z",
        "createdAt": "2021-04-05T17:42:29.676Z"
      },
      "lastMessageAt": "2021-04-05T17:42:29.564Z",
      "lastMessageUnrespondedTo": null,
      "lastMessageUnrespondedToSinceLastDone": null,
      "assignedUsers": [
        "6041403d1eeac5fc4bac807a"
      ],
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
      "direction": "out",
      "custom": null,
      "lastMessageDirection": "out",
      "outboundMessageCount": 1,
      "inboundMessageCount": 0,
      "rev": 4,
      "priority": 3,
      "defaultLang": null,
      "locale": null,
      "externalQueue": null,
      "firstCompany": {
        "id": "6058a7e36b12c821e9dc936a",
        "name": "NewCompany"
      },
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
          "self": "/v1/conversations/606b4c01c8d3034f0ec247f9/messages"
        }
      },
      "createdBy": {
        "links": {
          "self": "/v1/users/6041403d1eeac5fc4bac807a"
        },
        "data": {
          "type": "user",
          "id": "6041403d1eeac5fc4bac807a"
        }
      },
      "modifiedBy": {
        "links": {
          "self": "/v1/users/6041403d1eeac5fc4bac807a"
        },
        "data": {
          "type": "user",
          "id": "6041403d1eeac5fc4bac807a"
        }
      },
      "deletedBy": null,
      "lockedBy": null,
      "pinnedBy": null,
      "org": {
        "links": {
          "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
        },
        "data": {
          "type": "org",
          "id": "6041403c1eeac59bc5ac8075"
        }
      },
      "customer": {
        "data": {
          "type": "customer",
          "id": "604147361eeac524c3ac8198"
        },
        "links": {
          "self": "/v1/customers/604147361eeac524c3ac8198"
        }
      }
    },
    "links": {
      "self": "/v1/conversations/606b4c01c8d3034f0ec247f9"
    }
  },
  "createdAt": "2021-04-05T17:42:30.156Z",
  "changes": {
    "attributes": {
      "updatedAt": {
        "op": "replace",
        "before": "2021-04-05T17:42:29.676Z",
        "after": "2021-04-05T17:42:30.148Z"
      },
      "assignedUsers": {
        "op": "replace",
        "before": [],
        "after": [
          "6041403d1eeac5fc4bac807a"
        ]
      },
      "rev": {
        "op": "replace",
        "before": 3,
        "after": 4
      }
    },
    "relationships": {}
  },
  "persist": true,
  "isSync": null,
  "client": "workflow",
  "sourceId": "604140444647313468fc9666",
  "sourceType": "workflow",
  "uiSourceId": null,
  "uiSourceType": null,
  "rawMessage": {
    "MessageId": "d1df5211-0b35-4d9a-9e67-492706c3e428",
    "ReceiptHandle": "AQEBt1OJTn72tMPRVsvL/q/RYzj4r6M+XW61FQMej+dqMdTqmllyq5N4lczikg68YLGj21mxAQZUvS6+8iEyqrSICtpJuYpeErNBQoBiTZqccVTltO46RCsXl6lBlaLDZM9CY/aF1hW3nOjNJswaRc0W8xOR1CDBhhK8nPyybmXKVA+stVXTLx8KJbvZI/X+rR/b6tLnCR86fh0ZC3UyAEORCwmXUPDAzdhAe5zoIB/UXYMqfIFAWSxY6YckHJj0pUy4Pc+TH7uZ+BetUPXIxmOEqYMdjnX77E2p574O0cc0cmCVs+8Nn82P850EwFKgxrkKUEIRUqEth/IIj4WHVBFcZgr7qvdRtUnXUDb8Y9ez5xDmVmb/D21MrG/e2SJY69yJWtUdW7hiTURccRrV2pbpcQ==",
    "MD5OfBody": "3691501f791de7558070261ae8235997",
    "Body": "{\"id\":\"606b4c06c8d30365adc24815\",\"name\":\"kustomer.conversation.update\",\"partition\":\"6041403c1eeac59bc5ac8075\",\"body\":{\"id\":\"606b4c06c8d3037c94c24814\",\"name\":\"kustomer.conversation.update\",\"org\":\"6041403c1eeac59bc5ac8075\",\"partition\":\"6041403c1eeac59bc5ac8075\",\"orgName\":null,\"data\":{\"type\":\"conversation\",\"id\":\"606b4c01c8d3034f0ec247f9\",\"attributes\":{\"externalId\":null,\"name\":\"fdsafa\",\"preview\":\"dsafas\",\"channels\":[\"email\"],\"replyChannel\":null,\"status\":\"open\",\"snooze\":null,\"messageCount\":1,\"noteCount\":0,\"satisfaction\":0,\"satisfactionLevel\":{\"sentByTeams\":[]},\"createdAt\":\"2021-04-05T17:42:25.368Z\",\"updatedAt\":\"2021-04-05T17:42:30.148Z\",\"modifiedAt\":\"2021-04-05T17:42:29.676Z\",\"lastActivityAt\":\"2021-04-05T17:42:25.371Z\",\"deleted\":null,\"deletedAt\":null,\"locked\":null,\"lockedAt\":null,\"pinned\":null,\"pinnedAt\":null,\"spam\":false,\"ended\":false,\"endedAt\":null,\"endedReason\":null,\"endedByType\":null,\"importedAt\":null,\"tags\":[],\"suggestedTags\":[],\"predictions\":[],\"sentiment\":null,\"suggestedShortcuts\":[],\"firstMessageIn\":null,\"firstMessageOut\":{\"createdByTeams\":[\"604142ae1eeac51809ac80e8\",\"604142611eeac5b1c8ac80dc\",\"604142761eeac56e04ac80e0\"],\"id\":\"606b4c011215c69e825136dc\",\"sentAt\":\"2021-04-05T17:42:29.564Z\",\"createdAt\":\"2021-04-05T17:42:29.676Z\",\"channel\":\"email\",\"directionType\":\"initial-out\",\"createdBy\":\"6041403d1eeac5fc4bac807a\"},\"lastMessageIn\":null,\"lastMessageOut\":{\"id\":\"606b4c011215c69e825136dc\",\"sentAt\":\"2021-04-05T17:42:29.564Z\",\"createdAt\":\"2021-04-05T17:42:29.676Z\"},\"lastMessageAt\":\"2021-04-05T17:42:29.564Z\",\"lastMessageUnrespondedTo\":null,\"lastMessageUnrespondedToSinceLastDone\":null,\"assignedUsers\":[\"6041403d1eeac5fc4bac807a\"],\"assignedTeams\":[],\"firstResponse\":{\"createdByTeams\":[],\"assignedTeams\":[],\"assignedUsers\":[]},\"firstResponseSinceLastDone\":{\"createdByTeams\":[],\"assignedTeams\":[],\"assignedUsers\":[]},\"lastResponse\":{\"createdByTeams\":[],\"assignedTeams\":[],\"assignedUsers\":[]},\"firstDone\":{\"createdByTeams\":[],\"assignedTeams\":[],\"assignedUsers\":[]},\"lastDone\":{\"createdByTeams\":[],\"assignedTeams\":[],\"assignedUsers\":[]},\"doneCount\":null,\"snoozeCount\":null,\"reopenCount\":null,\"direction\":\"out\",\"custom\":null,\"lastMessageDirection\":\"out\",\"outboundMessageCount\":1,\"inboundMessageCount\":0,\"rev\":4,\"priority\":3,\"defaultLang\":null,\"locale\":null,\"externalQueue\":null,\"firstCompany\":{\"id\":\"6058a7e36b12c821e9dc936a\",\"name\":\"NewCompany\"},\"totalSnooze\":null,\"totalDone\":null,\"totalOpen\":null,\"roleGroupVersions\":[],\"accessOverride\":[],\"lastDeflection\":null,\"assistant\":{\"assistantId\":[]}},\"relationships\":{\"messages\":{\"links\":{\"self\":\"/v1/conversations/606b4c01c8d3034f0ec247f9/messages\"}},\"createdBy\":{\"links\":{\"self\":\"/v1/users/6041403d1eeac5fc4bac807a\"},\"data\":{\"type\":\"user\",\"id\":\"6041403d1eeac5fc4bac807a\"}},\"modifiedBy\":{\"links\":{\"self\":\"/v1/users/6041403d1eeac5fc4bac807a\"},\"data\":{\"type\":\"user\",\"id\":\"6041403d1eeac5fc4bac807a\"}},\"deletedBy\":null,\"lockedBy\":null,\"pinnedBy\":null,\"org\":{\"links\":{\"self\":\"/v1/orgs/6041403c1eeac59bc5ac8075\"},\"data\":{\"type\":\"org\",\"id\":\"6041403c1eeac59bc5ac8075\"}},\"customer\":{\"data\":{\"type\":\"customer\",\"id\":\"604147361eeac524c3ac8198\"},\"links\":{\"self\":\"/v1/customers/604147361eeac524c3ac8198\"}}},\"links\":{\"self\":\"/v1/conversations/606b4c01c8d3034f0ec247f9\"}},\"createdAt\":\"2021-04-05T17:42:30.156Z\",\"changes\":{\"attributes\":{\"updatedAt\":{\"op\":\"replace\",\"before\":\"2021-04-05T17:42:29.676Z\",\"after\":\"2021-04-05T17:42:30.148Z\"},\"assignedUsers\":{\"op\":\"replace\",\"before\":[],\"after\":[\"6041403d1eeac5fc4bac807a\"]},\"rev\":{\"op\":\"replace\",\"before\":3,\"after\":4}},\"relationships\":{}},\"persist\":true,\"isSync\":null,\"client\":\"workflow\",\"sourceId\":\"604140444647313468fc9666\",\"sourceType\":\"workflow\",\"uiSourceId\":null,\"uiSourceType\":null},\"publishedAt\":\"2021-04-05T17:42:30.157Z\",\"version\":3}",
    "Attributes": {
      "ApproximateReceiveCount": "1"
    }
  }
}
```