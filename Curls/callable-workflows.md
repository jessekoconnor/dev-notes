# Callable Workflows

## Monitor feature release

This kibana query can be used to monitor the latest release:

`(data.name: "workflow" OR data.name: "workflow-api") AND data.level:50 AND NOT "SNSEventProducer timed out" AND NOT "ESOCKETTIMEDOUT" AND NOT "connResetException"`

Released: July 1 @ 13:30 edt

and the link can be found [here](https://44d6db9654b25134.kustomer.sdm.network/_plugin/kibana/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:'2021-07-01T17:00:00.000Z',to:now))&_a=(columns:!(_source),index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,interval:auto,query:(language:kuery,query:'(data.name:%20%22workflow%22%20OR%20data.name:%20%22workflow-api%22)%20AND%20data.level:50%20AND%20NOT%20%22SNSEventProducer%20timed%20out%22%20AND%20NOT%20%22ESOCKETTIMEDOUT%22%20AND%20NOT%20%22connResetException%22'),sort:!(!('@timestamp',desc))))

## Deploy latest code to QA

The latest code is not yet deployed to production, not is it
merged into master.

These commands will deploy the latest code to QA for Callable Workflows:

```bash
npm run qa workflow-api callableWorkflows/jo-KDEV-29215-api-entry-point
npm run qa apps feat/jo-KDEV-29724-callable-workflows-response-action
```

```bash
git checkout master
git branch -f task/jo-KDEV-29216-responsive-steprunner $(git merge-base origin/master origin/task/jo-KDEV-29216-responsive-steprunner)
git checkout task/jo-KDEV-29216-responsive-steprunner
git cherry-pick  ..origin/task/jo-KDEV-29216-responsive-steprunner
git push —force
```

## Local Testing

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
      "type": "CONVERSATIONAL_ASSISTANT"
    },
    "clientContext": {
      "conversationId": "123456789876545321"
    }
}' | jq
```

### Calling a Workflow that exists and is callable 2

This request can be used to call a workflow using a new api endpoint that is in development and to be released soon. The workflow referenced below exists and is callable.

```bash
curl -X POST "${LOCAL_API_URL}/v1/workflows/60e7381d3ca66a0013462f1d/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
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
}' | jq
```

### Calling a Workflow that exists and is callable, but has no response action

This workflow is callable, has a respones schema but no reponse steps.

```bash
curl -X POST "${LOCAL_API_URL}/v1/workflows/60d22afeec83f10013657bed/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
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
}' | jq
```

## [POSTMARK ERROR] Calling a Workflow that exists and is callable, but has postmark error

This workflow is callable, has a respones schema but no reponse steps.

```bash
curl -X POST "${LOCAL_API_URL}/v1/workflows/60d361d2ec83f10013658e37/call" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
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
}' | jq
```

### Upgrade local orgs app version

```bash
curl -X POST "${LOCAL_API_URL}/v1/apps" \
-H "Authorization: Bearer ${LOCAL_ADMIN_AUTH_TOKEN}" \
-H 'content-type: application/json' \
--data '{
    "app": "jesseTest",
    "version": "1.0.5"
}' | jq
```
