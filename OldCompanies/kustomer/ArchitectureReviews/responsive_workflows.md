
# Meeting Notes 6/4: Kustomer App vs. Workflow Utilities app

## TLDR

* RWFs are definitely an extension of Sheduled Workflows
  * Especially with the recent change to assume a NOOP if no `asyncResponseTarget`
  is defined.
* Scheduled workflows should not be the only workflows that are schedulable
  * Scheduled workflows were the first attempt to make a workflow "callable"
  * Lets stay true to that intention, and absorb Scheduled into RWF's
* Absorbing scheduled workflows into RWF's mean that "Callable" will actually
make sense.
  * No more scheduled workflows or responsive workflows. Just Callable Workflows
  that can be scheduled AND/OR integrate w/ chat-assistant.
  * Responsive Workflows may change name back to Callable

## More info

What is the future of Scheduled Workflows?

* What determines a workflow type anyways?
  * Seems to be the trigger?
  * Are we trying to encourage the admin to think in terms of the trigger?
  * Are we restricting workflow flexibility by saying:
    "If you ever want to schedule a workflow to run in the future,
    it needs to be on its own, and cannot be caller by Chat Assistant,
    Buttons or immediately by other workflows"

If we create a new Workflow Utilities app:

* How many actions would be in here in the next 6mo/2yr
  * How many is too little?
  * Will we get into another "scheduler" situation? i.e. 1 or 2 actions only
  * Will scheduled workflows stick around? How long if not?
* WOuld we end up in the same spot that the scheduler app landed in?

If we move both of these actions into the Kustomer app:

* Workflows feel like a kustomer thing, like conversations, companies.
Why would we deviate from that perspective? - Tobias
* But there are so many actions in Kustomer already!
  * We see a future where we better present the actions. (3rd dropdown?)
  * This way the sheer number of actions will not be overwhelming.

Possible Actions:

* Schedule a workflow
* Respond within a workflow
* Call: fire/forget
  * Schedule could get baked in here
* Call: fire/return
  * Schedule could get baked in here too

# Official Meeting Notes 6/1

Summary:

* No major concerns, but still more details to work out before this spec is
completed.
* Remainder of spec work can be done asynchronously
* The more perscriptive the better
  * The tighter the boundaries, the easier it usually is to maintain and scale
  in the future

Talking Points Covered:

* Add a NOOP response target
  * Should this be assumed if a client doesnt provide response info?
* Validation on Save vs. `Response not Reached`
  * Think about the Case when a workflow is short-circuted by a condition
  i.e. didn't reach the intended end leaf
  * Validation on Save
    * Prevents the need for `Response_not_reached` bc every leaf node of the
    workflow has a Reponse Action or user cannot save
  * Response not Reached
    * Lets devs/admins know that a workflow is not reaching expected leaf nodes
* Should this Response action live in the Kustomer app or New App? What about
renaming scheduler app to be Workflow, and house both schedule and response actions?
  * New app or combining w/ scheduler under new name
    * Pro: Provides convenient separation of work
    * Pro: Easier Version Controll as there will be less changes
    * Con: Scheduler feels wrong in its own app
      * But what about if scheduler was with response under a Workflow app?
  * Kustomer app
    * Easier to auto-install
    * Feels better than being in a new app
* Multi response vs. Single Response
  * Workflows should behave like a function, and a function can only return once
  * Could leaving it up to a client be an option?
    * Future use case: Some looping functionality in workflows, where we want
    one response per array entry
* Could something ever be Callable and not Responsive? and vice versa?
* Protection by internalApiToken and not being added to the api gateway is sufficient
for the MVP
* Not always responding to callers in cases where they done care could save us
some money, definitely worth putting thought into

ToDo's:

* (/) Seperate clientContext from responseMeta
  * seperate object for flexibility, no need to intermingle
* (/) Assume a noop response if no response info is provided by caller
* (/) Meet w/ Oscar about commands to gain general understanding
  * Could a proxy/asyncHandler for a button live here
  * Can we rename an app? or should we just add to Kustomer app?
    * ex: Scheduler => Callable Workflows
      * ex: .Scheduled Workflows
      * ex: .Responsive Workflows
  * Documentation for developers
* (/) Authenticate `workflow_call` endpoint to internal tokens
* (/) Loop back over "caller crashed" scenario
* (/) Properly document a single attempt for reliability of MVP
* (/) Add Validation to restrict only one response per path - Added as a future consideration

