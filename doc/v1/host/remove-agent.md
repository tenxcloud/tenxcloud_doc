# 如何卸载 tenx-agent
#### ubuntu
```
service tenx-agent stop
rm /usr/bin/tenx-agent
rm /etc/init/tenx-agent.conf
service docker restart
```

##### ubuntu下卸载docker
```
apt-get purge lxc-docker
apt-get autoremove -y
```

#### centos
```
systemctl stop tenx-agent
systemctl disable tenx-agent.service
rm /usr/lib/systemd/system/tenx-agent.service
systemctl daemon-reload
rm /usr/bin/tenx-agent
systemctl restart docker
```

##### centos下卸载docker
```
yum erase docker
```
