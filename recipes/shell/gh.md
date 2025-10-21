# gh CLI tool

https://cli.github.com/

**Install it:**
```sh
brew install gh
```

## Edit a gist from a local file
Let's say you already have a gist created, https://gist.github.com/cfurrow/abc123, and you want to upload the contents of a local markdown file FOO.md into that gist:

```sh
gh gist edit abc123 --add FOO.md
```

You can also edit that gist file, FOO.md in your `$EDITOR`, which for me, is neovim:

```sh
gh gist edit abc123 FOO.md
```

When you save and close that file, your changes will be automatically uploaded to your gist file, "FOO.md".
