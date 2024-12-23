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
