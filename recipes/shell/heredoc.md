# HEREDOC

[Bash Heredoc](https://linuxize.com/post/bash-heredoc/)

> In Bash and other shells like Zsh, a Here document (Heredoc) is a type of redirection that allows you to pass multiple lines of input to a command.

## Simple heredoc

To create a heredoc and output the contents, you can use `cat`:

```sh
cat << EOF
The current working directory is: $PWD
You are logged in as: $(whoami)
EOF
```

## Save the contents of a heredoc to a variable

If you need to save the contents of the heredoc to a variable, you can use the `read` command, which is also used to retrieve user responses into variables.
[source: stackoverflow.com](https://stackoverflow.com/a/1655389)

```sh
$ read -r -d '' input << 'EOF'
foo
bar
baz
EOF

$ echo $input

foo
bar
baz
```
