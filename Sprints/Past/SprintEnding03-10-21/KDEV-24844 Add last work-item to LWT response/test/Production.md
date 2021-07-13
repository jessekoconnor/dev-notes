# Production Env Vars
```
## Queues
export queue1=601d589643f25e0013629719   # DefaultQueue
export queue2=601d5906e82a8600123ddb59   # Chat
export queue3=601d58f73f051d0012c08687   # Email
export queueDNE=6012d4082d55af001a77ebdf # Queue that doesnt exist
```

# Analytics Api curl
```
curl --location --request POST "${PRODUCTION_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-03-09T05:00:00.000Z",
    "to": "2021-03-10T05:00:00.000Z",
    "time_zone": "America/New_York"
  },
  "query": { "queueIds": ["601d58f73f051d0012c08687"] }
}' | jq
```

Res:
```
{
  "data": {
    "type": "query",
    "results": {
      "latestWaitTime": {
        "data": 3094,
        "601d58f73f051d0012c08687": {
          "data": 3094,
          "workItem": "60479e4fbc43ee001a3b3fe9"
        }
      }
    },
    "relationships": {
      "org": {
        "links": {
          "self": "/v1/orgs/601d58903ce708e01fc6fac6"
        },
        "data": {
          "type": "org",
          "id": "601d58903ce708e01fc6fac6"
        }
      }
    },
    "meta": {
      "query": {
        "name": "work_items_latest_wait_time",
        "range": {
          "from": "2021-03-09T05:00:00.000Z",
          "to": "2021-03-10T05:00:00.000Z",
          "time_zone": "America/New_York"
        },
        "query": {
          "queueIds": [
            "601d58f73f051d0012c08687"
          ]
        },
        "timeZone": "+00:00",
        "interval": "day"
      },
      "pageSize": 100,
      "page": 1
    }
  }
}
```

# Chat Api curl
```
# Get LWT from all queues via Chat Api
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/${queue1},${queue2},${queue3}" \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
| jq
```

Response:
```
{
  "data": [
    {
      "type": "session_queue",
      "id": "601d589643f25e0013629719",
      "attributes": {
        "name": "Default Queue",
        "latestWaitTimeSeconds": null
      },
      "relationships": {
        "org": {
          "data": {
            "id": "601d58903ce708e01fc6fac6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/601d58903ce708e01fc6fac6"
          }
        },
        "queue": {
          "data": {
            "id": "601d589643f25e0013629719",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/601d589643f25e0013629719"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "601d5906e82a8600123ddb59",
      "attributes": {
        "name": "Chat Queue",
        "latestWaitTimeSeconds": null
      },
      "relationships": {
        "org": {
          "data": {
            "id": "601d58903ce708e01fc6fac6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/601d58903ce708e01fc6fac6"
          }
        },
        "queue": {
          "data": {
            "id": "601d5906e82a8600123ddb59",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/601d5906e82a8600123ddb59"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "601d58f73f051d0012c08687",
      "attributes": {
        "name": "Email Queue",
        "latestWaitTimeSeconds": 4
      },
      "relationships": {
        "org": {
          "data": {
            "id": "601d58903ce708e01fc6fac6",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/601d58903ce708e01fc6fac6"
          }
        },
        "queue": {
          "data": {
            "id": "601d58f73f051d0012c08687",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/601d58f73f051d0012c08687"
          }
        },
        "latestWaitTimeWorkItem": {
          "data": {
            "id": "60479e4fbc43ee001a3b3fe9",
            "type": "work-item"
          },
          "links": {
            "self": "/v1/routing/work-items/60479e4fbc43ee001a3b3fe9"
          }
        }
      }
    }
  ]
}
```

# Test that it is the latest work-item

1) Queue a new work-item (Send email, create chat etc)
2) Allow work-item to get assigned to your session
3) Use devtools to inspect your current session and Note the work-item id
4) Hit the queue metrics endpoint for that queue and verify that it is indeed the latest work item

New WorkItemId for Email Queue: 60479e4fbc43ee001a3b3fe9
Matching from curl above: YES

# Screenshot of reports page still working
https://share.getcloudapp.com/mXu1X7PA