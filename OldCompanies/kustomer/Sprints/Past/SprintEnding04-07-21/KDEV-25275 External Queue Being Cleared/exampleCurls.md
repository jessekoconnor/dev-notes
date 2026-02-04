# Notes of whats happening

## Summary 
* The work-items lastRevision.externalQueue is wiped away.
* The conversations externalQueue field is wiped out. 

## That curl creates a conversation:
{
    _id: ...
    type: "conversation",
    attributes: {
        externalQueue: "amazon-connect"
    }
}
and work-item:
{
    attributes.lastRevision.externalQueue is "amazon-connect"
}

## Then, I manually assign the work-item and go offline.
conversation:
{
    _id: ...
    type: "conversation",
    attributes: {
        ...
    },
    relationships: {
        queue: emailQueue
    }
}
and work-item:
{
    _id: ...
    type: "work-item",
    attributes: {
        lastRevision: {
            "enteredQueueAt": "2021-04-01T20:01:05.845Z"
        }
        ...
    }    
    relationships: {
        queue: emailQueue
    }
}

# Example of curls 
```
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % curl --location --request POST "${STAGING_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "Hello, I have a question. Can you help me?",
    "subject": "Question",
    "size": 1,
    "createdAt": "2016-05-22T22:42:44.723Z",
    "customer": "5ff4bc441235167ec0261101",
    "queue": {
        "external": "amazon-connect"
    }
}' | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1568    0  1245  100   323   2766    717 --:--:-- --:--:-- --:--:--  3476
{
  "data": {
    "type": "message",
    "id": "6066239bab831858a41b2ce4",
    "attributes": {
      "channel": "email",
      "app": "postmark",
      "size": 1,
      "direction": "in",
      "directionType": "initial-in",
      "preview": "Hello, I have a question. Can you help me?",
      "subject": "Question",
      "meta": {},
      "status": "received",
      "assignedTeams": [],
      "assignedUsers": [],
      "auto": false,
      "sentAt": "2021-04-01T19:48:43.851Z",
      "createdAt": "2016-05-22T22:42:44.723Z",
      "updatedAt": "2021-04-01T19:48:43.850Z",
      "modifiedAt": "2021-04-01T19:48:43.850Z",
      "redacted": false,
      "createdByTeams": [],
      "rev": 1,
      "reactions": []
    },
    "relationships": {
      "org": {
        "links": {
          "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
        },
        "data": {
          "type": "org",
          "id": "5ff4bc2b5c152a0e272c923a"
        }
      },
      "createdBy": {
        "links": {
          "self": "/v1/users/5ff4ddab5c152aa5a72caafd"
        },
        "data": {
          "type": "user",
          "id": "5ff4ddab5c152aa5a72caafd"
        }
      },
      "modifiedBy": {
        "links": {
          "self": "/v1/users/5ff4ddab5c152aa5a72caafd"
        },
        "data": {
          "type": "user",
          "id": "5ff4ddab5c152aa5a72caafd"
        }
      },
      "customer": {
        "links": {
          "self": "/v1/customers/5ff4bc441235167ec0261101"
        },
        "data": {
          "type": "customers",
          "id": "5ff4bc441235167ec0261101"
        }
      },
      "conversation": {
        "links": {
          "self": "/v1/conversations/6066239b7fd0a60dab0e3d53"
        },
        "data": {
          "type": "conversation",
          "id": "6066239b7fd0a60dab0e3d53"
        }
      }
    },
    "links": {
      "self": "/v1/messages/6066239bab831858a41b2ce4"
    }
  }
}
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % curl "${STAGING_API_URL}/v1/conversations/6066239b7fd0a60dab0e3d53" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \ | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2610    0  2610    0     0   7190      0 --:--:-- --:--:-- --:--:--  7190
curl: (3) URL using bad/illegal format or missing URL
{
  "data": {
    "type": "conversation",
    "id": "6066239b7fd0a60dab0e3d53",
    "attributes": {
      "name": "Question",
      "preview": "Hello, I have a question. Can you help me?",
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
      "createdAt": "2021-04-01T19:48:43.860Z",
      "updatedAt": "2021-04-01T19:48:43.941Z",
      "modifiedAt": "2021-04-01T19:48:43.941Z",
      "lastActivityAt": "2021-04-01T19:48:43.851Z",
      "spam": false,
      "importedAt": null,
      "tags": [],
      "suggestedTags": [],
      "predictions": [],
      "sentiment": {},
      "suggestedShortcuts": [],
      "firstMessageIn": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z",
        "directionType": "initial-in",
        "channel": "email",
        "meta": null
      },
      "firstMessageOut": {
        "createdByTeams": []
      },
      "lastMessageIn": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z",
        "meta": null
      },
      "lastMessageOut": {},
      "lastMessageAt": "2021-04-01T19:48:43.851Z",
      "lastMessageUnrespondedTo": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z"
      },
      "lastMessageUnrespondedToSinceLastDone": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z"
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
      "rev": 2,
      "priority": 3,
      "externalQueue": "amazon-connect",
      "totalSnooze": {},
      "totalDone": {},
      "totalOpen": {},
      "roleGroupVersions": [],
      "accessOverride": [],
      "assistant": {
        "assistantId": []
      }
    },
    "relationships": {
      "messages": {
        "links": {
          "self": "/v1/conversations/6066239b7fd0a60dab0e3d53/messages"
        }
      },
      "createdBy": {
        "links": {
          "self": "/v1/users/5ff4ddab5c152aa5a72caafd"
        },
        "data": {
          "type": "user",
          "id": "5ff4ddab5c152aa5a72caafd"
        }
      },
      "modifiedBy": {
        "links": {
          "self": "/v1/users/5ff4ddab5c152aa5a72caafd"
        },
        "data": {
          "type": "user",
          "id": "5ff4ddab5c152aa5a72caafd"
        }
      },
      "org": {
        "links": {
          "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
        },
        "data": {
          "type": "org",
          "id": "5ff4bc2b5c152a0e272c923a"
        }
      },
      "customer": {
        "data": {
          "type": "customer",
          "id": "5ff4bc441235167ec0261101"
        },
        "links": {
          "self": "/v1/customers/5ff4bc441235167ec0261101"
        }
      }
    },
    "links": {
      "self": "/v1/conversations/6066239b7fd0a60dab0e3d53"
    }
  }
}
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % curl "${STAGING_API_URL}/v1/routing/work-items/6066239d2e9ad3001a81baef" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \ | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1642    0  1642    0     0   4461      0 --:--:-- --:--:-- --:--:--  4449
curl: (3) URL using bad/illegal format or missing URL
{
  "data": {
    "id": "6066239d2e9ad3001a81baef",
    "type": "work_item",
    "attributes": {
      "resourceType": "conversation",
      "status": "assigned",
      "paused": false,
      "channel": "email",
      "firstEnterQueueAt": "2021-04-01T19:48:45.069Z",
      "queuedCount": 1,
      "priority": 1,
      "itemSize": 1,
      "ivr": {},
      "handle": {},
      "wrapUp": {},
      "abandoned": {},
      "updatedAt": "2021-04-01T19:59:24.102Z",
      "modifiedAt": "2021-04-01T19:48:45.077Z",
      "createdAt": "2021-04-01T19:48:45.069Z",
      "resourceRev": 2,
      "resourceCreatedAt": "2021-04-01T19:48:43.860Z",
      "resourceDirection": "in",
      "resourceFirstAssignTime": 640242,
      "rev": 2,
      "workItemNumber": 1,
      "firstRoutedResponse": {},
      "lastRevision": {
        "externalQueue": "amazon-connect",
        "enteredQueueAt": "2021-04-01T19:48:45.069Z",
        "queueTime": 639033,
        "queueBusinessTime": 639033,
        "acceptedAt": "2021-04-01T19:59:24.102Z"
      }
    },
    "relationships": {
      "org": {
        "data": {
          "type": "org",
          "id": "5ff4bc2b5c152a0e272c923a"
        },
        "links": {
          "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
        }
      },
      "team": {
        "data": {
          "type": "team",
          "id": "6012d5695881a2250a06903a"
        },
        "links": {
          "self": "/v1/teams/6012d5695881a2250a06903a"
        }
      },
      "resource": {
        "data": {
          "type": "conversation",
          "id": "6066239b7fd0a60dab0e3d53"
        }
      },
      "workSession": {
        "data": {
          "type": "work_session",
          "id": "606626127da161001a391d61"
        },
        "links": {
          "self": "/v1/routing/work-session/606626127da161001a391d61"
        }
      },
      "lastRevision": {
        "data": {
          "type": "work_item_revision",
          "id": "6066239d2e9ad3001a81baf0"
        }
      },
      "assignedTo": {
        "data": {
          "type": "user",
          "id": "5ff4bc4212351668002610fd"
        },
        "links": {
          "self": "/v1/users/5ff4bc4212351668002610fd"
        }
      },
      "acceptedBy": {
        "data": {
          "type": "user",
          "id": "5ff4bc4212351668002610fd"
        },
        "links": {
          "self": "/v1/users/5ff4bc4212351668002610fd"
        }
      }
    },
    "links": {
      "self": "/v1/routing/work-item/6066239d2e9ad3001a81baef"
    }
  }
}
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % // After it has been unnasigned
zsh: permission denied: //
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration %                                
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % curl "${STAGING_API_URL}/v1/conversations/6066239b7fd0a60dab0e3d53" \     
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \ | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2720    0  2720    0     0   9220      0 --:--:-- --:--:-- --:--:--  9189
curl: (3) URL using bad/illegal format or missing URL
{
  "data": {
    "type": "conversation",
    "id": "6066239b7fd0a60dab0e3d53",
    "attributes": {
      "name": "Question",
      "preview": "Hello, I have a question. Can you help me?",
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
      "createdAt": "2021-04-01T19:48:43.860Z",
      "updatedAt": "2021-04-01T20:01:06.300Z",
      "modifiedAt": "2021-04-01T19:59:23.772Z",
      "lastActivityAt": "2021-04-01T19:48:43.851Z",
      "spam": false,
      "ended": false,
      "importedAt": null,
      "tags": [],
      "suggestedTags": [],
      "predictions": [],
      "sentiment": {},
      "suggestedShortcuts": [],
      "firstMessageIn": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z",
        "directionType": "initial-in",
        "channel": "email",
        "meta": null
      },
      "firstMessageOut": {
        "createdByTeams": []
      },
      "lastMessageIn": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z",
        "meta": null
      },
      "lastMessageOut": {},
      "lastMessageAt": "2021-04-01T19:48:43.851Z",
      "lastMessageUnrespondedTo": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z"
      },
      "lastMessageUnrespondedToSinceLastDone": {
        "id": "6066239bab831858a41b2ce4",
        "sentAt": "2021-04-01T19:48:43.851Z",
        "createdAt": "2021-04-01T19:48:43.941Z"
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
      "roleGroupVersions": [],
      "accessOverride": [],
      "assistant": {
        "assistantId": []
      }
    },
    "relationships": {
      "messages": {
        "links": {
          "self": "/v1/conversations/6066239b7fd0a60dab0e3d53/messages"
        }
      },
      "createdBy": {
        "links": {
          "self": "/v1/users/5ff4ddab5c152aa5a72caafd"
        },
        "data": {
          "type": "user",
          "id": "5ff4ddab5c152aa5a72caafd"
        }
      },
      "modifiedBy": {
        "links": {
          "self": "/v1/users/5ff4bc4212351668002610fd"
        },
        "data": {
          "type": "user",
          "id": "5ff4bc4212351668002610fd"
        }
      },
      "org": {
        "links": {
          "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
        },
        "data": {
          "type": "org",
          "id": "5ff4bc2b5c152a0e272c923a"
        }
      },
      "customer": {
        "data": {
          "type": "customer",
          "id": "5ff4bc441235167ec0261101"
        },
        "links": {
          "self": "/v1/customers/5ff4bc441235167ec0261101"
        }
      },
      "queue": {
        "data": {
          "type": "queue",
          "id": "600f22c52d55af001a76963c"
        },
        "links": {
          "self": "/v1/routing/queues/600f22c52d55af001a76963c"
        }
      }
    },
    "links": {
      "self": "/v1/conversations/6066239b7fd0a60dab0e3d53"
    }
  }
}
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % 
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro migration % curl "${STAGING_API_URL}/v1/routing/work-items/6066239d2e9ad3001a81baef" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \ | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1430    0  1430    0     0   6137      0 --:--:-- --:--:-- --:--:--  6137\
curl: (3) URL using bad/illegal format or missing URL
{
  "data": {
    "id": "6066239d2e9ad3001a81baef",
    "type": "work_item",
    "attributes": {
      "resourceType": "conversation",
      "status": "queued",
      "paused": false,
      "channel": "email",
      "firstEnterQueueAt": "2021-04-01T19:48:45.069Z",
      "queuedCount": 3,
      "priority": 1,
      "itemSize": 1,
      "ivr": {},
      "handle": {},
      "wrapUp": {},
      "abandoned": {},
      "updatedAt": "2021-04-01T20:01:05.845Z",
      "modifiedAt": "2021-04-01T20:01:05.069Z",
      "createdAt": "2021-04-01T19:48:45.069Z",
      "resourceRev": 2,
      "resourceCreatedAt": "2021-04-01T19:48:43.860Z",
      "resourceDirection": "in",
      "resourceFirstQueueTime": 741985,
      "resourceFirstAssignTime": 640242,
      "rev": 4,
      "workItemNumber": 1,
      "firstRoutedResponse": {},
      "lastRevision": {
        "enteredQueueAt": "2021-04-01T20:01:05.845Z"
      }
    },
    "relationships": {
      "org": {
        "data": {
          "type": "org",
          "id": "5ff4bc2b5c152a0e272c923a"
        },
        "links": {
          "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
        }
      },
      "modifiedBy": {
        "data": {
          "type": "user",
          "id": "5ff4bc4212351668002610fd"
        },
        "links": {
          "self": "/v1/users/5ff4bc4212351668002610fd"
        }
      },
      "resource": {
        "data": {
          "type": "conversation",
          "id": "6066239b7fd0a60dab0e3d53"
        }
      },
      "lastRevision": {
        "data": {
          "type": "work_item_revision",
          "id": "606626817da161001a391d81"
        }
      },
      "queue": {
        "data": {
          "type": "queue",
          "id": "600f22c52d55af001a76963c"
        },
        "links": {
          "self": "/v1/routing/queues/600f22c52d55af001a76963c"
        }
      },
      "rule": {
        "data": {
          "type": "queue-rule",
          "id": "600f22d40ad8250019b1ebd5"
        },
        "links": {
          "self": "/v1/routing/queue-rules/600f22d40ad8250019b1ebd5"
        }
      }
    },
    "links": {
      "self": "/v1/routing/work-item/6066239d2e9ad3001a81baef"
    }
  }
}
```