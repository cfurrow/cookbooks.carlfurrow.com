# xargs

## Pass an array of items, and run a command per item

Let's say you are using the backlog-md command to manage tasks within your project. You have completed tasks with ids 1.3 and 1.4, and want to archive them. To archive tasks in backlog-md, you must run the `backlog task archive <id>` per id you want to archive. Instead of writing multiple commands, you can use `xargs` and a shell array of task ids to run the commadns for you!

```sh
echo {1.3,1.4} | xargs -n 1 -I {} backlog task archive {}
```

* `echo {1.3,1.4}`: This command outputs the task IDs separated by spaces. 
* `xargs`: This utility reads items from standard input (in this case, the task IDs).
* `-n 1`: This option tells xargs to use one argument per command line.
* `-I {}`: This option allows you to specify a placeholder `{}` that will be replaced by each argument from the input.
* `backlog tasks archive {}`: This is the command that will be executed for each task ID, with {} being replaced by the current task ID.
