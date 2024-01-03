---
---

# Search files for string, output occurrences

This script assumes you have a large project with many files, and you need to make changes to files if they include one of a few string patterns in them.

```sh
#!/bin/bash

# search all .rb, .erb, .haml, .slim files in the current directory, and look for the following patterns:
#   - foo.verticals
#   - foo_assignment.verticals
#   - .verticals

# Group the results by folder, and print the number of occurences of each pattern in each folder.

find . -type f \( -name "*.rb" -o -name "*.erb" -o -name "*.haml" -o -name "*.slim" \) -print0 | \
  xargs -0 grep -E -o 'foo\.verticals|foo_assignment\.verticals|\.verticals' | \
  sort | \
  uniq -c | \
  sort -n
```

This will output a list of files, the string pattern found, and the number of occurrences of the pattern in that file:

```sh
1 ./packs/authentication/app/services/saml_service/user_updater.rb:foo_assignment.verticals
1 ./packs/authentication/spec/controllers/users/omniauth_callbacks_controller_spec.rb:foo_assignment.verticals
1 ./packs/authentication/spec/services/saml_service/user_updater_spec.rb:foo_assignment.verticals
1 ./packs/business_events/spec/services/analytics_service_spec.rb:foo_assignment.verticals
1 ./packs/consumer/app/services/stripe/subscription_service.rb:foo.verticals
1 ./packs/consumer/spec/services/stripe/subscription_service_spec.rb:foo_assignment.verticals
2 ./db/seeds.rb:foo.verticals
2 ./packs/product_access_management/spec/factories/foo_assignments.rb:.verticals
2 ./packs/product_access_management/spec/models/product_spec.rb:.verticals
3 ./packs/product_access_management/app/admin/foos.rb:foo.verticals
3 ./packs/user_management/app/admin/users.rb:.verticals
4 ./packs/member_onboarding/spec/mailers/account_mailer_spec.rb:.verticals
5 ./packs/user_management/spec/controllers/admin/users_controller_spec.rb:.verticals
```
