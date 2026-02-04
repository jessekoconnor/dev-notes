# Analytics api

# Return this additional field from source
'lastRevision.lastRevisionId'
Note: Need to make sure thi
# Last work-item
603fb9c97e042b0013660fe9
Looks like I should return the _id instead of the lastRevision.lastRevisionId     <--

# Example es query on Staging
```
GET work_items/_search
{
  "size": 1,
  "query": {
    "bool": {
      "filter": [
        {
          "term": {
            "orgId": "5ff4bc2b5c152a0e272c923a"
          }
        },
        {
          "term": {
            "type": "work_item"
          }
        },
        {
          "range": {
            "lastRevision.acceptedAt": {
              "gte": "2021-02-05T01:00:00.000Z",
              "lte": "2021-02-07T00:00:00.000Z",
              "time_zone": "America/New_York"
            }
          }
        }
      ],
      "must": [],
      "should": []
    }
  },
  "sort": [
    {
      "lastRevision.acceptedAt": {
        "order": "desc"
      }
    }
  ],
  "aggs": {
    "byQueue": {
      "terms": {
        "field": "lastRevision.queueId",
        "size": 10
      },"aggs": {
        "top": {
          "top_hits": {
            "size": 1,
            "sort": [
              {
                  "lastRevision.acceptedAt": {
                    "order": "desc"
                  }
              }
            ], 
            "_source": ["lastRevision.acceptedAt", "lastRevision.queueTime", "lastRevision.lastRevisionId"]
          }
        }
      }
    }
  }
}
```

# Example es response
```
{
  "took": 90,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": 1,
    "max_score": null,
    "hits": [
      {
        "_index": "work_items_1548173464505",
        "_type": "_doc",
        "_id": "601d505580b1ce00127c99d5",
        "_score": null,
        "_routing": "5ff4bc2b5c152a0e272c923a",
        "_source": {
          "type": "work_item",
          "orgId": "5ff4bc2b5c152a0e272c923a",
          "status": "completed",
          "channel": "email",
          "firstEnterQueueAt": "2021-02-05T14:04:05.790Z",
          "queuedCount": 3,
          "priority": 1,
          "itemSize": 1,
          "ivr": {
            "businessTime": 0,
            "time": 0
          },
          "lastRevision": {
            "externalQueue": null,
            "enteredQueueAt": "2021-02-05T14:06:34.650Z",
            "queueTime": 22364,
            "queueBusinessTime": 22364,
            "routedAt": "2021-02-05T14:06:57.014Z",
            "lastRejectedAt": null,
            "lastTimedoutAt": null,
            "timedout": null,
            "acceptedAt": "2021-02-05T14:07:00.292Z",
            "workSession": "601d50d444c13b0013b1ac0c",
            "routedToSession": "601d50d444c13b0013b1ac0c",
            "routedTo": "5ff4bc4212351668002610fd",
            "lastRevisionId": "601d50d044c13b0013b1ac04",
            "assignedTo": "5ff4bc4212351668002610fd",
            "queueId": "5ff4bc444315ea0013b81862",
            "acceptedBy": "5ff4bc4212351668002610fd"
          },
          "createdAt": "2021-02-05T14:04:05.399Z",
          "updatedAt": "2021-02-05T14:07:04.223Z",
          "modifiedAt": "2021-02-05T14:07:00.292Z",
          "modifiedBy": "5ff4bc4212351668002610fd",
          "deleted": false,
          "deletedAt": null,
          "handle": {
            "time": 3931,
            "businessTime": 3931,
            "completedAt": "2021-02-05T14:07:04.223Z"
          },
          "wrapUp": null,
          "completedAt": "2021-02-05T14:07:04.223Z",
          "abandoned": null,
          "teamId": "6012d5695881a2250a06903a",
          "resourceType": "conversation",
          "resourceId": "601d50543028baafec145fe6",
          "resourceRev": 2,
          "firstRoutedResponse": null,
          "rev": 11
        },
        "sort": [
          1612534020292
        ]
      }
    ]
  },
  "aggregations": {
    "byQueue": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "5ff4bc444315ea0013b81862",
          "doc_count": 1,
          "top": {
            "hits": {
              "total": 1,
              "max_score": null,
              "hits": [
                {
                  "_index": "work_items_1548173464505",
                  "_type": "_doc",
                  "_id": "601d505580b1ce00127c99d5",
                  "_score": null,
                  "_routing": "5ff4bc2b5c152a0e272c923a",
                  "_source": {
                    "lastRevision": {
                      "lastRevisionId": "601d50d044c13b0013b1ac04",
                      "queueTime": 22364,
                      "acceptedAt": "2021-02-05T14:07:00.292Z"
                    }
                  },
                  "sort": [
                    1612534020292
                  ]
                }
              ]
            }
          }
        }
      ]
    }
  }
}
```