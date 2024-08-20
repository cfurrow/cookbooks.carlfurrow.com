---
logo: rubyonrails
---

# Rails / ActiveRecord Callbacks

## Get a list of all callbacks
This is not a public API, but as of Rails 7.x (and maybe prior versions), you can get the list of all callbacks running on a model by doing this:

```ruby
# List out the "create" callbacks, in order. Note that 'get_callbacks' is a protected method, so we must use `#send` to call it. It takes one argument, which is the type of callback you want to query: `:create`, `:update`, etc.
# Also note that I reverse the order of the output, because the list of callbacks appears to be a stack, where the top of the stack is the last one to be called, and the bottom of the stack are the first to be called.

SomeModel.send(:get_callbacks, :create).map { |cb| ["#{cb.kind}_#{cb.name}", cb.filter] }.reverse

=> [
 ["before_create", :init_call],
 ["after_create", :autosave_associated_records_for_versions],
 ["after_create", :do_something_weird],
 ["after_create", :autosave_associated_records_for_user],
 ["after_create", :autosave_associated_records_for_notifications],
 ["after_create", :autosave_associated_records_for_notes,
 ["after_create", :consume_some_foobar_thing],
 ["after_create", :log_details],
 ["after_create", :update_some_other_thing],
 ["after_create", :create_another_model_if_needed!],
 ["after_create", :update_some_other_state],
]
```

You could make similar calls for the other callback types: `:update`, `:delete`, `:validate`, etc
