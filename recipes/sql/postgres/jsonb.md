# Postgres jsonb

## Extract a json values into result columns
Let's say you have a record in your database with one or more json columns, like when using the [papertrail](https://github.com/paper-trail-gem/paper_trail) gem which can track and store changes to your Rails models by persisting the states and updates as JSON. In the example below, you can see that the 'object' column stores the entire state of the object prior to the update, and the 'object_changes' includes the attributes and values that were changed with the before and after values stored as an array.

|id|item_type|item_id|item_uuid|event|whodunnit|object|object_changes|created_at|
|--|---------|-------|---------|-----|---------|------|--------------|----------|
|1234|FooBar|99||update|1|`{"fizzbuzz":true,"lengths":[30,60],"id":99,"created_at":"2025-02-13T09:01:16.083-08:00","updated_at":"2025-10-30T06:55:56.115-07:00"}`|`{"lengths":[[30,60],[60]],"updated_at":["2025-10-30T06:55:56.115-07:00","2025-10-30T06:57:17.084-07:00"]}`|2025-10-30 13:57:17.084|

For instance, you can see that the 'lengths' value was changed from [30,60] to [60] here: `"lengths":[[30,60],[60]]`.

To extract that before and after value with postgres, you can write this SQL query:

```sql
select 
  created_at, 
  (object_changes->'lengths'->>0)::jsonb AS lengths_before,
  (object_changes->'lengths'->>1)::jsonb AS lengths_after
from versions v
where v.item_type = 'Foobar' 
  and v.item_id = 99
order by created_at desc
```

Which will output this result:

|created_at|lengths_before|lengths_after|
|----------|--------------|--------------|
|2025-10-30 13:57:17.084|[30, 60]|[60]|
