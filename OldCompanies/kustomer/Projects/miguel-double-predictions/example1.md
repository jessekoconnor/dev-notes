```
{
    "_id" : ObjectId("606a31542fdc9ac5223cae46"),
    "satisfactionLevel" : {
        "sentByTeams" : []
    },
    "firstMessageOut" : {
        "createdByTeams" : []
    },
    "firstResponse" : {
        "createdByTeams" : [],
        "assignedTeams" : [],
        "assignedUsers" : []
    },
    "firstResponseSinceLastDone" : {
        "createdByTeams" : [],
        "assignedTeams" : [],
        "assignedUsers" : []
    },
    "lastResponse" : {
        "createdByTeams" : [],
        "assignedTeams" : [],
        "assignedUsers" : []
    },
    "firstDone" : {
        "createdByTeams" : [],
        "assignedTeams" : [],
        "assignedUsers" : []
    },
    "lastDone" : {
        "createdByTeams" : [],
        "assignedTeams" : [],
        "assignedUsers" : []
    },
    "assistant" : {
        "assistantId" : []
    },
    "status" : "open",
    "rev" : 9,
    "noteCount" : 1,
    "satisfaction" : 0,
    "tags" : [
        ObjectId("5ec958cd909802001a0bf352")
    ],
    "spam" : false,
    "direction" : "in",
    "outboundMessageCount" : 0,
    "priority" : 3,
    "assignedUsers" : [],
    "assignedTeams" : [],
    "roleGroupVersions" : [],
    "org" : ObjectId("5bc5de5b5f2b2a001142dfa0"),
    "customer" : ObjectId("5eb2b3937c9feb001a4479ee"),
    "createdAt" : ISODate("2021-04-04T21:36:20.652Z"),
    "importedAt" : null,
    "updatedAt" : ISODate("2021-04-04T22:26:40.431Z"),
    "name" : "Re: We've processed your refund",
    "open" : {
        "statusAt" : ISODate("2021-04-04T21:36:20.652Z")
    },
    "suggestedShortcuts" : [],
    "suggestedTags" : [],
    "lastActivityAt" : ISODate("2021-04-04T22:26:40.159Z"),
    "predictions" : [
        {
            "field" : "custom.contactReasonsTree",
            "classifier" : ObjectId("5f5b861480777d0012c35819"),
            "prediction" : ObjectId("606a31570776080019e30d2e"),
            "createdAt" : ISODate("2021-04-04T21:36:24.031Z"),
            "automatedAt" : ISODate("2021-04-04T21:36:24.031Z")
        },
        {
            "field" : "custom.contactReasonsTree",
            "classifier" : ObjectId("5f5b861480777d0012c35819"),
            "prediction" : ObjectId("606a31390daa1f00192fa303"),
            "createdAt" : ISODate("2021-04-04T21:35:53.492Z")
        }
    ],
    "accessOverride" : [],
    "firstMessageIn" : {
        "id" : ObjectId("606a31542d1eca9bf7af17be"),
        "sentAt" : ISODate("2021-04-04T21:36:05.000Z"),
        "createdAt" : ISODate("2021-04-04T21:36:20.741Z"),
        "directionType" : "initial-in",
        "channel" : "email",
        "meta" : {
            "subject" : "Re: We've processed your refund",
            "from" : "maryjdugger@gmail.com",
            "to" : [
                {
                    "email" : "care@thefarmersdog.com"
                }
            ],
            "cc" : [],
            "recipient" : {
                "email" : "support@farmers-dog.mail.kustomerapp.com",
                "mailboxHash" : ""
            }
        }
    },
    "lastMessageAt" : ISODate("2021-04-04T22:26:40.159Z"),
    "lastMessageDirection" : "in",
    "lastMessageDirectionType" : "followup-in",
    "lastMessageIn" : {
        "id" : ObjectId("606a3d202d1eca9bf758a179"),
        "sentAt" : ISODate("2021-04-04T22:26:40.159Z"),
        "createdAt" : ISODate("2021-04-04T22:26:40.431Z"),
        "meta" : {
            "from" : "+19165831181",
            "to" : "+16467807957",
            "proxy" : "+16467807957",
            "attachmentNum" : 0
        }
    },
    "lastMessageUnrespondedTo" : {
        "id" : ObjectId("606a31542d1eca9bf7af17be"),
        "sentAt" : ISODate("2021-04-04T21:36:05.000Z"),
        "createdAt" : ISODate("2021-04-04T21:36:20.741Z")
    },
    "lastMessageUnrespondedToSinceLastDone" : {
        "id" : ObjectId("606a31542d1eca9bf7af17be"),
        "sentAt" : ISODate("2021-04-04T21:36:05.000Z"),
        "createdAt" : ISODate("2021-04-04T21:36:20.741Z")
    },
    "messageCountByChannel" : {
        "email" : 1,
        "sms" : 1
    },
    "preview" : "Oh thank you. That was nice.",
    "sla" : {
        "metrics" : {
            "firstResponse" : {
                "breachAt" : ISODate("2021-04-05T21:36:20.652Z")
            },
            "longestUnrespondedMessage" : {
                "breachAt" : ISODate("2021-04-08T21:36:20.652Z")
            }
        },
        "slaId" : ObjectId("5ca3be5ee26deb001b066c8d"),
        "slaName" : "Response Time",
        "slaVersionId" : ObjectId("5f0c87078d88490019257d83"),
        "slaVersion" : 5,
        "hours" : "calendar",
        "matchedAt" : ISODate("2021-04-04T21:36:20.741Z"),
        "breach" : {
            "metric" : "firstResponse",
            "at" : ISODate("2021-04-05T21:36:20.652Z")
        }
    },
    "modifiedAt" : ISODate("2021-04-04T21:36:21.304Z"),
    "modifiedBy" : ObjectId("5bff249adb34a300118d08d1"),
    "custom" : {
        "estimatedBillDateAt" : "2021-04-08T13:30:00.000Z",
        "lastBillDateAt" : "2021-02-04T12:37:24.000Z",
        "updateOrderWorkflowAppliedBool" : true,
        "contactReasonsTree" : "operations.manufacturer"
    },
    "ended" : false,
    "queue" : {
        "id" : ObjectId("5ef644bcd347040019916539")
    },
    "subStatus" : null
}

1-prediction
{
    "_id" : ObjectId("606a31570776080019e30d2e"),
    "org" : ObjectId("5bc5de5b5f2b2a001142dfa0"),
    "input" : "Why am I getting a refund?\r\n\r\nOn Sun, Apr 4, 2021, 2:30 PM The Farmer's Dog care@thefarmersdog.com\r\nwrote:\r\n\r\n Hi Mary,\r\n\r\n We’ve gone ahead and issued your refund for $23.34, but please note it may\r\n take 5-10 business days to fully process.\r\n\r\n Please let us know if you have any questions — we’re here to help!\r\n\r\n With love,\r\n The Farmer’s Dog\r\n\r\n The Farmer's Dog\r\n 201 Varick Street\r\n P.O. Box #487\r\n New York, NY 10014\r\n\r\n Are we barking up the wrong tree? You can change your email preferences\r\n here\r\n https://marketing.thefarmersdog.com/wf/unsubscribe?upn=32rcg8MCpl7v0vyHnILhiu57n5mGAlWK9NZ0pGmO7gbSR7RLuLO8wK-2BYSn5WsMNtukZRY5ZOsyFPLrkoUOpRY2a5tKaVDw9nJFBWUVrmW6O6uGF-2Bp3bDg-2FD-2Bs1vgftX8wjKIjnZ1kwcHPR1TpiVR6PZ06fPK3kJi2HgCLOlKYoe3oB2w0Nx20SaDOCEsvVqDXpTe1dmG0SlQH9hS3uwvVtxw9kdvB6BqqeXdFCQpOU-2FH4wldIUBiN0yO5TXkCRUsVQXeS0AxVrgfCfkadcxSZ55GnTe2jm9-2F3k9YSX0AyZG7SLt2cOjaw-2FGHyAdgqv074j45zPzAt6ykO-2FbBvb1Wz0uazpxUmt-2F1Q7xzfBqIG-2BHn1R-2BnQYvPfS7wbTHEQnVaRFaR-2FzRuXkibClXLs8-2BWASn9I8zqZZsl7Wf22oG0n9v74hCe",
    "classifier" : ObjectId("5f5b861480777d0012c35819"),
    "createdAt" : ISODate("2021-04-04T21:36:23.945Z"),
    "top" : {
        "label" : "operations.manufacturer",
        "confidence" : 0.609279513
    },
    "results" : "{\"operations.manufacturer\":0.609279513,\"account_subscription.billing1\":0.200137705,\"account_subscription.cancel1\":0.0364706367}",
    "confidenceThreshold" : 0.6,
    "__v" : 0
}

2-prediction
{
    "_id" : ObjectId("606a31390daa1f00192fa303"),
    "org" : ObjectId("5bc5de5b5f2b2a001142dfa0"),
    "input" : "Having some trouble with Teddy being willing to eat…almost anything but my human food..( big no no, but at leastI know he will eat “something”.  He is the one with the enlarged heart and he seems to be really slowing down. I fear losing him in the not too distant future, so that is really cutting into how much os being fed.I tried a canned dog food today thinking maybe he was getting tired of TFD but nope… he didn’t want that either.\r\nThey get fed twice a day but VERY small portions. I may just drop it to once a day as he seems more eager in the evenings. Poor Bhodi could go for two weeks as fat as he is.. ( that goes for me too…😏 )  Anyway, thats part of why I am slowing things down even more.\r\nI  am happy with the food though  and the fact that you “listen”.\r\nSusannah\r\nTeddy and Bhodi…",
    "classifier" : ObjectId("5f5b861480777d0012c35819"),
    "createdAt" : ISODate("2021-04-04T21:35:53.384Z"),
    "top" : {
        "label" : "account_subscription.pets",
        "confidence" : 0.57695514
    },
    "results" : "{\"account_subscription.pets\":0.57695514,\"product.offerings\":0.152395964,\"product.product_experience\":0.0595770478}",
    "confidenceThreshold" : 0.6,
    "__v" : 0
}
```