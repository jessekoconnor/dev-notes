# ONEVERILY-78137: 15 min / 24 hour memo integration tests


Example of a 24hr bucket:

```json
{
  "category": [
    {
      "coding": [
        {
          "code": "activity",
          "system": "http://terminology.hl7.org/CodeSystem/observation-category"
        }
      ],
      "text": "Activity"
    }
  ],
  "code": {
    "coding": [
      {
        "code": "55423-8",
        "display": "Number of steps",
        "system": "http://loinc.org"
      },
      {
        "code": "step-count",
        "display": "Step Count",
        "system": "http://fhir.verily.com/CodeSystem/verily-chd-measurement-type-cs"
      },
      {
        "code": "HKQuantityTypeIdentifierStepCount",
        "display": "Number of steps",
        "system": "http://fhir.verily.com/CodeSystem/com.appleinc.iphone"
      }
    ],
    "text": "Number of steps"
  },
  "effectivePeriod": {
    "end": "2025-01-02T09:15:00.000000+00:00",
    "start": "2025-01-01T09:15:00.000000+00:00"
  },
  "id": "238519bb-bcf0-428f-8ef1-c280fb4d7aff",
  "identifier": [
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-24h-stable-identifier",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T09:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T09:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T09:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T09:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T10:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T10:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T10:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T10:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T11:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T11:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T11:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T11:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T12:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T12:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T12:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T12:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T13:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T13:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T13:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T13:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T14:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T14:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T14:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T14:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T15:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T15:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T15:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T15:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T16:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T16:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T16:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T16:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T17:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T17:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T17:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T17:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T18:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T18:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T18:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T18:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T19:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T19:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T19:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T19:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T20:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T20:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T20:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T20:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T21:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T21:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T21:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T21:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T22:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T22:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T22:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T22:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T23:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T23:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T23:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-01T23:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T00:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T00:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T00:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T00:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T01:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T01:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T01:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T01:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T02:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T02:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T02:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T02:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T03:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T03:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T03:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T03:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T04:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T04:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T04:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T04:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T05:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T05:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T05:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T05:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T06:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T06:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T06:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T06:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T07:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T07:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T07:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T07:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T08:00:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T08:15:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T08:30:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T08:45:00.000Z"
    },
    {
      "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
      "value": "c20f6dd6-3233-4ffe-b683-1f16752d4a5e_HK_2025-01-02T09:00:00.000Z"
    }
  ],
  "meta": {
    "extension": [
      {
        "url": "http://fhir.verily.com/StructureDefinition/verily-organization-compartment",
        "valueReference": {
          "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/internal-sys32-test-org"
        }
      },
      {
        "extension": [
          {
            "url": "verily-org-tree-node",
            "valueReference": {
              "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/c19068d3-f31f-46d8-93f9-74bac897dcad"
            }
          },
          {
            "url": "verily-org-tree-node",
            "valueReference": {
              "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/internal-sys32-test-org"
            }
          },
          {
            "url": "verily-platform-tenant",
            "valueReference": {
              "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/internal-sys32-test-org"
            }
          }
        ],
        "url": "http://fhir.verily.com/StructureDefinition/verily-organization-index"
      }
    ],
    "lastUpdated": "2025-10-27T19:41:28.932672+00:00",
    "profile": [
      "http://fhir.verily.com/StructureDefinition/verily-observation-chd-numeric"
    ],
    "versionId": "MTc2MTU5NDA4ODkzMjY3MjAwMA"
  },
  "resourceType": "Observation",
  "status": "final",
  "subject": {
    "reference": "Patient/c20f6dd6-3233-4ffe-b683-1f16752d4a5e",
    "type": "Patient"
  },
  "valueQuantity": {
    "code": "{count}",
    "system": "http://unitsofmeasure.org",
    "unit": "count",
    "value": 10
  }
}
```

Example of a 15 min bucket:

