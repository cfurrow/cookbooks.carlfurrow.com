# Custom equality

Sometimes you'll have a need to define a custom equality method for your objects. This can be useful when you want to compare objects based on their internal state, rather than their object identity.

```ruby
class Foo
  attr_reader :id

  def initialize(id)
    @id = id.to_sym
  end

  def to_s
    id.to_s
  end

  def ==(other)
    case other
    when self.class
      id == other.id
    when String
      to_s == other
    when Symbol
      id == other
    else
      super
    end
  end
end

foo = Foo.new(:foo)

foo == :foo # => true
foo == 'foo' # => true
foo == Foo.new(:foo) # => true
foo == Foo.new('foo') # => true
foo == Foo.new(:bar) # => false
```
