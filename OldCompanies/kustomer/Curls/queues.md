# Queues

## Creat a queue

```bash
curl -X POST \
  --url "${LOCAL_API_URL}/v1/routing/queues" \
  -H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
  -H 'Content-Type: application/json'\
  --data-raw '{
    "name": "fdsa",
    "description": "",
    "itemSize": 1,
    "priority": 1,
    "displayName": "fdsa",
    "restrictTransfersByUsers": false
  }' | jq
```

## Get queue metrics

Local:

* Email : 604142274df46d0014f7f3c7
* Chat: 604142314df46d0014f7f3cb

QA:

* Default: 61043cceeae27f0013e0ae28
* Two: 61044bfeeae27f0013e0b166

Staging:

* Default: 5ff4bc444315ea0013b81862
* Email: 600f22c52d55af001a76963c
* Chat: 6012d4082d55af001a77ebdb

Local:

```bash
curl "${LOCAL_API_URL}/v1/chat/queues/metrics/604142274df46d0014f7f3c7" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" | jq
```

QA:

```bash
curl "${QA_API_URL}/v1/chat/queues/metrics/61043cceeae27f0013e0ae28" \
-H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" | jq
```

```bash
curl "${QA_API_URL}/v1/chat/queues/metrics/61043cceeae27f0013e0ae28,61044bfeeae27f0013e0b166" \
-H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" | jq
```

Staging:

```bash
curl "${STAGING_API_URL}/v1/chat/queues/metrics/600f22c52d55af001a76963c,5ff4bc444315ea0013b81862,6012d4082d55af001a77ebdb" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" | jq
```

Prod:

* Default: 601d589643f25e0013629719
* Email: 601d58f73f051d0012c08687
* Chat: 601d5906e82a8600123ddb59
* Help Me: 601d59ab2a2de00012959aa8

```bash
curl "${PRODUCTION_API_URL}/v1/chat/queues/metrics/601d589643f25e0013629719,601d58f73f051d0012c08687,601d5906e82a8600123ddb59,601d59ab2a2de00012959aa8" \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" | jq
```

Sample response:

```json
{
  "data": [
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
            "id": "6102b35b88bc0e0012438b26",
            "type": "work-item"
          },
          "links": {
            "self": "/v1/routing/work-items/6102b35b88bc0e0012438b26"
          }
        }
      }
    }
  ]
}
```
