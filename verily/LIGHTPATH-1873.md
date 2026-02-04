# We know the following

I used BGM paired with my VerilyMe app (account in the PreRelease Lightpath Metabolic (Accelerated)). I can see that reading in the Lightpath Console but not in the VerilyMe app.  I worry that this might be the case for our Beta members too. 

Participant ID: 606a9093-7410-465c-9182-cd2711b832ff

# Logs: https://cloudlogging.app.goo.gl/1hd3snmZ8DWLYm928

* Received multiple care patient ids for person, List: [participantRecords/606a9093-7410-465c-9182-cd2711b832ff participantRecords/c42ac742-e786-4f11-b31c-0644a4074741]
* GetPatientIdsFromPerson: ParticipantRecords retrieved: [participantRecords/606a9093-7410-465c-9182-cd2711b832ff participantRecords/c42ac742-e786-4f11-b31c-0644a4074741]

# Questions to answer

* This is very likely the phillips patient id: c42ac742-e786-4f11-b31c-0644a4074741, is that true?
* Is the observation val under 60? If so, then it falls into a known bug
    * known bug: https://verily.atlassian.net/browse/ONEVERILY-92188