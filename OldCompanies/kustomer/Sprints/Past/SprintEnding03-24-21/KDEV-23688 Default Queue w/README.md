# Notes

Default Queue
    5b86a8e040407d0011f4d575
Test Predicted Queue
    601a786a954c100012677199

# Investigation Summary

Ran through two cases and summarized them:
* First case is sending an email with a body, and seeing it go into the default queue
* Second case is sending an email w/o a body, and seeing it go into the proper Prediction Test queue

## Email w/ a body, Goes to the default queue

Audit Log: https://share.getcloudapp.com/2NuE4DRj

T0: onBusinessRulesComplete
    * Same time as T0
    * Conversation rev is 4, no queue, no predictions
    * no Existing work-item yet, so its created and based off convo rev 4
T1(T0 + 0.3s): updateFromQueueRules
    * Matching Queue Rule is not found, meaning no matching queueRule was found
    * Work-item has no queue, rev 1 (but resrouceRev 4)
    * Conversation and work-item get assigned to defaultQueue (assumption)
T2(T0 + 1s): onBusinessRulesComplete
    * Conversation rev is 5, has default queue, no predictions
    * work-item has default queue, rev 2 (but resourceRev 4)
T3(T0 + 10s): onBusinessRulesComplete
    * This is def when the prediction completed
    * Conversation rev is 6, has default queue, and has valid predictions on it
    * Work-item has default queue, rev 2 (but resourceRev 4)
T4(T0 + 11s): onBusinessRulesComplete
    * Conversation rev is 6, has default queue, and has valid predictions on it
    * Work-item has default queue, rev 2 (but resourceRev 4)
    * Not sure what triggered this update - could it be related to the prediction completion?

## Email w/o a body, Goes to proper queue

Audit log: https://share.getcloudapp.com/GGu6YjXK

T0: onBusinessRulesComplete
    * conversation at revision 4, has predictions fields, but no queue
    * No existing work-items for conversation yet
    * This is likely the first update w/ the prediction finishing BRs

T1(T0 + 0.4s): onBusinessRulesComplete
    * conversation at revision 4, has predictions, but still has no queue
    * This is likely the languange work-flow update finishing BRs

T2(T0 + 1s): updateFromQueueRules
    * queueRule TEST PREDICTED matches 
    * work-item gets assigned TEST PREDICTED queue

T3(t0 + 2s): onBusinessRulesComplete
    * conversation is at revision 5
    * conversation has TEST PREDICTED queue
    * work-item remains in TEST PREDICTED queue


# Raw data

## Email w/ a body, Goes to the default queue

