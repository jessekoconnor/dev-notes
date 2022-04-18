# Audit Log Curls

```bash
curl "${STAGING_API_URL}/v1/audit-logs?filter%5BobjectType%5D=conversation&filter%5Binclude%5D=message%2Cwork_item&filter%5BobjectId%5D=60661efc7fd0a60dab0dd44a" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" | jq
```