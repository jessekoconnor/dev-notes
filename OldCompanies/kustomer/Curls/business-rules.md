# Business Rules

## Create a assistant rules busuness rule

```json
curl -X POST "${LOCAL_API_URL}/v1/business-rules" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "name": "assistant-rule",
  "description": "fdsa3",
  "trigger": "kustomer.assistant.pending",
  "criteria": {
    "and": [{
      "conversation_assignedUsers": {
        "operator": "contains",
        "value": "6041403d1eeac5fc4bac807a"
      }
    }],
    "or": []
  },
  "actions": [{
    "type": "pending_assistant",
    "app": "kustomer",
    "input": {
      "pendingAssistant": {
        "channel": "sms",
        "assistant": "55d7998f2d3f9f8800099aee",
        "startDialog": "55d7998f2d3f9f8800099add",
        "isProactive": true
      }
    }
  }],
  "enabled": false
}' | jq
```

## Create a conversation update busuness rule

```json
curl -X POST "${LOCAL_API_URL}/v1/business-rules" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
  "name": "fdsa2",
  "description": "fdsa2",
  "eventTrigger": "conversation.all_updates",
  "criteria": {
    "and": [{
      "conversation_assignedUsers": {
        "operator": "contains",
        "value": "6041403d1eeac5fc4bac807a"
      }
    }],
    "or": []
  },
  "actions": [{
    "type": "patch",
    "app": "kustomer",
    "input": {
      "patches": [{
        "type": "conversation",
        "op": "append",
        "path": "/tags/-",
        "value": ["607091c1c4f8243d00a99c0a"]
      }]
    }
  }],
  "enabled": false
}' | jq
```
