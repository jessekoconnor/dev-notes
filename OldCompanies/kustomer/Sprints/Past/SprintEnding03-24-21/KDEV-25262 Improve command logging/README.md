## Overview

Improve the logging when a work-item fails to run. 

The reason to add this logging is to increase the visibility into errors that occur during work-item command execution. Currently the code stops executing and we just see exception bubble up. We are missing the context, like for 

With this change we will console error the: 
* errorData 
* the name of the command that was running
* The params passed into the command

[KDEV-25262]

## Verification Plan (required)

Unit tests included in this PR

## Details (optional)

## Links
Kibana: data.name:"routing-api" AND data.level:50 AND NOT "Producer SNSEventProducer timed out"  AND NOT "MongoNetworkError"