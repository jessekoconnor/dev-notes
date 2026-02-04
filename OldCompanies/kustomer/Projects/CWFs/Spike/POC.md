# DEMO

workflow: https://github.com/kustomer/workflow/compare/poc/jo-KDEV-27192-callable-workflows?expand=1
workflow-api: https://github.com/kustomer/workflow-api/compare/poc/jo-KDEV-27192-callable-workflows?expand=1

## Understanding end states of a WF and extracting content from a finished WF

1) Sucess case (output reached)
  * workflow just creates a note and responds with result of that note creation
2) Output not reached case
  * this workflow goes down a branch w/o an output step
3) User error case
  * this workflow send an email, but its configured incorrectly (i.e. 400 err)
4) System error case
  * I will introduce a bug into the running code (i.e. 500)

### Lets try a better way to pass webhook
```
curl -X POST "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590/call" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "inputs": {
        "conversationId": "6070acf6c4f8240450a99d3a",
        "webhookUrl": "https://webhook.site/403dbea8-b338-4ead-891b-21b905c44a08"
   },
   "responseMeta": {
      "webhook": "******** YEEEEEE BOIIIII ********"
    }
}' | jq

curl -X POST "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590/call" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "inputs": {
        "conversationId": "6070acf6c4f8240450a99d3a",
        "webhookUrl": "https://webhook.site/403dbea8-b338-4ead-891b-21b905c44a08"
   },
   "responseMeta": {
      "webhook": "******** YEEEEEE BOIIIII ********"
   }
}' | jq
```

### Call Simplest Workflow CWF
```
curl -X POST "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590/call" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "inputs": {
        "conversationId": "6070acf6c4f8240450a99d3a",
        "webhookUrl": "https://webhook.site/403dbea8-b338-4ead-891b-21b905c44a08"
   }
}' | jq
```

### Call output not reached CWF
```
curl -X POST "${LOCAL_API_URL}/v1/workflows/607f2f6d2af741008dc2081e/call" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "inputs": {
        "conversationId": "6070acf6c4f8240450a99d3a",
        "webhookUrl": "https://webhook.site/403dbea8-b338-4ead-891b-21b905c44a08"
   }
}' | jq
```

### Call Simplest Failure Workflow CWF (bad email)
```
curl -X POST "${LOCAL_API_URL}/v1/workflows/607f26102af741008dc205e0/call" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "inputs": {
        "conversationId": "6070acf6c4f8240450a99d3a",
        "webhookUrl": "https://webhook.site/403dbea8-b338-4ead-891b-21b905c44a08"
   }
}' | jq
```

# Call a non-scheduled workflow
```
curl -X POST "${LOCAL_API_URL}/v1/workflows/6078ac154fd0270012ff31b3/call" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "inputs": {
        "conversationId": "6070acf6c4f8240450a99d3a",
        "webhookUrl": "https://webhook.site/403dbea8-b338-4ead-891b-21b905c44a08"
   }
}' | jq
```

# Contexts