Resolve all topics metnioned.

# Meeting Notes 6/1

Arch Review #2

* No major concerns, but still more details to work out before this spec is
completed.
* The more perscriptive the better
  * The tighter the boundaries, the easier it usually is to maintain and scale
  in the future
* 




Suggestions:

* Add a NOOP response target

Moderate Concern or Needs Alignment:

* Validation on Save vs. `Response not Reached`
  * Does this help w/ the Case when a workflow is short-circuted by a condition
  i.e. didn't reach the intended end
  
  * Battle test it
  * Forces else catchAlls
  * UX, automate in the UI
  * Higher barrier to entry
  * How do I know if I got shortcircuted by a condition
  * Shouldnt be required in the initial spec
  * If we get feedback from those users they need that

  * Validation on Save
    * Prevents the need for `Response_not_reached`
    * 

    * May a lot of catchAll conditionals
    * Slightly harder setup for Admin
      * 

  * Response not Reached
    * 

* Kustomer app vs. New App
  * Workflow app
    * Provides convenient separation
    * Easier Version Controll
  * Kustomer app
    * 
  * 3rd level dropdown for kustomer app only?

* Multi response vs. Single Response
  * Should it just be up to a client?
  * Dont want to block off some looping functionality future use case

* Could something ever be Callable and not Responsive? and vice versa?
  * Stems from the question of havving callable and responsive
  * If this isnt possible, we should consider migrating these to one trigger
  type enum

ToDo's:

* Seperate clientContext from responseMeta
* Meet w/ Oscar about commands to gain general understanding
  * Could a proxy/asyncHandler for a button live here
  * Can we rename an app?
    * ex: Scheduler => Callable Workflows
      * ex: .Scheduled Workflows
      * ex: .Responsive Workflows
  * Documentation for developers
* Authenticate `workflow_call` endpoint to internal tokens


# OScar Meeting

Questions:

* Can I force app installs across all of kustomer?
  * Only kustomer app?
  * Or can I also force install a non-kustomer app?
* Can we rename an app?
  * ex: Scheduler => Callable Workflows
    * ex: .Scheduled Workflows
    * ex: .Responsive Workflows
* Development plan
* Documentation for developers

Notes from meeting with Oscar:

Paths Forward:

* Renaming an app (Scheduler => Workflows)
  * Not easy, and never been done :'(
  * Requires some database migrations and increased risk of breaking scheduler app
  * Unanticipated work, may require a reEstimate
* Creating another app
  * Easy to do, done quite often
  * But probably not a good admin experience to have another app in the dropdown
* Using Kustomer app
  * Also easy and done often
  * Fairly certain Jeremy perfers Kustomer app option
  * Could we add a 3rd drilldown or some other UX improvement to make the
  kustomer actions easier to navigate?
    * This may be our best bet for admin experience and consistancy
    * Do actions have consistent naming, i.e. would this make sense?
      * note create: `kustomer.note.create` (note is the category not in a dropdown today)

# Presentation Plan

Goal: Discuss important topics that TRUST is concerned about

* Cover at least though the Proposed solution
* Please interrupt me at any time, dont be shy
* If we start to run short on time, I have a list of discussionPoints/items
* Feedback if theres any time

## Quick Overview RWF's

Motivation:

* Limited observability into workflows today
  * Audit logs, Workflow debugger
  * Missing a way to automate observability
* 2021 OKR to integrate Reply into Kustomer

RWF's will look like this:

* An admmin can create a responsive workflow and can add a response action
* A user can call a RWF and provide inputs and a callerId
* A RWF will start processing w/ Inputs and callerId propogated along on context
* 

RWF's in their first iteration will allow for:

* Conversational Assistant to call a RWF
  * w/ an orderId

## Important highlights

1) New App vs Kustomer app

* Schedule workflow action is already a new app
* Assistant and other consumers would need to check for a new app
* Kustomer app actions are a really long list

2) Are RWF's app enabled

3) Security of calling a RWF

4) Input/Output validation




Feedback:

* I liked the async nature of the review style
  * Allows for enough time to research concerns/objections
* I made

## Personal Take

The following list is my personal/private impression of how the review went
so i'd appreciate it if these opinions weren't shared:

* The meeting got a bit derailed in my opinion
* Very briefly touched on the proposed solution
  * Was hoping to talk about the proposed solution more
