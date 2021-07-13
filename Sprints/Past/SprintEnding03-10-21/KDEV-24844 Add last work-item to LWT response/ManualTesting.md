
workItem last seen pending: 603d57d7c0afed05b6eeeec3
# Response currently:
```
{
  "data": {
    "type": "query",
    "results": {
      "latestWaitTime": {
        "data": 49586,
        "604142274df46d0014f7f3c7": {
          "data": 24955
        },
        "604140404df46d0014f7f39d": {
          "data": 58322
        },
        "604142314df46d0014f7f3cb": {
          "data": 49586
        }
      }
    },
    relationships: {...},
    meta: {...}
  }
}
```

# Response w/ this change:
```
{
  "data": {
    "type": "query",
    "results": {
      "latestWaitTime": {
        "data": 49586,
        "604142274df46d0014f7f3c7": {
          "data": 24955,
          "workItem": "60414c694df46d0014f7f684"
        },
        "604140404df46d0014f7f39d": {
          "data": 58322,
          "workItem": "60414c604df46d0014f7f677"
        },
        "604142314df46d0014f7f3cb": {
          "data": 49586,
          "workItem": "60414c7f4df46d0014f7f692"
        }
      }
    },
    relationships: {...},
    meta: {...}
  }
}
```
# Verification Plan

1) Ensure thet the queues reporting page is still reporting all metrics

# Manual testing
## Verify that endpint returns a workItem id associated with the latest wait time
1) Send email to email queue
2) Go online for the email team and recieve a work-item
3) Inspect your work-session, note the id of the recieved work-item
4) Curl endpoint for the email queue and verify the work-item id from above is returned

```
curl --location --request POST "${QA_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-03-04T05:00:00.000Z",
    "to": "2021-03-05T05:00:00.000Z",
    "time_zone": "America/New_York"
  },
  "query": { "queueIds": ["604140404df46d0014f7f39d", "604142314df46d0014f7f3cb", "604142274df46d0014f7f3c7"] }
}' | jq
```


# Local manual testing
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

# Get LWT for email queue via Analytics Api
# Expect two queues in response
curl --location --request POST "${LOCAL_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
--header "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "work_items_latest_wait_time",
  "range": {
    "from": "2021-03-04T05:00:00.000Z",
    "to": "2021-03-05T05:00:00.000Z",
    "time_zone": "America/New_York"
  },
  "query": { "queueIds": ["604140404df46d0014f7f39d", "604142314df46d0014f7f3cb", "604142274df46d0014f7f3c7"] }
}' | jq
```
//  "query": { "queueIds": ["601afb9576685102ae8e25c8", "601afc2576685102ae8e25e9", "601afc1576685102ae8e25e5"] }

# Real req
```
curl "${LOCAL_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
  -H 'x-csrf-token: vCejHiZj-tQloIa8yOVZ8hm7ZtIa59f6eJx8' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: _csrf=KfopiLkQoSG6Re1151B2eWgg; x-kustomer-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWFmYmFjYzBiZDZiMDAxM2ZmMGI5MiIsInVzZXIiOiI2MDFhZmI5NGY3YmNmZThhNjllMWI5NGIiLCJvcmciOiI2MDFhZmI5NGY3YmNmZTIwZDVlMWI5NDgiLCJvcmdOYW1lIjoibG9jYWwtam9jb25ub3ItMDItMDMtMjEtMyIsInVzZXJUeXBlIjoidXNlciIsInBvZCI6ImRldi1qZXNzZSIsInJvbGVzIjpbXSwiZXhwIjoxNjE0OTczMTAwLCJhdWQiOiJ1cm46Y29uc3VtZXIiLCJpc3MiOiJ1cm46YXBpIiwic3ViIjoiNjAxYWZiOTRmN2JjZmU4YTY5ZTFiOTRiIn0.ojKX0bJJUxqshL06GUbR1Bjs_bkJ3-PSbaYTfD_t0Cc; orgNames=%5B%22dev-jessekoconnor-120420-1%22%2C%22dev-joconnor-120920-0%22%2C%22dev-joconnor-120920-3%22%2C%22local-joconnor-12182020-1%22%2C%22local-joconnor-12-28-2020-1%22%2C%22local-joconnor-12-28-2020-2%22%2C%22local-joconnor-1-12-21%22%2C%22local-joconnor-1-19-21%22%2C%22local-joconnor-1-19-21-2%22%2C%22local-joconnor-1-29-21%22%2C%22local-joconnor-02-03-21%22%2C%22local-joconnor-02-03-21-2%22%2C%22local-joconnor-02-03-21-3%22%2C%22local-joconnor2-25-21%22%2C%22local-joconnor-02-25-21-1%22%5D' \
  --data-binary '{"name":"work_items_latest_wait_time","range":{"from":"2021-03-03T05:00:00.000Z","to":"2021-03-04T04:59:59.999Z","time_zone":"America/New_York"},"query":{}}' \
|jq
```
# Attempt
```
curl "${LOCAL_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
  -H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
  -H 'Content-Type: application/json' \
  --data-binary '{"name":"work_items_latest_wait_time","range":{"from":"2021-03-03T05:00:00.000Z","to":"2021-03-04T04:59:59.999Z","time_zone":"America/New_York"},"query":{}}' \
|jq
```


# Staging manual testing
```
# STAGING QueueIds:
export queue1=5ff4bc444315ea0013b81862   # DefaultQueue
export queue2=6012d4082d55af001a77ebdb   # Chat
export queue3=600f22c52d55af001a76963c   # Email
export queueDNE=6012d4082d55af001a77ebdf # Queue that doesnt exist

# Get LWT
curl "${STAGING_API_URL}/v1/chat/queues/metrics/${queue3}" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
| jq
```