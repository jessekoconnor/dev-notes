

# [QnR] Un-assigning work-item for conversation sync causes uncaught exception
As a developer I want to prevent this unhandled error in QnR so that it becomes more reliable. 
{code}
TypeError: Cannot read property '_id' of undefined
at getRevisionParams (/opt/app/services/work_item_command/queue.js:18:25)
{code}

*Timeline overview of this situation:*
* T0: work-item changes from ivr -> assigned, so its queue gets cleared
* T1(T0+2s): conversation's assignedUsers array goes from [someUser] -> [] from a Biz Rule
  * Here the work-item and conversation go out-of-sync, 
* T1 + 9min: Routing-cleaner detects conversation and work-item out of sync
  * i.e. workItem is assigned but conversation has no assigned users
  * This sync will try to unassign the work-item
  * We see the _id of undefined error at this time bc the work-item is queueless
  * queue command assumes there is a queue on the work-item
* T + 14min: Routing-cleaner again attempts to sync the workItem to its conversation
  * We see it again here too

*Possible Solutions*
1) In routing-cleaner, take queue from conversation and update the workitem with it
  * work-item has no queue bc is was just in IVR
  * Conversation still has queue however, it was never cleared
2) Send work-item back to IVR
  * When we have a work-item we are trying to queue, send it to IVR if it has no queue

*Notes and relevant code locations*
* [Routing-cleaner-lambda] 
  Unassign a work-item when its convo is unassigned: 
  https://github.com/kustomer/routing-cleaner-lambda/blob/d949e641c904066ad6d0e8a934436df751829b1c/lambda/cleaner.js#L115-L121
* [Routing-api] Assumption that work-item has a queue: 
  https://github.com/kustomer/routing-api/blob/master/services/work_item_command/queue.js#L81-L92
* [Routing-api] Reason for getting into queue command, which is assignedTo:
  https://github.com/kustomer/routing-api/blob/master/services/work_item_command/index.js#L39-L40

*Last update of conversation (Inside Biz Rule Complete update)*
Emptying the assignedUsers array on the conversation:
{code}
"assignedUsers": {
  "op": "replace",
  "before": [
    "5f7d064afcc10579957f9217"
  ],
  "after": []
},
"queue": "5f43ed5c06d0c00019b37463",
"isSync": null,
"publishedAt": "2021-02-13T07:27:24.426Z",
"updatedAt": "2021-02-13T07:27:24.201Z",
"client": "api",
{code}

*Last update of work-item*
Work item status IVR -> Assigned:
{code}
"status": {
  "op": "replace",
  "before": "ivr",
  "after": "assigned"
},
"isSync": true,
"publishedAt": "2021-02-13T07:27:23.498Z",
"updatedAt": "2021-02-13T07:27:23.484Z",
"client": "routing-worker",
{code}
Note: There are no queues on the work-item bc it was just in IVR. 
      This is not a state we anticipated or handle.


*Relevant Error:*
{code}
TypeError: Cannot read property '_id' of undefined
at getRevisionParams (/opt/app/services/work_item_command/queue.js:18:25)
at /opt/app/services/work_item_command/queue.js:112:24
at /opt/node_modules/dd-trace/packages/dd-trace/src/plugins/util/promise.js:28:23
at Scope._activate (/opt/node_modules/dd-trace/packages/dd-trace/src/scope/async_hooks.js:51:14)
at Scope.activate (/opt/node_modules/dd-trace/packages/dd-trace/src/scope/base.js:12:19)
at /opt/node_modules/dd-trace/packages/dd-trace/src/plugins/util/promise.js:27:27
at tryCatcher (/opt/app/node_modules/bluebird/js/release/util.js:16:23)
at Promise._settlePromiseFromHandler (/opt/app/node_modules/bluebird/js/release/promise.js:547:31)
at Promise._settlePromise (/opt/app/node_modules/bluebird/js/release/promise.js:604:18)
at Promise._settlePromise0 (/opt/app/node_modules/bluebird/js/release/promise.js:649:10)
at Promise._settlePromises (/opt/app/node_modules/bluebird/js/release/promise.js:729:18)
at Promise._fulfill (/opt/app/node_modules/bluebird/js/release/promise.js:673:18)
at PropertiesPromiseArray.PromiseArray._resolve (/opt/app/node_modules/bluebird/js/release/promise_array.js:127:19)
at PropertiesPromiseArray._promiseFulfilled (/opt/app/node_modules/bluebird/js/release/props.js:78:14)
at Promise._settlePromise (/opt/app/node_modules/bluebird/js/release/promise.js:609:26)
at Promise._settlePromise0 (/opt/app/node_modules/bluebird/js/release/promise.js:649:10)
at Promise._settlePromises (/opt/app/node_modules/bluebird/js/release/promise.js:729:18)
at Promise._fulfill (/opt/app/node_modules/bluebird/js/release/promise.js:673:18)
at /opt/app/node_modules/bluebird/js/release/nodeback.js:42:21
at /opt/app/helpers/calendar.js:59:5
at /opt/node_modules/@kustomer/microservice/lib/storage/cache/api.js:85:7
at /opt/node_modules/async/lib/async.js:52:16
{code}

*Kibana Link w conversation && workitem updates along with the relevant errors:*
Kibana link: https://44d6db9654b25134.kustomer.sdm.network/_plugin/kibana/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:'2021-02-13T05:00:00.000Z',to:'2021-02-14T04:30:00.000Z'))&_a=(columns:!(data.name,message),index:fd703db0-a5d5-11ea-9739-5f784c12bdc5,interval:auto,query:(language:lucene,query:'(%2260277f56264a9600131673d4%22%20AND%20%22kustomer.work-item.update%22)%20OR%20(%2260277f53d72347298d9446cb%22%20AND%20%22kustomer.conversation.update%22)%20OR%20%22%2Fopt%2Fapp%2Fservices%2Fwork_item_command%2Fqueue.js:18:25%22'),sort:!(!('@timestamp',desc)))