T4: 14:32:31.000
```
routing-worker.onBusinessRulesComplete logging   // eslint-
      conversation: {
  "jsonType": "conversation",
  "id": "6050f9b21728a4952fa5adb9",
  "name": "This email does have a body",
  "preview": "This is the email bodyThis is the email bodyThis is the email bodyThis is\r\nthe email bodyThis is the email bodyThis is the email bodyThis is the email\r\nbodyThis is the email bodyThis is the email bodyThis is the email bodyThis\r\nis the email bodyThis is the email bodyThis is the email bodyThis is the\r\nemail bodyThis is the email bodyThis is the email bodyThis is the email body",
  "channels": [
    "email"
  ],
  "status": "open",
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-03-16T18:32:18.274Z",
  "updatedAt": "2021-03-16T18:32:29.972Z",
  "lastActivityAt": "2021-03-16T18:32:29.972Z",
  "spam": false,
  "ended": false,
  "importedAt": null,
  "tags": [
    "5fd3b50f7e877e515331daf9"
  ],
  "suggestedTags": [],
  "predictions": [
    {
      "field": "tags.5fa1326c78f4a6001433b339",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050f9bd0477750019c29e18",
      "createdAt": "2021-03-16T18:32:29.808Z"
    },
    {
      "field": "tags.5fa1326c78f4a6001433b339",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050f9bc0477750019c29e14",
      "createdAt": "2021-03-16T18:32:28.490Z"
    },
    {
      "field": "tags.5fa1326c78f4a6001433b339",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050f9ba0477750019c29e11",
      "createdAt": "2021-03-16T18:32:26.998Z"
    }
  ],
  "sentiment": {},
  "suggestedShortcuts": [],
  "firstMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "directionType": "initial-in",
    "channel": "email",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "firstMessageOut": {
    "createdByTeams": []
  },
  "lastMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "lastMessageOut": {},
  "lastMessageAt": "2021-03-16T18:32:04.000Z",
  "lastMessageUnrespondedTo": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
  },
  "lastMessageUnrespondedToSinceLastDone": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
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
  "lastMessageDirection": "in",
  "outboundMessageCount": 0,
  "inboundMessageCount": 1,
  "rev": 6,
  "priority": 3,
  "defaultLang": "en_us",
  "locale": null,
  "totalSnooze": {},
  "totalDone": {},
  "totalOpen": {},
  "roleGroupVersions": [
    "5e1368186655ea001420e8ba"
  ],
  "accessOverride": [],
  "sla": {
    "name": "longest unresponded to message time 1 min",
    "version": 2,
    "matchedAt": "2021-03-16T18:32:18.366Z",
    "metrics": {
      "longestUnrespondedMessage": {
        "breachAt": "2021-03-16T18:33:18.274Z"
      }
    },
    "breach": {
      "metric": "longestUnrespondedMessage",
      "at": "2021-03-16T18:33:18.274Z"
    },
    "breached": false,
    "status": "pending",
    "summary": {
      "firstBreachAt": "2021-03-16T18:33:18.274Z"
    }
  },
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "org": "5b86a8e0c66b410011b51b2c",
  "customer": "604f6955a025b8e8cf7d633a",
  "slaRel": "5db88c37edde85001405968a",
  "slaVersion": "5db8ae1dedde85001405a533",
  "queue": "5b86a8e040407d0011f4d575"
}
      existingWorkItem: {
  "jsonType": "work_item",
  "id": "6050f9b49327a90012d55468",
  "resourceType": "conversation",
  "status": "queued",
  "paused": false,
  "channel": "email",
  "firstEnterQueueAt": "2021-03-16T18:32:20.502Z",
  "queuedCount": 1,
  "priority": 1,
  "itemSize": 1,
  "ivr": {
    "businessTime": 0,
    "time": 0
  },
  "updatedAt": "2021-03-16T18:32:20.502Z",
  "modifiedAt": "2021-03-16T18:32:20.038Z",
  "createdAt": "2021-03-16T18:32:20.020Z",
  "resourceRev": 4,
  "resourceCreatedAt": "2021-03-16T18:32:18.274Z",
  "resourceDirection": "in",
  "resourceFirstQueueTime": 2228,
  "rev": 2,
  "workItemNumber": 1,
  "lastRevision": {
    "enteredQueueAt": "2021-03-16T18:32:20.502Z"
  },
  "org": "5b86a8e0c66b410011b51b2c",
  "resource": "6050f9b21728a4952fa5adb9",
  "lastRevisionRel": "6050f9b49327a90012d55469",
  "queue": "5b86a8e040407d0011f4d575"
}
```

