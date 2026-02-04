# Loadtesting

## Creating queues0

```bash
loadtest -m POST -n 1 --rps 1 "${LOCAL_API_URL}/v1/routing/queues" \
-T application/json \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
--data '{
    "name": "Load testing queue",                         
    "description": "Testing for KDEV22023"
}'
```

## Creating queues

```bash
loadtest -m POST -n 1 --rps 1 "${PRODUCTION_API_URL}/v1/routing/queues" \
-T application/json \
-H "Authorization: Bearer ${PROD_OWNER_AUTH_TOKEN}" \
--data '{
    "name": "Load testing queue",                         
    "description": "Testing for KDEV22023"
}'
```

## Calling RWFs

```bash
loadtest -m POST -n 100 --rps 5 "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590/call" \
-T application/json \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
--data '{
    "inputs": {
      "input1": "input1@kustomer.com",
      "input2": "input2@kustomer.com"
    },
    "asyncResponse": {
      "type": "CONVERSATIONAL_ASSISTANT"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
}'
```
