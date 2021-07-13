{
    "_id" : ObjectId("606a74d92fdc9ac522db8d92"),
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
    "rev" : 7,
    "noteCount" : 1,
    "satisfaction" : 0,
    "tags" : [],
    "spam" : false,
    "direction" : "in",
    "outboundMessageCount" : 0,
    "priority" : 3,
    "assignedUsers" : [],
    "assignedTeams" : [],
    "roleGroupVersions" : [],
    "org" : ObjectId("5bc5de5b5f2b2a001142dfa0"),
    "customer" : ObjectId("600f07e32bad24b0158db2e1"),
    "createdAt" : ISODate("2021-04-05T02:24:25.312Z"),
    "importedAt" : null,
    "updatedAt" : ISODate("2021-04-05T02:24:29.464Z"),
    "name" : "Re: Confirming Your Cancellation",
    "open" : {
        "statusAt" : ISODate("2021-04-05T02:24:25.312Z")
    },
    "suggestedShortcuts" : [],
    "suggestedTags" : [],
    "lastActivityAt" : ISODate("2021-04-05T02:24:28.652Z"),
    "predictions" : [
        {
            "field" : "custom.contactReasonsTree",
            "classifier" : ObjectId("5f5b861480777d0012c35819"),
            "prediction" : ObjectId("606a74dc0daa1f00193207a1"),
            "createdAt" : ISODate("2021-04-05T02:24:28.401Z"),
            "automatedAt" : ISODate("2021-04-05T02:24:28.401Z")
        },
        {
            "field" : "custom.contactReasonsTree",
            "classifier" : ObjectId("5f5b861480777d0012c35819"),
            "prediction" : ObjectId("606a74ba0daa1f00193206b5"),
            "createdAt" : ISODate("2021-04-05T02:23:54.332Z"),
            "automatedAt" : ISODate("2021-04-05T02:23:54.332Z")
        }
    ],
    "accessOverride" : [],
    "firstMessageIn" : {
        "id" : ObjectId("606a74d82d1eca9bf716d9a7"),
        "sentAt" : ISODate("2021-04-05T02:24:19.000Z"),
        "createdAt" : ISODate("2021-04-05T02:24:25.380Z"),
        "directionType" : "initial-in",
        "channel" : "email",
        "meta" : {
            "subject" : "Re: Confirming Your Cancellation",
            "from" : "eabarques@gmail.com",
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
    "lastMessageAt" : ISODate("2021-04-05T02:24:19.000Z"),
    "lastMessageDirection" : "in",
    "lastMessageDirectionType" : "initial-in",
    "lastMessageIn" : {
        "id" : ObjectId("606a74d82d1eca9bf716d9a7"),
        "sentAt" : ISODate("2021-04-05T02:24:19.000Z"),
        "createdAt" : ISODate("2021-04-05T02:24:25.380Z"),
        "meta" : {
            "subject" : "Re: Confirming Your Cancellation",
            "from" : "eabarques@gmail.com",
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
    "lastMessageUnrespondedTo" : {
        "id" : ObjectId("606a74d82d1eca9bf716d9a7"),
        "sentAt" : ISODate("2021-04-05T02:24:19.000Z"),
        "createdAt" : ISODate("2021-04-05T02:24:25.380Z")
    },
    "lastMessageUnrespondedToSinceLastDone" : {
        "id" : ObjectId("606a74d82d1eca9bf716d9a7"),
        "sentAt" : ISODate("2021-04-05T02:24:19.000Z"),
        "createdAt" : ISODate("2021-04-05T02:24:25.380Z")
    },
    "messageCountByChannel" : {
        "email" : 1
    },
    "preview" : "Thank you\r\n\r\nSent by my iPhone \r\n805.797.5087 | eabarques@gmail.com \r\n\r\n\r\n\r\n\r\n On Apr 4, 2021, at 5:00 PM, Molly | The Farmer's Dog care@thefarmersdog.com wrote:\r\n \r\n ﻿\r\n Hi Eloisa,\r\n  \r\n Just wanted to confirm that we’ve canceled Chloe's plan at your request.\r\n \r\n Please don’t hesitate to reach out if you have any questions or concerns in the meantime. We’re always here for you and Chloe.\r\n  \r\n \tAll the best,\r\n Molly | Sr. Manager of Customer Experience\r\n The Farmer's Dog\r\n  \r\n The Farmer's Dog\r\n 201 Varick Street\r\n P.O. Box #487\r\n New York, NY 10014",
    "sla" : {
        "metrics" : {
            "firstResponse" : {
                "breachAt" : ISODate("2021-04-06T02:24:25.312Z")
            },
            "longestUnrespondedMessage" : {
                "breachAt" : ISODate("2021-04-09T02:24:25.312Z")
            }
        },
        "slaId" : ObjectId("5ca3be5ee26deb001b066c8d"),
        "slaName" : "Response Time",
        "slaVersionId" : ObjectId("5f0c87078d88490019257d83"),
        "slaVersion" : 5,
        "hours" : "calendar",
        "matchedAt" : ISODate("2021-04-05T02:24:25.380Z"),
        "breach" : {
            "metric" : "firstResponse",
            "at" : ISODate("2021-04-06T02:24:25.312Z")
        }
    },
    "modifiedAt" : ISODate("2021-04-05T02:24:26.004Z"),
    "modifiedBy" : ObjectId("5bff249adb34a300118d08d1"),
    "custom" : {
        "lastBillDateAt" : "2021-03-04T09:47:58.000Z",
        "contactReasonsTree" : "account_subscription.cancel1"
    },
    "ended" : false,
    "queue" : {
        "id" : ObjectId("5ef644b4d78971001a892b16")
    },
    "subStatus" : null
}




1-prediction

{
    "_id" : ObjectId("606a74dc0daa1f00193207a1"),
    "org" : ObjectId("5bc5de5b5f2b2a001142dfa0"),
    "input" : "Thank you\r\n\r\nSent by my iPhone \r\n805.797.5087 | eabarques@gmail.com \r\n\r\n\r\n\r\n\r\n On Apr 4, 2021, at 5:00 PM, Molly | The Farmer's Dog care@thefarmersdog.com wrote:\r\n \r\n ﻿\r\n Hi Eloisa,\r\n  \r\n Just wanted to confirm that we’ve canceled Chloe's plan at your request.\r\n \r\n Please don’t hesitate to reach out if you have any questions or concerns in the meantime. We’re always here for you and Chloe.\r\n  \r\n \tAll the best,\r\n Molly | Sr. Manager of Customer Experience\r\n The Farmer's Dog\r\n  \r\n The Farmer's Dog\r\n 201 Varick Street\r\n P.O. Box #487\r\n New York, NY 10014",
    "classifier" : ObjectId("5f5b861480777d0012c35819"),
    "createdAt" : ISODate("2021-04-05T02:24:28.348Z"),
    "top" : {
        "label" : "account_subscription.cancel1",
        "confidence" : 0.895227
    },
    "results" : "{\"account_subscription.cancel1\":0.895227,\"account_subscription.account\":0.0175487623,\"brand_growth.customer_love1\":0.0158119667}",
    "confidenceThreshold" : 0.6,
    "__v" : 0
}

2-prediction

{
    "_id" : ObjectId("606a74ba0daa1f00193206b5"),
    "org" : ObjectId("5bc5de5b5f2b2a001142dfa0"),
    "input" : "Afternoon I appreciate that I have a question is currently 7:21 PM Sunday night babies food just got delivered and it’s warm it’s not cool it’s not cool there’s no ice bags my question is is this food even safe for her to eat?????????\r\n\r\nSent from my iPhone\r\n\r\n On Apr 4, 2021, at 1:00 PM, The Farmer's Dog care@thefarmersdog.com wrote:\r\n \r\n ﻿\r\n Hi Janice,\r\n \r\n We’ve gone ahead and issued your refund for $19.04, but please note it may take 5-10 business days to fully process.\r\n \r\n Please let us know if you have any questions — we’re here to help!\r\n \r\n With love,\r\n The Farmer’s Dog\r\n \r\n The Farmer's Dog\r\n 201 Varick Street\r\n P.O. Box #487\r\n New York, NY 10014\r\n \r\n Are we barking up the wrong tree? You can change your email preferences here.",
    "classifier" : ObjectId("5f5b861480777d0012c35819"),
    "createdAt" : ISODate("2021-04-05T02:23:54.268Z"),
    "top" : {
        "label" : "operations.delivery_issues",
        "confidence" : 0.697891533
    },
    "results" : "{\"operations.delivery_issues\":0.697891533,\"operations.fulfillment_error\":0.0785234272,\"account_subscription.delivery_schedule\":0.0749945268}",
    "confidenceThreshold" : 0.6,
    "__v" : 0
}
