# Using grep to find things


## Search all .yml files in any .github directory or subdirectory for a term

In April 2025, Github is no longer supporting Ubuntu-20.04 images in your workflow runners, but did not give you a quick way to find out if this affects any of your active github projects. Being on my own, I wrote a quick grep script to search all of my local projects for mentions of "ubuntu" in any .yml file that was somewhere inside a .github directory, or subdirectory. I made the search broad, because I didn't recall the actual syntax or formatting of the "ubuntu" version string.

```sh
grep -r "ubuntu" **/.github/**/*.yml
```

That returned many files as expected due to the broad nature of the search, and returned many matches like:

```
ubuntu-latest
ubuntu-22
ubuntu-20.04
```

You can refine the search by piping the output to another grep search:

```sh
grep -r "ubuntu" **/.github/**/*.yml | grep -v "ubuntu-latest"
```

`grep -v` is an inverted search. Meaning it returns lines NOT matching your query. `grep -v` is the shorthand option to `grep --invert-match`.

With that done, I was seeing more relevant matches in my search results, although it was still a broad search. I was still curious what other ubuntu versions were being used, so I did not restrict the search to only 20.04:

```
(...).github/workflows/ruby.yml:    runs-on: ubuntu-20.04
neovim/.github/workflows/test.yml:            runner: ubuntu-22.04
(...)ffi_c/libffi/.github/workflows/emscripten.yml:    runs-on: ubuntu-22.04
(...).github/workflows/ci.yml:        - os: ubuntu-18.04
```

