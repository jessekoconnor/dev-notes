# Callable Workflows

## Fire/forget

### [Fire/Forget] Calling a Workflow that exists and is callable

This request can be used to call a workflow using a new api endpoint that is in development and to be released soon. The workflow referenced below exists and is callable.

```bash
curl -X POST "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "inputs": {
      "input1": "input1@kustomer.com",
      "input2": "input2@kustomer.com"
    },
    "asyncResponse": {
      "type": "WORKFLOW",
      "id": "6070aa8cd7b765001400f591"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
}' | jq
```

## Embedded Ideas

### Calling a Workflow that exists and is callable

This request can be used to call a workflow using a new api endpoint that is in development and to be released soon. The workflow referenced below exists and is callable.

```bash
curl -X POST "${LOCAL_API_URL}/v1/workflows/6070aa8cd7b765001400f590/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "inputs": {
      "input1": "input1@kustomer.com",
      "input2": "input2@kustomer.com"
    },
    "asyncResponse": {
      "type": "KVIEW"
      "id": "6070aa8cd7b765001400f591"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
}' | jq
```

Event:

```javascript
{
  id: 'event123',
  name: 'kustomer.workflow_response.create',
  data: {
    "type": "workflow_response",
    "id": "10c7d0c1711fb1001b38f3a1",
    "attributes": {
      "status": 200,
      "code": 'SUCCESS',
      "workflowResponse": {
        "orderStatus": "shipped"
      }
      "calledWith": {
        "inputs": {
          "userEmail": "someEmail@kustomer.com"
        },
        "asyncResponse": {
          "type": "KVIEW"
        },
        "clientContext": {
          "conversationId": "123456789876545321"
        }
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
      },
      "workflowCall": {
        "links": {
          "self": "/v1/internal/workflows/6070aa8cd7b765001400f590/call"
        },
        "data": {
          "type": "workflow_call",
          "id": "10c7d0c1711fb1001b38f3a1"
        }
      }
    }
  }
}
```

## Basic Plan

Expose a new public endpoint that can be be used for the FE to call workflows:

* There is already an internal endpoint that is not exposed in the api gateway
* We should add a seperate endpoint to expose for users to call
* Only logged in FE users can access this endpoint
  * Gotchya?: Can `REST_API` action bypass the public endpoint and directly hit the internal endpint?
* Gotchya: Is there a BE for kviews that could make this call instead?

Async Response Type of `KVIEW`:

* This response type will publish a `workflow_response` event that goes to SNS and a Pusher channel
that is accessible on the FE
* Two endpoints allows for better restrictions
* Is `Kview` type too specific? This type just publishes the result to pusher. Would `Embedded` or something
more generic be better?

White Listing Async Response Types:

* Can white-list `asyncResponseTypes` to restrict which response types are valid on public endpoint
* ex: restrict to only ['KVIEW', 'FUTURETYPES' ] so that responses to 'CONVO_ASSISTANT' dont get created

Permissions and Roles:

* Can add a new blanket role `org.user.workflow_call.write` (it is a post endpoint afterall)
* Can add a new blanket object level permisssion `org.permission.workflow_call.create`
* Can add workflow level permission by storing a list or users/teams on workflow
* App Installed CWF's - maybe only allow patches to workflow level permissions?

## Initial notes

This will require the following questions to be answered:

* Will the kviews be calling CWFs directly? Or is there a middle man involved, commands possibly or kview-api
** If so, this endpoint must be exposed. What would this look like?
** If not, there is no need to expose the endpoint

* Can websocket info be passed as plain text and used to create a connection w/ FE? (Not super familiar with WSs)
  * What is a good documentation resource for kustomers WebSocket tech?
  * Understand pusher channels
  * Socket Helper - private user notification channel
  * https://pusher.com/docs/channels/using_channels/client-api-overview/?ref=docs-index
  * https://app.datadoghq.com/dashboard/psi-c77-8ps/web-socket-events-received
  * Matts rec's:
    * Produce event: https://github.com/kustomer/kviews/pull/53
    * Add SNS topic for the new event we are producing: https://github.com/kustomer/event-router/pull/157
    * Create controller in notifications to publish that event to a web socket: https://github.com/kustomer/notifications/pull/216

* Roles? Do we need a new role?

** Are there any example PRs of adding websocket tech into a service?

* Which asyncResponseTargetType would this be?

* Which asyncResponseTargetType would fire/forget be?

* Handling multiple responses in the FE, how should that work?
