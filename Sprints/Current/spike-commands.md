# Work-Item Commands

Work-Item commands are what lie behind any work-item update. The commands handle the complex behavior updating a single work-item.

Why are commands necessary? Because the real world problem that QnR is trying to solve is naturally complex, unsimilar to a simple CRUD api which simply persists updates.

Take the following example of an update to add a queue to a workItem `PUT /v1/routing/work-item/123 { queue: someQueueId }`. This should result in the following behavior:

* If work-item status is in routed, assigned, or wrap-up status:
  * Set work-items queue only, dont change status
* For all other work-item states (i.e. queued, ivr)
  * Set work-item status to queued, assign new size, priority, enteredAt
  * Unsets the work-items assigned user, session and team
  * Remove work-item from session, update capacity

If this were a simple CRUD system, then it would be as easy as persisting the update of `{ queue: someQueueId }` on workItem '123'. But as you can see it is not that simple. There are all sorts of complex behaviors that result from simple work-item updates.

Commands are a useful way of handling this complexity. As a developer, they most certainly help to make maintenance and new feature dev easier, but there is come complexity that commands remains unaddressed, specifically:

* Commands contain state dependent behavior
* Only 1 command will execute per update (compounds the use cases for each command)
* There are currently gaps for some work-item statuses

There is a way for us to move forward and address all of these problems however, so that developers can more easily manage changes in these behaviors. I have outlined it in the link below, but generally consists of:

* Lifting state checks outside of cmds (stateless, distilled, simple commands)
* Allow for state based command selection
* String commands together in RPC format to support multifield updates.

## History

Work-item updates have cascading effects, i.e. its not usually one component that needs to be updated, but instead its usually a work-item and also a work-session, and possibly also a previous work-session.

When this system was being built the initial version tried to fit all of the complex logic inside one or a few functions. That was understandably too much to manage, so a command design pattern was introduced to help contain the complexity. The command pattern encapsulates all the complexity behind the updates into specific commands (queue, assign, deQueue). It does a great job of helping us to manage a complex real world problem by separation of concerns into a collection of commands.

Although the command pattern is very effective, There are still some complex issues that have yet to be addressed:

* Some updates are state dependant, and that logic lives inside the command
  * This can make a command very complex.
  * The Queue command for ex is really hard to work with.
* Updates can only be run one at a time.
  * If an update w/ two fields comes in, the only way to support it is to pull in another command, requiring every command to support every permutation. Very bad pattern...
  * This compounds w/ other issues

I do however have a vision for a better updating system, one that takes the intent behind this command pattern one step further. It involves Stateful Command Selections, and distilling the commands into stateless actions. I discuss this later in this document, but briefly its about:

* making the commands stateless and breaking them down even further, so they can be strung together/combined on a per-state basis w/ ease
* Compose them together with stateful selection as detailed or as generally we need, on a per update basis. This allows the complexity of our solution to approach the complexity of the real world problem.

## Work-item States and Updates

When a work-item is updated, it is 

### Possible Work-item States

A work-item is just an object to contin the state of a piece of work. I can be in several states, generally around `status` but sometimes around paused and queue as well.

Possible states:

* Statuse: [ivr, queued, routed, assigned, wrap-up, completed]
* Paused: true/false
* it can have a queue or not
  * Sometimes a work-item should be re-queued if it already has a queue, but should go to ivr if it doesnt have a queue.

### Possible Work-Item Updates

Workflow, BR, Api User, or app usage updates:

* `queue.(id|key|enteredAt|rule)`: The queue that the work-item should be updated with
  * null, 'queueId'
* `assignedTo`: The user that the work-item is assigned to.
  * null, 'user'
* `status`: the status for the updated work-item
  * 'wrap-up', 'completed'
* `paused`: Indicates whether a work-item should be routed or not
  * true|false

Routing only updates:

* `routed.(to|rejectedBy|timedout)`: The user that the router is trying to route the updated work-item to
  * 'userId', true|false
* `accepted.(by|workSession)`: The user that has accepted the work-item
  * 'userId'

