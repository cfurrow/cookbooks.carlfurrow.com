# Users and groups

## Create a user

```sh
# add a new user, "nobody", to group "users"
useradd -m -g users -s /bin/bash nobody

# add new user "nobody" and set the user id (uid) to 99:
useradd -u 99 nobody

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

## Get the list of groups a user belongs to

```sh
$ groups nobody

nobody : users nobody
```

## Get info about the current user

```sh
$ id
uid=501(yourusername) gid=20(staff) groups=20(staff),101(access_bpf),12(everyone),61(localaccounts),79(_appserverusr),80(admin),81(_appserveradm),98(_lpadmin),100(_lpoperator),204(_developer),250(_analyticsusers)
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
