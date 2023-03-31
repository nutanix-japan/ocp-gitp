"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[53],{1109:o=>{o.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting Started","href":"/","docId":"intro"},{"type":"category","label":"OCP Installation","items":[{"type":"category","label":"Nutanix IPI Installation","items":[{"type":"link","label":"Introduction","href":"/ocp_ipi_install/ocp_ipi_intro","docId":"ocp_ipi_install/ocp_ipi_intro"},{"type":"link","label":"Pre-requisites","href":"/ocp_ipi_install/ocp_ipi_pre_reqs","docId":"ocp_ipi_install/ocp_ipi_pre_reqs"},{"type":"link","label":"Create Configuration Manifests","href":"/ocp_ipi_install/ocp_ipi_config_file","docId":"ocp_ipi_install/ocp_ipi_config_file"},{"type":"link","label":"Deploy","href":"/ocp_ipi_install/ocp_ipi_install_cleanup","docId":"ocp_ipi_install/ocp_ipi_install_cleanup"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Nutanix Cloud Manager (NCM) Installation","items":[{"type":"link","label":"Architecture and Initial Setup","href":"/ocp_ntnx_hci/import_bp","docId":"ocp_ntnx_hci/import_bp"},{"type":"link","label":"Deploy Provisioning VM","href":"/ocp_ntnx_hci/prov_vm","docId":"ocp_ntnx_hci/prov_vm"},{"type":"link","label":"Deploy OCP Infrastructure","href":"/ocp_ntnx_hci/ocp_vms","docId":"ocp_ntnx_hci/ocp_vms"},{"type":"link","label":"Day 0 and Day 1 Operations","href":"/ocp_ntnx_hci/ocp_scale_out_in","docId":"ocp_ntnx_hci/ocp_scale_out_in"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Assisted Installation","href":"/ocp_assisted_install/","docId":"ocp_assisted_install/ocp_assisted_install"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Nutanix Storage CSI","items":[{"type":"link","label":"Deploy Nutanix CSI for OCP","href":"/ocp_ntnx_hci/ocp_csi","docId":"ocp_ntnx_hci/ocp_csi"},{"type":"link","label":"Provision Storage for Image Registry","href":"/optional_labs/ocp_image_registry","docId":"optional_labs/ocp_image_registry"}],"collapsed":true,"collapsible":true},{"type":"link","label":"OCP and Nutanix NDB","href":"/ocp_ndb/","docId":"ocp_ndb/ocp_ndb"},{"type":"category","label":"OCP Workload Backup and Restore","items":[{"type":"link","label":"Nutanix Objects as Backup Destination","href":"/optional_labs/objects_prep","docId":"optional_labs/objects_prep"},{"type":"link","label":"Deploying Backup Application","href":"/workloads_on_ocp/ocp_k10","docId":"workloads_on_ocp/ocp_k10"},{"type":"link","label":"Deploying Workload","href":"/workloads_on_ocp/ocp_wordpress_deploy","docId":"workloads_on_ocp/ocp_wordpress_deploy"},{"type":"link","label":"Backup and Restore Applications","href":"/workloads_on_ocp/ocp_k10_backup_restore","docId":"workloads_on_ocp/ocp_k10_backup_restore"}],"collapsed":true,"collapsible":true},{"type":"category","label":"OCP Optional Labs","items":[{"type":"link","label":"Create Additional OCP Clusters using NCM","href":"/optional_labs/ocp_vms_2","docId":"optional_labs/ocp_vms_2"},{"type":"link","label":"Deploying IDP for OCP","href":"/optional_labs/ocp_idp","docId":"optional_labs/ocp_idp"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Multi-region Workloads","items":[{"type":"link","label":"Design","href":"/ocp_topology/","docId":"ocp_topology/ocp_topology"},{"type":"link","label":"IDP and DNS Implementation","href":"/ocp_topology/infra_topology","docId":"ocp_topology/infra_topology"},{"type":"link","label":"OCP Clusters Implementation","href":"/ocp_topology/ocp_setup","docId":"ocp_topology/ocp_setup"},{"type":"link","label":"Deploy Multi-Zone Application","href":"/ocp_topology/multiaz_app1","docId":"ocp_topology/multiaz_app1"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Appendix","items":[{"type":"link","label":"Linux Tools VM","href":"/toolsvms/linux_tools_vm","docId":"toolsvms/linux_tools_vm"},{"type":"link","label":"Windows Tools VM","href":"/toolsvms/windows_tools_vm","docId":"toolsvms/windows_tools_vm"}],"collapsed":true,"collapsible":true}]},"docs":{"intro":{"id":"intro","title":"Getting Started","description":"Welcome to the Openshift Container Platform (OCP) on Nutanix HCI workshop.","sidebar":"tutorialSidebar"},"ocp_assisted_install/ocp_assisted_install":{"id":"ocp_assisted_install/ocp_assisted_install","title":"Assisted Installation","description":"In this optional lab we will go through Assited Installation feature that Red Hat Console offers.","sidebar":"tutorialSidebar"},"ocp_ipi_install/ocp_ipi_config_file":{"id":"ocp_ipi_install/ocp_ipi_config_file","title":"Create Configuration Manifests","description":"Creating IPI Installation Config File","sidebar":"tutorialSidebar"},"ocp_ipi_install/ocp_ipi_install":{"id":"ocp_ipi_install/ocp_ipi_install","title":"Introduction","description":"OCP Installer Provisioned Installation (IPI) was released in August 2022. It gives customer a intutive and easy way to deploy OCP cluster on Nutanix AOS."},"ocp_ipi_install/ocp_ipi_install_cleanup":{"id":"ocp_ipi_install/ocp_ipi_install_cleanup","title":"Deploy","description":"Deploying OCP Cluster","sidebar":"tutorialSidebar"},"ocp_ipi_install/ocp_ipi_intro":{"id":"ocp_ipi_install/ocp_ipi_intro","title":"Introduction","description":"OCP Installer Provisioned Installation (IPI) was released in August 2022. It gives customer a intutive and easy way to deploy OCP cluster on Nutanix AOS.","sidebar":"tutorialSidebar"},"ocp_ipi_install/ocp_ipi_pre_reqs":{"id":"ocp_ipi_install/ocp_ipi_pre_reqs","title":"Pre-requisites","description":"Preparing Pre-requisites","sidebar":"tutorialSidebar"},"ocp_ndb/ocp_ndb":{"id":"ocp_ndb/ocp_ndb","title":"OCP and Nutanix NDB","description":"In this lab we will setup custom micro-service based application with VM based Nutanix Database NDB service.","sidebar":"tutorialSidebar"},"ocp_ntnx_hci/import_bp":{"id":"ocp_ntnx_hci/import_bp","title":"Architecture and Initial Setup","description":"In this lab, we will set up OCP infrastructure using Nutanix Calm.","sidebar":"tutorialSidebar"},"ocp_ntnx_hci/ocp_csi":{"id":"ocp_ntnx_hci/ocp_csi","title":"Deploy Nutanix CSI for OCP","description":"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims.","sidebar":"tutorialSidebar"},"ocp_ntnx_hci/ocp_scale_out_in":{"id":"ocp_ntnx_hci/ocp_scale_out_in","title":"Day 0 and Day 1 Operations","description":"In this section we will look at Typical Day 1 operations of your OCP cluster in terms of scaling out and scaling in VMs.","sidebar":"tutorialSidebar"},"ocp_ntnx_hci/ocp_vms":{"id":"ocp_ntnx_hci/ocp_vms","title":"Deploy OCP Infrastructure","description":"In this section we will deploy a OCP cluster using Nutanix Calm.","sidebar":"tutorialSidebar"},"ocp_ntnx_hci/prov_vm":{"id":"ocp_ntnx_hci/prov_vm","title":"Deploy Provisioning VM","description":"Configure Provisioning VM Blueprint","sidebar":"tutorialSidebar"},"ocp_topology/infra_topology":{"id":"ocp_topology/infra_topology","title":"IDP and DNS Implementation","description":"Design Overview","sidebar":"tutorialSidebar"},"ocp_topology/multiaz_app1":{"id":"ocp_topology/multiaz_app1","title":"Deploy Multi-Zone Application","description":"In this section we will install a mutli-zone deployable workload. The workload will contain the following component:","sidebar":"tutorialSidebar"},"ocp_topology/multiaz_app2":{"id":"ocp_topology/multiaz_app2","title":"Deploy Multi-Zone MongoDB","description":"In this section we will install a mutli-zone deployable workload. The workload will contain a MongoDB Database."},"ocp_topology/ocp_setup":{"id":"ocp_topology/ocp_setup","title":"OCP Clusters Implementation","description":"We will use User Provisioned Install (UPI) method to deploy a OCP cluster. We are choosing this UPI for the time being as Installer Provisioned Install is unable to span over multiple Prism Element clusters at the time of writing this workshop.","sidebar":"tutorialSidebar"},"ocp_topology/ocp_topology":{"id":"ocp_topology/ocp_topology","title":"Design","description":"Design Overview","sidebar":"tutorialSidebar"},"optional_labs/objects_prep":{"id":"optional_labs/objects_prep","title":"Nutanix Objects as Backup Destination","description":"In this section we will setup up Nutanix Objects to serve as a backup destination to backup our wordpress application.","sidebar":"tutorialSidebar"},"optional_labs/ocp_idp":{"id":"optional_labs/ocp_idp","title":"Deploying IDP for OCP","description":"In this lab we will deploy a IDP connection to your OCP cluster to provide Authentication and Authorization.","sidebar":"tutorialSidebar"},"optional_labs/ocp_image_registry":{"id":"optional_labs/ocp_image_registry","title":"Provision Storage for Image Registry","description":"OCP comes with a in-built container image registry. The advantages of these container image registry are the following:","sidebar":"tutorialSidebar"},"optional_labs/ocp_vms_2":{"id":"optional_labs/ocp_vms_2","title":"Create Additional OCP Clusters using NCM","description":"If you are doing this section of the lab using a Single Node HPOC (SPOC) there will not be enough resources to deploy a second OCP cluster. Please delete the first OCP cluster from Calm > Actions > Delete before proceeding with this lab.","sidebar":"tutorialSidebar"},"toolsvms/linux_tools_vm":{"id":"toolsvms/linux_tools_vm","title":"Linux Tools VM","description":"Overview","sidebar":"tutorialSidebar"},"toolsvms/windows_tools_vm":{"id":"toolsvms/windows_tools_vm","title":"Windows Tools VM","description":"Overview","sidebar":"tutorialSidebar"},"workloads_on_ocp/ocp_k10":{"id":"workloads_on_ocp/ocp_k10","title":"Deploying Backup Application","description":"In this section we will implement Kasten K10 as a backup and restore","sidebar":"tutorialSidebar"},"workloads_on_ocp/ocp_k10_backup_restore":{"id":"workloads_on_ocp/ocp_k10_backup_restore","title":"Backup and Restore Applications","description":"Backup Wordpress","sidebar":"tutorialSidebar"},"workloads_on_ocp/ocp_wordpress_deploy":{"id":"workloads_on_ocp/ocp_wordpress_deploy","title":"Deploying Workload","description":"In this section we will deploy a simple Wordpress application with MYSQL as the backend database store.","sidebar":"tutorialSidebar"}}}')}}]);