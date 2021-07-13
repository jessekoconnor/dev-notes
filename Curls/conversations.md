# Put a conversation into wrap-up
```
curl -X PATCH "${STAGING_API_URL}/v1/conversations/60258e9b3028baafeca1795b" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "ended": true
}'
```