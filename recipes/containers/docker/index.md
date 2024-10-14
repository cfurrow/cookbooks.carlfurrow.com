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

## List the running containers

```sh
docker ps
```

You can also filter then by name, which will find any container that contains or equals the string you pass to it:

```sh
docker ps --filter "name=postgres"


CONTAINER ID   IMAGE         COMMAND                  CREATED       STATUS      PORTS                                         NAMES
88c488d9c30e   postgres:15   "docker-entrypoint.s…"   4 weeks ago   Up 2 days   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp     postgresql15
dd365262ddb8   postgres:17   "docker-entrypoint.s…"   3 weeks ago   Up 4 days   0.0.0.0:54320->5432/tcp, :::54320->5432/tcp   postgresql17
```


## Related

- [Dev Resources](https://michaelcurrin.github.io/dev-resources/resources/containers/docker.html)
