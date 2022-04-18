# Install an app

## Upgrade Kustomer App

```bash
cd apps
npm run get-app-json-mini -- kustomer > KustomerAppMini.json
curl -X POST "${LOCAL_API_URL}/v1/system/apps/available" \
-H "Authorization: Bearer ${LOCAL_SYSTEM_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data @KustomerAppMini.json > UpdateKustomerAppResponse.json
```

## Make Responsive action and responsive Workflow available in one LOCAL org

```bash
curl -X POST "${LOCAL_API_URL}/v1/apps/available" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "app": "jessetest",
  "title": "jessetest",
  "iconUrl": "https://cdnapps.helpapp.io/scheduler/images/icon.png",
  "version": "1.0.1",
  "dependencies": [],
  "description": "Placeholder to unblock RWF Development.",
  "appDetails": {
    "appDeveloper": {
      "name": "Kustomer",
      "website": "https://kustomer.com",
      "supportEmail": "support@kustomer.com"
    },
    "externalPlatform": {
      "name": "Jesse",
      "website": "https://kustomer.com"
    }
  },
  "actions": [
    {
      "name": "kustomer.app.jessetest.respond",
      "type": "responsive",
      "inputTemplate": {
        "outputs": "/#outputs"
      },
      "inputSchema": {
        "type": "object",
        "properties": {
          "outputs": {
            "type": "object"
          }
        },
        "required": [
          "outputs"
        ],
        "additionalProperties": false
      },
      "outputSchema": {
        "type": "object"
      }
    }
  ],
  "i18n": {},
  "workflows": [{
    "name": "kustomer.app.responsiveapp.workflow",
    "description": "sup sup",
    "trigger": {
      "id": "1",
      "eventName": "kustomer.app.responsiveapp.event.two",
      "callable": true,
      "transitions": [],
      "schema": {
        "input1": "string",
        "input2": "string"
      }
    },
    "steps": [
      {
        "id": "2",
        "transitions": []
      }
    ],
    "response": {
      "schema": {
        "output1": "string",
        "output2": "string"
      }
    }
  }]
}' | jq
```

## Force Install in LOCAL org

Local:

```bash
curl -X POST "${LOCAL_API_URL}/v1/apps" \
-H "Authorization: Bearer ${LOCAL_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "app": "jessetest_6041403c1eeac59bc5ac8075", "version": "1.0.1"
}' | jq
```

Staging:

```bash
curl -X POST "${STAGING_API_URL}/v1/apps" \
-H "Authorization: Bearer ${STAGING_OWNER_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "app": "kustomer", "version": "1.8.19"
}' | jq
```

## Previous PR Examples

* <https://github.com/kustomer/apps/pull/524>
