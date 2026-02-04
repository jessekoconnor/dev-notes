# Supporting _lastUpdated in listBiometrics

See ask from mobile: https://verily.atlassian.net/browse/ONEVERILY-106988

## Important to not the current state

_lastUpdated is index-supported — it's a standard FHIR R4 search parameter that is:

* Automatically indexed by FHIR stores
* Already used in production queries throughout the codebase
* Supports prefix modifiers like ge, gt, lt, le for range queries
* Its already used in backfil job code as well as fetchOrganization code

Patient bff request signature:

```go
message ListBiometricsMeasurementsRequest {
    MeasurementType measurement_type = 2 [
      (google.api.field_behavior) = REQUIRED,
      (verily.privacy.annotations.scrub) = false
    ];

    optional int32 page_size = 7 [
      (google.api.field_behavior) = OPTIONAL,
      (verily.privacy.annotations.scrub) = false
    ];

    optional string page_token = 6 [
      (google.api.field_behavior) = OPTIONAL,
      (verily.privacy.annotations.scrub) = false
    ];
}
```

Healthdata request signature:

```go
message ListBiometricsMeasurementsRequest {
    // List of patients to list measurements for. 
    repeated string patient_ids = 1;  // Format: "participantRecords/{fhir_patient_id}"
    MeasurementType measurement_type = 2;

    // The number of biometrics measurements to return.
    // If unspecified, the default is 50.
    // The max value is 1000 (FHIR limitation for MaxPageSize).
    int32 page_size = 6;
  
    // A page token, received from a previous `ListBiometricsMeasurements` call.
    // Provide this to retrieve the subsequent page.
    //
    // When paginating, all other parameters provided to `ListBiometricsMeasurements` must match
    // the call that provided the page token.
    string page_token = 7;
}
```

## Proposed Solutions

### Server-Timestamp pagination via lastUpdated

* Each measurement in response includes its last_updated timestamp
* Client tracks MAX(last_updated) from responses
* Uses server's timestamp, avoiding clock skew
* Will get updates for records already ingested

Devices team:

* Adds updatedSince into bff and BE req
* If updatedSince is present, then assume we want to sort by lastUpdated

Mobile team:

* Leverages the updatedSince and pageSize fields in requests to access the data
* Remembers the most recent lastUpdated time for the next request
* Starts at a date from a long time ago, perhaps when verily was created

Limitations:

* None

### Full Sync with Local Dedup (not feasable)

Fetch all data every time (no updated_since)
Client deduplicates against local DB using aggregator_record_id

Limitations:

* Cannot fetch more than 1000 records, so there is no way to access "all records"

### Leverage monotomically increasing IDs

IF we generated monotomically increasing IDs then we could actually use operations like `gt` on ids and capture oldest to newest id

Limitations:

* We dont generate monotomically increasing ids, instead they are completely reandom

### Use a pub-sub event-driven model for mobile to capture all updates

This would be the most flexible solution as mobile could consume at their own pace with a guarantee of no data loss, but I believe they want to store data locally on the users mobile phone which is not a good match for this solution.
