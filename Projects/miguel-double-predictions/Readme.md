# KDEV-23687

[ID] Conversation has two values for predictions, but there is only one model enabled

# Questions
## Main Q
1) Why is the creation date of the first prediction earlier than the creation date of the conversation?

## Additional Q's
1) If the convo doesnt have a 'merge/target' property, could it still have been a merged conversation?
3) 



# Notes from miguel on having two BR's that predict the same value
1) If the BR has two predict actions for the same field, the prediction is just done once.
2) If there are two brs with predictions predicting the same field the input for both 
   predictions should have the same input and the same output as they should both be triggered just when the conversation has the first initial message.



# Saving event details
Topics: 
* Biz Rule Intent ID issue: KDEV-23687
   Jesse has 2 json examples of the issue to share
* WF Loop Detection