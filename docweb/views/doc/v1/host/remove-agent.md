# 如何卸载 tenx-agent
#### ubuntu
<code>service tenx-agent stop<br/>
rm -rf /opt/bin/*<br/>
rm /usr/bin/tenx-agent<br/>
rm /etc/init/tenx-agent.conf<br/>
rm /etc/default/docker<br/>
touch /etc/default/docker<br/>
service docker restart</code>

<h5>ubuntu下卸载docker</h5>
<code>apt-get purge lxc-docker</code><br />
<code>apt-get autoremove -y</code>

#### centos
<code>systemctl stop tenx-agent<br/>
systemctl disable tenx-agent.service<br/>
rm /usr/lib/systemd/system/tenx-agent.service<br/>
systemctl daemon-reload<br/>
rm /usr/bin/tenx-agent<br/>
rm -rf /opt/bin/*<br/>
rm /etc/sysconfig/docker<br/>
systemctl restart docker
</code>
<h5>centos下卸载docker</h5>
<code>yum erase docker</code>