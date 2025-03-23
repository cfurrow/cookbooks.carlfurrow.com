# Output Redirection

## To a file

The simplest way of output redirection from one command to a file is by using the `>` operator. This will overwrite the file contents if it already exists.

```sh
# Write "Hello, World!" to hello.txt
$ echo "Hello, World!" > hello.txt
$ cat hello.txt
Hello, World!

# This will overrite the contents of hello.txt with our new message
$ echo "Goodbye, World!" > hello.txt
$ cat hello.txt
Goodbye, World!
```

To append to a file, use the `>>` operator.

```sh
$ echo "Hello, World!" > hello.txt
$ echo "Goodbye, World!" >> hello.txt

$ cat hello.txt
Hello, World!
Goodbye, World!
```

## Multiple command outputs to a single file using `{}`
You can use `{}` to group multiple commands and redirect their output to a single file.

```sh
$ { echo "Hello, World!"; echo "Goodbye, World!"; } > hello.txt
$ cat hello.txt
Hello, World!
Goodbye, World!
```

## Redirecting standard error
Unix-like systems have two output streams that commands can write to: standard output (stdout) and standard error (stderr). By default, the `>` and `>>` operators only redirect stdout. To redirect stderr, use `2>` and `2>>`.

Here's an example of writing a message to the stdout and stderr streams:

```sh
# stdout, the default
echo "Hello, World!"

# stderr
echo "Goodbye, World!" 1>&2
```

`echo` outputs to stdout by default, so we redirect it's stdout stream (1) to its stderr stream (2).

To illustrate this point, let's run two commands and capture stdout to a file and stderr to another file:

```sh
{
  echo "Hello, World!"
  echo "Goodbye, World!" 1>&2
} > stdout.txt 2> stderr.txt
```

If we check the contents of `stdout.txt`, we will see "Hello, World!", and if we check `stderr.txt`, we will see "Goodbye, World!".

If you were only interested in stderr, we could ignore redirecting stdout to a file, and leave it to output to the terminal:

```sh
{
  echo "Hello, World!"
  echo "Goodbye, World!" 1>&2
} 2> stderr.txt
```

In the above example, "Hello, World!" will be printed to the terminal, and "Goodbye, World!" will be written to `stderr.txt`.


