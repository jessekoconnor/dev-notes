# Staging Env Vars
```
## Queues
export queue1=5ff4bc444315ea0013b81862   # DefaultQueue
export queue2=6012d4082d55af001a77ebdb   # Chat
export queue3=600f22c52d55af001a76963c   # Email
export queueDNE=6012d4082d55af001a77ebdf # Queue that doesnt exist
```

# Analytics Api curl
```
curl --location --request POST "${STAGING_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-03-09T05:00:00.000Z",
    "to": "2021-03-10T05:00:00.000Z",
    "time_zone": "America/New_York"
  },
  "query": { "queueIds": ["600f22c52d55af001a76963c"] }
}' | jq
```

Res:
```
{
  "data": {
    "type": "query",
    "results": {
      "latestWaitTime": {
        "data": 357,
        "600f22c52d55af001a76963c": {
          "data": 357,
          "workItem": "60479670bd0f200019687c58"
        }
      }
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
            "600f22c52d55af001a76963c"
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
curl "${STAGING_API_URL}/v1/chat/queues/metrics/${queue1},${queue2},${queue3}" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
| jq
```

Response:
```
{
  "data": [
    {
      "type": "session_queue",
      "id": "5ff4bc444315ea0013b81862",
      "attributes": {
        "name": "Default Queue",
        "latestWaitTimeSeconds": null
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4bc2b5c152a0e272c923a",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
          }
        },
        "queue": {
          "data": {
            "id": "5ff4bc444315ea0013b81862",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/5ff4bc444315ea0013b81862"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "6012d4082d55af001a77ebdb",
      "attributes": {
        "name": "Chat",
        "latestWaitTimeSeconds": null
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4bc2b5c152a0e272c923a",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
          }
        },
        "queue": {
          "data": {
            "id": "6012d4082d55af001a77ebdb",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/6012d4082d55af001a77ebdb"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "600f22c52d55af001a76963c",
      "attributes": {
        "name": "Email queue",
        "latestWaitTimeSeconds": 1
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5ff4bc2b5c152a0e272c923a",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5ff4bc2b5c152a0e272c923a"
          }
        },
        "queue": {
          "data": {
            "id": "600f22c52d55af001a76963c",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/600f22c52d55af001a76963c"
          }
        },
        "latestWaitTimeWorkItem": {
          "data": {
            "id": "60479670bd0f200019687c58",
            "type": "work-item"
          },
          "links": {
            "self": "/v1/routing/work-items/60479670bd0f200019687c58"
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

New WorkItemId: 60479670bd0f200019687c58
Matching from curl above: YES
