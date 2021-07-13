## Overview

This pr adds a delete endpoint that requires only an orgId. This will be useful bc I would like to add a cleanup step in janitor-worker to clean up esmonitors, however the context we have access to from the janitor worker is only the orgId. Therefore, this endpoint will allow us to make one call instead of two calls (1 for a list of monitors, 1 to delete the target monitor) 

[KDEV-27675]

## Verification Plan (required)

Test on QA and Staging:
1) New endpoint works
2) Old endpoint still works

## Screenshots (optional)
![Screenshot1]()
