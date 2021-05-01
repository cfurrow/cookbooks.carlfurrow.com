# Markdown Link Check

An NPM package to chech links in Markdown files.

[![tcort - markdown-link-check](https://img.shields.io/static/v1?label=tcort&message=markdown-link-check&color=blue&logo=github)](https://github.com/tcort/markdown-link-check)
[![stars - markdown-link-check](https://img.shields.io/github/stars/tcort/markdown-link-check?style=social)](https://github.com/tcort/markdown-link-check)


## Run with GitHub Actions

See [GitHub Action Markdown Link Check][] recipe in the GitHub Actions section.

[GitHub Action Markdown Link Check]: {{ site.baseurl }}{% link recipes/ci-cd/github-actions/workflows/check-links/gh-md-link-check.md %}


## Run with NPM

### Install

```sh
$ npm install markdown-link-check -D 
```

### Run file

```sh
$ markdown-link-check https://github.com/tcort/markdown-link-check/blob/master/README.md
```

```sh
$ markdown-link-check README.md
```

### Run on directory

You have to set up logic yourself to run it on a directory.

```sh
$ find . -name '*.md' -exec markdown-link-check {} \;
```

## Run with container

See the docs.