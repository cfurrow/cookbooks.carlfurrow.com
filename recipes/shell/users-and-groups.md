# Users and groups

## Create a user

```sh
# add a new user, "nobody", to group "users"
useradd -m -g users -s /bin/bash nobody

# set the password of "nobody" to "nobody"
echo "nobody:nobody" | chpasswd
```

## Create a new group

```sh
$ groupadd nogroup
```

## Add "nobody" to group "nogroup"

```sh
$ usermod -a -G nogroup nobody
```

## Get the list of gruops a user belongs to

```sh
$ groups nobody

nobody : users nobody
```

## Get info about a User by their UID

```sh
$ getent passwd 99

nobody:x:99:100:nobody:/:/bin/false
```

## List all groups

```sh
# cat /etc/group
```

## List all users and their groups

```sh
$ cat /etc/passwd
```