Routing updates are generally supported, and not combined with other updates. I have left them out of many of the below tables in order to better focus the areas that need work/focus.

### 1 field Permutations

If we only allowed 1 field to be updated at a time, we would only have to deal with 8 possible updates as seen below:

| queue   | assignedTo | status    | paused | Command Funnel | Supported Statuses        | Unsuported  Statuses         |
| -----   | ------     | ------    | ------ | ------         | ---------                 | ---------                    |
| null    | --         | ---       | ---    | De-Queue       | ivr,queued                |wrap-up,assigned,routed       |
| queueId | --         | ---       | ---    | Queue          | ivr,queued,assigned       |wrapup(KDEV-34733),routed     |
| --      | userId     | ---       | ---    | Assign         | ivr,queued,assigned,routed|wrap-up                       |
| --      | null       | ---       | ---    | Queue          | ivr,queued,assigned,routed|broken for wrap-up(KDEV-34733)|
| --      | --         | wrapUp    | ---    | Wrap-up        | All                       | --                           |
| --      | --         | completed | ---    | Complete       | All                       | --                           |
| --      | --         | --        | true   | Pause          | All                       | --                           |
| --      | --         | --        | false  | Pause          | All                       | --                           |

These single field use cases are challenging enough to support. As you can see we support many of the use cases, but some of them are also escaping us.

I will now dive into each single field update, and consider different parts of the current work-item state as this update comes in. This should illustrate the complexity of the real work problem.

#### `{ queue: null }`

Today (DeQueue cmd):

* Sets work-item status to IVR
* Unsets work-items queue, assignedTo, session, and team
* Updates work-session w/ common Item Removed function

But it should probably be:

* remove queue from work-item (all stauses including assigned)
* if ivr,queued,routed (i.e not assigned)
  * Sets work-item status to IVR
  * Unset assignedTo, session, and team
  * Update work-session w/ itemRemoved

#### `{ queue: someQueueId }`

Today (Queue cmd):

* Set work-items queue only, dont change status or session yet
* From all other work-item states
  * Set work-item status to queued, assign new size, priority, enteredAt
  * Unsets the work-items assigned user, session and team
  * Remove work-item from session, update capacity

But it should probably be:

* Set queue to `someQueueId`, size, prio, settings for work-item
* From ivr,queued,routed (i.e. not assigned,wrap-up)
  * Set work-item status to queued

#### `{ assignedTo: null }`

This use case is especially hard to develop around because we are back in the queue command. I think that unassignment is well deserving of its own command.

Today (Queue cmd):

* From Assigned
  * Set work-items queue only, dont change status or session
* From all other work-item states
  * Set work-item status to queued, assign new size, priority, enteredAt
  * Unsets the work-items assigned user, session and team
  * Remove work-item from session, update capacity

But we should probably:

* Unset the work-items assigned user, session, sessionCapacity and team
* If has queue and !wrap-up
  * set status to queued, update enteredAt, size, prio
* If no queue and !wrap-up
  * set status to ivr for queue rules to run

#### `{ assignedTo: someUser }`

Today (Assign cmd):

* set status to `assigned`, `assignedTo` and accepted to someUser, set/remove session if its not active
* set new sessions capacity, assign
* set old sessions capacity, unassign

But probably should be:

* set `assignedTo` and accepted to someUser, set/remove session if its not active
* set new sessions capacity, assign
* set old sessions capacity, unassign
* From !wrap-up
  * set status to `assigned`

#### `{ status: 'wrap-up' }`

* set status to 'wrap-up'

#### `{ status: 'completed' }`

* set status to 'completed
* update session w/ itemRemoved

#### `{ paused: true|false }`

* set paused:true|false, on work-item.
* if not routed and not pendingItem:
  * inc/decr capacity and pausedWorkItemCount on session

### 2 field Permutations

Allowing two possibilities for each of the 4 values, is 2 to the (n+1)th power, or 2 to the 5th power, or 32 possible updates:

All possible permutations (32 possibilities):

