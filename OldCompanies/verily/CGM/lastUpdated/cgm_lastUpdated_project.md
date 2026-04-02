# CGM _lastUpdated Project

**Project Focus:** Enable mobile clients to efficiently query large biometric datasets using `_lastUpdated` filtering, sorting, and pagination.

---

## 🚧 Progress Notes

### 2026-04-01 - Proto Changes Complete ✅

**Completed:**
- ✅ Task #1 (ONEVERILY-114476) - Proto changes committed and pushed
- ✅ Branch: `jessekoconnor-ONEVERILY-114476-add-proto-lastupdated-fields`
- ✅ Commit: `e47aac193bb` - "Add updated_since, sorted_by, and sort_order fields to support the lastUpdated proj"
- ✅ PR Ready: https://github.com/verily-src/verily1/compare/main...jessekoconnor-ONEVERILY-114476-add-proto-lastupdated-fields?expand=1

**What Was Done:**
- Added `updated_since`, `sorted_by`, `sort_order` to `ListBiometricsMeasurementsRequest`
- Added `last_updated` to `BiometricsMeasurement` response (also covers task #2 - ONEVERILY-114478)
- Created `SortColumn` enum (EFFECTIVE_TIMESTAMP, LAST_UPDATED)
- Created `SortOrder` enum (ASCENDING, DESCENDING)
- All fields are optional with backward-compatible defaults

**Next Steps:**
1. Wait for CI to generate Go code from proto
2. Create PR and get it reviewed/merged
3. Start Task #3 (ONEVERILY-114479) - Backend sorting implementation
   - Location: `device/healthdata/internal/storage/fhir_observation_store_biometrics.go` (around line 234)
   - Need to handle `sorted_by` and `sort_order` parameters
   - Ensure safe-harbor defaults (EFFECTIVE_TIMESTAMP + ASCENDING if not specified)

**Important Context:**
- Task #2 (ONEVERILY-114478 - 1pt) is already done as part of task #1
- Proto changes are done, backend implementation is next
- Mobile will use this to incrementally sync CGM data by tracking `last_updated` timestamps

---

## 📋 JIRA Tickets

### Parent Epic
**[ONEVERILY-106996](https://verily.atlassian.net/browse/ONEVERILY-106996)**: [Device] Support filtering by LastUpdated timestamp through device/healthdata service

### Implementation Tasks

#### 1. Proto - Add `lastUpdated`, `sortBy` and `sortOrder` to BE ListBiometricMeasurementsRequest proto ✅
- **JIRA**: [ONEVERILY-114476](https://verily.atlassian.net/browse/ONEVERILY-114476)
- **Status**: ✅ Complete (PR pending)
- **Points**: 2.0
- **Assignee**: Jesse O'Connor
- **Branch**: `jessekoconnor-ONEVERILY-114476-add-proto-lastupdated-fields`

#### 2. Proto - Expose and populate `lastUpdated` on biometric measurements ✅
- **JIRA**: [ONEVERILY-114478](https://verily.atlassian.net/browse/ONEVERILY-114478)
- **Status**: ✅ Complete (included in task #1)
- **Points**: 1.0
- **Assignee**: Jesse O'Connor
- **Note**: Completed as part of ONEVERILY-114476

#### 3. BE - Support sorting by lastUpdated, ensure a safe-harbor default
- **JIRA**: [ONEVERILY-114479](https://verily.atlassian.net/browse/ONEVERILY-114479)
- **Status**: New
- **Points**: 2.0
- **Assignee**: Jesse O'Connor

#### 4. BE - Query for observations whose `lastUpdated` is gt `updatedSince`
- **JIRA**: [ONEVERILY-114481](https://verily.atlassian.net/browse/ONEVERILY-114481)
- **Status**: New
- **Points**: 2.0
- **Assignee**: Jesse O'Connor

#### 5. BE - Support page token for subsequent pages
- **JIRA**: [ONEVERILY-114482](https://verily.atlassian.net/browse/ONEVERILY-114482)
- **Status**: New
- **Points**: 3.0
- **Assignee**: Jesse O'Connor

#### 6. Integration Tests - Add BE integration tests for lastUpdated, sorting and pagination
- **JIRA**: [ONEVERILY-114483](https://verily.atlassian.net/browse/ONEVERILY-114483)
- **Status**: New
- **Points**: 3.0
- **Assignee**: Anne Oursler

**Total Points**: 13.0
**Completed**: 3.0 pts (Tasks #1 and #2)
**Remaining**: 10.0 pts (Tasks #3, #4, #5, #6)

---

## 🎯 Problem Statement

From [ONEVERILY-106988](https://verily.atlassian.net/browse/ONEVERILY-106988):

**Background:**
- `ListBiometricsMeasurementsRequest` currently does not support limiting the set of returned results
- App BFF is fetching all blood pressure data and mobile client dedupes before persisting
- This is okay for BP data, but inefficient for CGM (Continuous Glucose Monitoring)

**The Issue:**
- With CGM being added to `ListBiometricsMeasurements`, fetching all data on every request will be inefficient
- CGM generates high-frequency data (many measurements per day)
- Mobile needs to efficiently access larger biometric datasets

**Example Scenario:**
- Dataset size: 1000 measurements
- Mobile queried/processed it yesterday
- Today there's 1 new data point to process
- Currently: Must request the entire dataset again (inefficient)

---

## 💡 Proposed Solution

Add filtering capability to `ListBiometricsMeasurements` to allow fetching a subset of data based on "last updated time".

**Key Features:**
1. **Filtering by `_lastUpdated`**: Return only data updated since a specific timestamp
2. **Sorting**: Sort by `_lastUpdated` (ascending/descending)
3. **Pagination**: Support page tokens for chunked data retrieval
4. **Expose `lastUpdated`**: Return `lastUpdated` timestamp on each measurement

### How Mobile Will Use This

1. Remember a timestamp (initialize to 1/1/1970 for first iteration)
2. Query for data with `updatedSince` parameter
3. Process the returned data
4. Remember the latest `lastUpdated` timestamp from the response
5. Repeat at regular intervals using the saved timestamp

---

## 🔧 Technical Design

### 1. Proto Changes - Request

Add to `ListBiometricsMeasurementsRequest`:

```protobuf
message ListBiometricsMeasurementsRequest {
    repeated string patient_ids = 1;
    MeasurementType measurement_type = 2;

    // Existing fields
    int32 page_size = 6;
    string page_token = 7;

    // NEW FIELDS
    optional google.protobuf.Timestamp updated_since = 8;  // Filter: return only measurements updated after this time

    Column sorted_by = 9;
    enum Column {
        COLUMN_UNSPECIFIED = 0;
        COLUMN_EFFECTIVE_TIMESTAMP = 1;
        COLUMN_LAST_UPDATED = 2;
    }

    Order sort_order = 10;
    enum Order {
        ORDER_UNSPECIFIED = 0;
        ORDER_ASCENDING = 1;
        ORDER_DESCENDING = 2;
    }
}
```

### 2. Proto Changes - Response

Add to `BiometricsMeasurement`:

```protobuf
message BiometricsMeasurement {
    string aggregator_record_id = 1;
    AggregatorName aggregator_name = 2;
    string patient_id = 3;
    string org_id = 4;
    string origin_name = 5;
    optional string device_manufacturer = 13;
    optional string device_model = 14;
    uint32 record_version = 7;
    string source_record_id = 15;
    string code_provenance = 16;
    google.protobuf.Timestamp start_time = 8;
    google.protobuf.Timestamp end_time = 9;

    oneof measurement_type {
        Steps step = 10;
        HeartRate heart_rate = 11;
        RestingHeartRate resting_heart_rate = 12;
        CompositeBloodPressure composite_blood_pressure = 20;
        Weight weight = 21;
        Glucose glucose = 22;
    }

    optional string e_tag = 17;
    bool is_aggregated = 18;

    // NEW FIELD
    google.protobuf.Timestamp last_updated = 23;  // Expose when this measurement was last updated in FHIR
}
```

### 3. Backend Implementation - FHIR Query Filtering

```go
// Filter by _lastUpdated if UpdatedSince is provided
if opts.UpdatedSince != nil {
    params = append(params, &gcp.FhirQueryParameter{
        Key:   "_lastUpdated",
        Value: fmt.Sprintf("ge%s", opts.UpdatedSince.AsTime().Format(time.RFC3339)),
    })
}
```

**Location**: `device/healthdata/internal/storage/fhir_observation_store_biometrics.go` (around line 234)

### 4. Backend Implementation - Sorting

- Support sorting by `_lastUpdated` field
- Ensure safe-harbor default (maintain current behavior if sort params not specified)
- Order: ASCENDING (oldest → newest) recommended for guaranteed at-least-once delivery

**Why `_lastUpdated` Works Well:**
- Automatically indexed by FHIR stores
- Already used in production queries throughout codebase
- Supports prefix modifiers: `ge`, `gt`, `lt`, `le` for range queries
- Already used in backfill job code and fetchOrganization code

### 5. Pagination

Implement FHIR pagination using page tokens:
- Reference: [FHIR Search Best Practices](https://docs.cloud.google.com/healthcare-api/docs/how-tos/best-practices-fhir-search)
- Page tokens are opaque but follow sort order
- **Important**: Page tokens assume no mutations during pagination

---

## 🧪 Testing Strategy

### Integration Tests Requirements:
- Test filtering with `updatedSince` parameter
- Test sorting by `lastUpdated` (ascending and descending)
- Test pagination with page tokens
- Test that `lastUpdated` is correctly populated on returned measurements
- Test safe-harbor defaults (backward compatibility when new params not specified)

---

## 🔍 Deduplication Strategy

**Key to preventing duplicate observations:**

Use a unique identifier for each measurement record that is consistent across updates.
- **Field**: `aggregator_record_id`
- Mobile can dedupe locally using this ID to protect against:
  - Duplicate deliveries
  - Updates to existing measurements
  - Overlapping page requests

---

## 📊 Work Estimates (from Design Doc)

| Task Category | Points | Tasks |
|--------------|--------|-------|
| **Protos** | 3 | Add `lastUpdated`, `sortBy`, `sortOrder` to request (2pt)<br>Expose `lastUpdated` on measurements (1pt) |
| **Backend** | 7 | Support sorting (2pt)<br>Query filtering by `updatedSince` (2pt)<br>Page token support (3pt) |
| **Integration Tests** | 3 | Add comprehensive BE integration tests (3pt) |
| **TOTAL** | **13** | |

**Timeline:**
- 1 engineer: 13 business days (~1.25 sprints)
- 2 engineers: 8 business days (~0.75 sprint)

---

## ❓ Open Questions

1. **Sorting Requirement**: Clarify with Mobile if it's acceptable to sort Measurements by `lastUpdated` when this filter is used? [Wendy Chu]
   - **Decision**: Opting not to force sorting. If optional args not provided, default to same behavior as today (safe harbor)

2. **Other Large Datasets**: Do we expect the need to handle other big data sets aside from glucose?
   - **Answer**: Yes

3. **Default Behavior**: Ensure clients using the API today won't need to change anything (backward compatibility)

---

## 🔀 Alternatives Considered

### 1. Websocket Event Bus (Rejected)
**Overview:**
- Publish messages to websocket event bus as new observations arrive
- One message queue per customer
- Mobile subscribes and consumes at own pace
- Real-time updates without polling

**Limitations:**
- Websockets are expensive
- No existing pattern within Verily for this approach

### 2. Full Sync with Local Dedup (Not Feasible)
**Overview:**
- Fetch all data every time
- Client deduplicates using `aggregator_record_id`

**Limitations:**
- Cannot fetch more than 1000 records (FHIR limitation)
- No way to access "all records" for large datasets

### 3. Monotonically Increasing IDs (Not Applicable)
**Overview:**
- Use `gt` operations on IDs to capture oldest → newest

**Limitations:**
- Current IDs are completely random, not monotonically increasing

---

## 📚 Related Documentation

- **Mobile App Design Doc**: [App's Blood Glucose design doc](https://docs.google.com/document/d/1Jy8bhHv37Hx3JrXLDkuXQSieYWkxNIKfpVzRnh5Vb_M/edit?tab=t.0#heading=h.ao2qa0ne8ag3)
- **Device Design Doc**: [Device _lastUpdated Design](https://docs.google.com/document/d/1l0kKtffUSv3ebti47NG07QM_0U1nsfaSb-_j0Hb06R8/edit?disco=AAABvJ98qvQ)
- **Parent JIRA**: [ONEVERILY-106996](https://verily.atlassian.net/browse/ONEVERILY-106996)
- **Original Request**: [ONEVERILY-106988](https://verily.atlassian.net/browse/ONEVERILY-106988)

---

## 🎯 Success Criteria

1. ✅ Mobile can request biometric data filtered by `updatedSince` timestamp
2. ✅ Measurements include `lastUpdated` field in response
3. ✅ Sorting by `lastUpdated` works (ascending/descending)
4. ✅ Pagination works correctly with page tokens
5. ✅ Backward compatibility maintained (existing clients unaffected)
6. ✅ Integration tests cover all new functionality
7. ✅ Deduplication strategy documented and implementable by mobile
