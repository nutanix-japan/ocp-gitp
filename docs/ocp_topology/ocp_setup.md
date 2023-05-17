---
title: "OCP Clusters Implementation"
lastupdate: git
lastupdateauthor: git
---

# OCP Clusters Implementation

We will use User Provisioned Install (UPI) method to deploy a OCP cluster. We are choosing this UPI for the time being as Installer Provisioned Install is unable to span over multiple Prism Element clusters at the time of writing this workshop. 

## OCP Network Requirements 

The following comprises network components:

- Reserve black-listed IPs in your subnet for the following components: 
  - OCP API IP endpoint
  - OCP Ingress IP endpoint
  
- Find 2 free IPs in your AHV network. Once you find the free IPs, add it to AHV DHCP black-list. Refer to the process [here](../ocp_ipi_install/ocp_ipi_pre_reqs#ahv-networking) for setting this up.

- Add DNS resolution for these OCP API and Ingress endpoints. Refer to the process [here](../ocp_ipi_install/ocp_ipi_pre_reqs#add-dns-records) for setting this up.
  
- Depending on the number of Master and Worker OCP VMs, get AHV network's DHCP option to allocate an IP for the following
  - Master VMs 
  - Worker VMs

## Create OCP VMs

We have used Terraform [script](https://github.com/nutanix-japan/tf-ocp-infra) to create OCP master and worker VMs accross the three Nutanix clusters. This are assumed to be inter-region clusters for demonstration purposes. 

:::caution ocp hardware requirements

All VMs should conform to OCP's minimum hardware requirements. See [OCP Hardware Requirements](https://docs.openshift.com/container-platform/3.11/install/prerequisites.html) for more details.

:::

## OCP Software

We have used OCP Assited Installer clusters implementation to install OCP software. 

> You will need a Red Hat Console portal account for this

## OCP Installation

The following steps include OCP installation:

- Logon to RedHat console https://console.redhat.com to create a OCP install cluster
- Add OCP hosts
- Upload SSH public key and get link to download the installation ISO
- Boot the VMs from the installation ISO and wait for RedHat console to detect the OCP VMs
    - Need outboud internet connectivity and presence of following components
        - DNS servers
        - Gateways 
        - Real time internet connectivity to the outside world
- Choose the master (control plane) and worker vm roles from the Assited Installer GUI
- Proceed to install and monitor
- OCP Assisted install will request to eject theinstallation ISO and logon to the boot disk after the intial boot drive write process
- Monitor and complete installation

## OCP Access

We will use the following steps to access OCP cluster:

1. Download the kubeconfig from RedHat console https://console.redhat.com **OCP Clusters** > **Assisted Install Clusters**
2. Logon to any one of the VMs in the same network
    - If logging on to OCP VMs, use the private key part of the key pair that you used to generate installation ISO
3. Place the downloaded kubeconfig file to ``/home/core/``directory of the VM

   ```bash
   export KUBECONFIG=/home/core/kubeconfig 
   ```
   
4. Test access by running the following commands:
   
   ```bash
   oc get nodes
   oc get cluster-info
   ```
5. Make sure the commands work and you are all set to install latest version of Nutanix CSI

## Connect IDP (AD) to OCP

Refer to [this](../optional_labs/ocp_idp.mdx) section for connecting AD to OCP for user authentication and authorizatino. 

## Install Nutanix Storage CSI

1. Download the following 
   
   ```bash
   git clone https://github.com/subodh01/helm.git
   ```
2. Edit the following environment details in the ``values.yaml`` file
   
   ```bash
   vi charts/nutanix-csi-storage/values.yaml
   ```
   ```bash
   # Openshift settings - as we using openshift
   #
   
   openshift:
     scc: true
     masterIscsiConfig: true
     workerIscsiConfig: true

   # kubeletDir allows overriding the host location of kubelet's internal state.
   kubeletDir: "/var/lib/kubelet/"    # << change to suit OCP kubelet director y>>
    
   volumeClass: true
   volumeClassName: "nutanix-volume"
   volumeClassRetention: "Delete"

   prismEndPoint: 10.45.34.226   # << change to your Prism Central IP >>

   username: admin               # << change to your Prism Central username >>
   password: Nutanix.123         # << change to your Prism Central password >>

   # Volumes Settings
   # Prism Element's storage container name should be the same accross all PE in your PC
   storageContainer: default     # << change to your Prism element Storage Container name >>
   fsType: ext4



3. Install using helm
   ```bash
   cd helm
   helm install -n ntnx-system -f charts/nutanix-csi-storage/values.yaml nutanix-csi ./charts/nutanix-csi-storage
   ```
   ```bash title="Output"
   NAME: nutanix-csi
   LAST DEPLOYED: Thu Jan 12 12:44:35 2023
   NAMESPACE: ntnx-system
   STATUS: deployed
   REVISION: 1
   TEST SUITE: None
   NOTES:
   Driver name: csi.nutanix.com
   ```
4. Make sure the pods are running in ``ntnx-system`` namespace/project

   ```bash
   oc get po -n ntnx-system
   NAME                            READY   STATUS    RESTARTS      AGE
   csi-node-ntnx-plugin-5z5gd      3/3     Running   4 (52m ago)   60m
   csi-node-ntnx-plugin-77zdt      3/3     Running   0             60m
   csi-node-ntnx-plugin-85f5p      3/3     Running   4 (56m ago)   60m
   csi-node-ntnx-plugin-9kl52      3/3     Running   4 (54m ago)   60m
   csi-node-ntnx-plugin-9mxt8      3/3     Running   4 (55m ago)   60m
   csi-node-ntnx-plugin-r4kwt      3/3     Running   0             60m
   csi-node-ntnx-plugin-s6js6      3/3     Running   4 (59m ago)   60m
   csi-node-ntnx-plugin-vknqh      3/3     Running   4 (58m ago)   60m
   csi-node-ntnx-plugin-zm9fc      3/3     Running   4 (50m ago)   60m
   csi-provisioner-ntnx-plugin-0   7/7     Running   0             57m
   ```

5. Make nutanix-volume as the default storage class (otherwise feel free to mention storage class in all your manifests)

   ```bash
   $ oc patch sc nutanix-volume -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
   ```

6. Confirm status of Storage Class

   ```bash
   $ oc get sc 
   # output below
   NAME                      PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
   nutanix-volume(default)   csi.nutanix.com   Delete          WaitForFirstConsumer   true                   1h
   ```

7. Check for toplogy feature implmentation by looking at the labels of the OCP cluster nodes You can observer the ``prism-element-uuid`` label in the output. This will help us in implementing topology for the CSI storage our workload will use.
   
   ```bash
   oc get nodes --output custom-columns=NAME:metadata.name,LABELS:metadata.labels
   ```
   ```bash title="Output - OCP cluster’s worker nodes are labeled with prism element uuid"
   ocp-worker-3   csi.nutanix.com/prism-element-uuid:0005f16d-6a2d-4b6d-0000-00000001957f kubernetes.io/arch:amd64 kubernetes.io/hostname:ocp-worker-3 kubernetes.io/os:linux node-role.kubernetes.io/worker: node.openshift.io/os_id:rhcos]

   ocp-worker-4   csi.nutanix.com/prism-element-uuid:0005f16d-25dd-19a3-0000-00000001b5dc kubernetes.io/arch:amd64 kubernetes.io/hostname:ocp-worker-4 kubernetes.io/os:linux node-role.kubernetes.io/worker: node.openshift.io/os_id:rhcos]
   ```
