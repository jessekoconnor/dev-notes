# Requirements
* System Token

# Get org logs
```
curl  "${LOCAL_API_URL}/v1/system/monitors" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_SYSTEM_AUTH_TOKEN}" \
| jq
```

# Delete org log
```
curl -X DELETE "${LOCAL_API_URL}/v1/system/monitors/org/5bb39c652c80aa0012bbe6ad" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_SYSTEM_AUTH_TOKEN}" \
| jq
```

# With payload
```
curl -X DELETE "${LOCAL_API_URL}/v1/system/monitors/org" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_SYSTEM_AUTH_TOKEN}" \
--data-raw '{
    "org":"5bb39c652c80aa0012bbe6ad"
}' | jq
```