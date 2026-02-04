# Self Review

To what extent did you achieve your set goals for this period?

In my goal to increase QnR coverage w/ integration tests before year end, I have made quite a bit of progress. I have broken this goal down into 6 key results, 2 of which are complete and 2 more are progressing now.
Specifically, I have created a test for creating a message and waiting for the resulting work-item get assigned and completed, two tests for queue deletion, two tests for the `PerserveQueueEnteredAt` setting, and I have created two tests for re-open scenarios. I have even managed to introduce a conversation triggered workflow that updates its conversation into the tests so that one of our top QnR issues can now be covered in future tests.
Finally, while adding these test cases into the repo, I noticed that they were long, hard to read and cumbersome. Therefore I created three helper files in the integration tests repo to simplify test cases down to encapsulated, and shared their basic structure w/ the team so that any of us can add to these tests as part of any story we decide could use the testing.

Next is my goal to Review 5 tech specs and Write 3 tech specs by end of year. I have written one very comprehensive tech spec so far, CWF's; I am very proud of this work in both writing the spec and implementing it on schedule. I recieved praise from  Jeremy and Joey in the spec review process, and from Jacobo and Josep in the implementaion phase for excellent collaboration and execution. I have another spec in draft mode w/ some early feedback, so I am on track here for the end of the year.
I have reviewed another spec called "Phased BRs for Assistant Rules" by Cody Han and gave the associated PRs some very close reviews, provided lots of feedback and encouragement, end even pulled down the changes down for local testing myself. I have 4 more specs to review to meet my goal, but reading specs goes much faster than writing them, so I think I am on track here as well.

Finally, my goal to Minimize or eliminate non-deterministic behaviors in QnR is relatively new, but in the next few weeks I should be able to accomplish several of the key results. One key result that I have already accomplished is removing a Re-Open check in routing-worker on work-item creation. I will accomplish more as I collaborate with the team and test out creative solutions to the many seperate non-deterministic issues plaguing QnR.

Choose and describe 1-3 skills in which you excel in.

I take pride in producing high quality, clean code. A good example of this is the CWF project. It has unit tests and controller integration tests for nearly every scenario I could think of. Because I built it in a way that it is very extendible and well suited for future cases, one future use case (Fire/Forget) will literally be only adding a workflow action into the kustomer app definition. Other future use cases will also be able to leverage and build off the current architecture. The code was designed to be readable and to extend current and existing patterns so that a Kustomer engineer who is familiar w/ these patters will intuitively be able to understand most of the architecture and design patterns.

I take code reviews very seriously. I am not afraid to ask lots of questions and stay on a code review until it is fully complete. I am also not afraid to pull down a PR's branch and test it out locally for myself, as I did with Cody Hans Phases PR and several of Katrinas PRs. The bigger the PR, the more attention it needs, and I will not shy away from a PR just bc it is long. I also do my best to guide people toward annotations on larger PRs.

* Sharing knowlege
* Works collaboratively with others and contributes effectively to the success of all teams within his/her department
* Taking reviews very seriously
* Been pushing for integration test ease of use

Choose and describe 1-3 skills in which you could invest in developing and improving.

I still have not gotten around to researching design patterns, or taking some course about it, yet I still feel that it is relevant to my career growth. Therefore I will aim to accomplish this by years end as is outlined in my SMART goals.

What do you want to learn/accomplish next? How do you see your career progressing?

Over the next 6 months for accomplishments, I would like to see a decrease in p1 QnR issues. If I/we can solve to bigger problems w/ the QnR system, then we can increase in speed because we wont be bogged down by intermittent QnR P1s and will be able to focus for full sprints on other things. I would also love to see more integration tests covering uncovered features like workflows and business rules.
Over the next year I would like to see Little to no p1 QnR issues, and I would like to see convos as the source of truth, and only 1 way syncing (convo -> workItem only). I would also like to see all planned CWF work completed, as I very much enjoy working with this feature.

In terms of career progress, I am interested in remaining an individial contributor for as long as possible. Over the next year, I would like to continue focusing on learning platform automations domain knowlege as well as allocate some time/energy toward some mentorship for Maggy and Matt. I am also a bit curious about the architect role, and learning more about what it is and how it fits into the career ladder at Kustomer.

Finally I am interested in meeting with you @oren to discuss a plan to get to the next level in the career ladder; even if it is early to start considering this, it never hurts to get a head start :D

## additional questions

What projects are you most proud of?

* CWFs
  * recieved praise from jacobo
  * Excellent collaboration with josep
  * Awesome collab w/ matt
  * Worked really hard, lived/breathed CWFs
* Integration Tests

What are the things you’ve learned?

* Always learning more about QnR, Workflows, and BRs
* That I enjoy the tech spec process

What projects have you enjoyed working on the most, and why?
What opportunities do you see in regards to your performance?
What are some things you would have done differently looking back?

* CWF's:
  * Would have had one resource type of `workflow_call` that gets updated when a response comes in
  vs. having a seperate resource `workflow_response`. Had I chosen the first pattern,
  I could have just had a `workflow_call.create` and `workflow_response.update` event but not I will have
  a `workflow_call.create` and `workflow_response.create` events.

What resources would help you be successful?

* Continuing to collaborate w/ architects to learn more about how the systems work
* Continue to take on challenging QNR issues

What would you like to achieve over the next 6 months?

* Significant decrease in high priority QnR issues
* Continue weighing in on tech-specs
