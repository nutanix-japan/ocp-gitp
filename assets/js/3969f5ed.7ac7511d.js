"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[6331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,s(s({ref:t},m),{},{components:a})):n.createElement(k,s({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Assisted Installation",sidebar_postion:1},s="OCP: Assisted Installation",o={unversionedId:"ocp_assisted_install/ocp_assisted_install",id:"ocp_assisted_install/ocp_assisted_install",title:"Assisted Installation",description:"In this optional lab we will go through Assited Installation feature that Red Hat Console offers.",source:"@site/docs/ocp_assisted_install/ocp_assisted_install.mdx",sourceDirName:"ocp_assisted_install",slug:"/ocp_assisted_install/",permalink:"/ocp-gitp/ocp_assisted_install/",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_assisted_install/ocp_assisted_install.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1679479324,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{title:"Assisted Installation",sidebar_postion:1},sidebar:"tutorialSidebar",previous:{title:"Day 0 and Day 1 Operations",permalink:"/ocp-gitp/ocp_ntnx_hci/ocp_scale_out_in"},next:{title:"Deploy Nutanix CSI for OCP",permalink:"/ocp-gitp/ocp_ntnx_hci/ocp_csi"}},l={},p=[{value:"Pre-requisites for Assisted Installation",id:"pre-requisites-for-assisted-installation",level:2},{value:"High Level Overview of Assisted Installation",id:"high-level-overview-of-assisted-installation",level:2},{value:"Provision OCP Cluster in Red Hat Console",id:"provision-ocp-cluster-in-red-hat-console",level:2},{value:"Provision OCP Infrastructure",id:"provision-ocp-infrastructure",level:2},{value:"Takeaways",id:"takeaways",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ocp-assisted-installation"},"OCP: Assisted Installation"),(0,r.kt)("p",null,"In this optional lab we will go through Assited Installation feature that Red Hat Console offers."),(0,r.kt)("p",null,"Assisted Installer is a GUI driven way of deploying OCP clusters."),(0,r.kt)("p",null,"You would use Assisted Installer clusters for to deploy OCP clusters quickly (e.g. before a POC) and for personal testing purposes."),(0,r.kt)("p",null,"Single node OCP cluster implementation is also available with Assisted Installer. We will only look at deploying multi-node clusters in this lab."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Estimated time to complete this lab is 60 minutes.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are doing this section of the lab using a Single Node HPOC (SPOC) there will not be enough resources to deploy a second OCP cluster. "),(0,r.kt)("p",{parentName:"admonition"},"Remove existing OCP clusters that you don't require anymore."),(0,r.kt)("p",{parentName:"admonition"},"If you were using NCM (Calm) - Please delete the other OCP cluster(s) from ",(0,r.kt)("strong",{parentName:"p"},"Calm > Actions > Delete")," before proceeding with this lab.")),(0,r.kt)("h2",{id:"pre-requisites-for-assisted-installation"},"Pre-requisites for Assisted Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Administrator creates the OCP Master and Worker VMs"),(0,r.kt)("li",{parentName:"ul"},"Adminsitrator provisions compute, networking and storage associated with the OCP Master and Worker VMs"),(0,r.kt)("li",{parentName:"ul"},"Access to Red Hat Console to use Assisted Installer and install a OCP cluster")),(0,r.kt)("h2",{id:"high-level-overview-of-assisted-installation"},"High Level Overview of Assisted Installation"),(0,r.kt)("p",null,"Assisted Installer does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provides RHCOS and OCP installation binaries in a CD-ROM ISO file"),(0,r.kt)("li",{parentName:"ul"},"Once the OCP VMs (Master and Worker) nodes are booted with this CD-ROM ISO file, using the public key the VMs connect to Red Hat Console"),(0,r.kt)("li",{parentName:"ul"},"VMs show in Assisted Installer page and the administrator (you) begins the installation"),(0,r.kt)("li",{parentName:"ul"},"Red Hat Console will manage and monitor the installation process from start to end"),(0,r.kt)("li",{parentName:"ul"},"Upon successfull installatino of a OCP cluster the following will be\nprovided:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"KUBECONFIG file for ",(0,r.kt)("inlineCode",{parentName:"li"},"oc")," access"),(0,r.kt)("li",{parentName:"ul"},"DNS entries for OCP Cluster Manager access"))),(0,r.kt)("li",{parentName:"ul"},"Assisted installer will choose one of the Master VMs to serve the Bootstrap role")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Assisted Installers in GA as of July 2022 ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.redhat.com/blog/openshift-assisted-installer-is-now-generally-available"},"General Availability")," ."),(0,r.kt)("p",{parentName:"admonition"},"The OCP clusters deployed using Assisted Installers can be used for production, testing and development purposes owing to ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.redhat.com/blog/using-the-openshift-assisted-installer-service-to-deploy-an-openshift-cluster-on-metal-and-vsphere#:~:text=Pre%2Drequisites,required%20for%20accessing%20the%20cluster"},"pre-requisites")," conformity.")),(0,r.kt)("p",null,"At a very high level, we will accomplish the following to get a OCP cluster deployed using Assisted Installer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Provision OCP Cluster in Red Hat Console and Generate CD-ROM ISO URL"),(0,r.kt)("li",{parentName:"ol"},"Provision OCP Infrastructure - Create Master and Worker VMs in your\nAHV HPOC/SPOC cluster using Terraform infrastructure as code"),(0,r.kt)("li",{parentName:"ol"},"Install OCP Cluster in Red Hat Console")),(0,r.kt)("h2",{id:"provision-ocp-cluster-in-red-hat-console"},"Provision OCP Cluster in Red Hat Console"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://console.redhat.com/openshift/assisted-installer/clusters"},"Red Hat Console"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create new assisted cluster"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the following details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster name")," - Initials-assisted-cluster (e.g. xyz-assisted-cluster)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Base domain")," - ntnxlab.local"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add Host"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Add Host")," pop-up window select ",(0,r.kt)("strong",{parentName:"p"},"Minimal image file: Provision with virtual media"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"SSH public key")," text box privide the public key you created in this section "),(0,r.kt)("p",{parentName:"li"},"Make sure to copy the ",(0,r.kt)("strong",{parentName:"p"},"public key")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(641).Z,width:"546",height:"584"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Generate Discovery ISO"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("strong",{parentName:"p"},"Discovery ISO URL")," and note it down somewhere. You will\nneed this for your next section while creating infrastructure."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4397).Z,width:"550",height:"675"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Close")))),(0,r.kt)("h2",{id:"provision-ocp-infrastructure"},"Provision OCP Infrastructure"),(0,r.kt)("p",null,"This section of the lab is done on using Linux Tools VM."),(0,r.kt)("p",null,"If it is not already present in your HPOC, create Linux Tools VM using instructions in ",(0,r.kt)("a",{parentName:"p",href:"/ocp-gitp/toolsvms/linux_tools_vm"},"Linux Tools VM")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You are able to create these VMs and its resources using the Prism Element GUI. But in this section we will use ",(0,r.kt)("strong",{parentName:"p"},"Terraform")," code for repeatability and ease.")),(0,r.kt)("p",null,"We will create the following resources:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OCP Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"vCPU"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage"),(0,r.kt)("th",{parentName:"tr",align:null},"IOPS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Master"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"100 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Worker"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS, RHEL 7.9, or RHEL 8.4"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"100 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"300")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the Linux Tools VM using the following credentials"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - root"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - default password"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following commands in sequence"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum update -y \nyum install -y yum-utils\nyum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo\nyum -y install terraform\nyum -y install git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the following git repo and initialise Terraform provider"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/nutanix-japan/tf-ocp-infra\ncd tf-ocp-infra\nalias "tf=terraform" \ntf init\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your variables file ready with your HPOC/SPOC environment\ninformation"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp terraform.tfvars.sample terraform.tfvars\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify your variables to suit your HPOC environment using ",(0,r.kt)("inlineCode",{parentName:"p"},"vi")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"nano")," editor"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi terraform.tfvars\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{1,4,5,6,7,11}","{1,4,5,6,7,11}":!0},'cluster_name        = "your cluster name" # << Change this\nsubnet_name         = "Primary"\nuser                = "admin"            \npassword            = "XXXXXXX"           # << Change this\nendpoint            = "Prism Element IP"  # << Change this\nvm_worker_prefix    = "xyz-worker"        # << Change xyz to your initials\nvm_master_prefix    = "xyz-master"        # << Change xyz to your initials\nvm_domain           = "ntnxlab.local"\nvm_master_count     = 3\nvm_worker_count     = 2\nimage_uri           = "Discover ISO URL you copied earlier" # << Change this\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate and run your Terraform code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tf validate\n\n# if there are any validate errors fix or request support from your instructor\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tf apply \n\n# Terraform will show you all resources that it will to create\n# Type yes to confirm \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Sample output for the command above\n\nTerraform will perform the actions described above.\nOnly 'yes' will be accepted to approve.\n\nEnter a value: yes\n\nnutanix_image.RHCOS: Creating...\nnutanix_image.RHCOS: Still creating... [10s elapsed]\nnutanix_image.RHCOS: Creation complete after 14s [id=e04cff4e-a6cf-45f9-890d-96097c4b53ed]\nnutanix_virtual_machine.RHCOS-master[0]: Creating...\nnutanix_virtual_machine.RHCOS-master[1]: Creating...\nnutanix_virtual_machine.RHCOS-worker[0]: Creating...\nnutanix_virtual_machine.RHCOS-master[2]: Creating...\nnutanix_virtual_machine.RHCOS-worker[1]: Creating...\nnutanix_virtual_machine.RHCOS-master[0]: Still creating... [10s elapsed]\nnutanix_virtual_machine.RHCOS-master[1]: Still creating... [10s elapsed]\nnutanix_virtual_machine.RHCOS-master[2]: Still creating... [10s elapsed]\nnutanix_virtual_machine.RHCOS-worker[0]: Still creating... [10s elapsed]\nnutanix_virtual_machine.RHCOS-worker[1]: Still creating... [10s elapsed]\nnutanix_virtual_machine.RHCOS-master[0]: Creation complete after 16s [id=3a88a3d7-304e-4284-886d-f7882764d7cc]\nnutanix_virtual_machine.RHCOS-master[2]: Creation complete after 17s [id=5e87599a-5643-465d-9870-5b34751b2158]\nnutanix_virtual_machine.RHCOS-worker[0]: Creation complete after 17s [id=78fb2e69-fee7-4244-ae5c-55ffbc1da21d]\nnutanix_virtual_machine.RHCOS-master[1]: Creation complete after 17s [id=7775b527-fc55-4cac-aabc-a024ea4938c1]\nnutanix_virtual_machine.RHCOS-worker[1]: Creation complete after 17s [id=c9801a82-a7e3-444e-a206-d5e3e3a75bb1]\n\nApply complete! Resources: 6 added, 0 changed, 0 destroyed.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the Terraform state list command to verify what resrouces are created"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tf state list\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Sample output for the command above\n\ndata.nutanix_cluster.cluster            # < This is your existing Prism Element HPOC/SPOC cluster\ndata.nutanix_subnet.subnet              # < This is your existing Primary subnet\nnutanix_image.RHCOS                     # < This is OCP Discovery ISO image\nnutanix_virtual_machine.RHCOS-master[0] # < This is master vm 1\nnutanix_virtual_machine.RHCOS-master[1] # < This is master vm 2\nnutanix_virtual_machine.RHCOS-master[2] # < This is master vm 3\nnutanix_virtual_machine.RHCOS-worker[0] # < This is worker vm 1\nnutanix_virtual_machine.RHCOS-worker[1] # < This is worker vm 2\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to ",(0,r.kt)("strong",{parentName:"p"},"Prism Element")," > ",(0,r.kt)("strong",{parentName:"p"},"VM")," and verify the VMs and if they are powered on"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1758).Z,width:"1236",height:"676"})))),(0,r.kt)("h1",{id:"install-ocp-cluster-in-red-hat-console"},"Install OCP Cluster in Red Hat Console"),(0,r.kt)("p",null,"In this section we will use Red Hat Console\\'s Assisted Installer wizard to install the OCP cluster with the VMs we have provisioned."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to Red Hat Openshift Console and check if the VMs appear\n(this may take up to 5 minutes)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4764).Z,width:"1513",height:"1293"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," at the bottom of the page")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Networking section, assign IPs for your ",(0,r.kt)("strong",{parentName:"p"},"API Virtual IP")," and ",(0,r.kt)("strong",{parentName:"p"},"Ingress Virtual IP")," from you HPOC/SPOC ",(0,r.kt)("strong",{parentName:"p"},"Primary")," network pool"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6033).Z,width:"1511",height:"996"})),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Prism Element now shows used IP in the ",(0,r.kt)("strong",{parentName:"p"},"Networking")," setup page for IPAM enabled Network Switches."),(0,r.kt)("p",{parentName:"admonition"},"You can use this to determine the IPs for ",(0,r.kt)("strong",{parentName:"p"},"API Virtual IP")," and ",(0,r.kt)("strong",{parentName:"p"},"Ingress Virtual IP")," of your OCP cluster."),(0,r.kt)("p",{parentName:"admonition"},"Since AHV IPAM is ",(0,r.kt)("strong",{parentName:"p"},"not aware of the statically assigned IP address"),", the VIPs should be out of the IP Pools in the Primary subnet."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Prism Element")," > ",(0,r.kt)("strong",{parentName:"p"},"Menu")," > ",(0,r.kt)("strong",{parentName:"p"},"Network Configuration")," > ",(0,r.kt)("strong",{parentName:"p"},"Primary")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:a(5979).Z,width:"850",height:"315"})),(0,r.kt)("p",{parentName:"admonition"},"A new pop-up will show the used IPs. Choose two IPs that are not listed here."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:a(5494).Z,width:"482",height:"428"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Host inventory")," section, choose the ",(0,r.kt)("strong",{parentName:"p"},"Control Plane Node")," for Master VMs and ",(0,r.kt)("strong",{parentName:"p"},"Worker")," nodes for Worker VMs from the drop-down menu"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2674).Z,width:"939",height:"434"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," at the bottom of the page")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review your setup information and click on ",(0,r.kt)("strong",{parentName:"p"},"Install Cluster")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7403).Z,width:"1198",height:"911"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be taken to monitoring your installation progress"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1107).Z,width:"1198",height:"652"})),(0,r.kt)("p",{parentName:"li"},"Now the cluster deploy will proceed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Watch for any messages about user interactions in the progress page"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5806).Z,width:"1196",height:"542"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This message is wanting the user to unmount the installation Discovery ISO so they VM can boot into the OS drive")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Prism Element")," > ",(0,r.kt)("strong",{parentName:"p"},"VM")," > ",(0,r.kt)("strong",{parentName:"p"},"Master/Worker VM")," > ",(0,r.kt)("strong",{parentName:"p"},"update"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under Disks ",">"," Click on Eject"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6840).Z,width:"488",height:"597"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Save")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Power Off Actions")," choose to Guest Reboot the VM where there are pending user action")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat ejecting CD-ROM for all VMs and rebooting it as the Wizard prompts for user action (do not do this before the prompting)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once all the user actions are sustained for Master and Worker VMs, OCP cluster will be installed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can access your installed OCP Cluster Manger page using the URL provided"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1522).Z,width:"961",height:"1009"})),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This URL can ",(0,r.kt)("strong",{parentName:"p"},"only")," be accessed within your HPOC/SPOC environment"),(0,r.kt)("p",{parentName:"admonition"},"You can access by creating DNS entry in your AD server or using IP address."),(0,r.kt)("p",{parentName:"admonition"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Not able to access Web Console?")," link in the status page to reveal IP addresses and DNS entry suggestions."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:a(8057).Z,width:"942",height:"277"})),(0,r.kt)("p",{parentName:"admonition"},"You can download KUBECONFIG file and use ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," commands."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:a(9094).Z,width:"1107",height:"542"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After adding DNS/hosts entries to your environment, use Windows Tools PC you can browse to the IP addresses, or DNS entries you have manually created you are able to login to OC console."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8026).Z,width:"1536",height:"1064"})))),(0,r.kt)("p",null,"You have successfully deployed a OCP cluster using Red Hat Console Assisted Installer."),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can easily deploy multinode/single node OCP cluster using the Red Hat console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can provision resoruces (VM, Storage, etc) on Nutanix using Terraform IaaC (GitOps)"),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Installer Provisioned Installer (IPI) also uses Terraform to deploy infrastructure assets (VM) on Nutanix and VMware"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Assisted Installer provisioned OCP clusters can be used as a learning ground and for testing purposes"))))}c.isMDXComponent=!0},8057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_access-635026b265db295153602ad86ebd33fa.png"},7403:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_cluster_summary-637b766e635b73ec01c035e95c48b4b5.png"},8026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_console_ai-6dd5986bcc8f87769aabf7f5e33c6624.png"},9094:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_dns_hosts-356df7a34a9904f4e29101f0238750bd.png"},6033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_ing_api_ips-0836f276b0e878b4d3d125545c020175.png"},1522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_install_finish-7ec4ed102a5e52693731d86ad43bf898.png"},1107:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_install_start-987f68ea2ce16baa9463b87f5a291dc8.png"},4397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_iso_url-6fa19a58b7d92e9d98397d663fabb31c.png"},2674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_node_roles-6454aad902fe656e135343ea31fbef33.png"},641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_public_key-1e8611bc715004488c3b15e6aefaf05d.png"},4764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_rh_console_vms-96f64ba544df4b55ec690b0e0f6f6213.png"},1758:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_tf_vms-424d1875dbe0eb5e98ca65eeda128e5f.png"},5806:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_user_inter-d4f8c5fe8938a8e911160f61deb4adbf.png"},5979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pe_net_config-dcc7f6aa795fa15fc7196e503833ff96.png"},5494:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pe_used_ips-a264812fe24a923eebe7ca1ed8325bde.png"},6840:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pe_vm_cd_eject-562d17e5922c777ac78547cf769257dd.png"}}]);