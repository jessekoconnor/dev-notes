# Conversations

## Put a conversation into snooze

```bash
curl -X PATCH "${STAGING_API_URL}/v1/conversations/60258e9b3028baafeca1795b" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "status": "snoozed",
  "snooze": {}
}'
```

## Put a conversation into wrap-up

```bash
curl -X PATCH "${STAGING_API_URL}/v1/conversations/60258e9b3028baafeca1795b" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "ended": true
}'
```
6079b9b0a651aff4a55b8b53
## Get a conversation

```bash
curl -X PATCH "${STAGING_API_URL}/v1/conversations/60258e9b3028baafeca1795b" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--dat

## Clear a conversation queue

```bash
curl -X PUT "${LOCAL_API_URL}/v1/conversations/6079b9b0a651aff4a55b8b53" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "queue": {
    "id": null
  }
}' | jq
```

## Bulk update

```bash
curl -X PUT "${LOCAL_API_URL}/v1/conversations/bulk?ids=6079b9b0a651aff4a55b8b53" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "queue": {
    "id": "604142274df46d0014f7f3c8"
  }
}' | jq
```

## Batch update

```bash
curl -X PUT "${LOCAL_API_URL}/v1/conversations/bulk" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '[{
  "id": "6079b9b0a651aff4a55b8b53",
  "queue": {
    "id": "604142274df46d0014f7f3c9"
  }
}]' | jq
```

## Check Batch Status

```bash
curl "${LOCAL_API_URL}/v1/bulk/60f6c9814446e4ba94b66d50" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json'
```

## Add a note

```bash

```