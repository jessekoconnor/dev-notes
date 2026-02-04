# Qa Env Vars
```
# Queues
export queue1=5fdd16ecc522cd0012519729   # DefaultQueue
export queue2=6011bde53536ac001347acdf   # Chat
export queue3=5fe0bd11c522cd0012525411   # Email
export queueDNE=6012d4082d55af001a77ebdf # Queue that doesnt exist
```

# Analytics Api curl
```
curl --location --request POST "${QA_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-03-09T05:00:00.000Z",
    "to": "2021-03-10T05:00:00.000Z",
    "time_zone": "America/New_York"
  },
  "query": { "queueIds": ["5fdd16ecc522cd0012519729"] }
}' | jq
```

Res:
```
{
  "data": {
    "type": "query",
    "results": {
      "latestWaitTime": {
        "data": 1834,
        "5fe0bd11c522cd0012525411": {
          "data": 1834,
          "workItem": "60478e18053b3e0019aa555a"
        }
      }
    },
    "relationships": {
      "org": {
        "links": {
          "self": "/v1/orgs/5fdd16ca28790ee680b2d4b7"
        },
        "data": {
          "type": "org",
          "id": "5fdd16ca28790ee680b2d4b7"
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
            "5fe0bd11c522cd0012525411"
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
curl "${QA_API_URL}/v1/chat/queues/metrics/${queue1},${queue2},${queue3}" \
-H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" \
| jq
```

Response:
```
{
  "data": [
    {
      "type": "session_queue",
      "id": "5fdd16ecc522cd0012519729",
      "attributes": {
        "name": "Default Queue",
        "latestWaitTimeSeconds": null
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5fdd16ca28790ee680b2d4b7",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5fdd16ca28790ee680b2d4b7"
          }
        },
        "queue": {
          "data": {
            "id": "5fdd16ecc522cd0012519729",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/5fdd16ecc522cd0012519729"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "6011bde53536ac001347acdf",
      "attributes": {
        "name": "Chat",
        "latestWaitTimeSeconds": null
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5fdd16ca28790ee680b2d4b7",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5fdd16ca28790ee680b2d4b7"
          }
        },
        "queue": {
          "data": {
            "id": "6011bde53536ac001347acdf",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/6011bde53536ac001347acdf"
          }
        }
      }
    },
    {
      "type": "session_queue",
      "id": "5fe0bd11c522cd0012525411",
      "attributes": {
        "name": "Email Returns",
        "latestWaitTimeSeconds": 2
      },
      "relationships": {
        "org": {
          "data": {
            "id": "5fdd16ca28790ee680b2d4b7",
            "type": "org"
          },
          "links": {
            "self": "/v1/orgs/5fdd16ca28790ee680b2d4b7"
          }
        },
        "queue": {
          "data": {
            "id": "5fe0bd11c522cd0012525411",
            "type": "queue"
          },
          "links": {
            "self": "/v1/routing/queues/5fe0bd11c522cd0012525411"
          }
        },
        "latestWaitTimeWorkItem": {
          "data": {
            "id": "60478e18053b3e0019aa555a",
            "type": "work-item"
          },
          "links": {
            "self": "/v1/routing/work-items/60478e18053b3e0019aa555a"
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

New WorkItemId: 60478e18053b3e0019aa555a
Matching from curl above: YES
