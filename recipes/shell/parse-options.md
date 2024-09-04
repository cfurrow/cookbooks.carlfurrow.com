# Parsing Shell Options

When building a custom shell script, you may want to add some command line options or arguments that the user can choose to change based on their needs.

One of the easiest ways to accomplish the parsing and setting of these options is to use a combination of a `while` loop and a `case` statement. 

The `while` loop runs until all ARGV arguments are parsed, and there are no more arguments remaining in that list. We will `shift` and pop off each argument from the list of arguments with each loop.

We use the `case` statement to determine if the argument (and possible value) is one of the known arguments we want to parse. If it's not a known argument, we print a message, and move to the next argument.

```sh
#!/bin/bash

# Usage: ./script.sh [--verbose|-v] [--file|-f file.txt]

VERBOSE=0
FILE=""

while [ $# -gt 0 ]; do
  case "$1" in
    -v|--verbose)
      echo "verbose mode"
      VERBOSE=1
      ;;
    -h|--help)
      echo "help mode"
      ;;
    -f|--file)
      echo "file mode"
      FILE="$2"
      shift # we need to shift an extra time since this option expects a value. 
      ;;
    *)
      echo "unknown option"
      ;;
  esac
  shift # shift the arg list to remove the one we just processed, and move on to the next one
done

# Only  output log message if VERBOSE is set to 1
log() {
  local MESSAGE="$1"
  if [ "$VERBOSE" = 1 ]; then
    echo "$MESSAGE"
  fi
}

# check if file is empty
if [ -z "$FILE" ]; then
  log "file is empty"
else
  log "file is not empty: $FILE"
fi

# the rest of your script goes here.
```
