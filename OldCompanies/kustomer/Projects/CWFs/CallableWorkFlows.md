# Notes

1) Assumption: Can we assume no long running workflows?
    * Can tackle later by adding WebSocket or callBackUrl support
    * That us to simplify:
        * CWFs can deliver output via network response like a rest api

2) Output should encapsulate the work-flow response so that this api 
   can still act as a REST api for CWFs. Encapsulated CWF output will be 
   nested in the response body. 

# Order status =>  status (number), details (json)
1) Response format examples for an Order Status

    * Success
    ```
    {
        code: 200,
        msg: 'OK',
        body: {
            data: {
                code: 200,
                =msg: OK
                CWFOutput: { oderNumber, details }
            }
        }
    }
    ```
    * Callable Work-flow not found (workflow id not in database)
    ```
    {
        code: 404,
        msg: 'NOT_FOUND',
        body: {
            data: {
                success: true,
                CWFOutput: { oderNumber, details }
            }
        }
    }
    ```
    * Server Error while executing CWF (network error)
    ```
    {
        code: 404,
        msg: 'NOT_FOUND',
        body: {
            data: {
                success: true,
                CWFOutput: { oderNumber, details }
            }
        }
    }
    ```
    * Client Error while executing CWF (CWF called w/ incorrect params)
    ```
    {
        code: 200,
        msg: 'OK',
        body: {
            data: {
                // success: false,
                code: 400
                msg: 'Bad Parameters'
                details: {
                    err: "Missing required param OrderNumber (string)"
                }
            }
        }
    }
    ```
    * Client Error while executing CWF (Order number not found)
    ```
    {
        code: 200,
        msg: 'OK',
        body: {
            data: {
                // success: false,
                code: 400
                details: {
                    err: "Missing required param OrderNumber (string)"
                }
            }
        }
    }
    ```