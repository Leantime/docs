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

By adding the key to the Header 

This is the only endpoint you will use, as any further interactions are defined in the body/header of the request. 
