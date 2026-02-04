# [Callable Workflows] Add Fire and forget action into Kustomer App

## Description

As a user, I want to call a workflow from another workflow so that I can modularize my business logic.

*AC's:*

BE:
* Add a `workflow.call` action within the Kustomer app
** Call a callable workflow immediately
** Supply inputs to the callable workflow

FE:
* Admin can configure a `workflow.call` action in which:
** Admin can select from a list of CWFs
** Inputs can be configured that match the CWFs input schema
* `workflow.call` action arguments are named:
** `workflow` is the selected workflowId
** `inputs` are the selected inputs

## Open questions

* Should a CWF be able to call itself?
** This would allow for recursion, but opens up another avenue for a workflow to end up looping.
** I think we should not allow this unless we have some compelling reason
