# work-items

## Get work-items by queue id

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
curl "${LOCAL_API_URL}/v1/routing/queues/604142274df46d0014f7f3c7/work-items" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" | jq
```

## Get a work-item by conversationId

```bash
curl "${LOCAL_API_URL}/v1/routing/conversations/61045858edb40a6ef19eec67/work-items/active" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" | jq
```

```bash
curl "${QA_API_URL}/v1/routing/conversations/61045c3529d027868c390b87/work-items/active" \
-H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" | jq
```
61045c3529d027868c390b87

```bash
curl "${STAGING_API_URL}/v1/routing/conversations/61045c3529d027868c390b87/work-items/active" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" | jq
```

Staging:

```bash
curl -XPUT "${STAGING_API_URL}/v1/routing/work-items/61e0498b69173e0014a1d3fa?routerSync=true&syncType=snoozed" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "rev": 4,
    "paused": true
}' | jq
```

:

```bash
curl -XPUT "${LOCAL_API_URL}/v1/routing/work-items/61953b42d9e28903f17a8e72?routerSync=true&syncType=snoozed" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "rev": 3,
    "paused": true
}' | jq
```

```bash
curl -XPOST "${LOCAL_API_URL}/v1/routing/work-items" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "resource": {
    "id": "62167fb8f783e7304789e5af",
    "type": "conversation",
    "rev": 5,
    "createdAt": "2022-02-23T18:40:56.046Z",
    "direction": "in"
  },
  "channel": "email"
}' | jq
```

