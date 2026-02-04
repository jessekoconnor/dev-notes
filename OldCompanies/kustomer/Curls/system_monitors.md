
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

# Delete monitor w/ system token
```
curl -X DELETE "${QA_API_URL}/v1/system/monitors/<<MONITOR_ID>>" \
-H "Authorization: Bearer ${QA_SYSTEM_AUTH_TOKEN}" \
--data-raw '{
  "org": "<<ORG_ID>>"
}' | jq
```

