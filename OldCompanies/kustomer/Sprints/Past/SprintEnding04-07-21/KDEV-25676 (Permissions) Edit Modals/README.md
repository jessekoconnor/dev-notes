# For matt:
# Before change
https://share.getcloudapp.com/WnuBLZ7E

# After
https://share.getcloudapp.com/4gu1k4R6

# Comparing Change
https://github.com/kustomer/accounts-api/compare/task/jo-KDEV-25676-default-modal-permissions?expand=1



# Notes:
Add
"org.view.timeline.customer.modal.update",
"org.view.timeline.company.modal.update",
"org.view.timeline.conversation.modal.update"




# Useful Curls
## This one if the one we want
```
curl "${STAGING_API_URL}/v1/role-groups/5ff4bc425511fb9e656c2e50?returnPermissionSets=true" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
|jq


```

## This one is for the more general settings?
```
curl "${STAGING_API_URL}/v1/role-groups" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
|jq
```


```
curl 'https://staging-joconnor-01-05-21.api.helpapp.io/v1/role-groups?client-request-id=1e4c33d5-b6c7-458d-975f-3dea103a0749' \
  -H 'authority: staging-joconnor-01-05-21.api.helpapp.io' \
  -H 'x-kustomer: ' \
  -H 'x-csrf-token: 1pxY8dhR-4aotY79g6qEqRDOs5faq5F2UiQY' \
  -H 'x-kustomer-version: 9106b2b26abfc55a54cc04287736393bda486dbd' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36' \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-kustomer-client-request-id: 1e4c33d5-b6c7-458d-975f-3dea103a0749' \
  -H 'x-kustomer-client: web' \
  -H 'origin: https://staging-joconnor-01-05-21.helpapp.io' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://staging-joconnor-01-05-21.helpapp.io/' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cookie: _BEAMER_USER_ID_RSYRpgEV3232=a0875fcf-284b-4689-b67f-efec3c53ba1c; _BEAMER_FIRST_VISIT_RSYRpgEV3232=2020-12-14T23:21:08.127Z; orgNames=%5B%22zzz-milkshake%22%2C%22rawsome%22%2C%22staging-joconnor-01-05-21%22%5D; ajs_user_id=%225ff4bc4212351668002610fd%22; ajs_anonymous_id=%223affe849-4483-40b2-a63e-c412d4eed85d%22; _csrf=ZG5lHtb2kynpEjV42Z5RkKTW; x-kustomer-auth-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDkxMDhlZWYxNTUyMDA4ZWIwNTk0NSIsInVzZXIiOiI1ZmY0YmM0MjEyMzUxNjY4MDAyNjEwZmQiLCJvcmciOiI1ZmY0YmMyYjVjMTUyYTBlMjcyYzkyM2EiLCJvcmdOYW1lIjoic3RhZ2luZy1qb2Nvbm5vci0wMS0wNS0yMSIsInVzZXJUeXBlIjoidXNlciIsInBvZCI6InN0YWdpbmciLCJyb2xlcyI6W10sImV4cCI6MTYxNzk5MzEwMiwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjVmZjRiYzQyMTIzNTE2NjgwMDI2MTBmZCJ9.NSO1auZzUTl9U-GP1EWDcDWZOBBQ2F8-WtU-Rp45m8w; __cfduid=dc3be13aea62696637c3b214c6088a27a1616178767; _hp2_ses_props.673492345=%7B%22ts%22%3A1616178768670%2C%22d%22%3A%22staging-joconnor-01-05-21.helpapp.io%22%2C%22h%22%3A%22%2Fapp%2Fcustomers%22%7D; _BEAMER_FILTER_BY_URL_RSYRpgEV3232=false; _hp2_id.673492345=%7B%22userId%22%3A%226558737777459611%22%2C%22pageviewId%22%3A%221841805813472535%22%2C%22sessionId%22%3A%227516228637646032%22%2C%22identity%22%3A%225ff4bc4212351668002610fd%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%2C%22oldIdentity%22%3Anull%7D' \
  --compressed
```