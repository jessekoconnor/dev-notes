# Stress-Diffused Estimation

A method of providing reality based project deadlines, through continuous in-timeline refinement.

## Spread project stress over time instead of allowing it to accumulate in bulk at the deadline

Some details and recomendations for how to plan out a large project, and keep your stakeholders informed and happy during execution

## Pitch

For Stakeholders:

* As a stakeholder have you ever felt like:
  * Your project will never reach completion somehow (black lagoon)
  * Your feel like no progress is being made on project X
  * Roadmaps feel impossible to plan, predictions are usually way off

For developers:

* As a developer have your ever felt like:
  * You get stressed as a deadline approaches
  * You did not partake in the deadline calculation, thus it was off from the beginning
  * Your stakeholders frustrated and are not getting the transparancy they desire on project progress

## Pros and Cons

Stakeholders and Developers will both benefit from this

Advantages:

* Detect deadline misses early and often
  * Deadline accuracy improves over time
  * Stress levels are reduced (especially as deadine approaches)
* Provide transparency on project progress 
* Plan out the quarter/roadmap with higher accuracy
* Creates developer urgency from day 1

Disadvantages:

* Probably overkill for:
 * a single story
 * a single bug
* Slightly frontloaded, i.e. takes some effort to calculate deadline
  * Might take an hour or two during the first week
  * But should only take 20 mins per week once you get the hang of it

## Generate an accurate deadline

The strategy is simple:

1) Task out the project
2) Point each task, get total points
3) Calcualte developer velocity
4) Determine working days required
5) Overlay onto the calandar

### Task out the project

Project 1:

* Task 1
* Task 2
* Task 3
* Task 4
* Task 5
* Task 6
* Task 7

### Point all tasks

Project 1:

* [5pts] Task 1
* [1pt]  Task 2
* [5pts] Task 3
* [3pts] Task 4
* [5pts] Task 5
* [5pts] Task 6
* [5pts] Task 7

Total = 29 points

### Calculate average velocity using historical data

Calculate average velocity based on previous 3 sprints

( Sprint1 pts + Sprint2 pts + sprint3 pts ) / Total days in all three sprints / Total devs on team

( 25pts + 39pts + 16pts ) / (10 days + 10 days + 5 days) / 4 devs
= 80pts / 25 days / 4 devs
= 0.8 points per day for each developer

### Required working days

Calculate how many business days are required to complete the project

TotalProjectPoints / (dailyDevPower)
= 29 points / ( 1 developer * 0.8 points per day)
= ~37 days

Now add a buffer - I think 10% makes sense here

37 days + 10% buffer
= ~41 days

Dont forget to add in developer vacation time

41 working days required + 4 dev vaca days
= 45 days

### Overlay working days over calendar

Overlay the working days onto the calendar, dont count holidays

Note: Dec has quite a few holidays, account for them so you dont footgun yourself!!!

| week 1 (dec2)  | week 2 (dec9)  | week 3 (dec16) | week 4 (dec23) |
| -------------- | -------------- | -------------- | -------------- |
| 5 days         | 5 days         | 5 days         | 1 days         |
| 0 holidays     | 0 holidays     | 0 holidays     | 4 holidays     |
| 40 days remain | 35 days remain | 30 days remain | 29 days remain |   

| week 5 (dec30) | week 6 (jan6)  | week 7 (jan13) | week 8 (Jan20) 
| -------------- | -------------- | -------------- | -------------- 
| 3 days         | 5 days         | 5 days         | 4 days         
| 2 holidays     | 0 holidays     | 0 holidays     | 1 holidays     
| 26 days remain | 16 days remain | 11 days remain | 7 days remain  

| week 9 (Jan27) | week 10 (feb3)   |
| -------------- | --------------   |
| 5 days         | 5 days           |
| 0 holidays     | 0 holidays       |
| 2 days remain  | *** finished *** |

Project Deadline = Feb 3 + 2 days
= Feb 5

## Regular updates

Report progress every week or two

```sh
[ARDA on GCP] Dec 23rd update (Code Complete on 2/5)
TLDR:
  * Exactly on schedule
Progress:
  * Expected: X days in (of Y days), or Z% into allocated working days
  * Actual: 16 points complete (of 29), or 49% complete
More:
  * Recently completed task 2
    * interesting things I found out working on task 2
```

## Detect deadline misses early and often

Detect the deadline misses sooner rather than later. For example:

* [Underestimation] Project is increasingly behind schedule
  * Last update we were 10% behind, now we are 15% behind
  * Task 3 was underestimated
* [Distraction] Important Bug came in last week
  * Perhaps an on-call issue resulted in a week long distraction
* [Distraction] Team pulled in an unrelated story
  * We thought it was a 1 days ticket, but it is still not resoleved and its been 5 days

## Address deadline miss early

Speak with your stakeholders!!! Find a solution you can agree upon together.

Nothing wrong w/ detecting a deadline miss, far worse is not detecting it!!!!

Advocate for a solution:

1) Adjust Deadline
  * Add 5 business days
2) Remove less important scope
  * Spoke w/ stakeholder and we agreed that we can drop task 6 bc it would have been nice to have but not necessary
3) Add a dev or two
  * Going to add Chris onto the project for 2 weeks
  * [BEWARE] Adding a developer, be aware that there is a ramp up period which will slow down both of you
    * But investing in the ramp up period will pay off!!! (after a few days)
    * An advanced move is to allocate a few of days for the new dev to get up to speed

