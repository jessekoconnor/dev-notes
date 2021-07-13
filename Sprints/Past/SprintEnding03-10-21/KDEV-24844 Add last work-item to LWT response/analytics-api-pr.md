## Overview

Non-breaking changes: 
* Add the work-item id that is contributing a latest wait time into the response.
* Include the aggregation for bucketing by queueId if and only if queueIds are supplied. Before it would add the agg every time.
* Also added a size to limit number of agg buckets to the number of queueIds supplied in req.

[KDEV-24844]

### Response currently:
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

### Response w/ this change:
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

## Verification Plan (required)

### Reports page
1) Ensure thet the queues reporting page is still reporting all metrics

### Verify endpint returns a workItem id associated with the latest wait time
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
  "query": { "queueIds": ["EMAIL_QUEUE_ID"] }
}' | jq
```

@kustomer/backend-devs