| queue   | assignedTo | status    | paused | Command Funnel | Supported  |
| -----   | ------     | ------    | ------ | ------         | ---------  |
| null    | --         | ---       | ---    | De-Queue       | Yes        |
| null    | userId     | ---       | ---    | De-Queue       | --         |
| null    | null       | ---       | ---    | De-Queue       | by default |
| null    | ---        | wrapUp    | ---    | De-Queue       | --         |
| null    | ---        | completed | ---    | De-Queue       | --         |
| null    | ---        | ---       | true   | De-Queue       | --         |
| null    | ---        | ---       | false  | De-Queue       | --         |
| queueId | --         | ---       | ---    | Queue          | Yes        |
| queueId | userId     | ---       | ---    | Queue          | --         |
| queueId | null       | ---       | ---    | Queue          | by default |
| queueId | ---        | wrapUp    | ---    | Queue          | --         |
| queueId | ---        | completed | ---    | Queue          | --         |
| queueId | ---        | ---       | true   | Queue          | Yes        |
| queueId | ---        | ---       | false  | Queue          | Yes        |
| --      | userId     | ---       | ---    | Assign         | Yes        |
| --      | userId     | wrapUp    | ---    | Assign         | --         |
| --      | userId     | completed | ---    | Assign         | --         |
| --      | userId     | ---       | true   | Assign         | Yes        |
| --      | userId     | ---       | false  | Assign         | Yes        |
| --      | null       | ---       | ---    | Queue          | KDEV-34733 |
| --      | null       | wrapUp    | ---    | Queue          | --         |
| --      | null       | completed | ---    | Queue          | --         |
| --      | null       | ---       | true   | Queue          | Yes        |
| --      | null       | ---       | false  | Queue          | Yes        |
| --      | --         | wrapUp    | ---    | Wrap-up        | Yes        |
| --      | --         | wrapUp    | true   | Wrap-up        | --         |
| --      | --         | wrapUp    | false  | Wrap-up        | --         |
| --      | --         | completed | ---    | Complete       | Yes        |
| --      | --         | completed | true   | Complete       | --         |
| --      | --         | completed | false  | Complete       | --         |
| --      | --         | --        | true   | Pause          | Yes        |
| --      | --         | --        | false  | Pause          | Yes        |

Since some updates are dependant on the prev work-item status (queue cmd for example), which may actaully increase those states by at least 5x (there are 5 statuses) to ~150 possibilities. But since we barely support 1 field updates, I will not cover multi field updates in this doc. I tried initially to consider them, but it was too overwhelming when paired with the 1 field updates not fully managable yet.

## Where commands are used

The bulk of command usage is from workflows and biz rules, which update conversations that then update work-items via the syncing logic. but it is also possible to directly use the work-item api as well as long as you have a valid api token via `PUT /v1/router/work-items/:id`. Also changes to conversations made in-app by agents or supervisors will trigger a sync as well. Finally, the router also uses this endpoint, and this these commands, when making routing decisions.

1) App:

    * When accepting/rejecting a work-item

2) Via the QnR Syncing mechanism:

    * Workflows can update a conversation with more than one or more fields at a time. ex: `{ 'queue.id', paused }`
    * A Biz Rule can update a conversation and work-item at the same time.
    * An agent may update a conversation via UI
    * Any update to a conversation via an api user or other service
    * Literally any update to a conversation

    Any of these methods may cause a QnR sync event that updates the work-item with one or more fields at once via the work-item commands.

3) Api users:

    Api users can access these commands w/ one or more fields at a time ex: `PUT /v1/routing/work-items { 'queue.id', paused }`. It is included in the api here: <https://github.com/kustomer/api/blob/1f8fb550170938e657135d2c15da9b9be85fc0fa/controllers/internal/apis.js#L2444>

