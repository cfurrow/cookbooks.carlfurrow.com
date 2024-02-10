
# PostgresSQL: FOR UPDATE SKIP LOCKED

`FOR UPDATE SKIP LOCKED` is a powerful SQL clause used in PostgreSQL to control concurrency and locking behavior when selecting rows from a table. It's particularly useful in applications that implement locking mechanisms, such as job queues, where multiple processes or threads need to access and modify database rows without interfering with each other. Let's break down what this clause does and why it's useful:

## FOR UPDATE
The `FOR UPDATE` clause is used in a `SELECT` statement to lock the selected rows against concurrent updates. When a row is locked with `FOR UPDATE`, other transactions that attempt to select the same row with `FOR UPDATE` will be blocked until the lock is released. This ensures that when a transaction is processing a row, no other transaction can modify that row, preventing race conditions and ensuring data integrity.

## SKIP LOCKED
The SKIP LOCKED option, when used with `FOR UPDATE`, changes the behavior of the locking mechanism. Instead of blocking until the locked rows are available, it makes the SELECT statement skip over any rows that are already locked by another transaction. This is particularly useful in scenarios where a process can move on to work on other tasks instead of waiting for the locked resources to become available.

## Use Case in Job Queues
In the context of a job queue, where multiple workers are polling the database to fetch jobs to process, `FOR UPDATE SKIP LOCKED` is extremely useful. Here’s how it works in this scenario:

1. **Concurrency Handling**: Multiple workers can safely and efficiently poll the job queue table at the same time to fetch jobs that are ready for processing.
Locking: When a worker selects a job using `FOR UPDATE SKIP LOCKED`, it locks that job so no other worker can select the same job. This prevents the same job from being processed more than once.
2. **Skipping Locked Rows**: If a job is already locked by another worker, `SKIP LOCKED` ensures that other workers will simply ignore that job and move on to the next available one. This way, workers don't waste time waiting for locked jobs to be released.

### Example
Here's an example of using `FOR UPDATE SKIP LOCKED` in a job queue scenario. It assumes we have a job_queues table with something like following schema:

```sql
CREATE TABLE job_queue (
  id SERIAL PRIMARY KEY,
  task_type VARCHAR(255) NOT NULL,
  task_payload JSON NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending', -- e.g., 'pending', 'processing', 'completed', 'failed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  scheduled_for TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

To process the next available job, a worker can use the following SQL transaction:

```sql
BEGIN;

SELECT * 
FROM job_queue
WHERE status = 'pending'
  AND scheduled_for <= NOW()
ORDER BY created_at ASC
FOR UPDATE SKIP LOCKED
LIMIT 1;

-- Assume job processing logic goes here
-- When job is processed, update its status and other fields as necessary

COMMIT;
```


This transaction starts by selecting the next available job that is pending and scheduled for execution. It locks this job for update, ensuring no other worker can process it simultaneously, while skipping any jobs that are already locked by other workers. After processing the job, the transaction is committed, releasing the lock.

### Benefits
- **Efficiency**: Workers can efficiently process jobs without blocking each other, leading to better throughput and utilization of resources.
- **Deadlock Prevention**: `SKIP LOCKED` helps in avoiding deadlocks that can occur when multiple transactions try to lock the same rows.
- **Scalability**: This approach scales well with the addition of more workers, as each worker independently processes jobs without interfering with others.
`FOR UPDATE SKIP LOCKED` is a key tool in building robust and concurrent applications with PostgreSQL, especially in patterns like job queues where resource locking and concurrent processing are critical.
