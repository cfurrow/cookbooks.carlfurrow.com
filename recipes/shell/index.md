---
logo: gnubash
---
# Shell

## Keyboard Shortcuts

**Clear the currently typed command, but save it for later pasting:** 
If you typed out a long command, but want to run something else first, but don't want to lose what you've typed, you can use `Ctrl-U`, which saves what you've typed, and clears the current line so you can type out your other command. When you're ready to run your original command, you can get it back by typing `Ctrl-Y`.

`Ctrl-U` - `unix-line-discard`
Kill backward from the cursor to the beginning of the current line. (stores text in the "kill ring")

`Ctrl-Y` - `yank`
Yank the top of the kill ring into the buffer at point.

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
