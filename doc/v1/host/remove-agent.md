# 如何卸载 tenx-agent
<ul><li>
<h4>ubuntu</h4>
service tenx-agent stop<br/>
rm -rf /opt/bin/*<br/>
rm /usr/bin/tenx-agent<br/>
rm /etc/init/tenx-agent.conf<br/>
rm /etc/default/docker<br/>
touch /etc/default/docker<br/>
service docker restart

<h5>ubuntu下卸载docker</h5>
apt-get purge lxc-docker
apt-get autoremove -y
</li><li>
<h4>centos</h4>
systemctl stop tenx-agent<br />
systemctl disable tenx-agent.service<br />
rm /usr/lib/systemd/system/tenx-agent.service<br />
systemctl daemon-reload<br />
rm /usr/bin/tenx-agent<br />
rm -rf /opt/bin/*<br />
rm /etc/sysconfig/docker<br />
systemctl restart docker

<h5>centos下卸载docker</h5>
yum erase docker
</li></ul>