4) Router:

    This search shows the places in routing-worker that use the work-item commands api: <https://github.com/kustomer/routing-worker/search?q=workItemApi+update+NOT+test>, but here is a list of the places we use it:

    * Routing service at the time that a work-item gets routed to a user.
    * Routing service when assigning a queue on queue rule match, or default queue on no queue rule match.
    * Abandoned service makes work-item update if a conversation update satisfies the following condition: Convo nor workItem are assigned, convo is not ended and convo is in wrap-up.
    * When a conversation is deleted, then the Routing service will update the work-item to the 'complete' status.
    * QnR Syncing logic - , yes it lives here, this is the only place that the routing-worker can update more than one field at a time.

   The router actually will never update more than one field at a time unless it is performing a syncing operation.



## One Command per Update (Command funneling)

Live code: <https://github.com/kustomer/routing-api/blob/c7f9c89bf6977aad2554154b2e7c06bcccfdb871/services/work_item_command/index.js#L41-L64>

When a work-item is updated, only one command will be run. The command that will be executed is determined by the following ordered list. The list is evaluated against the contents of the update, and the first matching condition will dictate the single command that will run for that work-item update:

1) `{ 'queue.id': null, ... }` => DeQueue command
    * Any update that unsets a queue ends up here
    * Is there any purpose/useCase for this?
2) `{ 'queue.id': someQueue, ... }` => Queue command
3) `{ 'assignedTo': null, ... }` => Queue command (this could be its own command)
4) `{ 'routed.to': someUser, ... }` => Route command
5) `{ 'accepted.by': someUser, ... }` => Assign command
6) `{ 'assignedTo': someUser, ... }` => Assign command
7) `{ 'routed.rejectedBy': someUser, ... }` => Put Back command
8) `{ 'routed.timedOut': someUser, ... }` => Put Back command
9) `{ 'status': 'wrap-up', ... }` => WrapUp command
10) `{ 'status': 'complete', ... }` => Complete command
11) `{ 'paused': 'true|false', ... }` => Pause command

The first matching item in the list will dictate the command that is run. For example, if a work-item update contains `{ 'queue.id', paused }`, then line #2 will match and we will enter the queue command instead of the pause command.

This is problematic because it implies that every command has to support every use case if we want to support updating more than one field at a time. In the previous example, this would lead to conversations being out of sync w/ work-items as a convo would be 'snoozed' but the work-item was never paused, hence KDEV-33417 ([QnR] Snoozed Convos taking up capacity) was written and the queue command now takes `paused` into account instead of just dropping it.

## The users want to combine commands (cmds were not designed for that)

Live code: <https://github.com/kustomer/routing-api/blob/c7f9c89bf6977aad2554154b2e7c06bcccfdb871/services/work_item_command/index.js#L41-L64>

Commands were coded in a way that allows for only 1 command to be executed at a time. This means that the most important field in a work-item update will be prioritized over the remaining fields that are less important. There is essentially an ordered list of important fields, and the first matching field will determine the command that will be run.

Say that an update looks like `{ assignedTo: newUser }`. This will cause a one assign command to run, even if the update actually looked like this: `{ assignedTo: newUser, paused: true }`. This was actually an issue bc the `paused: true` was simply dropped and the conversation and work-item would fall out of sync. There was a ticket to fix this, and the solution was to pull the pause command into the assign command, and to compose the two together within the assign command (as it always gets higher priority than pausing due to the order of command selection). This is a good solution, sure, but if it turns out we have to do this in other commands too, then a better solution will be required as this wont scale.

Commands were clearly designed for an update of just one field at a time. It was not originaly designed to handle a payload w/ multiple fields like so: `{ assignedTo: newUser, paused: true }`. We have charged ahead w/ this by modifying the assign and the queue command to also support pausing/unpausing. The current design of these commands is problematic if we want to support updating work-items w/ more than one field at a time.

These two tickets were created because users wanted and expected to be able to combine commands:

* Pulling paused into assign command: <https://kustomer.atlassian.net/browse/KDEV-28417>
    ex: `{ assignedTo: 'userId', paused: true }`
* Pulling paused into queue command: <https://kustomer.atlassian.net/browse/KDEV-33417>
    ex: `{ queue: 'userId', paused: true }` or `{ assignedTo: null, paused: true }`

