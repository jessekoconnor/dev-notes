# Order the audit logs by event publishAt

As a user, I would like to order a conversations audit logs by their events `updatedAt` timestamp. Currently these audit logs are returned in the order of their descending mongo ids.

AC's:
* Start storing `updatedAt` in a conversations audit log events
* Start returning `updatedAt` in a conversations audit log events
* Return a conversations audit logs sorted by `updatedAt`

# Screenshots of sorting
In these screenshots we can see the following observations from the audit logs for the Farmer's Dog original case:
* The order returned from the api is by `id` desc
* We dont currently return `updatedAt`
* When we order by publishedAt we see that its close to the original order, but still not quite there (could be better)
* Created at has a bigger order difference.

## Order by id:
https://share.getcloudapp.com/X6u9ZKBg

## Order by publishedAt:
https://share.getcloudapp.com/KouZg9rn
