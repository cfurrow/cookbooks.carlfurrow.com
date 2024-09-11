---
title: Docker
logo: docker
---

### View docker image contents
There may be times where your docker virtual image is growing in size, and you need to inspect what is being added to your `docker.img`. You can use this command to view the image, and run some other useful commands like `du` (disk usage) to inspect directories that are growing out of control.

```
docker run -it --rm --privileged --pid=host justincormack/nsenter1

du -h -d1 /var
0	./vpnkit
0	./tmp
0	./spool
0	./opt
0	./log
0	./lock
0	./local
49.4G	./lib
0	./empty
0	./cache
49.4G	.
```

### Related

- [Dev Resources](https://michaelcurrin.github.io/dev-resources/resources/containers/docker.html)
