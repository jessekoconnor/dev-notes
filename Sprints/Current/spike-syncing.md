# Syncing

TODO:

* Work-Item creation
  * conditions for creation
  * workflow -> business rule -> QnR
  * Describe what happens when a workflow updates the conversation
* Work-Item commands
  * Explain that Switch statement (non-composable nature of the commands)
  * Create Diagram/Table of all possible combinations for commands
    * ex: table of Work-item prev state BY work-session state BY possible data payloads
    * Which dont make sense?
    * Which are common use cases?
  * Analyze each command's implementation w/ summaries
    * Which permutations from above get fully satisfied?
    * Which get partially satisfied?
    * Which get ignored completely?
  * Brain storm findings w/ one of (oren, joey or sergio) and maggy
    * Discuss a solution that involves composition.
    * Could these commands be combined versus exclusive?
  * Identify bugs similar to https://kustomer.atlassian.net/browse/KDEV-33417

## What is this feature?

Syncing is a feature in QnR that was created out of a need to keep work-item state and conversation state "in-sync". This is because sometimes a work-item will get an update that needs to propogate over to the conversation in order to be properly represented in the UI. And there may be a change made to the conversation in the UI or by a Business Rule or Workflow that needs to propogate over tp the work-item to ensure proper routing.

## How it works conceptually / light technically?

Syncing can happen in two directions, from work-item to conversation and conversation to work-item. Said another way, syncing can catch a work-item update and then update the related conversation with relevant data from the update. This feature will also work in the opposite direction catching conversation updates and propogating some/all of that update over to the work-item. There are some important limitations to understand however when considering the syncing system.

* Syncing will only occur after an active work-item exists, regardless of direction. If there is not an active work-item at the time an update is observed, syncing will not occur for that update.
  * There should not be any active work-items for conversations that are in the "done" status, or for conversations that don't exist yet.
* Not all fields will be synced, see each subsection below for detailed info on which fields get synced in which direction.
* A sync update will never trigger another sync update, regardless of syncing direction. This prevents a syncing loop, and is foundational to the syncing feature.

### Work-item update -> Conversation sync

Current Convo Sync Code: https://github.com/kustomer/routing-worker/blob/master/service/helpers/sync.js#L7

First lets discuss a common work-item to conversation syncing example. Lets say that a work-item goes through queue rules and gets placed into a queue. This triggers a work-item update which is picked up by the syncing feature. The queue must propogate over to the related conversation so that the UI can properly display that the conversation now has a queue. This conversation update is the result of this syncing feature detecting a work-item create or update.

A conversation sync from a work-item update will be calculated as follows:

* `status`
  * If a work-item update has a status of 'completed', and the conversation status is not equal to 'done', then sync the conversation status to 'done'.
* `assignment`:
  * If a work-item update is assigned while the conversation is not, then sync the assigned user to the conversation.
  * If a work-item update is queued and un-assigned, then sync the un-assignment to the conversation.
* `ended`:
  * If a work-item update is in `wrap-up` status and the conversation has `ended: false`, then update the conversation to `ended: true`.
  * Syncing will never set a conversation to `ended: false`.
* `queue`:
  * If a work-item update has a different queue than the conversation, then sync that queue to the conversation.
  * If the work-item update has no queue but the conversation still has a queue, then sync the conversation to be queueless.

### Conversation update -> Work-item sync

Current Work-item Sync Code:https://github.com/kustomer/routing-worker/blob/master/service/helpers/sync.js#L56

Next lets talk about a common conversation to work-item syncing example. Imagine that an agent has helped a customer, and is now ready to mark the conversation done. When the agent closes the conversation, that conversation update will be captured and some/all of the relevant update will be propogated to the work-item, in this case the work-item will be move to "complete" status. This work-item update is the result of this syncing feature detecting a conversation update.

A work-item sync from a conversation update will be calculated as follows:

* `assignment` (this one is a bit counter intuitive):
  * If converation has a different assigned user that the work-item, sync the user over to the work-item
  * If conversation does not have an assigned user:
    * And both convo and work-item have no queue, then sync work-item to remove queue.
    * And convo and/or work-item has a queue, then sync work-item to remove assigned user.
* `snoozed`:
  * If the conversation is snoozed but the work-item is not paused, then sync `paused: true` to the work-item.
  * If the conversation is open but the work-item is paused, then sync `paused: false` to the work-item.
* `status`:
  * If the conversation status is 'done' and work-item status is not 'complete', then sync the status 'complete' to the work-item.
* `ended`:
  * If conversation has `ended: true` but is still in the open status, and the work-item in not already in the 'completed' or 'wrap-up' status, then sync the work-item to the 'wrap-up' status
* `queue`:
  * If conversation and work-item queues are not equal, and work-item is in 'open' or 'assigned' status:
    * If conversation has a queue, then sync the queue to the work-item.
    * If conversation has no queue, then sync the work-item to be queueless.
* `delete`:
  * If conversation is deleted, then sync work-item w/ status 'completed'.

## Why was it built that way?

