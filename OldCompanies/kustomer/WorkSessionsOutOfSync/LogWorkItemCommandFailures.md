# Summary
Improve error loggin in work-item commands

# Description
As a platform developer I want more descriptive errors when work-item commands fail to execute. Currently we see errors like the following: `cannot read _id of undefined` and they have a line number from where they were thrown; Idealy we would see the failed requests data and parameters as well as this error here. 

# AC's
* Log error contents and its trace
* Log the requested update, aka the payload of the update request.
* The requesting service is logged

# Notes:
* To throw or not to throw?
    * Are there cases where we want to catch this error and bubble?
    * Currently true that never make it to the code responsible for logging this request due to the uncaught exception, so theres essentially only the 
    * Also currently, you can get the work-items Id from datadog
* This is probably a good place to wrap in a try/catch
    * https://github.com/kustomer/routing-api/blob/master/services/work_item_command/index.js#L116-L119


# Related to 
* KDEV-15925: TypeError: cannot read property `_id` of undefined



