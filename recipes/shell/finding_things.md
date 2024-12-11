
# Finding Things

## Recursively find files under a .github directory that contains a string
I got an email from Github in December 2024 that a few Github workflows were being deprecated soon, and that I'd need to update all of my projects to use the newer versions of the workflows. The problem was, they did not provide the names of the products that were going to be impacted by this deprecation.

You can use `find` with `grep` to search all directories and sub-directories recursively.

The deprecated packages were:
```
actions/cache@v1
actions/cache@v2
actions/download-artifact@v3
actions/upload-artifact@v3
```

I collect all of my projects in "~/workspace", so by changing into that directory, I could use this search to return all project files that were using those versions of those actions:

```sh
cd ~/workspace
find . -type d -name '.github' \
  -exec grep -r -E "actions/upload-artifact@v3|actions/download-artifact@v3|actions/cache@v1|actions/cache@v2" {} +
```

**Command Breakdown**

`find .`:
This starts a search in the current directory (.) and all its subdirectories.

`-type d`:
This option specifies that the search should only look for directories (d).

`-name '.github'`:
This filters the search to only include directories named .github.

`\`:
This backslash at the end of the line is used to continue the command onto the next line in the shell. It allows for better readability.

`-exec`:
This option allows you to execute a command on each item found by find. In this case, the command that will be executed is grep.

`grep -r -E`:

*	grep is a command-line utility for searching plain-text data.
*	-r means to search recursively through directories.
*	-E enables extended regular expressions, allowing for more complex search patterns.

`"actions/upload-artifact@v3|actions/download-artifact@v3|actions/cache@v1|actions/cache@v2"`:

* This is the search pattern. The | operator acts as a logical OR, meaning that grep will look for any of the following strings:
  * actions/upload-artifact@v3
  * actions/download-artifact@v3
  *	actions/cache@v1
  *	actions/cache@v2

`{}`:
This is a placeholder that find replaces with the current directory found (in this case, each .github directory).

`+`:
This indicates the end of the -exec command and tells find to pass all the found directories to grep at once, rather than invoking grep separately for each directory.

