# Proxmox

[Proxmox Helper Scripts](https://community-scripts.github.io/ProxmoxVE/)

## Cheat sheet

```
# list all VMs
> pct list

VMID       Status     Lock         Name                
100        running                 myspeed   

# get network information
> lxc-info -n 100

Name:           100
State:          RUNNING
PID:            1051
IP:             192.168.0.22
Link:           veth100i0
 TX bytes:      2.11 MiB
 RX bytes:      1.60 MiB
 Total bytes:   3.71 MiB
```

## Script to list containers and IPs
Run this from the proxmox node, not inside a container:

```sh
#!/bin/bash

# Function to get the IP address of a container
get_container_ip() {
    local container_id=$1
    ip=$(lxc-info -n "$container_id" | grep -w "IP:" | awk '{print $2}')
    echo "$ip"
}

# Print the table header
printf "%-10s %-20s %-15s\n" "Container ID" "Name" "IP Address"
printf "%-10s %-20s %-15s\n" "------------" "--------------------" "---------------"

# Get the list of containers
pct list | tail -n +2 | while read -r line; do
    # Extract the container ID and name
    container_id=$(echo "$line" | awk '{print $1}')
    container_name=$(echo "$line" | awk '{print $NF}') # Use $NF to get the last field (Name)
    
    # Get the IP address of the container
    container_ip=$(get_container_ip "$container_id")
    
    # Print the container details in a formatted table
    printf "%-10s %-20s %-15s\n" "$container_id" "$container_name" "$container_ip"
done
```

It will output a table with the VMID, Name, and IP
