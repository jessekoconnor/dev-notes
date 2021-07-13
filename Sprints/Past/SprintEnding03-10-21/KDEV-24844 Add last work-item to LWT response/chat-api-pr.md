## Overview

Non-breaking changes: 
* Include the work-item id as an attribute on the session object


[KDEV-24844]

### Response currently:
```
{
  "data": [
    {
      "type": "session_queue",
      "id": "604140404df46d0014f7f39d",
      "attributes": {
        "name": "Default Queue",
        "latestWaitTimeSeconds": 33
      },
      "relationships": {
        "org": {
          "data": {
            "id": "6041403c1eeac59bc5ac8075",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
          }
        },
        "queue": {
          "data": {
            "id": "604140404df46d0014f7f39d",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/604140404df46d0014f7f39d"
          }
        }
      }
    },
    ...
  ]
}
```

### Response w/ this change:
```
{
  "data": [
    {
      "type": "session_queue",
      "id": "604140404df46d0014f7f39d",
      "attributes": {
        "name": "Default Queue",
        "latestWaitTimeSeconds": 33
      },
      "relationships": {
        "org": {
          "data": {
            "id": "6041403c1eeac59bc5ac8075",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
          }
        },
        "queue": {
          "data": {
            "id": "604140404df46d0014f7f39d",
            "type": "queue"
          },
          "links": {
            "self": "/v1/queues/604140404df46d0014f7f39d"
          }
        },
        "latestWaitTimeWorkItem": {
          "data": {
            "id": "60426a304df46d0014f803b0",
            "type": "work-item"
          },
          "links": {
            "self": "/v1/routing/work-items/60426a304df46d0014f803b0"
          }
        }
      }
    },
    ...
  ]
}
```

## Verification Plan (required)

### Verify that latest pending item returned in this response 
1) Send a work-item in to a worksession, and look up its work-id in the dev console in your browser
2) Dont send any more work-items through that queue
3) Ping the endpoint below and verify that the correct work-item id is returned

### Local endpoint usage ex
```
# LOCAL QueueIds:
export queue1=604140404df46d0014f7f39d   # DefaultQueue
export queue2=604142314df46d0014f7f3cb   # Chat
export queue3=604142274df46d0014f7f3c7   # Email
export queueDNE=6012d4082d55af001a77ebdf # Queue that doesnt exist

# Get LWT from all queues via Chat Api
curl "${LOCAL_API_URL}/v1/chat/queues/metrics/${queue1},${queue2},${queue3}" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
| jq
```

@kustomer/backend-devs