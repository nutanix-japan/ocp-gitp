---
title: "Install OCP from Marketplace"
lastupdate: git
lastupdateauthor: git
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## OCP Marketplace Install Demo Video

Before beginning to install OCP cluster, watch the following ``5 minute`` overview video of OCP installation using Marketplace by Nutanix TME Nimal Kunnath. 

<iframe
    width="920"
    height="720"
    src="https://www.youtube.com/embed/G8fFB6EUiOA"
    frameborder="0"
    allow="autoplay; fs=1"
>
</iframe>

## Install OCP from Marketplace

In this section we will create our installation configuration files which will be then used in the next section to deploy an OCP cluster.

1. In PC dashboard, choose **Apps and Marketplace** from the top-left-hand-side drop-down menu

2. Search and select **OpenShift by Nutanix** app

   ![](images/ocp_app_mp.png)

3. Click on **Get**

4. Click on **Deploy**

5. Enter the following under **Name, Infrastructure and Profile section**: 
   
   - **Application Name** - ``ocpuserXX`` (this will the sub-domain's DNS entry you created in this [section](../ocp_pc_mp/ocp_pc_mp_pre_reqs.md#add-dns-records))
   
     ![](images/app_name.png)
   
6. Enter the following under **Profile Variables**: 
   
   - **OpenShift version** - 4.12
   - **OpenShift cluster name** - ``ocpuserXX`` (this would be populated from the Application name)
   - **OpenShift base domain** - ``ntnxlab.local`` (this could be any domain you have access to)
   - **Prism Central FQDN** - ``pc.ntnxlab.local`` (this will be the FQDN/IP present in the Prism Central's SSL certificate)
   - **Prism Element IP** - ``x.x.x.x`` 
   - **OpenShift API VIP** - ``x.x.x.x``  (this will the API IP entry you reserved in this [section](../ocp_pc_mp/ocp_pc_mp_pre_reqs.md#ahv-networking))
   - **OpenShift Ingress VIP** - ``x.x.x.x``  (this will the Ingress IP entry you reserved in this [section](../ocp_pc_mp/ocp_pc_mp_pre_reqs.md#ahv-networking))
   - **OpenShift Machine Network** - ``x.x.x.x/x`` (this will your AHV network's CIDR)
  
     ![](images/app_profile_var_1.png)

7. Continue to enter the following under **Profile Variables**:
   
   - **OpenShift pod network** - ``10.128.0.0/14`` (leave default value)
   - **OpenShift pod addresses per host** - ``23`` (leave default value)
   - **OpenShift pod network** - ``10.128.0.0/14`` (leave default value)
   - **OpenShift service network** - ``172.30.0.0/16`` (leave default value)
   - **Control Plane CPU** - ``4``  (leave default - this will change based on customer`s requirements)
   - **Control Plane Memory** - ``16384``  (leave default - this will change based on customer`s requirements)
   - **Compute replicas** - ``4``  (leave default -this will change based on customer`s requirements)
   - **OpenShift pull secret** - copy from RedHat portal under the [Tokens](https://console.redhat.com/openshift/downloads) section
  
8. Enter the following under **Provisioner**: 
   
   - **Cluster** - leave blank
   - VM Name - leave default
   - Categories - leave default
   - NETWORK ADAPTERS (NICs) (1) - ``Primary``
   
     ![](images/mp_nic.png)

8. Enter the following under **Credentials**: 
   
   - Cred_PC - this will be used to logon to Prism Central to create VMs and other entities
  
     - User name - ``admin``
     - Password - ``xxxxxx`` (your Prism Central password)
  
   - Cred_OS - this will be used to logon to OCP VMs once created
  
     - User name - ``centos``
     - SSH Private Key - ``xxxxxx`` (create a new SSH keypair or use one that you already have)
  
```mdx-code-block
<details>
<summary>No SSH-PUBLIC-KEY?</summary>
<div>
<body>

:::tip 

If you do not have a **SSH-PUBLIC-KEY**, use the ``ssh-keygen`` command on your **Linux Tools VM** to create a ssh key pair

Remember to keep it safe somewhere. 

```bash
ssh-keygen -t rsa -b 2048 -f ~/.ssh/for_ndb   # << accept all default answers
ls -l ~/.ssh/
## Output here
~/.ssh/for_ndb.pub  # << use this public key in the your-db-secret manifest 
~/.ssh/for_ndb      # << use this private key to logon to the NDB deployed database server
```

</body>
</div>
</details>
```
   
     ![](images/mp_cred.png)