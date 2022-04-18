# Initial Pass

## [Routing Reasons] Unassignment: Requeue when offline

Often times it is hard to understand why our routing system decides to unassign users from conversations. This story will establish a pattern that allows the routing-worker to include a reason for a routing update. This reason should be displayed in the event update for a work-item.

AC's:

* When the router or api decide to unasign a work-item due to an agent went offline, include a reason in the resulting event update.
* Reason has the following format within a work-item update:

```javascript
{
  name: 'event',
  ...
  body: {
    name: 'kustomer.work-item.update',
    attributes: {
      ...
    },
    relationships: {
      ...
    },
    meta: {
      routingReasons: [{
        action: 'UNASSIGN_WORK_ITEM'  // The action that this reason is explaining
        code: 'REQUEUE_WHEN_OFFLINE', // The reason's code
        description: 'Unassigned because the agent went offline', // Human readable explataion
      }],
    }
  }
}
// https://jsonapi.org/format/#document-meta
```

## Other possible areas of focus

Settings page screenshot (explanations): https://share.getcloudapp.com/eDuypZrp


1. Accept Timeout
2. Automatic user unassignment
3. Agent Timeout
4. Syncing Logic