This feature was built in a way that it can easily route additional objects, so that if we wanted to route more than just conversation then we can easily extend. Sadly however the need to route objects other than conversations has not arisen after several years of live usage. Does this mean that we will never want to route other objects? The answer is that its possible, but not very likely.

It was also built with heavy reporting in mind, so that work-items could be queried and searched for robustly. This is utilized for features associated with SLAs, queue metrics, team pulse, and more. This is actually utilized, maybe a bit less than we expected it to be used when planning out the routing system, but still utilized none-the-less.

## What bugs / flaws does it have that we know of?

### Bidirectional syncing

This Can cause race conditions (see KDEV-28235 below). This is because there is no source of truth when keeping two sets of data in sync. A work-item update and a conversation update that occur at the same time will have undeterministic results, sometimes the convo sync will will and other times the work-item update will win, or maybe they even both succeed.

KDEV-28235 is a step in the direction of choosing conversations as the source of truth, but there is more work to be done to get to a one-way syncing reality. This reality will likely be a lot simpler to deal with, and will likely expose less race conditions (although removing al race conditions may not be possible). The remianing places for directly manipulating work-items instead of syncing from conversations is:

* Accepting a work ite - this is done on the work item, then we rely on the syncing feature to get the assignment over to the convo.
* Queueing - When queue rules run, the work-item is updated and then we rely on syncing to get that update to the convo.
* User timeout - When an agent is away for too long we update the work-item and then sync that over to the conversation.
* (Done) Auto user unassignment: This was solved in KDEV-28235 by updating the conversation directly. (see below)
* Maybe more...

Sources Cited: https://docs.google.com/document/d/1-cSFZB2PvKnh845dOHnKxuWzn9xWipx7y6ldZlr9oSY/edit#

### Sycing only on latest rev

This is not a flaw, but can result in some hard to follow behavior. If an update has the wrong rev, then dont sync. This means that a Workflow or BR or API user has already updated the conversation. However if there are tons of updates aimed at one conversation, then in theory only the latest at the time updated would go through although since we dont have mongo transactions theres no telling what could happen w/ such concurrency.

## What are customers asking for around this set of features? (list of Jiras)

1. Wanting "wrap-up" convos to route

Conversation Routing Status Stuck In Wrap-Up, Will Not Re-Route (https://kustomer.atlassian.net/browse/KDEV-32177)

In this one a Client wants work-items of status 'wrap-up' to route, but they currently do not route. A workflow was setup to put open and ended conversations back to `ended: false`, and it seems to have solved the issue.

1. ReOpen plus syncing race condition

Automatic User Unassignment Setting Intermittently Fails (https://kustomer.atlassian.net/browse/KDEV-28235)

The UnassignOnUnavailable setting used to rely on syncing to actually unassign the conversation. We would create a work-item that is unassigned, and rely on the syncing to unassign the conversation.

This was problematic in the following scenario: Imagine two conversation updates happen in quick succession; first is a reOpen and second is a queue change. Work-item gets created w/o asigned user, and this should sync back to convo eventually. But 2nd conversation update triggers a sync before the sync in the previous sentence gets a chance to complete. Therefore since the 2nd update changed the convo, the important "unasignment" sync is now trying to update a previous revision and simply drops the update and its lost forever. This is a race condition that we do not want in our product.

So we found a solution that simplifies this. Now instead of creating a work-item w/o an assigned user and relying on the sync to beat the 2nd update, We simply update the convo directly instead of creating a work-item w/o assignment. This is more reliable because it takes syncing out of the issue and reduces the time-to-unassignment.

1. Pausing + Queueing at the same time  (TODO: place this in "commands" documentation when it exists)

Status Not Syncing With Work-Item Data (https://kustomer.atlassian.net/browse/KDEV-23572)
Snoozed Convos taking up capacity (https://kustomer.atlassian.net/browse/KDEV-33417)

Both of these tickets are due to the fact that QnR commands do not work together (i.e. they work in isolation, and queue commmand didnt collaborate with a pause command). What I mean is that before the solution for 33417 was released, a request to update Queue and Paused for a work-item would result in a Queue command and not a paused command. The issue is that the Queue command was ignoring any Paused data. The fix altered the queue command to pull in the pause command in a "composition" sort of manner so that a Queue command also takes pausing into account. You can see how this is an issue, bc most of the commands only deal w/ themselves, and are not composed w/ other commands.

1. Changing queue without "requeueing" (TODO: place this in "commands" documentation when it exists)

Convo Queue Does Not Sync to WI if Assigned (https://kustomer.atlassian.net/browse/KDEV-26039)

Syncing would simply not sync a queue change unless the work-item was in the 'queued' state. This was problematic because the client wanted to update the queue while the work-item was still 'assigned' in the case that the conversation got re-opened later (i.e. client did not want a re-ope to come back into the queue the work-item is currently in)

Therefore, there was a change made to allow for a queue sync to occur in the syncing process, and also a change that allowed a queue command to change only the queue and not the status (changing status would "requeue" the work-item, which we dont want in this case).