## Example workflow.call event
```
# Local scheduled workflow id: 6070aa8cd7b765001400f590
{
   "id": "6070acf7a2ce8434f94d3f05",
   "name": "kustomer.workflow.6070aa8cd7b765001400f590.call",
   "org": "6041403c1eeac59bc5ac8075",
   "partition": "6041403c1eeac59bc5ac8075",
   "data": {
     "attributes": {
       "inputs": {
         "conversationId": "6070acf6c4f8240450a99d3a"
       }
     },
     "relationships": {
       "workflow": {
         "data": {
           "type": "workflow",
           "id": "6070aa8cd7b765001400f590"
         }
       }
     }
   },
   "rawMessage": {
     "MessageId": "99ee7453-2928-4f69-856c-545e505c668d",
     "ReceiptHandle": "AQEBvXbuLgbJH2Esq4Rs2MNx9U3prpgxb/4V98lCqkM8tuB9PbqKNy5lx9P3Jx5nm/2CjmQlvUhGinDJWBK8BeF7QLi5sHfi7RZ0aCEvwNUeyp2V5v6k2lQFHfmwSAZWRrRUps24LA9JtXV43o1xgb7L9zzkB/HB/0M/J4E4/v0e6FMlY2dxOkSEf/2S3X+wLDpc7GlvU1uVmO+yvJcrDdJcUHKHUfm2XWI+RRPxpu0sQdAdD5JcB3TzYtQZvjwcARP5hPyWcqdcbZPqMlKvByNRLo1TROy9McptN9dPKGzKIrnXmCI6NcbPmdVtWOQKWQ1hmWQ3Ro4yXZrAjVUe+zn1J1nNo9qqlRlUXdyQ6qJ7v3qrOfcL2VwX4A8G0ZHgmAXK2J9V/s+xk/GB+YgEFrftUw==",
    "MD5OfBody": "eeaa6ab373a6f907e8b3bdcad55fb6c8",
    "Body": "{\"id\":\"6070ad334ea7e0368a309ada\",\"name\":\"kustomer.workflow.6070aa8cd7b765001400f590.call\",\"partition\":\"6041403c1eeac59bc5ac8075\",\"body\":{\"id\":\"6070acf7a2ce8434f94d3f05\",\"name\":\"kustomer.workflow.6070aa8cd7b765001400f590.call\",\"org\":\"6041403c1eeac59bc5ac8075\",\"partition\":\"6041403c1eeac59bc5ac8075\",\"data\":{\"attributes\":{\"inputs\":{\"conversationId\":\"6070acf6c4f8240450a99d3a\"}},\"relationships\":{\"workflow\":{\"data\":{\"type\":\"workflow\",\"id\":\"6070aa8cd7b765001400f590\"}}}}},\"publishedAt\":\"2021-04-09T19:38:27.637Z\",\"version\":3}",
    "Attributes": {
      "ApproximateReceiveCount": "1"
    }
  }
}

# Local scheduled workflow id: 6070aa8cd7b765001400f590
{
   "id": "6070acf7a2ce8434f94d3f05",
   "name": "kustomer.workflow.6070aa8cd7b765001400f590.call",
   "org": "6041403c1eeac59bc5ac8075",
   "partition": "6041403c1eeac59bc5ac8075",
   "data": {
     "attributes": {
       "inputs": {
         "conversationId": "6070acf6c4f8240450a99d3a"
       }
     },
     "relationships": {
       "workflow": {
         "data": {
           "type": "workflow",
           "id": "6070aa8cd7b765001400f590"
         }
       }
     }
   },
   "rawMessage": {...}
}
```