T3: 14:32:30.000
```
routing-worker.onBusinessRulesComplete logging   // eslint-
      conversation: {
  "jsonType": "conversation",
  "id": "6050f9b21728a4952fa5adb9",
  "name": "This email does have a body",
  "preview": "This is the email bodyThis is the email bodyThis is the email bodyThis is\r\nthe email bodyThis is the email bodyThis is the email bodyThis is the email\r\nbodyThis is the email bodyThis is the email bodyThis is the email bodyThis\r\nis the email bodyThis is the email bodyThis is the email bodyThis is the\r\nemail bodyThis is the email bodyThis is the email bodyThis is the email body",
  "channels": [
    "email"
  ],
  "status": "open",
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-03-16T18:32:18.274Z",
  "updatedAt": "2021-03-16T18:32:29.972Z",
  "lastActivityAt": "2021-03-16T18:32:29.972Z",
  "spam": false,
  "ended": false,
  "importedAt": null,
  "tags": [
    "5fd3b50f7e877e515331daf9"
  ],
  "suggestedTags": [],
  "predictions": [
    {
      "field": "tags.5fa1326c78f4a6001433b339",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050f9bd0477750019c29e18",
      "createdAt": "2021-03-16T18:32:29.808Z"
    },
    {
      "field": "tags.5fa1326c78f4a6001433b339",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050f9bc0477750019c29e14",
      "createdAt": "2021-03-16T18:32:28.490Z"
    },
    {
      "field": "tags.5fa1326c78f4a6001433b339",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050f9ba0477750019c29e11",
      "createdAt": "2021-03-16T18:32:26.998Z"
    }
  ],
  "sentiment": {},
  "suggestedShortcuts": [],
  "firstMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "directionType": "initial-in",
    "channel": "email",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "firstMessageOut": {
    "createdByTeams": []
  },
  "lastMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "lastMessageOut": {},
  "lastMessageAt": "2021-03-16T18:32:04.000Z",
  "lastMessageUnrespondedTo": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
  },
  "lastMessageUnrespondedToSinceLastDone": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
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
  "lastMessageDirection": "in",
  "outboundMessageCount": 0,
  "inboundMessageCount": 1,
  "rev": 6,
  "priority": 3,
  "defaultLang": "en_us",
  "locale": null,
  "totalSnooze": {},
  "totalDone": {},
  "totalOpen": {},
  "roleGroupVersions": [
    "5e1368186655ea001420e8ba"
  ],
  "accessOverride": [],
  "sla": {
    "name": "longest unresponded to message time 1 min",
    "version": 2,
    "matchedAt": "2021-03-16T18:32:18.366Z",
    "metrics": {
      "longestUnrespondedMessage": {
        "breachAt": "2021-03-16T18:33:18.274Z"
      }
    },
    "breach": {
      "metric": "longestUnrespondedMessage",
      "at": "2021-03-16T18:33:18.274Z"
    },
    "breached": false,
    "status": "pending",
    "summary": {
      "firstBreachAt": "2021-03-16T18:33:18.274Z"
    }
  },
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "org": "5b86a8e0c66b410011b51b2c",
  "customer": "604f6955a025b8e8cf7d633a",
  "slaRel": "5db88c37edde85001405968a",
  "slaVersion": "5db8ae1dedde85001405a533",
  "queue": "5b86a8e040407d0011f4d575"
}
      existingWorkItem: {
  "jsonType": "work_item",
  "id": "6050f9b49327a90012d55468",
  "resourceType": "conversation",
  "status": "queued",
  "paused": false,
  "channel": "email",
  "firstEnterQueueAt": "2021-03-16T18:32:20.502Z",
  "queuedCount": 1,
  "priority": 1,
  "itemSize": 1,
  "ivr": {
    "businessTime": 0,
    "time": 0
  },
  "updatedAt": "2021-03-16T18:32:20.502Z",
  "modifiedAt": "2021-03-16T18:32:20.038Z",
  "createdAt": "2021-03-16T18:32:20.020Z",
  "resourceRev": 4,
  "resourceCreatedAt": "2021-03-16T18:32:18.274Z",
  "resourceDirection": "in",
  "resourceFirstQueueTime": 2228,
  "rev": 2,
  "workItemNumber": 1,
  "lastRevision": {
    "enteredQueueAt": "2021-03-16T18:32:20.502Z"
  },
  "org": "5b86a8e0c66b410011b51b2c",
  "resource": "6050f9b21728a4952fa5adb9",
  "lastRevisionRel": "6050f9b49327a90012d55469",
  "queue": "5b86a8e040407d0011f4d575"
}
```

