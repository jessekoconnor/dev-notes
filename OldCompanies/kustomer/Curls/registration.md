# Registration

## Register a company

```bash
curl "${LOCAL_API_URL}/v1/registration" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'Content-Type: application/json' \
--data '{
  "domain": "zzz-api-e2e-alberto-8lezk0cfgfa",
  "name": "Jeffrey Colliez",
  "email": "builds@kustomer.com"
}' | jq
```
