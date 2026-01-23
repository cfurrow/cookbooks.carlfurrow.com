---
title: Shell Tips
---

# Tips

## Keyboard Shortcuts
{% include recipes/shell/shortcuts.md %}

## Using a variable with tab-completion
**Scenario**: Let's say you want to open multiple files in a given directory within `nvim` (or VSCode's `code` command), but you don't know the names of the files in that directory. You also do not want to open _all_ files in that directory, just a select few.

**Solution**: You set a variable along with your shell's tab-completion to make it easy!

```sh
d=path/to/directory

# select a single file using the variable and tab-completion
nvim $d/<TAB>
# your command will now look like this, with your cursor at the end of the line
nvim path/to/directory/file1
# you can continue to add files to the list by repeating your previous step:
nvim path/to/directory/file1 $d/<TAB>
```
