## Staging migration cmd
```

# Prod
go run main.go -env prod1 -user jesse -ttl 1d12h
go run main.go -env prod1 -service accounts-api -command "node /opt/app/scripts/add_timeline_modal_view_roles.js"

go run main.go -env prod2 -region eu-west-1 -user jesse -ttl 1d12h
go run main.go -env prod2 -region eu-west-1 -service accounts-api -command "node /opt/app/scripts/add_timeline_modal_view_roles.js"



# QA
go run main.go -env qa1 -user jesse -ttl 1d12h
go run main.go -env qa1 -service accounts-api -command "node /opt/app/scripts/add_timeline_modal_view_roles.js"

# Provision the instance
go run main.go -env staging -user jesse -ttl 1d12h
# Run the migration
go run main.go -env staging -service accounts-api -command "node /opt/app/scripts/add_timeline_modal_view_roles.js"
```


## Overview

Add a migration script w/ the following behavior
* Connect to the accounts-api database
* Use the rolegroupversion collection
* Page through all records in ascending order
    * If records in a page contain one of ['org.permission.company.read', 'org.permission.customer.read', 'org.permission.conversation.read']
    * Then add respective permission:  ['org.view.timeline.company.modal','org.view.timeline.customer.modal', 'org.view.timeline.conversation.modal']

[KDEV-25676]

## Deploy Order
1) Deploy BE code change
2) Run migration
3) Deploy FE
4) Run migration again (to catch any newly created rolegroupversions)

## Verification Plan (required)

1) Run on local db and test script runs as expected
2) Copy staging db down to local and test script runs as expected
3) Dry run of deploy plan on QA
    * Create some rolegroupversions btw steps, verify they are migrated correctly






## Find the size of the two collection in the accounts-api database:

### Servers?
Prod1-MongoDB-Atlas-Sobjects-RW
Prod2-MongoDB-Atlas-Sobjects-RW

(I would request read only access, but tested on staging RO and got `Error: Error estimating document count: "NotPrimaryNoSecondaryOk"`)

### Time?
5pm edt

### Short Description
I want to get the size of two collections in the accounts-api database. 
I am strategizing about a migration plan, and I can use this data to inform how I write the migration (i.e. can I page through these collections by _id timestamp, or do I need to filter these records AND page through them by id? aka Are the collections gargantuan or tiny?)

### Related Jira Ticket
KDEV-25676

### Code Snippet
```
mongo --port xxx
use accounts-api;
db.rolegroups.estimatedDocumentCount({});
db.rolegroupversions.estimatedDocumentCount({});
```


Local run:
```
% mongo
MongoDB shell version v4.4.1
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("ddf98d50-e5f3-4174-91b3-ac45a4c76f4e") }
MongoDB server version: 4.0.21
WARNING: shell and server versions do not match
---
The server generated these startup warnings when booting: 
2021-03-25T14:17:38.433+0000 I CONTROL  [initandlisten] 
2021-03-25T14:17:38.433+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2021-03-25T14:17:38.433+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2021-03-25T14:17:38.433+0000 I CONTROL  [initandlisten] 
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> use accounts-api
switched to db accounts-api
> db.rolegroups.estimatedDocumentCount({});
21636
> db.rolegroupversions.estimatedDocumentCount({});
753
> 
bye
jesseoconnor@Jesse-O'Connor’s-MacBook-Pro accounts-api %
```

