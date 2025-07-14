---
logo: rubyonrails
---

# Delegated Types

Source: https://api.rubyonrails.org/classes/ActiveRecord/DelegatedType.html

```
Configuration < ApplicationRecord
SAMLConfiguration < Configuration
GenAIConfiguration < Configuration
```

Then lets say you have a set of other Rails models that can have one or more of these Configuration models on it? How can you pull all configurations?

```ruby
class User < ApplicationRecord
  # TODO: setup polymorphic association
  has_many :configurations
end

class Company < ApplicationRecord
  # TODO: setup polymorphic association
  has_many :configurations
end
```


```ruby
# Schema: entries[ id, owner_id, owner_type, configurable_type, configurable_id, created_at, updated_at]
class Configuration < ApplicationRecord
  # TODO: setup polymorphic association
  belongs_to :user, optional: true, inverse_of: :configurations
  # TODO: setup polymorphic association
  belongs_to :company, optional: true, inverse_of: :configurations

  delegated_type :configurable, types: %w(SAMLConfiguration GenAIConfiguration)
end

module Configurable
  include ActiveSupport::Concern

  included do
    has_one :configuration, as: :configurable, touch: true
  end
end

class SAMLConfiguration < Configuration
  include Configurable
end

class GenAIConfiguration < Configuration
  include Configurable
end
```