Implementing the solutions was complex, and caused only these two commands to support being combined w/ pause, while every other command remains incompatible with pause. This is the code that would have to be shared by every command: <https://github.com/kustomer/routing-api/pull/276/files#diff-68a11909592ce464c28c200496db69b80dec11e6ed37fe05ca5436c31e490cc5R96-R134> in order to support pause.

## Addressing Remaining Complexity

I believe that there is a path forward that makes work-item commands more effective and easier to maintain. I think that implementing queuing w/ work sessions is just a realy nasty real world problem that is not simple no matter how badly you would like it to be.

However, if we accept the unaddressed complexity and face it head on, I believe we can address and find a solution that can handle such complexity. What we are missing is exactly that, a solution that can take different actions based on any and all states for those sticky situations that are state dependent.

Given some atomic commands/actions that are all stateless like so:

* setStatus (new)
  * call to shared function work-item onStatusChange
  * pulled out bc there are so many conditionals on status changing
* Assign
  * Sets assignedTo, session (getWorkSessionParamsOnItemAssign), oldSession, team
* Un-Assign (new)
  * unset assignedTo, session (onWorkItemRemove), and team
  * pulled out from the queue cmd
* Un-Route (new)
  * unset pendingitem, unlocksession (onWorkItemRemove)
* Queue
  * set queue id, size, prio, enteredAt, firstEnteredAt
  * pass in null to remove queue
  * No arg just sets enteredAt to now
* pause
  * set paused:true, update session capacity
* un-pause (new)
  * set paused:false, update session capacity
  * pulled out from pause in order to simplify it
* wrap-up
  * status to 'wrap-up', simplest of all (can just use setStatus in-line)
* completed
  * status to 'completed', and Un-Assign

A work-item update could be evaluated as an array of actions strung together by state driven conditionals. Before diving in recall that:

`{ queue: null }` should result in:

* remove queue from work-item (all stauses including assigned)
* if routed,queued (i.e not ivr,assigned,wrap-up)
  * Sets work-item status to IVR
* else if routed
  * cleanup pendingitem/sessionLock

`{ queue: someQueueId }` should result in:

* Set queue to `someQueueId`, size, prio, settings, etc for work-items
* From ivr,routed (i.e. not queued,assigned,wrap-up)
  * Set work-item status to 'queued'
* if routed
  * cleanup pendingitem/sessionLock

`{ assignedTo: null }`:

* Unset the work-items assigned user, session, and team
* If assigned,routed
  * hasQueue: enterQueue, set status to 'queued'
  * noQueue: set status to 'ivr'
* else if routed
  * cleanup pendingitem/sessionLock

`{ assignedTo: someUser }`:

* set `assignedTo` and accepted to someUser, set/remove session if its not active
* set new sessions capacity, assign
* set old sessions capacity, unassign
* From !wrap-up
  * set status to `assigned`

Now lets dive into a code example and see how this might look in practice:

```javascript

// should we branch on isSync to give us more granularity and ultimately isolate out router actions?

let inWrapUp = workItem.status === 'wrap-up';
let hasQueue = !!workItem.queue;
let actions = [];
if (data.queue === null }) {
  hasQueue = false;
  actions += [changeQueue(null)];
  if (workItem.status in ['queued','routed']) {
    actions += [setStatus('ivr')]
  }
  if (workItem.status === 'routed') {
    actions += [unRoute()];
  }
}
else if (data.queue is a queueId) {
  hasQueue = true;
  actions += changeQueue(queueId);
  if (workItem.status in ['ivr', 'routed'] ) {
    actions += [setStatus('queued')];
  }
  if (workItem.status === 'routed') {
    actions += [unRoute()];
  }
}
if (data.assignedTo === null) {
  actions += [unAssign()];
  if (workItem.status in ['routed','assigned']) {
    actions += [changeQueue()];
    if (hasQueue) {
      actions += [setStatus('queued')];
    } else {
      actions += [setStatus('ivr')];
    }
  }
  if (workItem.status === 'routed') {
    actions += [unRoute()];
  }
}
else if (data.assignedTo is userId) {
  actions += [assign(userId)];
  if (!inWrapUp) {
    actions += [setStatus('assigned')];
  }
}
// Wrap-up
if (data.status === 'wrap-up') {
  actions += [setStatus('wrap-up')];
}
// Completed
else if (data.status === 'completed') {
  actions += [setStatus('completed'), itemRemoved()];
}
// Pause/unPause
if (data.pause === true) {
  actions += [pause()];
}
else if (data.pause === false) {
  actions += [unPause()];
}

return resolveActions(actions);
```

