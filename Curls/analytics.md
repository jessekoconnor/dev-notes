# Analytics

## LWT Chart ep

Local:

* Email: 604142274df46d0014f7f3c7
* Chat: 604142314df46d0014f7f3cb
* Default: 604140404df46d0014f7f39d

```bash
curl -X POST "${LOCAL_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
  -H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
  -H 'Content-Type: application/json'\
  --data-raw '{
      "name": "work_items_latest_wait_time",
      "query": {
        "queueIds": ["604142274df46d0014f7f3c7", "604142314df46d0014f7f3cb", "604140404df46d0014f7f39d"]
      },
      "range": {
        "from": "2021-10-06T04:00:00.000Z",
        "to": "2030-10-07T03:59:59.999Z",
        "time_zone": "America/New_York"}
    }' | jq
```

QA:

* Default: 61043cceeae27f0013e0ae28
* Two: 61044bfeeae27f0013e0b166

```bash
curl -X POST "${QA_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
  -H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" \
  -H 'Content-Type: application/json'\
  --data-raw '{
      "name": "work_items_latest_wait_time",
      "query": {
        "queueIds": ["61043cceeae27f0013e0ae28", "61044bfeeae27f0013e0b166"]
      },
      "range": {
        "from": "2021-10-06T04:00:00.000Z",
        "to": "2030-10-07T03:59:59.999Z",
        "time_zone": "America/New_York"}
    }' | jq
```

Prod:

* Default: 601d589643f25e0013629719
* Email: 601d58f73f051d0012c08687
* Chat: 601d5906e82a8600123ddb59
* Help Me: 601d59ab2a2de00012959aa8

```bash
curl -X POST "${PRODUCTION_API_URL}/v1/charts/query/standard/work_items_latest_wait_time" \
  -H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
  -H 'Content-Type: application/json'\
  --data-raw '{
      "name": "work_items_latest_wait_time",
      "query": {
        "queueIds": ["601d589643f25e0013629719", "601d58f73f051d0012c08687", "601d5906e82a8600123ddb59"]
      },
      "range": {
        "from": "2021-08-11T04:00:00.000Z",
        "to": "2021-08-12T03:59:59.999Z",
        "time_zone": "America/New_York"}
    }' | jq
```
