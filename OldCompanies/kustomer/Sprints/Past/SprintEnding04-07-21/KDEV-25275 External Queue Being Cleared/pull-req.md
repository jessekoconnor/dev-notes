## Overview

Preserve a work-items external queue on work-item requeue

[KDEV-25275]

## Verification Plan (required)

[Summarize what you're doing to be confident this change works as expected. Include manual tests run, testing planned during rollout and any automation you're relying on.]

## Details (optional)

When a work-session goes offline, and a work-item gets requeued, the new work-item revision looses track of the external queue. This PR simply perserves a work-items external queue when it gets requeued.

@kustomer/platform 

[KDEV-25275]: https://kustomer.atlassian.net/browse/KDEV-25275