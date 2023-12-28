# Parsing Shell Options

```sh
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
            ;;
        *)
            echo "unknown option"
            ;;
    esac
    shift
done
```