`actions`: A simple array of the actions to be resolved at the end of the function

`resolveActions()`: A function that expects all nested documents in dot notation that will resolve a set of actions into a single set of update commands to be executed in mongo. I know that if object and dot notation are combined and there is a collision, mongo will error and fail to update. Therefore in order to avoid collisions that I think dot notation always is a good idea.

* Dot-notation will be expected for all nested changes.
* Actions with colliding updates will be solved by highest index in the actions array (latest added)
* If desired, we could implement in-memory updating of the work-item similar to what we do in BizRules for conversations, then do a commit at the end

This code looks  similar to the current switch statement for a work-item updates command selection because it is examining the same fields as these fields directly map to the supported work-item updates, except that commands can be combined and are composed in an RPC ordered format. 

This example above makes it easier to manage several complex parts of the current system, and has the following benefits:

* Extensibility: our current cmd architecture doesnt take wrap-up into account for the most part and this would allow us to easily target that state.
* Reducing avalanch factor: Current arch can contribute to unexpected cascading changes, i.e. when we change one part of a command it could have cascading effects. With this new arch, we can target specific use cases easily and also combine commands in a more managable way.
* RPC composition: allows for ordered changes, and will allow for for combining commands in a straight forward way.
  * Could be worth offering this as a seperate api endpoint, although for now the smoothest path forward is to leave the PUT endpoint as is. Next project maybe?
  * Should we leave this endpoint open and then create a new internal endpoint that is for BRs, Workflows, Router and Syncing? Its not currently necessary for us to expose a way to make these updates today, only accept/reject from the app is necessary to be open today.

This should be done in a very careful way however. We will need to:

* Create a filter that isolates supported use cases as defined in an array or object. It defaults to the old switch statement otherwise.
  * Roll this out with a routing-reason containing a bool for which code path was taken
* Make small changes for certain use cases only. i.e. for `{ queue: null} (potentially for one status at a time)`
  * Agree as a group as to what the behaviors should be
* Lean toward creating stateless actions, logically seperate the stateful conditionals from the actions
* Capture current work-item command usage
  * add logging and write elk script
  * Does anyone update more than 2 fields/time? What percentage?
  * Can we see in DD what work-item update payloads look like?
* The Queue command should be broken up bc it is complex as is.
  * Unassignment is a great candidate to un-mingle from the Queue command. Currently `{assignedTo: null}` goes into the queue command, but maybe it should be slightly more granular.
  * Queue command assumes there is some queue in play, but work-items can be created in an assigned state and skip queueing alltogether. This is an issue if you try to unassign such a conversation/work-item.

In a strategic manner we should go one update at a time and consider each possible state for each update:

* first only support `{ assignedTo: null }` from all work-item states
  * Create a "filter" in routing-worker that would match this use case only and send it into the newly supported code path. It will fallback to old switch statement otherwise.
* Put our heads together on this case and get on the same page about how it would behave for each work-item state
* then add support for `{ assignedTo: null, pause }` or `{ queue: null }` next depending on:
  * if we wanted to tackle the unsupported states for single field updates
  * or go straight for combining actions/cmds before supporting all states for all single field updates.
* Repeat until we support all use cases that we want to support (6 or 7 times likely)

Less importantly, We should consider the following work as well:

* Isolate routing decisions from sync updates and api updates.
  * Restrict api users from using work-item commands like they can today
  * Routing decisions could use the patch, or another endpoint thats internal (not in api)
  * Leverage how we have 'isSync' in an update
