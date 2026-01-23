**Clear the currently typed command, but save it for later pasting:** 

If you typed out a long command, but want to run something else first, but don't want to lose what you've typed, you can use `Ctrl-U`, which saves what you've typed, and clears the current line so you can type out your other command. When you're ready to run your original command, you can get it back by typing `Ctrl-Y`.

`Ctrl-U` - delete all text from the current line preceding the location of the cursor

`Ctrl-Y` - `yank` - Yank/paste wha was previously deleted via `Ctrl-U` or `Ctrl-W` into the shell

**Other shortcuts**

`Ctrl-W` - delete the previous word from the command line

`Ctrl-P` - cycle through the command line history

`Ctrl-O` - used as a shortcut to execute the command queued by `Ctrl + P`

`Ctrl-K` - delete everything from the current cursor position to the end of the line

`Ctrl-R` - search for a previously used command directly from the command line

`Ctrl-L` - instantly clear the terminal window while preserving any input on the current line

`Alt-.` - cycle through and reuse arguments from previous commands

`Ctrl-x-e` - opens up your `$EDITOR` to edit the current command you are typing. When you are done editing your command in your editor, save and close the editor to put the contents of your command back into the shell.

`Ctrl-a` / `Ctrl-e` - move the cursor to the start or end of the current line
