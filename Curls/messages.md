# Create a message with extermal queue

```bash
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

LOCAL:

```bash
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
    "customer": "604147361eeac524c3ac8198"
}' | jq
```

STAGING (createdAt: now):

```bash
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
    "customer": "5ffc55cfdd43baf4f10a3b96"
}' | jq
```

STAGING (createdAt: Sunday):

```bash
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
    "customer": "5ffc55cfdd43baf4f10a3b96",
    "createdAt": "2016-05-22T22:42:44.723Z"
}' | jq
```

`QA w/ specific `createdAt`:

```bash
curl --location --request POST "${QA_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "Hello, I have a question. Can you help me?",
    "subject": "Question",
    "size": 1,
    "createdAt": "2016-05-22T22:42:44.723Z",
    "customer": "61044d4a0f560b7b1ad13778"
}' | jq
```

QA:

```bash
curl --location --request POST "${QA_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "Hello, I have a question. Can you help me?",
    "subject": "Question",
    "size": 1,
    "customer": "61044d4a0f560b7b1ad13778"
}' | jq
```

Prod:

```bash
curl --location --request POST "${PROD_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "Hello, I have a question. Can you help me?",
    "subject": "Question",
    "size": 1,
    "customer": "601d5ada31f3ef69bad2d73e"
}' | jq
```