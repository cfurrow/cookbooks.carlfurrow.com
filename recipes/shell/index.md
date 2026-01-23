---
logo: gnubash
---
# Shell

## Really useful command line help
The self hosting community collects many helpful shell commands and keyboard shortcuts here: [selfh.st/command-line-corner](https://selfh.st/command-line-corner)

## `ls` command

```sh
# list all files, including hidden ones
ls -al
ls -la

# list files, and sort by modification type (most recent first)
ls -lt
ls -tl
```
## Keyboard Shortcuts

{% include recipes/shell/shortcuts.md %}

## Tiny Scripts

**create filename with date time in it:** 
handy script to quickly create a filename with date and time already in the name of the file.
say you have a bunch of log lines in your clipboard, and you want to output it to a file that is timestamped, etc.

```sh
# usage: pbpaste > $(datetime-filename stuipd-audio.log)
# will paste contents into 2024-08-29_14-55-44-stupid-audio.log
function datetime-filename() {
  if [[ -z $1 ]]; then
    # send to stderr so it's not captured in output
    echo "What is the filename, with extension?" 1>&2
    read -r filename
  else
    filename=$1
  fi
  new_filename="$(date +"%Y-%m-%d_%H-%M-%S")-$filename"
  echo $new_filename
}
```
