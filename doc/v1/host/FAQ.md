# FAQ
1. <h4>如何搭建自己的路由和子网？</h4>
<ul>查看IaaS的文档：
<li>	青云：<a href='https://docs.qingcloud.com/guide/topology.html'>网络拓扑指南</a> </li>
<li>	ucloud: <a href='http://docs.ucloud.cn/unetwork/common.html#id18'>路由器</a> 和 <a href='http://docs.ucloud.cn/unetwork/common.html#id21'>子网</a></li>
</ul>
2. <h4>是否可以添加本地虚拟机？</h4>
<p>可以添加，并且通过时速云平台在上面创建容器应用。和虚拟机同一网段的机器可以访问容器应用，宿主机和虚拟机在同一个网段，因此可以访问虚拟机中的容器服务。如下图中，将192.168.24.128添加到集群中，并创建helloworld应用后，通过宿主机的浏览器可以访问</p>
<p>a. 宿主机和虚拟机的网络</p>
![host1](/doc/v1/images/host/faq-vm-net.png)
<p>b. 向集群中添加虚拟机成功 （时速云控制台"主机"->"新建集群"->进入集群->"添加"主机->拷贝并在虚拟机shell中执行安装命令）</p>
![host2](/doc/v1/images/host/faq-vm-net-4.png)
<p>c. 创建helloworld容器成功（时速云控制台）</p>
![host2](/doc/v1/images/host/faq-vm-net-2.png)
<p>d. 宿主机上浏览器中访问helloworld容器</p>
![host3](/doc/v1/images/host/faq-vm-net-3.png)