* Restrict updates to N fields/time max
  * We currently dont support even two fields being updated at a time, except for a handful of usecases
  * The proposed pattern may actually support combining all fields in updates, but it still may be worthwhile to restrict to reduce complexity.

## Denormalization

Currently, all commands leave denorming up to the developer. This increases the difficulty for the developer to realize the expected behaviors in real working code. A few examples:

* Tracking workItemCount and pausedWorkItem count on a work-session. Would it be worthwhile to split the work-items array in sessions so that we can simply have these values be the length of the two arrays `workItems` and `pausedWorkItems`? That way we wouldnt have to keep track of them on each update, and could just integrate the array swapping into the pause/un-pause command.
* I was hoping to dedicate more time to this section but ended up running out. If anyone has thoughts/ideas here, please comment :D

### Commands

#### Dequeue Command

Funnel for all updates that unset queue: `{ 'queue.id': null, ... }`

Can be combined with: None
Cannot be combined with: Routed, Accepted, AssignedTo, Status, Paused

Supported Behaviors:

`{ queue: null, ... }`:

* Sets work-item status to IVR
* Unsets work-items queue, assignedTo, session, and team
* Updates work-session w/ common Item Removed function

Composition Table:

queue | routed | accepted | assignedTo | paused     | status                    | Supported | Should we support?
----- | ------ | -------- | ------     | ------     | ------                    | --------- | ---------
null  | ---    | ---      | ---        | ---        | ---                       | Yes       | Yes
null  | userId | ---      | ---        | ---        | ---                       | No        | No
null  | ---    | userId   | ---        | ---        | ---                       | No        | No
null  | ---    | ---      | userId     | ---        | ---                       | No        | *** Yes ***
null  | ---    | ---      | ---        | true/false | ---                       | No        | *** Yes ***
null  | ---    | ---      | ---        | ---        | assigned,wrapUp,completed | No        | No

#### Queue Command

Funnel for all updates that match either of these:

* Update queue to someQueue`{ 'queue.id': someQueue, ... }`
* Update assignedTo to null `{ assignedTo: null, ... }`

Can be combined with: Paused
Cannot be combined with: Routed, Accepted, AssignedTo, Status

The queue command is a highly used command that is complex and has an interesting history. Originaly it was meant only to be used when requeueing something (i.e. always unassigning and re-queueing for every Queue command), but we recently made a change to support changing queue only when a work-item is assigned as part of KDEV-26039.

Convo Queue Does Not Sync Queue to WI if Assigned: <https://kustomer.atlassian.net/browse/KDEV-26039>

Behavior from Each Status:

`{ queue: queueId, paused? }`:

* From Assigned:
  * Set work-items queue only, dont change status or session
* From all other work-item states
  * Set work-item status to queued, assign new size, priority, enteredAt
  * Unsets the work-items assigned user, session and team
  * Remove work-item from session, update capacity

queue   | routed | accepted | assignedTo | paused     | status            | Supported  | UI/Sync triggered
-----   | ------ | -------- | ------     | ------     | ------            | ---------  | ------
queueId | ---    | ---      | ---        | ---        | ---               | Yes        | Yes
queueId | userId | ---      | ---        | ---        | ---               | No         | no
queueId | ---    | userId   | ---        | ---        | ---               | No         | no
queueId | ---    | ---      | userId     | ---        | ---               | *** No *** | Yes
queueId | ---    | ---      | ---        | true/false | ---               | Yes        | no
queueId | ---    | ---      | ---        | ---        | wrapup, completed | No         | no

`{ assignedTo: null, paused? }`:

* If work-item already has a queue
  * Set work-item status to queued, assign new size, priority, enteredAt
  * Unsets the work-items assigned user, session and team
  * Remove work-item from session, update capacity
* Else
  * We fail and stop processing!! There is a bug here! TODO: KDEV-34733

