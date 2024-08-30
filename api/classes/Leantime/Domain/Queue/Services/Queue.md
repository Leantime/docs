---
title: \Leantime\Domain\Queue\Services\Queue
footer: false
---

# Queue




`leantime.rpc.Queue.Queue.`


## Available Methods
### `leantime.rpc.Queue.Queue.processQueue`

Process the queue for a specific worker.

```json
{
    "method": "leantime.rpc.Queue.Queue.processQueue",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "worker": \Leantime\Domain\Queue\Workers\Workers,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `worker` | **\Leantime\Domain\Queue\Workers\Workers** | The worker for which to process the queue. |


**Returns:**
Returns true if the queue was processed successfully, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

