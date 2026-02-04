# Y axis scaling

Default [min,max]: [60,240]

I Think? I got it working? https://www.loom.com/share/f51fb79d5c56462d94e0b863b312ff20
Verify how many data points are on screen


TODO:
* setup test data
  * Jan: min - 5, max + 5
  * Feb: 0, 180

Open weeks:
* Setp 28 - Oct 4
* Aug 17 - 23 - ONE HIGH READING
  * aug 23 (300)
* Aug 24 - 30  - ONE LOW READING
  * Aug 24 (11)
* Aug 31 - Sept 6 
  * Aug 31 (11)
  * aug Sept 6 (300)
* Sept 7 - 13


TLDR;
Unfortunately I was wrong about how Y Axis scaling  currectly works in patient glucose...
I believe that the y scaling is broken in multiple weird ways... Its even a bit hard to explain, but I did my best to summarize it.
First I will suggest the solution I believe to be best:

Jesses Proposed solution:
* lets scale upper and lower bounds independently
  * Instead of: scaling in both direction only if there is a value above the default max
* Scale to the next multiple of 10 in both directions and scale upper and lower independently
  * Instead of: Scaling new upper bound by adding new lower bound. This feels very wrong... (ex: if we scale lower bound to zero, lets calulate new upper bound as 240 + 0)
  * Scaling lower axis actually works as I would expect, but it only happens when scaling upper bound is necessary

Current algorithm for y axis scaling:
* It is only triggered if a data point is above default max (240 mg/dl glucose)
* Lower bound is recalculated to be largest multiple of 10 that is less than min but never below zero (This is actually how I would expect it to work)
* Higher bound is adjusted by the new value of the lower axis (This seems very wrong.. Why would we not adjust it to include the max data point??)

Examples of current behavior:
* Single High Value (300)
  * One data point, its at 300
  * Screenshot: https://www.loom.com/i/c36ed194e63a4826b04a9da18b0c0bb6
  * Y axis scaled to [min,max] [300,540]
  * My opinion: Feels wrong to scale the Y Axis up by 240, better would probably have been to just scale up to 300
* Single Low Value (11)
  * One data point, its 11
  * Screenshot: https://loom.com/i/fd8718f6a3b0470a87972d064a6b3e6a
  * Y axis did not scale at all
  * My opinion: Feels wrong that it didnt scale, as data point is not on sreen at all
* Single Low, Single High (11 and 300)
  * One data point is 11
  * Other data point is 300
  * Screenshot: https://www.loom.com/i/e75c74d321564194ad9d7661013336a8
  * Is scaled to  [min,max] [10,250]
  * My opinion: The lower axis ajusted quite well actually, however since the upper bound is adjusted by the new value of the lower axis - the upper bound only increased by 10 which does not show the datapoint of 300

More Info about how it works today with my take on each thing:
I think that the current implementation is essentially wrong in several ways:
* We adjust both top and bottom based off if there is a value above the upper bound
  * It kicks off both upper and lower bound recalcualtion if there is a value above default max
  * Better would probably be to treat the upper and lower bound completely independently
* Lower bound adjustment actually does seem correct (aside from the fact it only kicks in when the upper bound should be adjusted - see bullet point above)
* Highest value is not taken into account when adjusting the top bound (instead we just add the new lower bound to the upper bound)
  * The top bound is recalculatd by adding the new lower bound to the top.
  * To me this seems very wrong, I would have imagined that we would insted just find the next multiple of 10 for the upper bound




Is there some reason that we chose to scale the Y axis this way?? I have no idea... Is anyone aware of requirements that would have resulted in this behavior?


