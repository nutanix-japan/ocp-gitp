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

5. Enter the name of the application. This will the sub-domain's DNS entry you created in this [section](../ocp_pc_mp/ocp_pc_mp_pre_reqs.md#add-dns-records) 
   
   E.g:

   - Main domain - ``ntnxlab.local`` (this gets created with your HPOC reservation)
   - Sub domain - ``ocpuserXX.ntnxlab.local`` (e.g. ocpuser01, ocpuser02, etc, is your OCP cluster's name)