* Ended up chatting about these three topics for most of the hour:
  * Why wouldnt we use Commands instead of creating RWF's?
  * Lack of focus on current limitations of platform
  * Lack of focus on future use cases
* I generally got the jist that the doc is too long, and that its a lot to
expect somebody to fully read.
  * I added in a lot of implementation details that I think I will remove
  * Make this easier for somobody to read, make it shorter, really cut the fat

## Notes from 5/25 meeting

### TLDR

* Jesse to schedule another Architecture Review
* Spec lacks:
  * Highlighting the gaps of the plaftorm today
  * Commands as an alternative to RWFs
  * Focus on future use cases
  * Thought into Admin Experience

### More Info

Highlight the gaps (Jeremy):

* What gaps currently exist in the plaform today that prevent us from
accomplishing this w/o RWF's?
  * Workflows are not synchronous like a network request
* Relate each gap to Security, Reliability and Observability
* Specifically call out the Async nature of workflows at the top of the spec.
* Draw attention to these gaps at beginning of tech spec (so they are hard to
miss)
* Possibly add a new section into the spec for this

Address the following additiona alternative solutions:

* Create a hook workflow, and then configure an input
param that then gets passed into a restAPI workflow step?
  * Why wouldnt we just to this instead of RWF's?
* Add Commands as an alternative solution to RWF's:
  * Add pros/cons of Command Solution
* Address Security, Reliability and Observability in each of these solutions
* Address and corrolate the gaps in these solutions

Focus more on future proofing for the following use cases:

* Buttons in the UI
  * Propose in more detail, and with more solutions on how this part may work
  * Focus on the gaps that each button solution may introduce
* Apps ecosystem:
  * Will an admin see an app installed RWF?
  * Is there a use case for an RWF thats installed by an app?
  * Identify this use case and add to spec.
  * How do I call workflows from an app? (Commands probably?)
  * How does the RWF appear in the worklfow list?
  * Can it be sorted by RWF type?
  * How do app installed RWFs appear in the list?
  * Can an admin modify an app installed RWF?
* Custom Permissions
  * How could some users be given access to call a specific RWF while others
  are not given access to call a specific RWF
  * Today we can make a shortcut, and theres a concept of visibility/sharing
  * This is probably stored on the shortCut itsself as an array of userIds
  * Who can edit the permissions of the permissions tho?
* A workflow calling an RWF and awaiting its response before continuing on
  * Do we care about this use case?
  * What is a real use case we can document/pointTo in this category?

Add lowfi designs into the Presentation Layer of the tech spec or PRD.
  * https://kustomer.invisionapp.com/freehand/Workflows-Redesign-HAwUC5C4M

## Meeting w/ matt

Commands:

* Can add uri and token into a command
* Cards can run these commands
  * This attatches the authtoken of the loggedIn User
* A FE handler already exists (just call `command.run`)
* Makes a lot sense for a 3rd party integration thats synchronous

* Is ultimately a wrapper around a request
* A request is not tailored to

Apps Ecosystem:

* How do I call workflows from an app? (probably cmds)

Product Questions:

* Would I even want to install a RWF from an app?
  * May be the last thing they try
  * Because apps are for interfacing with a 3rd party api
  * And we are building something that interfaces with internal api's

If I had to choose btw a shopify api endpoint wrapped in a command, versus a
workflow that calls a restapi step, its always going to be the command. Thats
bc a workflow restApi action is hard/timeConsuming to get right.

Not everybody wants to create an app to solve their use cases:

* But theres not additional work on our end
* But what is the use case?!? Would anyone even do that?



Milestones to add:
* Validation
* Call By AppName




> Callback URL seems like a difficult pattern to apply universally. 

I agree that a callback URL doesn't fit perfectly into all use cases, and am very open to this idea; continuing this topic below...

> For instance if I have a button in the UI, I'm not sure how we will get a callback URL that goes back to the client. In our current paradigm, you would need to setup a new API that receives distinct transactions and that API would produce an event that gets pushed down the socket to the client.

I feel like theres an implied alternative here that I may be missing. Im not super familiar with web sockets, but could you be implying that the workflow worker may be able to put a message directly into a channel that a the specific user is subscribed to? (Button use case) 

> If we wanted to invoke workflows directly from an existing workflow someday, we would need to either add in an override from the client and make unspecified changes to the implementation to allow the workflow to be invoked inbound.

That has also been on my mind lately as well..

> One thought to address this is to consider an abstract Response Target interface.

Love this idea, it seems like its taking 