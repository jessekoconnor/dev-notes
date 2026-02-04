# Prod Logs

```
Latest: {
  "name": "janitor-worker-migration",
  "hostname": "43d6f4377641",
  "pid": 1,
  "level": 30,
  "msg": "Success: Deletion events of type:create generated for orgs:608c20a801b6796ba80dda3c",
  "time": "2021-04-30T15:46:19.187Z",
  "v": 0,
  "dd": {
    "service": "janitor-worker-migration",
    "version": "0.0.1"
  }
}

middle: {
  "name": "janitor-worker",
  "hostname": "280e7aba8586",
  "pid": 1,
  "level": 30,
  "event": {
    "id": "608c264657cf3b812c119280",
    "name": "kustomer.org_deletion.create",
    "org": "608c20a801b6796ba80dda3c",
    "partition": "608c20a801b6796ba80dda3c",
    "data": {
      "id": "608c20a801b6796ba80dda3c",
      "type": "org_deletion",
      "attributes": {
        "skip": ""
      }
    },
    "createdAt": "2021-04-30T15:46:14.503Z",
    "changes": null,
    "client": null,
    "sourceId": null,
    "sourceType": null
  },
  "org": "608c20a801b6796ba80dda3c",
  "eventId": "608c264657cf3b812c119280",
  "msg": "Running with params",
  "time": "2021-04-30T15:46:19.435Z",
  "v": 0,
  "dd": {
    "trace_id": "6467051979910567922",
    "span_id": "6467051979910567922",
    "service": "janitor-worker",
    "version": "0.0.1"
  }
}

Oldest: {
  "name": "janitor-worker",
  "hostname": "280e7aba8586",
  "pid": 1,
  "level": 30,
  "org": "608c20a801b6796ba80dda3c",
  "error": {
    "_status": 404,
    "_code": "unknown",
    "_title": "Internal API Error",
    "_detail": "{\"errors\":[{\"status\":404,\"code\":\"notfound\",\"title\":\"Not Found\",\"detail\":\"monitor could not be found in DB\",\"source\":{\"parameter\":\"608c20a801b6796ba80dda3c\"}}]}"
  },
  "notify": "warning",
  "msg": "Janitor: Org 608c20a801b6796ba80dda3c preflight finished with user error: 404",
  "time": "2021-04-30T15:46:19.490Z",
  "v": 0,
  "dd": {
    "trace_id": "6467051979910567922",
    "span_id": "6467051979910567922",
    "service": "janitor-worker",
    "version": "0.0.1"
  }
}
```

# Prod run
```
go run main.go -env prod1 -user jesse -ttl 1h
go run main.go -env prod1 -user jesse -service janitor-worker -envvars "LOG_LEVEL=info|TYPE_OF_EVENT=create|AWS_REGION=us-east-1|ORGS_TO_DELETE=608c20a801b6796ba80dda3c" -command "node /opt/app/scripts/run_org_delete.js"
```

zzz-prod-joconnor-delete-1: 608c20a801b6796ba80dda3c
https://zzz-prod-joconnor-delete-1.kustomerapp.com/app/settings/setup

# Curls
```
/v1/internal/monitors

# Staging req
curl  "${STAGING_API_URL}/v1/system/monitors" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
| jq
```

# Get monitors
```
curl  "${LOCAL_API_URL}/v1/system/monitors" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_SYSTEM_AUTH_TOKEN}" \
| jq
```

# Create a monitor
```
curl -X POST "${STAGING_API_URL}/v1/system/monitors" \
-H 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_SYSTEM_AUTH_TOKEN}" \
--data-raw '{
    "org": "608bffa52a5ba80d20ed340e",
    "name": "jessesESMonitor",
    "interval": 10000000000,
    "hits": 100000000,
    "unit": "YEARS"
}' | jq
```

# Delete es monitor
```
curl -X DELETE "${QA_API_URL}/v1/system/monitors/org/608713fc3988a8a9cb0213aa" \
-H "Authorization: Bearer ${QA_SYSTEM_AUTH_TOKEN}" \
| jq
```

# Run delete script on QA
```
go run main.go -env qa1 -service janitor-worker -envvars "LOG_LEVEL=info|TYPE_OF_EVENT=create|AWS_REGION=us-east-1|ORGS_TO_DELETE=608713fc3988a8a9cb0213aa" -command "node /opt/app/scripts/run_org_delete.js"
```

1) Make org on QA
    ```
    608713fc3988a8a9cb0213aa
    to-delete-joconnor-1: 608819b03988a87e4f031b7d
    to-delete-joconnor-2: 60881c6d3988a8529e031dda
    ```
Staging
```
to-delete-jesse: 608bfbda86a0f703ad091ef3
to-delete-jesse-2: 608bffa52a5ba80d20ed340e
```