```json
{
  "entry": [
    {
      "fullUrl": "https://healthcare.clients6.google.com/v1/projects/prj-d-1v-ucd/locations/us-west1/datasets/oneverily-integration-test-dataset/fhirStores/oneverily-integration-store/fhir/Observation/fe3d54f9-1831-47f7-ae2f-00697af52b07",
      "resource": {
        "category": [
          {
            "coding": [
              {
                "code": "activity",
                "system": "http://terminology.hl7.org/CodeSystem/observation-category"
              }
            ],
            "text": "Activity"
          }
        ],
        "code": {
          "coding": [
            {
              "code": "55423-8",
              "display": "Number of steps",
              "system": "http://loinc.org"
            },
            {
              "code": "step-count",
              "display": "Step Count",
              "system": "http://fhir.verily.com/CodeSystem/verily-chd-measurement-type-cs"
            },
            {
              "code": "HKQuantityTypeIdentifierStepCount",
              "display": "Number of steps",
              "system": "http://fhir.verily.com/CodeSystem/com.appleinc.iphone"
            }
          ],
          "text": "Number of steps"
        },
        "effectivePeriod": {
          "end": "2025-04-06T00:45:00.000000+00:00",
          "start": "2025-04-05T00:45:00.000000+00:00"
        },
        "id": "fe3d54f9-1831-47f7-ae2f-00697af52b07",
        "identifier": [
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-24h-stable-identifier",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T00:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T00:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T01:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T01:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T01:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T01:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T02:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T02:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T02:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T02:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T03:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T03:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T03:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T03:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T04:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T04:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T04:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T04:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T05:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T05:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T05:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T05:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T06:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T06:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T06:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T06:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T07:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T07:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T07:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T07:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T08:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T08:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T08:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T08:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T09:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T09:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T09:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T09:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T10:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T10:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T10:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T10:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T11:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T11:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T11:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T11:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T12:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T12:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T12:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T12:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T13:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T13:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T13:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T13:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T14:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T14:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T14:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T14:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T15:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T15:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T15:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T15:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T16:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T16:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T16:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T16:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T17:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T17:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T17:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T17:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T18:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T18:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T18:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T18:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T19:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T19:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T19:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T19:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T20:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T20:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T20:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T20:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T21:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T21:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T21:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T21:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T22:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T22:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T22:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T22:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T23:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T23:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T23:30:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-05T23:45:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-06T00:00:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-06T00:15:00.000Z"
          },
          {
            "system": "http://fhir.verily.com/NamingSystem/steps-aggregate-15m-stable-identifier-trigger",
            "value": "d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4_HK_2025-04-06T00:30:00.000Z"
          }
        ],
        "meta": {
          "extension": [
            {
              "url": "http://fhir.verily.com/StructureDefinition/verily-organization-compartment",
              "valueReference": {
                "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/internal-sys32-test-org"
              }
            },
            {
              "extension": [
                {
                  "url": "verily-org-tree-node",
                  "valueReference": {
                    "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/c19068d3-f31f-46d8-93f9-74bac897dcad"
                  }
                },
                {
                  "url": "verily-org-tree-node",
                  "valueReference": {
                    "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/internal-sys32-test-org"
                  }
                },
                {
                  "url": "verily-platform-tenant",
                  "valueReference": {
                    "reference": "https://dev-stable.one.verily.com/cortex-fhir-proxy/operational/fhir/Organization/internal-sys32-test-org"
                  }
                }
              ],
              "url": "http://fhir.verily.com/StructureDefinition/verily-organization-index"
            }
          ],
          "lastUpdated": "2025-10-22T15:38:02.401844+00:00",
          "profile": [
            "http://fhir.verily.com/StructureDefinition/verily-observation-chd-numeric"
          ],
          "versionId": "MTc2MTE0NzQ4MjQwMTg0NDAwMA"
        },
        "resourceType": "Observation",
        "status": "final",
        "subject": {
          "reference": "Patient/d7e5f5d1-0d31-46a7-8b02-c13d1aca40e4",
          "type": "Patient"
        },
        "valueQuantity": {
          "code": "{count}",
          "system": "http://unitsofmeasure.org",
          "unit": "count",
          "value": 10
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ],
  "link": [
    {
      "relation": "search",
      "url": "https://healthcare.clients6.google.com/v1/projects/prj-d-1v-ucd/locations/us-west1/datasets/oneverily-integration-test-dataset/fhirStores/oneverily-integration-store/fhir/Observation/?_count=50&_id=fe3d54f9-1831-47f7-ae2f-00697af52b07&_sort=-_lastUpdated"
    },
    {
      "relation": "first",
      "url": "https://healthcare.clients6.google.com/v1/projects/prj-d-1v-ucd/locations/us-west1/datasets/oneverily-integration-test-dataset/fhirStores/oneverily-integration-store/fhir/Observation/?_count=50&_id=fe3d54f9-1831-47f7-ae2f-00697af52b07&_sort=-_lastUpdated"
    },
    {
      "relation": "self",
      "url": "https://healthcare.clients6.google.com/v1/projects/prj-d-1v-ucd/locations/us-west1/datasets/oneverily-integration-test-dataset/fhirStores/oneverily-integration-store/fhir/Observation/?_count=50&_id=fe3d54f9-1831-47f7-ae2f-00697af52b07&_sort=-_lastUpdated"
    }
  ],
  "resourceType": "Bundle",
  "total": 1,
  "type": "searchset"
}
```