T2: 14:32:21.000
```
routing-worker.onBusinessRulesComplete logging   // eslint-
      conversation: {
  "jsonType": "conversation",
  "id": "6050f9b21728a4952fa5adb9",
  "name": "This email does have a body",
  "preview": "This is the email bodyThis is the email bodyThis is the email bodyThis is\r\nthe email bodyThis is the email bodyThis is the email bodyThis is the email\r\nbodyThis is the email bodyThis is the email bodyThis is the email bodyThis\r\nis the email bodyThis is the email bodyThis is the email bodyThis is the\r\nemail bodyThis is the email bodyThis is the email bodyThis is the email body",
  "channels": [
    "email"
  ],
  "status": "open",
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-03-16T18:32:18.274Z",
  "updatedAt": "2021-03-16T18:32:20.752Z",
  "lastActivityAt": "2021-03-16T18:32:04.000Z",
  "spam": false,
  "ended": false,
  "importedAt": null,
  "tags": [],
  "suggestedTags": [],
  "predictions": [],
  "sentiment": {},
  "suggestedShortcuts": [],
  "firstMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "directionType": "initial-in",
    "channel": "email",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "firstMessageOut": {
    "createdByTeams": []
  },
  "lastMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "lastMessageOut": {},
  "lastMessageAt": "2021-03-16T18:32:04.000Z",
  "lastMessageUnrespondedTo": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
  },
  "lastMessageUnrespondedToSinceLastDone": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
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
  "lastMessageDirection": "in",
  "outboundMessageCount": 0,
  "inboundMessageCount": 1,
  "rev": 5,
  "priority": 3,
  "defaultLang": "en_us",
  "locale": null,
  "totalSnooze": {},
  "totalDone": {},
  "totalOpen": {},
  "roleGroupVersions": [
    "5e1368186655ea001420e8ba"
  ],
  "accessOverride": [],
  "sla": {
    "name": "longest unresponded to message time 1 min",
    "version": 2,
    "matchedAt": "2021-03-16T18:32:18.366Z",
    "metrics": {
      "longestUnrespondedMessage": {
        "breachAt": "2021-03-16T18:33:18.274Z"
      }
    },
    "breach": {
      "metric": "longestUnrespondedMessage",
      "at": "2021-03-16T18:33:18.274Z"
    },
    "breached": false,
    "status": "pending",
    "summary": {
      "firstBreachAt": "2021-03-16T18:33:18.274Z"
    }
  },
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "org": "5b86a8e0c66b410011b51b2c",
  "customer": "604f6955a025b8e8cf7d633a",
  "slaRel": "5db88c37edde85001405968a",
  "slaVersion": "5db8ae1dedde85001405a533",
  "queue": "5b86a8e040407d0011f4d575"
}
      existingWorkItem: {
  "jsonType": "work_item",
  "id": "6050f9b49327a90012d55468",
  "resourceType": "conversation",
  "status": "queued",
  "paused": false,
  "channel": "email",
  "firstEnterQueueAt": "2021-03-16T18:32:20.502Z",
  "queuedCount": 1,
  "priority": 1,
  "itemSize": 1,
  "ivr": {
    "businessTime": 0,
    "time": 0
  },
  "updatedAt": "2021-03-16T18:32:20.502Z",
  "modifiedAt": "2021-03-16T18:32:20.038Z",
  "createdAt": "2021-03-16T18:32:20.020Z",
  "resourceRev": 4,
  "resourceCreatedAt": "2021-03-16T18:32:18.274Z",
  "resourceDirection": "in",
  "resourceFirstQueueTime": 2228,
  "rev": 2,
  "workItemNumber": 1,
  "lastRevision": {
    "enteredQueueAt": "2021-03-16T18:32:20.502Z"
  },
  "org": "5b86a8e0c66b410011b51b2c",
  "resource": "6050f9b21728a4952fa5adb9",
  "lastRevisionRel": "6050f9b49327a90012d55469",
  "queue": "5b86a8e040407d0011f4d575"
}
```

T1: 14:32:20.492
```
routing-worker.updateFromQueueRules logging
    rule: undefined
    obj: {
  "jsonType": "work_item",
  "id": "6050f9b49327a90012d55468",
  "resourceType": "conversation",
  "status": "ivr",
  "paused": false,
  "channel": "email",
  "firstEnterQueueAt": null,
  "queuedCount": 0,
  "priority": 1,
  "itemSize": 1,
  "ivr": null,
  "handle": null,
  "wrapUp": null,
  "completedAt": null,
  "abandoned": null,
  "updatedAt": "2021-03-16T18:32:20.038Z",
  "modifiedAt": "2021-03-16T18:32:20.038Z",
  "deletedAt": null,
  "createdAt": "2021-03-16T18:32:20.020Z",
  "resourceRev": 4,
  "resourceCreatedAt": "2021-03-16T18:32:18.274Z",
  "resourceDirection": "in",
  "resourceFirstQueueTime": null,
  "resourceFirstRouteTime": null,
  "resourceFirstAssignTime": null,
  "rev": 1,
  "workItemNumber": 1,
  "firstRoutedResponse": null,
  "org": "5b86a8e0c66b410011b51b2c",
  "resource": "6050f9b21728a4952fa5adb9",
  "lastRevision": "6050f9b49327a90012d55469"
}
```

