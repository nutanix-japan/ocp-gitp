---
title:  "Design"
date: Wed Jul 27 15:40:51 JST 2022
categories: [training,instructions,ocp,nutanix,csi,topology,az]
tags: [csi,topology,postgres,keycloak,instructions]

---

# Design

## Design Overview

In this section we will look at design decisions that has driven Nutanix infrastructure design.

One of the primary requirements is to deploy a customer application across multiple Availability Zones (AZ) to tolerate failure. 

Other requirements could be the following:

- Local storage availability
- Application to replicate across AZ
- Failure of any one AZ will start automated failover of applications

Nutanix CSI drivers for Kubernetes distributions now has topology support. 

We will look at deploying a inter-AZ workload and how topology support helps in sustaining the design requirements.

## Pre-requisites

You will need the following pre-requisites:

- Red Hat Portal access (if using OCP kubernetes clusters)
- Minimum of two Nutanix Clusters (we have used four clusters in this workshop)
  
  - Data Services IP must be set for all Nutanix clusters
  
  :::info Contact XLABS team to get your Clusters provisioned



  Get in touch with XLABS team with a JIRA ticket to get your clusters provisioned. 

  XLABS Team will help find appropriate clusters. Here is a sample JIRA [ticket](https://jira.nutanix.com/browse/XLABS-780) for your reference. 

    - Allow at least two weeks time to secure cluster reservation
    - Make sure to provision at least two Nutanix clusters
    - Make sure all the nodes are connected to same ToR network switch
    - Get a PoC number going in SFDC to justify two weeks of clusters reservation time
  
  :::

- IP Address allocation for all infrastructure components and workloads. See this Google [document](https://docs.google.com/spreadsheets/d/1a6-JBkf679PfmH6HxXdkGeEwABZ-M6R19bOEAXAvUFg/edit?usp=sharing) for more network information and allocation ideas. We have secured the following CIDR from the HPOC hosting team. Routing is enabled between all these subnets.
  <table>
  <thead>
    <tr>
      <th>#</th>
      <th>PE Cluster</th>
      <th>Primary CIDR</th>
      <th>Secondary CIDR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>DM3-POC009</td>
      <td rowspan="4">10.54.63.0/24</td>
      <td>10.55.9.128/25</td>
    </tr>
    <tr>
      <td>2</td>
      <td>DM3-POC010</td>
      <td>10.55.10.128/25</td>
    </tr>
    <tr>
      <td>3</td>
      <td>DM3-POC011</td>
      <td>10.55.11.128/25</td>
    </tr>
    <tr>
      <td>4</td>
      <td>DM3-POC013</td>
      <td>10.55.13.128/25</td>
    </tr>
  </tbody>
  </table>
- DNS and internet connectivity for installation 
  - We have used replicated AD and DNS server in this design
  - AD and DNS are also capable of sustaining region/zone failures
- OCP Installation 
  - Three masters VMs - one in each AZ 
  - Two or more worker VMs in each AZ - we have used 3 OCP worker VMs in each PE cluster

- Basic knowledge of Kubernetes
- Basic knowledge of Nutanix HCI



## Testing Plan

There are two ways you are able to test multi-region workloads.

1. Implement IDP and DNS services when you will like to implement a full-fledged soluion on Nutanix
2. Directly test CSI topology deatures - when you would like to just test topolody feature

### Plan 1 (with infrastructure services)

1. Implement 3 node Prism Central (PC) for four Prism Element(PE) accross four Availability Zones (AZ)
2. Install **resilient** AD (IDP) and DNS services to offer dns, authentication and authorization services the workloads 
3. Install OpenShift Container Platform (OCP) - master and worker nodes accross three PE
4. Install Nutanix CSI via Helm 
   - Uninstall Nutanix CSI Operator in OCP through GUI if already installed
5. Install Postgres operator and database
6. Create data in the database
7. Find which postgress server is master and shutdown the workers where the Postgres master can run
8. Let the pod on the other Availability Zone(AZ) take over and test if the database copies retain the data.

Read on if you are following Plan 1

:::info Time required for Plan 1

After getting the clsuters built by the HPOC team, you would typically spend the following amount of time:

- PC - 30 minutes
- **Resilient** AD and DNS - 60 to 90 minutes
- OCP - 60 minutes
- Testing topology with application - 60 minutes

:::

### Plan 2 (without infrastructure services)

1. Install OpenShift Container Platform (OCP) - master and worker nodes accross three PE
2. Install Nutanix CSI via Helm 
   - Uninstall Nutanix CSI Operator in OCP through GUI if already installed
3. Create data in the database
4. Find which postgress server is master and shutdown the workers where the Postgres master can run
5. Let the pod on the other Availability Zone(AZ) take over and test if the database copies retain the data.

Start [here](../ocp_topology/ocp_setup.md) is you are following Plan 2.

:::info Time required for Plan 2

After getting the clusters built by the HPOC team, you would typically spend the following amount of time:

- PC - 30 minutes
- OCP - 60 minutes
- Testing topology with application - 60 minutes

:::

## Nutanix Clusters Design

We will have four Nutanix clusters (in-theory) accross three AZ to have workloads distributed among them. 

| Availability Zone (AZ) |  Prism Element (PE)  |  Prism Central (PC) |  Workloads  | Infrastructure Services  |
| :---------------------:|:--------------------:|:-------------------:|:-------------------:|:------------------------:|
| AZ 1              | DM3-POC010      | 3-node PC       | Nutanix Unified Storage - Files and Objects| AD and DNS |
| AZ 1              | DM3-POC011      |                 | OCP VMs|AD and DNS |
| AZ 2             | DM3-POC013      |                 |OCP VMs|AD and DNS |
| AZ 3             | DM3-POC013      |                 |OCP VMs |AD and DNS |

All three regional clusters are reqistered to one Prism Central for manageability. 

> From now all Nutanix Clusters deployed in Availability Zones will be referred to Availability Zones 1, 2 and 3. Our high-availability testing will be based on these Availability Zones (AZ).

![pc-pe](images/pc-pe.png)

### Nutanix Components Design

The following Nutanix components have been planned and be implemented on one cluster (DM3-POC009). We will use this cluster to host infrastructure and management capabilities.

- 3 nodes Prism Central
- Nutanix Files implementation
- Nutanix Objects implementation

**Prism Central** is constrained to one PE cluster at this time. When Nutanix is able to offer a cloud control plane, we will transition to this model.


## IDP and DNS Design

We will use the following to provide IDP and DNS services

- IDP - Microsoft Active Directory(AD)
- DNS - Microsoft DNS 

**IDP**

We will deploy Microsoft AD in a highly available fashion, at least one AD server per AZ to protect against failures.

**DNS**

We will install DNS role in the AD server which will be then replicated to all other DNS servers. 

## OpenShift Clusters Design

We will use RedHat Openshift (OCP) clusters for deploying our workload.

Since OCP mandates strict network latency requirements, we have chosen to deploy three Nutanix clusters in one network subnet. This will reduce hops and also adhere to OCP requirements. Real world implementation scenarios might vary for OCP clusters or any other kubernetes deployment out there.

> The implementation and testing procedure documented here can be performed in any Nutanix supported Kubernetes implementation (OCP/Karbon/Rancher/Vanilla) and does not solely rely on RedHat Openshift.

We will have the following 11 node OCP Clusters implemented.

- 3 Master Node VMs
- 9 Worker Node VMs

### OCP Master and Worker Distribution across AZ

<table>
<thead>
  <tr>
    <th>Availability Zone</th>
    <th>OCP Master</th>
    <th>OCP Worker</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">AZ 1</td>
    <td rowspan="3">ocp-master-1</td>
    <td>ocp-worker-1</td>
  </tr>
  <tr>
    <td>ocp-worker-2</td>
  </tr>
  <tr>
    <td>ocp-worker-3</td>
  </tr>
  <tr>
    <td rowspan="3">AZ 2</td>
    <td rowspan="3">ocp-master-2</td>
    <td>ocp-worker-4</td>
  </tr>
  <tr>
    <td>ocp-worker-5</td>
  </tr>
  <tr>
    <td>ocp-worker-6</td>
  </tr>
  <tr>
    <td rowspan="3">AZ 3</td>
    <td rowspan="3">ocp-master-3</td>
    <td>ocp-worker-7</td>
  </tr>
  <tr>
    <td>ocp-worker-8</td>
  </tr>
  <tr>
    <td>ocp-worker-9</td>
  </tr>
</tbody>
</table>

Now that we have an understanding of what the design requirements are, we can proceed with the implementation part in the next section.