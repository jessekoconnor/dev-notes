# Guide for implementing Callable Workflows into Conversation Assistant

## Calling a Workflow

### Calling a Workflow that exists and is callable

This request can be used to call a workflow using a new api endpoint that is in development and to be released soon. The workflow referenced below exists and is callable.

```bash
curl -X POST "${LOCAL_API_URL}/v1/internal/workflows/6070aa8cd7b765001400f590/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "org": "6041403c1eeac59bc5ac8075",
    "inputs": {
      "userEmail": "someEmail@kustomer.com"
    },
    "asyncResponse": {
      "type": "CONVERSATIONAL_ASSISTANT"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
}' \ | jq
```

Causes a response like so:

```json
{
  "type": "workflow_call",
  "id": "60c7d0c9718fb1001b38f3a4",
  "attributes": {
    "inputs": {
      "userEmail": "someEmail@kustomer.com"
    },
    "asyncResponse": {
      "type": "CONVERSATIONAL_ASSISTANT"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
  },
  "relationships": {
    "org": {
      "links": {
        "self": "/v1/orgs/6041403c1eeac59bc5ac8075"
      },
      "data": {
        "type": "org",
        "id": "6041403c1eeac59bc5ac8075"
      }
    },
    "workflow": {
      "links": {
        "self": "/v1/internal/workflows/6070aa8cd7b765001400f590"
      },
      "data": {
        "type": "workflow",
        "id": "6070aa8cd7b765001400f590"
      }
    }
  },
  "links": {
    "self": "/v1/internal/workflows/6070aa8cd7b765001400f590/call"
  }
}
```

### Calling a Workflow that exists but is NOT callable

The workflow in this example is not callable.
60c7d172718fb1001b38f487

```bash
curl -X POST "${LOCAL_API_URL}/v1/internal/workflows/60c7d172718fb1001b38f487/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "org": "6041403c1eeac59bc5ac8075",
    "inputs": {
      "userEmail": "someEmail@kustomer.com"
    },
    "asyncResponse": {
      "type": "CONVERSATIONAL_ASSISTANT"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
}' | jq
```

Response is a 422:

```json
{
  "errors": [
    {
      "status": 422,
      "source": {
        "parameter": "60c7d172718fb1001b38f487 is not callable"
      },
      "code": "unprocessable",
      "title": "Unprocessable Entity",
      "detail": "WORKFLOW_NOT_CALLABLE"
    }
  ]
}
```

### Calling a Workflow that doesnt exist

The workflow referenced in this request does not exist:

```bash
curl -X POST "${LOCAL_API_URL}/v1/internal/workflows/80c7d172718fb1001b38f488/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "org": "6041403c1eeac59bc5ac8075",
    "inputs": {
      "userEmail": "someEmail@kustomer.com"
    },
    "asyncResponse": {
      "type": "CONVERSATIONAL_ASSISTANT"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
}' | jq
```

Causes this response:

```json
{
  "errors": [
    {
      "status": 404,
      "code": "notfound",
      "title": "Not Found",
      "detail": "workflow ID"
    }
  ]
}
```