T0: 14:32:20.010
```
routing-worker.onBusinessRulesComplete logging   // eslint-
      conversation: {
  "jsonType": "conversation",
  "id": "6050f9b21728a4952fa5adb9",
  "name": "This email does have a body",
  "preview": "This is the email bodyThis is the email bodyThis is the email bodyThis is\r\nthe email bodyThis is the email bodyThis is the email bodyThis is the email\r\nbodyThis is the email bodyThis is the email bodyThis is the email bodyThis\r\nis the email bodyThis is the email bodyThis is the email bodyThis is the\r\nemail bodyThis is the email bodyThis is the email bodyThis is the email body",
  "channels": [
    "email"
  ],
  "status": "open",
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-03-16T18:32:18.274Z",
  "updatedAt": "2021-03-16T18:32:19.170Z",
  "lastActivityAt": "2021-03-16T18:32:04.000Z",
  "spam": false,
  "ended": false,
  "importedAt": null,
  "tags": [],
  "suggestedTags": [],
  "predictions": [],
  "sentiment": {},
  "suggestedShortcuts": [],
  "firstMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "directionType": "initial-in",
    "channel": "email",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "firstMessageOut": {
    "createdByTeams": []
  },
  "lastMessageIn": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z",
    "meta": {
      "subject": "This email does have a body",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "lastMessageOut": {},
  "lastMessageAt": "2021-03-16T18:32:04.000Z",
  "lastMessageUnrespondedTo": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
  },
  "lastMessageUnrespondedToSinceLastDone": {
    "id": "6050f9b11728a4952fa5ad8f",
    "sentAt": "2021-03-16T18:32:04.000Z",
    "createdAt": "2021-03-16T18:32:18.366Z"
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
  "lastMessageDirection": "in",
  "outboundMessageCount": 0,
  "inboundMessageCount": 1,
  "rev": 4,
  "priority": 3,
  "defaultLang": "en_us",
  "locale": null,
  "totalSnooze": {},
  "totalDone": {},
  "totalOpen": {},
  "roleGroupVersions": [
    "5e1368186655ea001420e8ba"
  ],
  "accessOverride": [],
  "sla": {
    "name": "longest unresponded to message time 1 min",
    "version": 2,
    "matchedAt": "2021-03-16T18:32:18.366Z",
    "metrics": {
      "longestUnrespondedMessage": {
        "breachAt": "2021-03-16T18:33:18.274Z"
      }
    },
    "breach": {
      "metric": "longestUnrespondedMessage",
      "at": "2021-03-16T18:33:18.274Z"
    },
    "breached": false,
    "status": "pending",
    "summary": {
      "firstBreachAt": "2021-03-16T18:33:18.274Z"
    }
  },
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "org": "5b86a8e0c66b410011b51b2c",
  "customer": "604f6955a025b8e8cf7d633a",
  "slaRel": "5db88c37edde85001405968a",
  "slaVersion": "5db8ae1dedde85001405a533"
}
      existingWorkItem: undefined
```

## Email w/o a body, Goes to proper queue

