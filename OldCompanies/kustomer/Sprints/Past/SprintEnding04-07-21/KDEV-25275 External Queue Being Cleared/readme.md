

# Notes
The above curl creates a conversation like so:
```
{
    _id: ...
    externalQueue: 'amazon-connect',
    ...
}
```
# Videos

## Prod
### Before
https://share.getcloudapp.com/d5u10BBP
### After
https://share.getcloudapp.com/llu5ymDx

## Staging
Staging before change:
https://share.getcloudapp.com/geubrmk9

Staging after change:
https://share.getcloudapp.com/qGuEDOXN

## QA
Before change:
https://share.getcloudapp.com/12uAEo8D

After change:
https://share.getcloudapp.com/NQuweJjb




# Customer Ids
Brad (production) 601d5896500c8423654395e5
Brad (staging) -  5ff4bc441235167ec0261101
Brad (local) -    604140401eeac565dcac8081
Jesse (qa)        5fdd178328790e7d4eb2d511


# Curl for prod
```
# Create a message
curl --location --request POST "${PRODUCTION_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${PRODUCTION_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "*** You Can Find This ***",
    "subject": "Question",
    "size": 1,
    "createdAt": "2016-05-22T22:42:44.723Z",
    "customer": "601d5896500c8423654395e5",
    "queue": {
        "external": "amazon-connect"
    }
}' | jq
```

# Curl for qa
```
# Create a message
curl --location --request POST "${QA_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${QA_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "*** You Can Find This ***",
    "subject": "Question",
    "size": 1,
    "createdAt": "2016-05-22T22:42:44.723Z",
    "customer": "5fdd178328790e7d4eb2d511",
    "queue": {
        "external": "amazon-connect"
    }
}' | jq
```

# Curl for local
```
# Create a message
curl --location --request POST "${LOCAL_API_URL}/v1/messages" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
--data-raw '{
    "app": "postmark",
    "channel": "email",
    "direction": "in",
    "preview": "Hello brad, I have a question. Can you help me solve KDEV-25275?",
    "subject": "Question",
    "size": 1,
    "createdAt": "2016-05-22T22:42:44.723Z",
    "customer": "604140401eeac565dcac8081",
    "queue": {
        "external": "amazon-connect"
    }
}' | jq

# Fetch conversation
curl "${LOCAL_API_URL}/v1/conversations/:id" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \ | jq

# Fetch work-item
curl "${LOCAL_API_URL}/v1/routing/work-items/:id" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \ | jq
```



# Curl for staging
```
# Create a message
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

# Fetch conversation
curl "${STAGING_API_URL}/v1/conversations/:id" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \ | jq

# Fetch work-item
curl "${STAGING_API_URL}/v1/routing/work-items/:id" \
--header 'Content-Type: application/json' \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \ | jq
```