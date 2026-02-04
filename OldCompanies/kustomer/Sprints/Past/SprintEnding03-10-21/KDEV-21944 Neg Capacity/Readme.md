# Negative Capacity
Many parts to this.. It seems to be a melting pot insersection point of the following features:
* Pending Item
* Pausing a work-item
* The busy state for work-sessions

## How pendingItem works today in the FE and BE
1) BE: Routing worker gets a new work-item and puts it into the 'routed' state, and updates a work-session's pendingItem slot to contain the work-item. 
     This creates one or more pusher events.
2) FE: Hears a pusher event, fetches a work-session, looks at all associated work-items and...
     Send update req for work-sessions status: avalibale => busy
     if one+ work-item has 'routed' state, show the green bar and accept/decline buttons.
3) If agent accepts
     move work-sessions pendingItem into workItems array
     work-items state: routed => assigned
   If agent declines
     session offline

## Snoozing/Pausing a conversation
### FE: Snoozing
Snoozing a work-item causes the FE to update a work-item with the paused field set to true.
### BE: Pausing
A work-item has a paused field that is updated to true if snoozing. Also if we are not in the routed state, but still associated to a work-session in any way, the pause inc/decrements on i

## PendingItem Detection
As we can see below, there are inconsistancies in how we determine that we have a pendingItem state. These inconsistancies lead to a strange state..
### BE Perspective
On the BE, we determine if a work-session has a pendingItem by simply checking the 'pendingItem' field on the work-session. We dont route work-items to this session as long as there is a pendingItem.
### FE perspective aka Show green pendingItem bar with "Accept" and "Deny"
Check the work-sessions work-items for a work-item in the 'routed' state. If so, show accept/Deny bar.
https://github.com/kustomer/web/blob/master/src/store/modules/routing/work_sessions/actions.ts#L137



## Potential Issues: with pausing/pending/busy:

### PendingItem + pause (w/o accepting/denying and before timeout):
In the case where we have a pendingItem and then pause it: 
* The pendingitems accept/deny bar is still presented in FE 
* Work-session is still in the busy state (non-routable until manual availability set, or accept and FE sets to avail)
* work-session still has pendingItem set
* the work-item that is the pendingItem will not get routed elsewhere. 

Do we want this behavior? 
    This behavior is either causing or contributing to all the issues below. 

My suggestion:
    If an item is pending, and the gets paused before accept/denial, 
    * requeue the paused work-item. (defined below)
        * break the work-item's association with above work-session
        * Set work-item's state to queued
        * set work-session back to available
        * clear pendingItem slot on work-session

Video: https://share.getcloudapp.com/9Zu8Lk1k

### PendingItem + timeout:
In the case when we let the timer run out, we get stuck in the pendingItem state and the timer just says 'Now' instead of a decrementingTimer. 
    * Work-session remains unroutrable bc its in the busy state 
    * Work-item remains as pendingItem and does not get routed elsewhere.
    * The pendingitems accept/deny bar is still presented in FE 
    * Basically makes the timout useless
Screenshot: https://share.getcloudapp.com/yAu6ARqe


### PendingItem + pause + timeout:
If we then timeout, we then still see the pendingItem bar and remain unroutable. 
Same issue as above on "PendingItem + timeout"
Video: https://share.getcloudapp.com/9Zu8Lk1k

### PendingItem + pause + accept:
In this case we will incorrectly decrement a work-sessions pausedCount to when we should have incremented. This happens in the assign command. (i.e. pausedItemCount: -1, should be +1)
Video: https://share.getcloudapp.com/Z4u6p05O 

### PendingItem + wrap-up + pause:
a) The work-session has the following potential issues in this scenario:
    * work-session's capacity gets out of sync, and appears negative as in the defect
    * work-session still has a pendingItem (until the pendingItem gets unpaused and handled or the work-session has ended)
    * work-session is in the 'Busy' state, until agent manually sets their state to available
Until both of these things are not longer true, the work-session is not routable.
b) The UI is no longer in the pendingItem state because there are no longer any pendingItems w/ the state of 'routed', but the BE still thinks there is a pendingItem bc the work-session has pendingItem set. 
video: https://share.getcloudapp.com/RBu4mvJ9


## Immediate solution
Stop the capacity from going out of sync.
Issues:
    * still have old issue of 
Facts:
    * work-session still has a pendingItem (until the pendingItem gets unpaused and handled or the work-session has ended)
    * work-item still has work-session association

Dont let users pause work-item if its pending:
    * Show them a toast

Sergio
    * Find out engineering reason for busy

## Longer term solution:
Decide what we wanto do when a work