T3: 9:54:54
```
routing-worker.onBusinessRulesComplete logging   // eslint-
      conversation: {
  "jsonType": "conversation",
  "id": "6050b8a21728a4952f9fb28a",
  "name": "No body here!!",
  "preview": "",
  "channels": [
    "email"
  ],
  "status": "open",
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-03-16T13:54:42.857Z",
  "updatedAt": "2021-03-16T13:54:53.527Z",
  "lastActivityAt": "2021-03-16T13:54:52.015Z",
  "spam": false,
  "ended": false,
  "importedAt": null,
  "tags": [
    "5fd3b50f7e877e515331daf9",
    "5fa1354578f4a6001433b5cd"
  ],
  "suggestedTags": [],
  "predictions": [
    {
      "field": "tags.5fa1354578f4a6001433b5cd",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050b8ab0477750019c29098",
      "createdAt": "2021-03-16T13:54:51.826Z",
      "automatedAt": "2021-03-16T13:54:51.826Z"
    },
    {
      "field": "tags.5fa1354578f4a6001433b5cd",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050b8aa0477750019c29095",
      "createdAt": "2021-03-16T13:54:50.407Z",
      "automatedAt": "2021-03-16T13:54:50.407Z"
    }
  ],
  "sentiment": {},
  "suggestedShortcuts": [],
  "firstMessageIn": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z",
    "directionType": "initial-in",
    "channel": "email",
    "meta": {
      "subject": "No body here!!",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "firstMessageOut": {
    "createdByTeams": []
  },
  "lastMessageIn": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z",
    "meta": {
      "subject": "No body here!!",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "lastMessageOut": {},
  "lastMessageAt": "2021-03-16T13:54:29.000Z",
  "lastMessageUnrespondedTo": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z"
  },
  "lastMessageUnrespondedToSinceLastDone": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z"
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
  "lastMessageDirection": "in",
  "outboundMessageCount": 0,
  "inboundMessageCount": 1,
  "rev": 5,
  "priority": 3,
  "totalSnooze": {},
  "totalDone": {},
  "totalOpen": {},
  "roleGroupVersions": [
    "5e1368186655ea001420e8ba"
  ],
  "accessOverride": [],
  "sla": {
    "name": "longest unresponded to message time 1 min",
    "version": 2,
    "matchedAt": "2021-03-16T13:54:42.936Z",
    "metrics": {
      "longestUnrespondedMessage": {
        "breachAt": "2021-03-16T13:55:42.857Z"
      }
    },
    "breach": {
      "metric": "longestUnrespondedMessage",
      "at": "2021-03-16T13:55:42.857Z"
    },
    "breached": false,
    "status": "pending",
    "summary": {
      "firstBreachAt": "2021-03-16T13:55:42.857Z"
    }
  },
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "org": "5b86a8e0c66b410011b51b2c",
  "customer": "604f6955a025b8e8cf7d633a",
  "slaRel": "5db88c37edde85001405968a",
  "slaVersion": "5db8ae1dedde85001405a533",
  "queue": "601a786a954c100012677199"
}
      existingWorkItem: {
  "jsonType": "work_item",
  "id": "6050b8ac9327a90012d545dc",
  "resourceType": "conversation",
  "status": "queued",
  "paused": false,
  "channel": "email",
  "firstEnterQueueAt": "2021-03-16T13:54:53.254Z",
  "queuedCount": 1,
  "priority": 1,
  "itemSize": 1,
  "ivr": {
    "businessTime": 0,
    "time": 0
  },
  "updatedAt": "2021-03-16T13:54:53.254Z",
  "modifiedAt": "2021-03-16T13:54:52.869Z",
  "createdAt": "2021-03-16T13:54:52.853Z",
  "resourceRev": 4,
  "resourceCreatedAt": "2021-03-16T13:54:42.857Z",
  "resourceDirection": "in",
  "resourceFirstQueueTime": 10397,
  "rev": 2,
  "workItemNumber": 1,
  "lastRevision": {
    "enteredQueueAt": "2021-03-16T13:54:53.254Z"
  },
  "org": "5b86a8e0c66b410011b51b2c",
  "resource": "6050b8a21728a4952f9fb28a",
  "lastRevisionRel": "6050b8ac9327a90012d545dd",
  "queue": "601a786a954c100012677199",
  "rule": "601a78a2954c1000126771a8"
}
```

