## Overview

### Problem

There is a feature whos intention is to automatically unassign a user when a conversation is reOpened and the assigned user is offline. This feature is currently behaving incorrectly - it will run on a conversation reopen AND a conversation creation. 

This causes a bug where when a user creates an outbound message, they get assigned the message (via assignConversationOnMessageCreateWorkflow) but then they get unassigned shortly after due the feature & flaw mentioned above. 


### Solution
This work fixes the feature to only unassign when the convo is reOpened, and not when a conversation is created. 

This addresses the use case where a user creates an outbound message, their new convo will no be tampered with any longer as its not a reopen.


[KDEV-22218] [QnR] Update automatic user unassignment setting to run only on conversation re-open

## Verification Plan (required)

1) Creation of conversations
    * From inbound messages verify no change in behavior
    * From outbound messages, make sure the workflow is able to assign me
    and doesnt get unnasigned if I am offline.
2) Reopened convos
    * Make sure that the convos all get unassigned when im offline
    * Make sure I stay assigned when im online or busy
 
## Screenshots

### Feature Description screenshot in the QnR settings
Notice the mention of "reopened" in the feature descr in-app haha XD 

# Prod
before:
https://share.getcloudapp.com/p9ubPg8y

After:
https://share.getcloudapp.com/9ZuxjeWK


# Staging
Before:
https://share.getcloudapp.com/qGuEdZKX

After:
https://share.getcloudapp.com/qGuEKjz6

### Before on QA
https://share.getcloudapp.com/z8u6nv92

### After on QA
https://share.getcloudapp.com/yAuDvdxG

@kustomer/platform 