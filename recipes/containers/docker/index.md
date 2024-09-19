---
title: Docker
logo: docker
---

## List files that have been changed in the container since it was created

```sh
docker container diff CONTAINER
# or
docker diff CONTAINER
```

You can also use `docker ls` in combination with [`fzf`](/recipes/shell/fzf.html) to make selecting the container interactive:

```sh
  docker diff $(docker container ls --format "{{ "{{ .Names" }} }}" | fzf)
```


## Related

- [Dev Resources](https://michaelcurrin.github.io/dev-resources/resources/containers/docker.html)