assignedTo | routed | accepted | queue   | paused     | status           | Supported  | UI/Sync triggered
-----      | ------ | -------- | ------  | ------     | ------           | ---------  | ---------
null       | ---    | ---      | ---     | ---        | ---              | Yes        | Yes
null       | userId | ---      | ---     | ---        | ---              | No         | No
null       | ---    | userId   | ---     | ---        | ---              | No         | No
null       | ---    | ---      | queueId | ---        | ---              | *** No *** | Yes
null       | ---    | ---      | ---     | true/false | ---              | Yes        | No
null       | ---    | ---      | ---     | ---        | wrapUp,completed | No         | No

#### Route Command

This command is intended to route a work-item to a work-session. It is quite simple.

Funnel: `{ 'routed.to': someUser, ... }`

Can be combined with: None
Cannot be combined with: Routed, Accepted, AssignedTo, Status, Paused

Supported Behaviors:

`{ 'routed.to': someUser }`:

* Work-item:
  * Sets status to `routed`, `lastRevision.routed` to someUser and `session` to someSession
  * Unsets `assignedTo`
* Session:
  * Use common itemRemoved on oldSession
  * Use common addPendingItem on newSession

routed   | assignedTo | accepted | queue   | paused     | status           | Supported  | UI/Sync triggered
------   | -----      | -------- | ------  | ------     | ------           | ---------  | ---------
someUser | ---        | ---      | ---     | ---        | ---              | Yes        | No
someUser | someUser   | ---      | ---     | ---        | ---              | No         | No
someUser | ---        | userId   | ---     | ---        | ---              | No         | No
someUser | ---        | ---      | queueId | ---        | ---              | no         | No
someUser | ---        | ---      | ---     | true/false | ---              | no         | No
someUser | ---        | ---      | ---     | ---        | wrapUp,completed | No         | No

#### Assign Command

Funnels:

* Setting accepted: `{ 'accepted.by': someUser, ... }`
* Setting assigned: `{ 'assignedTo': someUser, ... }`

Can be combined with: Paused
Cannot be combined with: Routed, Accepted, AssignedTo, Status

Supported Behaviors:

`{ 'accepted.by': someUser, paused? }`:

* WorkItem
  * set status to `assigned`, `assignedTo` and accepted to to someUser, set/remove session if its not active
  * set new sessions capacity
  * set old sessions capacity

accepted.by | assignedTo | routed   | queue   | paused     | status           | Supported  | UI/Sync triggered
--------    | -----      | ------   | ------  | ------     | ------           | ---------  | ---------
userId      | ---        | ---      | ---     | ---        | ---              | No         | No
userId      | someUser   | ---      | ---     | ---        | ---              | No         | No
userId      | ---        | someUser | ---     | ---        | ---              | Yes        | No
userId      | ---        | ---      | queueId | ---        | ---              | no         | No
userId      | ---        | ---      | ---     | true/false | ---              | no         | No
userId      | ---        | ---      | ---     | ---        | wrapUp,completed | No         | No

`{ 'assignedTo': someUser, paused? }`:

* y

assignedTo | accepted | routed   | queue   | paused     | status           | Supported  | UI/Sync triggered
-----      | -------- | ------   | ------  | ------     | ------           | ---------  | ---------
someUser   | ---      | ---      | ---     | ---        | ---              | No         | No
someUser   | userId   | ---      | ---     | ---        | ---              | No         | No
someUser   | ---      | someUser | ---     | ---        | ---              | Yes        | No
someUser   | ---      | ---      | queueId | ---        | ---              | no         | No
someUser   | ---      | ---      | ---     | true/false | ---              | no         | No
someUser   | ---      | ---      | ---     | ---        | wrapUp,completed | No         | No

## Meeting notes w/ sergio

* History of work-item commands (who, why, when)
  * It was built in phases. V1 one function, then sergio realized how complex it was, so he createad V1.5 w/ the command pattern
* Its complex because:
  * we are updating 2-3 things at once (revision, work-item, newSession, oldSession)
  * making different decisions based off the current status of the work-item
  * 
* The switch statement
  * Was built in a way to select 1 update at a time simply because its more work to support.
  * Could be leveraged to move some of the complexity out of the commands ()
* Running commands in succession/composition would be more performant 
* Could be a good opportunity for RPC pattern