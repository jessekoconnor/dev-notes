# Users

## Fetch the current user

```bash
curl "${LOCAL_API_URL}/v1/users/current" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" | jq
```

## Creat a a user

```bash
curl --request POST \
  --url "${LOCAL_API_URL}/v1/users" \
  -H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
  -H 'Content-Type: application/json'\
  --data-raw '{
      "name": "testing123",
      "email": "jesse.oconnor+2@kustomer.com"
    }' | jq
```

## Update a user by System Endpoint

```bash
curl --request PATCH \
  --url "${LOCAL_API_URL}/v1/system/users/60a2d8d53ecd0040034823ac" \
  -H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
  -H 'Content-Type: application/json'\
  --data-raw '{
        "isEmailValid": true,
        "password": "KkEeiqaJEE.atjiDY_CM_9g2"
    }' | jq
```

## Fetch an auth token

```bash
curl -XPOST "${LOCAL_API_URL}/v1/auth/tokens" \
  -H 'Content-Type: application/json' \
  --data '{
        "email": "jesse.oconnor+2@kustomer.com",
        "password": "KkEeiqaJEE.atjiDY_CM_9g2",
        "domain": "local-joconnor-03-04-21-1",
        "remember": false
      }' | jq
```

## Fetch test users auth token

```bash
curl -XPOST "${LOCAL_API_URL}/v1/auth/tokens" \
  -H 'Content-Type: application/json' \
  --data '{
        "email": "jesse.oconnor+2@kustomer.com",
        "password": "KkEeiqaJEE.atjiDY_CM_9gx",
        "domain": "local-joconnor-03-04-21-1",
        "remember": false
      }' | jq
```