## Ex context at end or worfklow
```
"initialize": {
    "appsMap": {
      "kustomer-^1.5.3": {
        "jsonAPI": {
          "type": "installed_app",
          "id": "kustomer-1.5.3",
          "attributes": {
            "name": "kustomer",
            "current": "1.5.3",
            "settingsPageConfig": {},
            "meta": {},
            "widgets": [],
            "dataSubscriptions": [],
            "version": "1.5.3",
            "status": "installed",
            "statusAt": "2021-03-04T20:17:08.792Z",
            "actions": {
              "kustomer.command.run-by-name": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.857Z",
                "id": "60414041464731efa5fc95fe"
              },
              "kustomer.company.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.878Z",
                "id": "60414041464731aad9fc95ff"
              },
              "kustomer.company.find": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.878Z",
                "id": "60414041464731cd38fc9600"
              },
              "kustomer.company.find-by-external-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.881Z",
                "id": "60414041464731bc94fc9601"
              },
              "kustomer.conversation.find-body": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.897Z",
                "id": "604140414647317f6ffc9602"
              },
              "kustomer.conversation.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.964Z",
                "id": "604140424647312c92fc9626"
              },
              "kustomer.conversation.assign-team": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.965Z",
                "id": "6041404246473185defc962b"
              },
              "kustomer.customer.merge": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.966Z",
                "id": "604140424647319adbfc9630"
              },
              "kustomer.customer.find-by-facebook-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.977Z",
                "id": "60414042464731b884fc9635"
              },
              "kustomer.customer.find-by-smooch-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.977Z",
                "id": "6041404246473113a3fc963a"
              },
              "kustomer.kobject.create-with-customer": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.980Z",
                "id": "604140424647318562fc963f"
              },
              "kustomer.kobject.find-by-external-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.981Z",
                "id": "604140424647318596fc9644"
              },
              "kustomer.message.find-last": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.989Z",
                "id": "604140424647312a90fc9649"
              },
              "kustomer.note.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.989Z",
                "id": "604140424647318f4ffc964e"
              },
              "kustomer.user.find-by-email": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.990Z",
                "id": "60414042464731600bfc9623"
              },
              "kustomer.conversation.find-by-external-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.009Z",
                "id": "60414042464731f767fc9628"
              },
              "kustomer.conversation.remove-tags": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.018Z",
                "id": "60414042464731b1d8fc962d"
              },
              "kustomer.customer.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.018Z",
                "id": "604140424647317b3cfc9632"
              },
              "kustomer.customer.find-by-twitter-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.020Z",
                "id": "6041404246473128c4fc9637"
              },
              "kustomer.event.publish": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.024Z",
                "id": "604140424647316735fc963c"
              },
              "kustomer.kobject.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.024Z",
                "id": "60414042464731c137fc9641"
              },
              "kustomer.message.find-by-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.033Z",
                "id": "6041404246473108aefc9646"
              },
              "kustomer.note.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.054Z",
                "id": "60414042464731c378fc964b"
              },
              "kustomer.rest-api.json": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.054Z",
                "id": "6041404346473158effc9650"
              },
              "kustomer.user.find-by-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.065Z",
                "id": "6041404246473123f9fc9624"
              },
              "kustomer.conversation.find-by-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.078Z",
                "id": "604140424647313daafc9629"
              },
              "kustomer.customer.append-email": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.078Z",
                "id": "60414042464731baadfc962e"
              },
              "kustomer.customer.find-by-external-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.078Z",
                "id": "60414042464731b3fefc9633"
              },
              "kustomer.customer.find-by-phone": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.093Z",
                "id": "6041404246473158bafc9638"
              },
              "kustomer.klass.find-by-klassname": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.093Z",
                "id": "604140424647310dd6fc963d"
              },
              "kustomer.kobject.delete": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.102Z",
                "id": "604140424647316852fc9642"
              },
              "kustomer.message.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.102Z",
                "id": "60414042464731e36cfc9647"
              },
              "kustomer.note.find-by-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.102Z",
                "id": "604140424647317faafc964c"
              },
              "kustomer.regex-match.generic": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.110Z",
                "id": "60414043464731557afc9651"
              },
              "kustomer.company.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.110Z",
                "id": "604140424647314273fc9625"
              },
              "kustomer.conversation.assign-user": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.129Z",
                "id": "604140424647315e94fc962a"
              },
              "kustomer.customer.append-phone": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.146Z",
                "id": "604140424647311ec2fc962f"
              },
              "kustomer.customer.find-by-email": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.146Z",
                "id": "604140424647314e9cfc9634"
              },
              "kustomer.customer.find-by-whatsapp": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.146Z",
                "id": "6041404246473173f0fc9639"
              },
              "kustomer.klass.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.161Z",
                "id": "60414042464731d2ebfc963e"
              },
              "kustomer.kobject.find": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.173Z",
                "id": "604140424647317e97fc9643"
              },
              "kustomer.message.find-by-external": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.173Z",
                "id": "60414042464731a0f8fc9648"
              },
              "kustomer.note.find-by-external": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.183Z",
                "id": "604140424647312cc9fc964d"
              },
              "kustomer.rest-api.generic": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.193Z",
                "id": "60414043464731b698fc9652"
              },
              "kustomer.conversation.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.193Z",
                "id": "604140424647310085fc9627"
              },
              "kustomer.conversation.append-tags": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.213Z",
                "id": "604140424647317451fc962c"
              },
              "kustomer.customer.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.213Z",
                "id": "60414042464731536cfc9631"
              },
              "kustomer.customer.find-by-instagram-id": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.232Z",
                "id": "60414042464731a234fc9636"
              },
              "kustomer.customer.find": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.232Z",
                "id": "604140424647316116fc963b"
              },
              "kustomer.kobject.add-relationship": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.241Z",
                "id": "60414042464731b7c2fc9640"
              },
              "kustomer.kobject.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.241Z",
                "id": "60414042464731b6b7fc9645"
              },
              "kustomer.message.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.247Z",
                "id": "604140424647312994fc964a"
              },
              "kustomer.org.current": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.255Z",
                "id": "60414043464731ea10fc964f"
              }
            },
            "commands": {},
            "cards": {
              "kustomer.customer.sentiment": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:04.549Z",
                "id": "604140405fa27e29e123de6c"
              },
              "kustomer.conversation.sentiment": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:04.550Z",
                "id": "604140405fa27ed1fa23de6d"
              }
            },
            "events": {},
            "hooks": {},
            "outboundWebhooks": {},
            "klasses": {},
            "kviews": {},
            "settings": {},
            "triggers": {
              "kustomer.conversation.sla.breached": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.102Z",
                "id": "60414041464731e1d7fc95fb"
              },
              "kustomer.company.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.109Z",
                "id": "60414040464731a8defc95b9"
              },
              "kustomer.draft.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.109Z",
                "id": "604140404647312dfefc95c3"
              },
              "kustomer.company.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.119Z",
                "id": "604140404647317df5fc95bb"
              },
              "kustomer.message.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.119Z",
                "id": "60414040464731104dfc95c7"
              },
              "kustomer.conversation.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.119Z",
                "id": "60414040464731d4affc95bd"
              },
              "kustomer.note.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.124Z",
                "id": "60414040464731ec40fc95c9"
              },
              "kustomer.conversation.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.137Z",
                "id": "6041404046473126fafc95bf"
              },
              "kustomer.message.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.137Z",
                "id": "604140404647318ba6fc95cb"
              },
              "kustomer.customer.create": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.153Z",
                "id": "6041404046473165a7fc95c1"
              },
              "kustomer.customer.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.153Z",
                "id": "6041404046473128d2fc95c5"
              },
              "kustomer.note.update": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:07.896Z",
                "id": "604140414647316654fc95fd"
              }
            },
            "workflows": {
              "kustomer-assign-user-on-message-send": {
                "status": "success",
                "statusAt": "2021-03-04T20:17:08.775Z",
                "id": "604140444647313468fc9666"
              }
            },
            "createdAt": "2021-03-04T20:17:02.182Z",
            "updatedAt": "2021-03-04T20:17:08.792Z",
            "modifiedAt": "2021-03-04T20:17:02.182Z"
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
            "modifiedBy": {
              "data": {
                "type": "user"
              },
              "links": {
                "self": "/v1/users/undefined"
              }
            }
          },
          "links": {
            "self": "/v1/apps/kustomer-1.5.3"
          }
        }
      }
    }
  },
  "traverse": {
    "order": [
      "1",
      "zWxHwV21d",
      "_S2DvZlsy"
    ],
    "steps": {
      "1": {
        "conversationId": "6070acf6c4f8240450a99d3a",

      },
      "zWxHwV21d": {
        "id": "607ee9ac8bf267da8efad2bf",
        "body": "New Note from scheduled workflow!!!",
        "createdAt": "2021-04-20T14:48:12.787Z",
        "updatedAt": "2021-04-20T14:48:12.798Z",
        "customer": "604147361eeac524c3ac8198",
        "conversation": "6070acf6c4f8240450a99d3a",
        "userMentions": []
      },
      "_S2DvZlsy": {
        "id": "607ee9ad8bf267c35dfad2c8",
        "body": "Second Note from scheduled workflow!!!",
        "createdAt": "2021-04-20T14:48:13.125Z",
        "updatedAt": "2021-04-20T14:48:13.135Z",
        "customer": "604147361eeac524c3ac8198",
        "conversation": "6070acf6c4f8240450a99d3a",
        "userMentions": []
      }
    },
    "stepsInfo": {
      "1": {
        "createdAt": "2021-04-20T14:48:12.747Z"
      },
      "zWxHwV21d": {
        "name": "kustomer.note.create",
        "createdAt": "2021-04-20T14:48:13.098Z",
        "app": "kustomer",
        "type": "workflow_action",
        "version": "1.5.3"
      },
      "_S2DvZlsy": {
        "name": "kustomer.note.create",
        "createdAt": "2021-04-20T14:48:13.342Z",
        "app": "kustomer",
        "type": "workflow_action",
        "version": "1.5.3"
      }
    }
  }
}
```

