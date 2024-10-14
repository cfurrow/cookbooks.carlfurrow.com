# Logging

## Logging to a file

```sh
echo "hello world" >> /tmp/log.txt
```

## Logging to STDOUT and a file

```sh
echo "Hello World" | tee -a /tmp/log.txt
```

## Redirecting STDOUT to STDERR `1>&2`
This can be helpful when you want to provide information to the user, but do not want that output sent to STDOUT in cases where the STDOUT may be captured and interpreted by another script, or piped to another process.

It's a convenient way to output debugging information without cluttering up STDOUT.

```sh
log() {
  # Redirect stdout (file descriptor 1) to stderr (file descriptor 2)
  echo "$@" 1>&2
}

log_to_stdout() {
  echo "$@"
}

do_work() {
  log "Starting the script..."
  log "Done checking the environment variables."
  log "Doing complicated stuff..."
  log "Done\!"

  echo "This is the result"
}
do_noisy_work(){
  log_to_stdout "Starting the script..."
  log_to_stdout "Done checking the environment variables."
  log_to_stdout "Doing complicated stuff..."
  log_to_stdout "Done\!"

  echo "This is the result"
}

echo "============ Testing log function ============"
result=$(do_work)
echo "Result was: $result"

echo

echo "============ Testing log_to_stdout function ============"
result=$(do_noisy_work)
echo "Result was: $result"}
```

Output:
```sh
============ Testing log function ============
Starting the script...
Done checking the environment variables.
Doing complicated stuff...
Done!
Result was: This is the result

============ Testing log_to_stdout function ============
Result was: Starting the script...
Done checking the environment variables.
Doing complicated stuff...
Done!
This is the result
```
