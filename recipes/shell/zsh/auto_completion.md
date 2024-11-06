# ZSH Tab-Completion / Auto-Completion

## Setting it up with compinstall
To set up auto-completion in ZSH, you can use the `compinstall` command. This will open a menu that allows you to configure auto-completion settings. To run `compinstall`, type the following:

```shell
compinstall
```


## Debugging auto-completion
Let's say you expect the `ag` command to allow for tab-completion, but when you type `ag <TAB>`, nothing happens. To debug this, you can output debugging details to a tmp file by typing the following:

```shell
ag <ctrl-x>?
```

That will dump debugging information to a file in `/tmp/zsh*` by running [`_complete_debug`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fcomplete_005fdebug-_0028_005eX_003f_0029). You can then inspect the file to see what's going on.

<video controls>
  <source src="./tab-completion-debugging.mp4" type="video/mp4">
</video>

source: [stackexchange user "Gilles"](https://unix.stackexchange.com/a/606305)

