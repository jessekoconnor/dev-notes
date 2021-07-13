## Assign a user to a conversation and mark it done

Add an integration test for a user who is on a team w/ default queue in the teams routing settings. This is the first integration test focusing on the whole QnR flow from a users perspective. 

[KDEV-25122] 

## Details (optional)

Turns out that accepting and completing a work-item is a bit more complex that I anticipated. Mainly bc theres a semi-complex setup process.
Heres the full list of actions performed in this test:
1) Fetch users for later requests
1) Setup a new team
1) Add user to team
1) Add default queue to team settings
1) Fetch work-session statuses, need to use available status later
1) Create a customer
1) Create a message
1) Set a work-session to available
1) Wait for work-session to include a work-item
1) Accept the work-item
1) Wait for work-item to appear in work-session
1) Complete the work-item
1) Wait for work-item to be released from worksession

## Future
I hope to add more QnR integration tests for the most important qnr features in the future. My goal is to give myself and other kustomer engineers confidence that passing integration tests imply a working QnR system.