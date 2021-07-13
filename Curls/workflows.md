# Workflow Curls

## Disable a runnaway workflow

* 60e732528399cd0014713e43
* 60e732878399cd0014713f23

```bash
curl -X PUT "${LOCAL_API_URL}/v1/system/workflows/60e732528399cd0014713e43" \
-H "Authorization: Bearer ${LOCAL_SYSTEM_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "org": "6041403c1eeac59bc5ac8075",
  "systemDisabled": true
}' | jq

curl -X PUT "${LOCAL_API_URL}/v1/system/workflows/60e732878399cd0014713f23" \
-H "Authorization: Bearer ${LOCAL_SYSTEM_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "org": "6041403c1eeac59bc5ac8075",
  "systemDisabled": true
}' | jq
```

## Call a workflow hook

```bash
curl -X POST "https://api.helpsimply.com/v1/hooks/form/60c75e25122b6015904a5f33/3d35acca2cf16a0ed7498af0a98a45aab18c1735967d06e109728569e5a1dd0c" \
-H 'content-type: application/json' \
--data '{
  "conversationId": "60e5b58d8e167e75b207caf5"
}' | jq
```

## Get a workflow

```bash
curl -X GET "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
| jq
```

## Update a workflow step

```bash
curl -X PUT "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "steps": [
    {
      "transitions": [],
      "errorCases": [],
      "id": "drQWjp8qu",
      "action": "kustomer.app.jessetest.respond",
      "params": {
        "outputs": {
          "output1": "/#steps.1.input1",
          "output2": "/#steps.1.input2"
        }
      },
      "appVersion": "jessetest-^1.0.2"
    }
  ]
}' | jq
```

## Update a workflow w/ a response schema (Callable True)

```bash
curl -X PUT "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "steps": [
    {
      "transitions": [
        {
          "target": "_S2DvZlsy",
          "condition": {
            "op": "true",
            "values": [
              true
            ]
          }
        }
      ],
      "errorCases": [],
      "id": "zWxHwV21d",
      "action": "kustomer.note.create",
      "params": {
        "conversation": "/#steps.1.conversationId",
        "body": "New Note from scheduled workflow!!!"
      },
      "appVersion": "kustomer-^1.5.3"
    },
    {
      "transitions": [],
      "errorCases": [],
      "id": "_S2DvZlsy",
      "action": "kustomer.note.create",
      "params": {
        "conversation": "/#steps.1.conversationId",
        "body": "/#steps.1.webhookUrl"
      },
      "appVersion": "kustomer-^1.5.3",
      "meta": {
        "displayName": "Output Step"
      }
    }
  ],
  "trigger": {
    "transitions": [
      {
        "target": "zWxHwV21d",
        "condition": {
          "op": "true",
          "values": [
            true
          ]
        }
      }
    ],
    "id": "1",
    "callable": true,
    "schema": {
      "properties": {
        "conversationId": {
          "type": "string"
        },
        "webhookUrl": {
          "type": "string"
        }
      },
      "required": []
    }
  },
  "response": {
    "schema": {
      "properties": {
        "conversationId": {
          "type": "string"
        },
        "orderNum": {
          "type": "number"
        },
        "Space In Name": {
          "type": "string"
        },
        "Dot.In.Name": {
          "type": "string"
        },
        "special%Char&In#Name": {
          "type": "string"
        }
      },
      "required": []
    }
  }
}' | jq
```

## Webhook prod workflow

```bash
curl -X POST "https://api.kustomerapp.com/v1/hooks/form/601d58903ce708e01fc6fac6/50878a675c08f7c990fe6c19e82d489ad3c08d37d5ccadfde11699d0e6864797" \
-H 'Content-Type: application/json' \
--data-raw '{
    "body": "Hello!!!"
}' | jq
```

this.context => action.inputSchema => action.inputTemplate
Needs 2 things:

* responseMeta
* outputs from workflow context

```json
{
   "name":"kustomer.responsive-workflow.respond",
   "type":"responsive",
   "inputTemplate":{
      "outputs":"/#outputs",
      "responseMeta":"/#responseMeta"
   },
   "outputTemplate":{},
   "inputSchema":{
      "type":"object",
      "properties":{
         "outputs":{
            "type":"object"
         },
         "responseMeta":{
            "type":"object"
         }
      },
      "required":[
         "outputs",
         "responseMeta"
      ],
      "additionalProperties":false
   },
   "outputSchema":{
      "type":"object"
   }
}
```

```
{
  "name": "kustomer.responsive-workflow.respond",
  "type": "rest_api",
  "inputTemplate": {
    "uri": "/#uri",
    "method": "POST",
    "data": "/#data",
    "headers": { "Content-Type": "application/json" },
    "qs": "/#qs",
    "json": "/#json"
  },
  "outputTemplate": {
    "response": "/#response",
    "body": "/#body"
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "uri": {
        "type": "string"
      },
      "method": {
        "type": "string"
      },
      "data": {
        "type": "object"
      },
      "headers": {
        "type": "object"
      },
      "qs": {
        "type": "object"
      },
      "json": {
        "type": "boolean"
      }
    },
    "required": ["uri", "method"],
    "additionalProperties": false
  },
  "outputSchema": {
    "type": "object",
    "properties": {
      "response": {
        "type": "object"
      },
      "body": {
        "type": "object"
      }
    },
    "additionalProperties": false
  }
}
```