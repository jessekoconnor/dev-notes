## Overview

Add new view role that allows users to see company, customer, and conversation edit modal.

[KDEV-25676] [PERMISSIONS] [BE] Add permission for hiding edit modals

## Verification Plan (required)

Integration testing:
  * User role is created with timeline view permission
  * Manager role is created with timeline view permission
  * Content Admin is created with timeline view permission
  * Administrator - not necessary (cannot be duplicated)
  * Org Owner - not necessary (cannot be duplicated)
  * Collaborator User - not necessary (cannot be duplicated)

Manual testing:
  * Create custom roles from User, Manager, and Content Admin
    * Toggle their conversation edit modal value on, ensure users w/ that role-group cannot get to modal
  * Use admin and Org Owner
    * Ensure that access to modals still exists

@kustomer/backend-devs