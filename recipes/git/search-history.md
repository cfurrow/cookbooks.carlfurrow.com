# Search History

https://git-scm.com/docs/git-log

Search git history for changes matching string:

```sh
# Look for differences that change the number of occurrences of
# the specified string (i.e. addition/deletion) in a file.
# Intended for the scripter’s use.
git log -S"recommendation_mailer"

# Look for differences whose patch text contains a
# dded/removed lines that match <regex>.
git log -G"recommendation_mailer"
```