T2: 9:54:53
```
routing-worker.updateFromQueueRules logging
    rule: {
  "jsonType": "queue_rule",
  "id": "601a78a2954c1000126771a8",
  "name": "TEST PREDICTED",
  "criteria": {
    "and": [
      {
        "conversation_tags": {
          "operator": "contains",
          "value": [
            "5fd3b50f7e877e515331daf9"
          ]
        }
      }
    ],
    "or": []
  },
  "enabled": true,
  "description": "",
  "updatedAt": "2021-02-03T10:19:28.984Z",
  "modifiedAt": "2021-02-03T10:19:28.984Z",
  "createdAt": "2021-02-03T10:19:14.725Z",
  "org": "5b86a8e0c66b410011b51b2c",
  "queue": "601a786a954c100012677199",
  "modifiedBy": "601a703ff2f11f29486dc3fc"
}
    obj: {
  "jsonType": "work_item",
  "id": "6050b8ac9327a90012d545dc",
  "resourceType": "conversation",
  "status": "ivr",
  "paused": false,
  "channel": "email",
  "firstEnterQueueAt": null,
  "queuedCount": 0,
  "priority": 1,
  "itemSize": 1,
  "ivr": null,
  "handle": null,
  "wrapUp": null,
  "completedAt": null,
  "abandoned": null,
  "updatedAt": "2021-03-16T13:54:52.869Z",
  "modifiedAt": "2021-03-16T13:54:52.869Z",
  "deletedAt": null,
  "createdAt": "2021-03-16T13:54:52.853Z",
  "resourceRev": 4,
  "resourceCreatedAt": "2021-03-16T13:54:42.857Z",
  "resourceDirection": "in",
  "resourceFirstQueueTime": null,
  "resourceFirstRouteTime": null,
  "resourceFirstAssignTime": null,
  "rev": 1,
  "workItemNumber": 1,
  "firstRoutedResponse": null,
  "org": "5b86a8e0c66b410011b51b2c",
  "resource": "6050b8a21728a4952f9fb28a",
  "lastRevision": "6050b8ac9327a90012d545dd"
}
```

T1: 9:54:52:843
```


routing-worker.onBusinessRulesComplete logging   // eslint-
      conversation: {
  "jsonType": "conversation",
  "id": "6050b8a21728a4952f9fb28a",
  "name": "No body here!!",
  "preview": "",
  "channels": [
    "email"
  ],
  "status": "open",
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-03-16T13:54:42.857Z",
  "updatedAt": "2021-03-16T13:54:52.015Z",
  "lastActivityAt": "2021-03-16T13:54:52.015Z",
  "spam": false,
  "ended": false,
  "importedAt": null,
  "tags": [
    "5fd3b50f7e877e515331daf9",
    "5fa1354578f4a6001433b5cd"
  ],
  "suggestedTags": [],
  "predictions": [
    {
      "field": "tags.5fa1354578f4a6001433b5cd",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050b8ab0477750019c29098",
      "createdAt": "2021-03-16T13:54:51.826Z",
      "automatedAt": "2021-03-16T13:54:51.826Z"
    },
    {
      "field": "tags.5fa1354578f4a6001433b5cd",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050b8aa0477750019c29095",
      "createdAt": "2021-03-16T13:54:50.407Z",
      "automatedAt": "2021-03-16T13:54:50.407Z"
    }
  ],
  "sentiment": {},
  "suggestedShortcuts": [],
  "firstMessageIn": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z",
    "directionType": "initial-in",
    "channel": "email",
    "meta": {
      "subject": "No body here!!",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "firstMessageOut": {
    "createdByTeams": []
  },
  "lastMessageIn": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z",
    "meta": {
      "subject": "No body here!!",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "lastMessageOut": {},
  "lastMessageAt": "2021-03-16T13:54:29.000Z",
  "lastMessageUnrespondedTo": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z"
  },
  "lastMessageUnrespondedToSinceLastDone": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z"
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
  "lastMessageDirection": "in",
  "outboundMessageCount": 0,
  "inboundMessageCount": 1,
  "rev": 4,
  "priority": 3,
  "totalSnooze": {},
  "totalDone": {},
  "totalOpen": {},
  "roleGroupVersions": [
    "5e1368186655ea001420e8ba"
  ],
  "accessOverride": [],
  "sla": {
    "name": "longest unresponded to message time 1 min",
    "version": 2,
    "matchedAt": "2021-03-16T13:54:42.936Z",
    "metrics": {
      "longestUnrespondedMessage": {
        "breachAt": "2021-03-16T13:55:42.857Z"
      }
    },
    "breach": {
      "metric": "longestUnrespondedMessage",
      "at": "2021-03-16T13:55:42.857Z"
    },
    "breached": false,
    "status": "pending",
    "summary": {
      "firstBreachAt": "2021-03-16T13:55:42.857Z"
    }
  },
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "org": "5b86a8e0c66b410011b51b2c",
  "customer": "604f6955a025b8e8cf7d633a",
  "slaRel": "5db88c37edde85001405968a",
  "slaVersion": "5db8ae1dedde85001405a533"
}
existingWorkItem: undefined
```

