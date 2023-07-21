---
title: "Nutanix Market Place Introduction"
lastupdate: git
lastupdateauthor: git
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nutanix Market Place

Nutanix Market Place(in Prism Central) now has applications that a customer could deploy. It gives customer a intuitive and easy way to deploy OCP cluster on Nutanix AOS.

In this lab we will go through the steps of deploying OCP cluster using Nutanix Marketplace.

:::info

Estimated time to complete this whole lab is **60 minutes** including OCP cluster deployment.

The OCP cluster deployment will take up to **30 minutes** once started. 

:::

:::note References

We have referred to the following documents for building this lab:
- [RedHat IPI SSL Requirements](https://opendocs.nutanix.com/openshift/install/ipi/)

:::

## Good to know 

1. Internet connectivity - using Marketplace to deploy OCP clusters **does not** work in dark sites
2. Provisioner VM (4 vCPU and 8 GB RAM) will be deployed to manage the deployment of OCP clusters, this will remain in place unless manually deleted
3. OCP Bootstrap VM (4 vCPU and 16 GB RAM) will be deployed to manage the deployment of OCP clusters and will be deleted at the end of the deployment
4. Deploying OCP cluster through Marketplace does not need Calm/NCM license 

## Pre-requisites

The following pre-requisites are necessary:

- Prism Central - at least **pc.2023.0.1**
- AOS - **6.5.2**
- Access to RedHat Console to download the following    
  - Pull secret
- An SSL certificate for Prism Central(PC) signed by a Certification Authority (we will also create certificates in this lab)
- Networking requirements
  - AHV IPAM Network (your HPOC already has this)
  - DNS server (Windows AutoAD VM is pre-deployed for DNS capabilities)
  - Static IP addresses in your AHV IPAM network for OCP's api and apps endpoints 

## High Level Plan

1. Prepare HPOC cluster - AHV Networking and DNS
2. Prepare and install SSL certificate for Prism Central (skip if a CA certified certificate is already installed)
   - Certificate should have either the FQDN or IP address of PC
3. Installing OCP cluster and first login

:::note

During the OCP cluster installation, a ``OCP bootstrap VM`` will be created and will **remain** in place for subsequent OCP cluster creation.

This ``OCP bootstrap VM`` does most of the OCP install function. 

For more information on OCP install flow, check this [overview](https://docs.openshift.com/container-platform/4.10/installing/index.html#supported-platforms-for-openshift-clusters_ocp-installation-overview).

:::

We can now move on to the setting up pre-requisites section.