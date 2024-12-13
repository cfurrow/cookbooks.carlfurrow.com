# Ruby's 'private_constant' method

https://ruby-doc.org/3.3.6/Module.html#method-i-private_constant

If you want to define a constant, but keep it private and inaccessible to anything outside of your current class or module definition, you can use the `Module#private_constant` method. An example of this is demonstrated on [Aaron Lasseigne's blog](https://aaronlasseigne.com/2016/10/26/know-ruby-private_constant/):

```ruby
class Broccoli
  FAMILY = 'cabbage'
  WORST_PART = 'stem'
  private_constant :WORST_PART

  def worst_part?
    WORST_PART
  end
end
```

By setting `WORST_PART` as private, you cannot access that constant from outside of the `Broccoli` class or methods:

```ruby
Broccoli::FAMILY #=> 'cabbage'

Broccoli::WORST_PART
private constant Broccoli::WORST_PART referenced (NameError)

Broccoli::WORST_PART
        ^^^^^^^^^^^^

Broccoli.new.worst_part? #=> "stem"
```
