# JSON RPC API  

Leantime provides a JSON RPC API Endpoint following the 2.0 conventions as outlined here [JSON RPC V2.0 Specifications](https://www.jsonrpc.org/specification).
As opposed to a REST API, the JSON RPC API focuses on transactions rather than domain objects. That means that you can get the results of service methods and have thus more flexibility in the usage of the API. 
You can connec to the single endpoint using either `GET` or `POST`. 

# Connect

First create a new API Key under "Company Settings". Similar to the user set up API Keys can have roles and projects assigned to them limiting the scope. 
When you create the endpoint please take note of the secret and store it in a secure place. This is the only time you will see the secret, after the creation secrets are hashed in the database and cannot be retrieved again.

With the API Key in hand you can connect to the single rpc endpoint at:

```
{{YOURDOMAIN}}/api/jsonrpc
```

by adding the key to the Header `x-api-key` 

```
curl https://{{YOURDOMAIN}}/api/jsonrpc
   -H "x-api-key: {{YOURAPIKEY}}"
   -H "Content-Type: application/json"
```

This is the only endpoint you will use as any further interactions are defined in the body/header of the request. 
Each request needs to contain the `x-api-key` header to authenticate a transaction. There is no concept of sessions. 

# Sending a POST Request

The format of each request is based on the JSON RPC v2 specifications and follows the same structure:

```
{
"method": "{{LEANTIMEMETHOD}}",
"jsonrpc": "2.0",
"id": {{ANY ID}},
"params": {{PARAMETERS}}
} 

```

`method` is the method you would like to execute. You have access to all service methods in leantime. The format is: `leantime.rpc.{{SERVICE DOMAIN}}.{{METHOD_NAME}}`. https://docs.leantime.io/#/api/usage
Example: `leantime.rpc.tickets.getTicket` will get one individual task. Ω

`jsonrpc` is the jsonrpc version used. Right now only 2.0 is supported

`id` is a unique ID for your request (this is not for parameters) to uniquely identify a request/response pair.

`params` is the parameters that should be passed into the method in json format. Example for the method above: 

```
{"id":"9" }
```

The fully formed body for the POST request to get one ticket with the id "9" would be:

```
{
"method": "leantime.rpc.tickets.getTicket",
"jsonrpc": "2.0",
"id": "1",
"params": {"id":"9" }
} 
```

# Sending a GET Request

We recommend using POST requests for most interactions with the API. If this is not possible you can use GET requests as well. The format is the same however the `params` property needs to be in base64 and then url encoded. The equivalent GET request for the example above is:

```
https://{{YOURDOMAIN}}/api/jsonRPC/?method=leantime.rpc.tickets.getTicket&jsonrpc=2.0&id=1&params=eyJpZCI6IjkifQ%3D%3D
```


