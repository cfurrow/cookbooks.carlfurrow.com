# Installing a ruby gem from a git repository

See: https://bundler.io/guides/git.html

> Specify that a gem should come from a git repository with a .gemspec at its root

```ruby
gem 'rack', git: 'https://github.com/rack/rack'
```

> If there is no .gemspec at the root of a git repository, you must specify a version that bundler should use when resolving dependencies


```ruby
gem 'nokogiri', '1.7.0.1', git: 'https://github.com/sparklemotion/nokogiri'
```

> If the gem is located within a subdirectory of a git repository, you can use the :glob option to specify the location of its .gemspec

```ruby
gem 'cf-copilot', git: 'https://github.com/cloudfoundry/copilot', glob: 'sdk/ruby/*.gemspec'
```

> Specify that a git repository containing multiple .gemspec files should be treated as a gem source


```ruby
git 'https://github.com/rails/rails.git' do
  gem 'railties'
  gem 'actionpack'
  gem 'activemodel'
end
```