## Ex context in a workflow step
```
{
  "input": {
    "orgId": "6041403c1eeac59bc5ac8075",
    "uri": "https://sobjects:8443/v1/conversations/6070acf6c4f8240450a99d3a/notes",
    "method": "POST",
    "data": {
      "body": "New Note from scheduled workflow!!!"
    },
    "_env": {
      "orgId": "6041403c1eeac59bc5ac8075",
      "workflowId": "6070aa8cd7b765001400f590",
      "appVersion": "kustomer-1.5.3"
    },
    "headers": {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiI2MDQxNDAzYzFlZWFjNTliYzVhYzgwNzUiLCJpZCI6ImludGVybmFsIiwiaWF0IjoxNjE4OTMwNzI3LCJhdWQiOiJ1cm46YXBpIiwiaXNzIjoidXJuOmFwaSJ9.m4c5l_Pa6XFuqkyubQRTO_5l-pHwcI34MsZK_-Yk75U",
      "x-kustomer-client": "workflow",
      "x-kustomer-version": "unknown",
      "x-kustomer-source-id": "6070aa8cd7b765001400f590",
      "x-kustomer-source-type": "workflow"
    },
    "timeout": 60000,
    "json": {
      "body": "New Note from scheduled workflow!!!"
    }
  },
  "run": {
    "response": {
      "statusCode": 201,
      "body": {
        "data": {
          "type": "note",
          "id": "607eec278bf26709bbfad355",
          "attributes": {
            "body": "New Note from scheduled workflow!!!",
            "createdAt": "2021-04-20T14:58:47.890Z",
            "updatedAt": "2021-04-20T14:58:47.897Z"
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
            "customer": {
              "links": {
                "self": "/v1/customers/604147361eeac524c3ac8198"
              },
              "data": {
                "type": "customer",
                "id": "604147361eeac524c3ac8198"
              }
            },
            "conversation": {
              "links": {
                "self": "/v1/conversations/6070acf6c4f8240450a99d3a"
              },
              "data": {
                "type": "conversation",
                "id": "6070acf6c4f8240450a99d3a"
              }
            }
          },
          "links": {
            "self": "/v1/notes/607eec278bf26709bbfad355"
          }
        }
      },
      "headers": {
        "x-powered-by": "Express",
        "vary": "X-HTTP-Method-Override",
        "x-ratelimit-object-limit": "120",
        "x-ratelimit-object-remaining": "115",
        "content-type": "application/json; charset=utf-8",
        "content-length": "653",
        "etag": "W/\"28d-8UBFOY0ukQjklBF4WTMUD0qiSsQ\"",
        "date": "Tue, 20 Apr 2021 14:58:48 GMT",
        "connection": "close"
      },
      "request": {
        "uri": {
          "protocol": "https:",
          "slashes": true,
          "auth": null,
          "host": "sobjects:8443",
          "port": "8443",
          "hostname": "sobjects",
          "hash": null,
          "search": null,
          "query": null,
          "pathname": "/v1/conversations/6070acf6c4f8240450a99d3a/notes",
          "path": "/v1/conversations/6070acf6c4f8240450a99d3a/notes",
          "href": "https://sobjects:8443/v1/conversations/6070acf6c4f8240450a99d3a/notes"
        },
        "method": "POST",
        "headers": {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiI2MDQxNDAzYzFlZWFjNTliYzVhYzgwNzUiLCJpZCI6ImludGVybmFsIiwiaWF0IjoxNjE4OTMwNzI3LCJhdWQiOiJ1cm46YXBpIiwiaXNzIjoidXJuOmFwaSJ9.m4c5l_Pa6XFuqkyubQRTO_5l-pHwcI34MsZK_-Yk75U",
          "x-kustomer-client": "workflow",
          "x-kustomer-version": "unknown",
          "x-kustomer-source-id": "6070aa8cd7b765001400f590",
          "x-kustomer-source-type": "workflow",
          "accept": "application/json",
          "content-type": "application/json",
          "content-length": 46,
          "x-datadog-trace-id": "8546821579783288106",
          "x-datadog-parent-id": "7992069873755649151",
          "x-datadog-sampled": "1",
          "x-datadog-sampling-priority": "1"
        }
      }
    },
    "body": {
      "data": {
        "type": "note",
        "id": "607eec278bf26709bbfad355",
        "attributes": {
          "body": "New Note from scheduled workflow!!!",
          "createdAt": "2021-04-20T14:58:47.890Z",
          "updatedAt": "2021-04-20T14:58:47.897Z"
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
          "customer": {
            "links": {
              "self": "/v1/customers/604147361eeac524c3ac8198"
            },
            "data": {
              "type": "customer",
              "id": "604147361eeac524c3ac8198"
            }
          },
          "conversation": {
            "links": {
              "self": "/v1/conversations/6070acf6c4f8240450a99d3a"
            },
            "data": {
              "type": "conversation",
              "id": "6070acf6c4f8240450a99d3a"
            }
          }
        },
        "links": {
          "self": "/v1/notes/607eec278bf26709bbfad355"
        }
      }
    }
  },
  "output": {
    "id": "607eec278bf26709bbfad355",
    "body": "New Note from scheduled workflow!!!",
    "createdAt": "2021-04-20T14:58:47.890Z",
    "updatedAt": "2021-04-20T14:58:47.897Z",
    "customer": "604147361eeac524c3ac8198",
    "conversation": "6070acf6c4f8240450a99d3a",
    "userMentions": []
  }
}
```


# Code Refs
 Workflow Process Runner RUN (oren)
    https://github.com/kustomer/workflow/blob/master/service/workflow_processor/workflow_process_runner.js#L377-L495

Workflow Error (matt):
    https://github.com/kustomer/workflow/blob/master/service/workflow_processor/index.js#L144

Outbound webhook example:
    https://github.com/kustomer/integration-tests/blob/4dddb26b74ec83cfe17ae94c3d78d73defe8e635/test/outbound_webhooks/invoke_outbound_webhooks.js#L0-L1
