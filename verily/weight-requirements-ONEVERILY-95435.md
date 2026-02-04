# Weight Requirements

Ticket: https://verily.atlassian.net/browse/ONEVERILY-95435

## Organization of tests

Weight integration tests should map to these requirements files:
* Healthdata backend integration tests to use 01-healthdata/biometric-observations/biometric-observations.yaml
* Professional facing bff integration tests to use 08-professional-biometrics/professional-biometrics.yaml
* Professional facing mfe integration tests to use 08-professional-biometrics/professional-biometrics.yaml

## Open questions

* It is a little unclear how best to combine these requirements below with the existing device/docs/requirements/08-professional-biometrics/professional-biometrics.yaml, specifically around the feature flag lines as this file was written for blood pressure, but is also generic enough for weight. It just appears that the feature flag secion is exclusive...

## Requirements

Grabbed the requirements from this doc here: https://docs.google.com/document/d/1U_zI-fdU6B6PuX8FLZpIgSwkzpsm5RnUO4Ng5PceXds/edit?disco=AAABt22y8os

Console
* [MUST] AC #1: The system shall display weight in the Participant Details view
* [MUST] AC #2: Weight will be pulled from
* [MUST] AC #3: Each measurement shall have a percision of two devimal places
* [MUST] AC #3.1: Each measurement shall be available for display in lbs, kgs, and grams
* [SHOULD] When we have a device, we will show the source when we have it. 

HK/HC Integration
* [MUST] AC #1: The system shall pull in weight data from health kit and health connect and store in the Operational FHIR Store, under HK & HC org compartments
* [MUST] AC #2: The system shall store available device metadata associated with data entry (ref)
* [MUST] AC #3: The system shall store measurements as they are collected
Lbs, up to 2 decimal places, e.g. 175.45 lb
Kgs, up to 2 decimal places, e.g. 72.57 kg
* [MUST] AC #4: The system shall create a device new data type pairing engagement event when the first scale data is recorded


ONEVERILY-95435