T0: 9:54:52:391
```
routing-worker.onBusinessRulesComplete logging   // eslint-
      conversation: {
  "jsonType": "conversation",
  "id": "6050b8a21728a4952f9fb28a",
  "name": "No body here!!",
  "preview": "",
  "channels": [
    "email"
  ],
  "status": "open",
  "messageCount": 1,
  "noteCount": 0,
  "satisfaction": 0,
  "satisfactionLevel": {
    "sentByTeams": []
  },
  "createdAt": "2021-03-16T13:54:42.857Z",
  "updatedAt": "2021-03-16T13:54:52.015Z",
  "lastActivityAt": "2021-03-16T13:54:52.015Z",
  "spam": false,
  "ended": false,
  "importedAt": null,
  "tags": [
    "5fd3b50f7e877e515331daf9",
    "5fa1354578f4a6001433b5cd"
  ],
  "suggestedTags": [],
  "predictions": [
    {
      "field": "tags.5fa1354578f4a6001433b5cd",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050b8ab0477750019c29098",
      "createdAt": "2021-03-16T13:54:51.826Z",
      "automatedAt": "2021-03-16T13:54:51.826Z"
    },
    {
      "field": "tags.5fa1354578f4a6001433b5cd",
      "classifier": "5faab1917cb0eb0013e6b2fe",
      "prediction": "6050b8aa0477750019c29095",
      "createdAt": "2021-03-16T13:54:50.407Z",
      "automatedAt": "2021-03-16T13:54:50.407Z"
    }
  ],
  "sentiment": {},
  "suggestedShortcuts": [],
  "firstMessageIn": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z",
    "directionType": "initial-in",
    "channel": "email",
    "meta": {
      "subject": "No body here!!",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "firstMessageOut": {
    "createdByTeams": []
  },
  "lastMessageIn": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z",
    "meta": {
      "subject": "No body here!!",
      "from": "jesse.oconnor@kustomer.com",
      "to": [
        {
          "email": "support@ironmaiden2.mail.helpsimply.com"
        }
      ],
      "cc": [],
      "recipient": {
        "email": "support@ironmaiden2.mail.helpsimply.com",
        "mailboxHash": ""
      }
    }
  },
  "lastMessageOut": {},
  "lastMessageAt": "2021-03-16T13:54:29.000Z",
  "lastMessageUnrespondedTo": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z"
  },
  "lastMessageUnrespondedToSinceLastDone": {
    "id": "6050b8a21728a4952f9fb271",
    "sentAt": "2021-03-16T13:54:29.000Z",
    "createdAt": "2021-03-16T13:54:42.936Z"
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
  "lastMessageDirection": "in",
  "outboundMessageCount": 0,
  "inboundMessageCount": 1,
  "rev": 4,
  "priority": 3,
  "totalSnooze": {},
  "totalDone": {},
  "totalOpen": {},
  "roleGroupVersions": [
    "5e1368186655ea001420e8ba"
  ],
  "accessOverride": [],
  "sla": {
    "name": "longest unresponded to message time 1 min",
    "version": 2,
    "matchedAt": "2021-03-16T13:54:42.936Z",
    "metrics": {
      "longestUnrespondedMessage": {
        "breachAt": "2021-03-16T13:55:42.857Z"
      }
    },
    "breach": {
      "metric": "longestUnrespondedMessage",
      "at": "2021-03-16T13:55:42.857Z"
    },
    "breached": false,
    "status": "pending",
    "summary": {
      "firstBreachAt": "2021-03-16T13:55:42.857Z"
    }
  },
  "assistant": {
    "assistantId": []
  },
  "messages": false,
  "org": "5b86a8e0c66b410011b51b2c",
  "customer": "604f6955a025b8e8cf7d633a",
  "slaRel": "5db88c37edde85001405968a",
  "slaVersion": "5db8ae1dedde85001405a533"
},
existingWorkItem: undefined
```