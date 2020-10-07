
# Installation Steps:

1. Node version: 10.16.0
2. To install all the modules, run "npm install"
3. Start the server with  "npm start"
4. Run Unit Test Suite with "npm test"

How to View Results:

# 1. Authorized User with valid token:
## Request:
 ```
 curl -H "authorization: 676cfd34-e706-4cce-87ca-97f947c43bd4" http://localhost:4000/properties\?city\=Houston 
 ```

## Response:
```
{
    "data": {
        "getAllProperties": [
            {
                "mlsId": 1005192,
                "address": {
                    "full": "74434 East Sweet Bottom Br #18393"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005193,
                "address": {
                    "full": "34149 East GRANICUS Mews #I-7"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005172,
                "address": {
                    "full": "68827 South 99 CT Estates #783"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005255,
                "address": {
                    "full": "36992 West Georgetown(lot 18) Boulevard #C 104"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005204,
                "address": {
                    "full": "19078 North EFFIE Mall #2605"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005199,
                "address": {
                    "full": "15804 South FM 3 Boulevard #1795"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005245,
                "address": {
                    "full": "52876 North Newark Blvd B Trace #2035"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005219,
                "address": {
                    "full": "91910 East Somerset N. Knolls #783"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005229,
                "address": {
                    "full": "92270 South 2991 Bryant ST Pl #1573"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005191,
                "address": {
                    "full": "86469 West Zenith Cliff #F16"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005236,
                "address": {
                    "full": "70490 North FAIRHAVEN PL Creek #13906"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005254,
                "address": {
                    "full": "60843 South GAITHER WAY CT #18393"
                },
                "association": {
                    "fee": 1000
                }
            },
            {
                "mlsId": 1005240,
                "address": {
                    "full": "2976 North British Colony Lndg #12306"
                },
                "association": {
                    "fee": 1000
                }
            }
        ]
    }
}
```
# 2. Unauthorized User with no token:

## Request:
  ```
  curl http://localhost:4000/properties\?city\=Houston
  ```


## Response:
```
{
    "errors": [
        {
            "message": "Context creation failed: User must be logged in",
            "extensions": {
                "code": "INTERNAL_SERVER_ERROR",
                "exception": {
                    "stacktrace": [
                        "Error: Context creation failed: User must be logged in",
                        "    at ApolloServer.context (/Users/Nen/development/takeHomeTest/src/index.ts:18:21)",
                        "    at ApolloServer.<anonymous> (/Users/Nen/development/takeHomeTest/node_modules/apollo-server-core/src/ApolloServer.ts:954:24)",
                        "    at Generator.next (<anonymous>)",
                        "    at fulfilled (/Users/Nen/development/takeHomeTest/node_modules/apollo-server-core/dist/ApolloServer.js:5:58)",
                        "    at process._tickCallback (internal/process/next_tick.js:68:7)"
                    ]
                }
            }
        }
    ]
}

```
ToDo:
1. Add DB layer to persist data, such as user, property, transactions, etc.
2. Add Cache Layer in Graphql to cache the response for a short period, or without the interval cache support from graphql, we can onboard redis/memcached as external cache support.
3. Make the API endpoint to support more arguments so that it can be used to filter and return more accurate results from Graphql.
4. Mutation TBD


