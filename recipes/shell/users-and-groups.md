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
groupadd nogroup
```

## Add "nobody" to group "nogroup"

```sh
usermod -a -G nogroup nobody
```

## Get the list of gruops a user belongs to

```sh
groups nobody
```

## List all groups

```sh
cat /etc/group
```

## List all users and their groups

```sh
cat /etc/passwd
```
