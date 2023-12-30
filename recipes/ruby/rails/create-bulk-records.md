---
logo: rubyonrails
---

# Create records in bulk

```ruby
segment_attributes = []

while assigned_at < end_date
  #...snipped...

  # Build each segment record hash we want to insert
  segment_attributes << {
    assignee_uuid: user.uuid,
    assignment_id: assignment.id,
    assigned_at:,
    scheduled_end:,
    extended_to:,
    ended_at:
  }

  #...snipped...
end

Segment.create!(segment_attributes)
```


```ruby
# see: https://api.rubyonrails.org/classes/ActiveRecord/Persistence/ClassMethods.html#method-i-create

# Create a single new object
User.create(first_name: 'Jamie')

# Create an Array of new objects
User.create([{ first_name: 'Jamie' }, { first_name: 'Jeremy' }])

# Create a single object and pass it into a block to set other attributes.
User.create(first_name: 'Jamie') do |u|
  u.is_admin = false
end

# Creating an Array of new objects using a block, where the block is executed for each object:
User.create([{ first_name: 'Jamie' }, { first_name: 'Jeremy' }]) do |u|
  u.is_admin = false
end
```


