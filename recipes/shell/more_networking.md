
# More Networking
Here are some more networking tips and tricks that I've found helpful.


## List out the current ports that processes are listening to
To see a list of all processes, and the network ports they are listening to, you can run this command:

```sh
sudo lsof -nP | grep LISTEN
```

That will output a list of running process, and the ports they are currently listening to (the far right column):

```
launchd       1                  root   41u     IPv6 0xc1f1e80abecd53a6           0t0                 TCP [::1]:8021 (LISTEN)
launchd       1                  root   43u     IPv4 0x48f9402b97399e06           0t0                 TCP 127.0.0.1:8021 (LISTEN)
launchd       1                  root   44u     IPv6 0xc1f1e80abecd53a6           0t0                 TCP [::1]:8021 (LISTEN)
launchd       1                  root   45u     IPv4 0x48f9402b97399e06           0t0                 TCP 127.0.0.1:8021 (LISTEN)
launcher    349                  root   12u     IPv4 0x6d5f6fdfd7b5b7ed           0t0                 TCP 127.0.0.1:49152 (LISTEN)
launcher    349                  root   22u     IPv4 0x22976f9ddb139af9           0t0                 TCP 127.0.0.1:12519 (LISTEN)
rapportd    548              some_guy    8u     IPv4 0x4dd9c344f7a73efd           0t0                 TCP *:53667 (LISTEN)
rapportd    548              some_guy    9u     IPv6 0xec694e76d9ad891b           0t0                 TCP *:53667 (LISTEN)
ControlCe   602              some_guy    8u     IPv4 0xabeea6ffba54c987           0t0                 TCP *:7000 (LISTEN)
ControlCe   602              some_guy    9u     IPv6 0x4edd4ed82af70380           0t0                 TCP *:7000 (LISTEN)
ControlCe   602              some_guy   10u     IPv4 0x491ab49b24c5e3be           0t0                 TCP *:5000 (LISTEN)
ControlCe   602              some_guy   11u     IPv6 0x73d180198774238b           0t0                 TCP *:5000 (LISTEN)
OrbStack   1150              some_guy   84u     IPv4 0x98dbcad4cd659380           0t0                 TCP 127.0.0.1:32222 (LISTEN)
OrbStack   1150              some_guy   85u     IPv6 0xeca0f07e51fd2105           0t0                 TCP [::1]:32222 (LISTEN)
OrbStack   1150              some_guy   86u     IPv4 0x5763db0ca047f325           0t0                 TCP 127.0.0.1:49161 (LISTEN)
OrbStack   1150              some_guy  118u     IPv4 0xe0d85b5176aef7d5           0t0                 TCP *:54320 (LISTEN)
OrbStack   1150              some_guy  120u     IPv6 0x99bcb618a7b4fa13           0t0                 TCP *:54320 (LISTEN)
OrbStack   1150              some_guy  121u     IPv4 0x21c54ffd7326d735           0t0                 TCP *:3000 (LISTEN)
OrbStack   1150              some_guy  123u     IPv6 0x59ac947c8102e1cb           0t0                 TCP *:3000 (LISTEN)
OrbStack   1150              some_guy  124u     IPv4 0x55b92896d1c85a30           0t0                 TCP *:63791 (LISTEN)
OrbStack   1150              some_guy  125u     IPv6 0x2c55eedc7e01690b           0t0                 TCP *:3036 (LISTEN)
OrbStack   1150              some_guy  127u     IPv6 0xbf0c6f1bf198c960           0t0                 TCP *:63791 (LISTEN)
OrbStack   1150              some_guy  128u     IPv4 0x2ccc0e10bd2206f3           0t0                 TCP *:9200 (LISTEN)
OrbStack   1150              some_guy  129u     IPv4 0xb6d631494fc78f5b           0t0                 TCP *:9600 (LISTEN)
OrbStack   1150              some_guy  130u     IPv6 0x1eae68c1e69117cc           0t0                 TCP *:9200 (LISTEN)
OrbStack   1150              some_guy  131u     IPv6 0x4bd858f32b4d3af9           0t0                 TCP *:9600 (LISTEN)
OrbStack   1150              some_guy  132u     IPv4 0x161a2f1ce9f9abb3           0t0                 TCP *:1025 (LISTEN)
OrbStack   1150              some_guy  133u     IPv4 0x1a019bbacd4d7057           0t0                 TCP *:1080 (LISTEN)
OrbStack   1150              some_guy  134u     IPv6 0x6689e1d37aeda27f           0t0                 TCP *:1025 (LISTEN)
OrbStack   1150              some_guy  135u     IPv6 0xd268fbb7794220d0           0t0                 TCP *:1080 (LISTEN)
OrbStack   1150              some_guy  138u     IPv4  0xc2389d30d1cde91           0t0                 TCP *:63790 (LISTEN)
OrbStack   1150              some_guy  139u     IPv4 0xb4a2b7e9f4548d34           0t0                 TCP *:3400 (LISTEN)
OrbStack   1150              some_guy  140u     IPv4 0x7f56ebbce1c2ff56           0t0                 TCP *:32768 (LISTEN)
OrbStack   1150              some_guy  141u     IPv4 0xcc5d88ef961d1406           0t0                 TCP *:7020 (LISTEN)
OrbStack   1150              some_guy  142u     IPv4 0xa032c6631e16f30b           0t0                 TCP *:4200 (LISTEN)
OrbStack   1150              some_guy  143u     IPv6 0x517f5e0cd00b632d           0t0                 TCP *:63790 (LISTEN)
OrbStack   1150              some_guy  144u     IPv6 0x2cca94a9824fb586           0t0                 TCP *:32768 (LISTEN)
OrbStack   1150              some_guy  145u     IPv6 0xe92fd258ed72bc7c           0t0                 TCP *:7020 (LISTEN)
OrbStack   1150              some_guy  146u     IPv6 0xe72c2dffe69f88dc           0t0                 TCP *:4200 (LISTEN)
OrbStack   1150              some_guy  148u     IPv6 0x30acfc775bd7e1b9           0t0                 TCP *:3400 (LISTEN)
cupsd     11536                  root    5u     IPv6 0x498cba3650bf0b91           0t0                 TCP [::1]:631 (LISTEN)
cupsd     11536                  root    6u     IPv4 0xc722561186c0fdce           0t0                 TCP 127.0.0.1:631 (LISTEN)
```
