# Create a message with extermal queue
```
curl --location --request POST "${STAGING_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "Hello, I have a question. Can you help me?",
    "subject": "Question",
    "size": 1,
    "createdAt": "2016-05-22T22:42:44.723Z",
    "customer": "5ff4bc441235167ec0261101",
    "queue": {
        "external": "amazon-connect"
    }
}' | jq
```

# Create a message (No extermal queue)
```
curl --location --request POST "${LOCAL_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "Hello, I have a question. Can you help me?",
    "subject": "Question",
    "size": 1,
    "createdAt": "2016-05-22T22:42:44.723Z",
    "customer": "5ff4bc441235167ec0261101"
}' | jq
```