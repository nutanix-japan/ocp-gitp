"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[1472],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6239:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,title:"Architecture and Initial Setup"},l="OCP: Architecture and Initial Setup",o={unversionedId:"ocp_ntnx_hci/import_bp",id:"ocp_ntnx_hci/import_bp",title:"Architecture and Initial Setup",description:"In this lab, we will set up OCP infrastructure using Nutanix Calm.",source:"@site/docs/ocp_ntnx_hci/import_bp.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/import_bp",permalink:"/ocp-gitp/ocp_ntnx_hci/import_bp",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ntnx_hci/import_bp.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1675756852,formattedLastUpdatedAt:"Feb 7, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Architecture and Initial Setup"},sidebar:"tutorialSidebar",previous:{title:"Backup and Restore Applications",permalink:"/ocp-gitp/workloads_on_ocp/ocp_k10_backup_restore"},next:{title:"Deploy Provisioning VM",permalink:"/ocp-gitp/ocp_ntnx_hci/prov_vm"}},p={},s=[{value:"Minimum Hardware Requirements for OCP VMs",id:"minimum-hardware-requirements-for-ocp-vms",level:2},{value:"Pre-requisites for Infrastructure in HPOC/SPOC Clusters",id:"pre-requisites-for-infrastructure-in-hpocspoc-clusters",level:2},{value:"Set up Calm Endpoint",id:"set-up-calm-endpoint",level:2},{value:"Upload Blueprints",id:"upload-blueprints",level:2}],m={toc:s};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ocp-architecture-and-initial-setup"},"OCP: Architecture and Initial Setup"),(0,r.kt)("p",null,"In this lab, we will set up OCP infrastructure using Nutanix Calm."),(0,r.kt)("p",null,"Calm provides an easy way of provisioning and configuring repeatable\ninfrastructure. Once the blueprint is developed, it can be used\nrepeatedly and constantly improved."),(0,r.kt)("p",null,"As OCP infrastructure requirements consist of many moving parts, it is\neasy to manage the soltuion in Calm. Since Calm can be used to deploy\nthe same infrastructure accross multiple clouds, it is a optimal\nsolution to manage the lifecycle of OCP infrastructure."),(0,r.kt)("p",null,"At a high-level OCP consists of the following components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Boostrap VM"),(0,r.kt)("li",{parentName:"ol"},"Stacked Master Nodes (Kubernetes Master + ETCD)"),(0,r.kt)("li",{parentName:"ol"},"Worker Nodes (used to run user workloads)"),(0,r.kt)("li",{parentName:"ol"},"Infra Nodes (used to run infrastructure based workloads)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4421).Z,width:"1472",height:"928"})),(0,r.kt)("h2",{id:"minimum-hardware-requirements-for-ocp-vms"},"Minimum Hardware Requirements for OCP VMs"),(0,r.kt)("p",null,"These are minimum required resrouces and software for the OCP VMs at the\ntime of writing this bootcamp."),(0,r.kt)("p",null,"The Calm blueprints in this lab will have these resources pre-configured\nfor your use."),(0,r.kt)("p",null,"For latest resource requirements refer to OpenShift portal\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/installing/installing_platform_agnostic/installing-platform-agnostic.html#installation-minimum-resource-requirements_installing-platform-agnostic"},"here.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OCP Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"vCPU"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM(minimum)"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage"),(0,r.kt)("th",{parentName:"tr",align:null},"IOPS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"120 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Master"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"120 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Worker"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS, RHEL 7.9, or  RHEL 8.4"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"120 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"300")))),(0,r.kt)("p",null,"We will use two Calm blueprints to deploy OCP infrastructure."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"These Calm blueprints are developed by Nutanix's very own SA ",(0,r.kt)("strong",{parentName:"p"},"Wolfgang Huse")," and team. For updates and more information about these blueprints check this github page ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nutanix/openshift/tree/calm-automation/automation/calm"},"here.")),(0,r.kt)("p",{parentName:"admonition"},"This lab uses a modified version of these blueprints to suit HPOC/SPOC environment and to achieve the learning objectives.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Blueprint 1 - provisions a OCP provisioning VM with Calm action to\ndeploy OCP"),(0,r.kt)("li",{parentName:"ol"},"Blueprint 2 - is called by a Calm action in ",(0,r.kt)("inlineCode",{parentName:"li"},"Blueprint 1")," with all the necessary information that ",(0,r.kt)("inlineCode",{parentName:"li"},"Blueprint 2")," needs to run")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4203).Z,width:"1930",height:"826"})),(0,r.kt)("h2",{id:"pre-requisites-for-infrastructure-in-hpocspoc-clusters"},"Pre-requisites for Infrastructure in HPOC/SPOC Clusters"),(0,r.kt)("p",null,"Since we will be doing the OCP labs in Nutanix HPOC/SPOC clusters, here\nis a list of pre-requisites and HPOC/SPOC components that fulfill them."),(0,r.kt)("p",null,"Some are created with your HPOC/SPOC cluster runbook (see screenshot\nbelow) you chose while booking the cluster in ",(0,r.kt)("a",{parentName:"p",href:"https://rx.corp.nutanix.com/"},"RX")," ."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1890).Z,width:"661",height:"178"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OCP Pre-requisite"),(0,r.kt)("th",{parentName:"tr",align:null},"HPOC Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IPAM Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary Network"),(0,r.kt)("td",{parentName:"tr",align:null},"Deployed with HPOC Subnet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Existing AD and"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoAD (Windows based Active"),(0,r.kt)("td",{parentName:"tr",align:null},"Deployed with HPOC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS Server"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory+DNS server)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calm Project"),(0,r.kt)("td",{parentName:"tr",align:null},"BootcampInfra"),(0,r.kt)("td",{parentName:"tr",align:null},"Deployed with HPOC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VM Boot images"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS, RHCOS, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"Deployed with HPOC(downloadable images)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS Entries Update Mechanism"),(0,r.kt)("td",{parentName:"tr",align:null},"Calm Endpoint to contact  AutoAD+DNS server"),(0,r.kt)("td",{parentName:"tr",align:null},"You will create this  AutoAD+DNS server")))),(0,r.kt)("p",null,"Now we can proceed to setup pre-requistes and deploying blueprints."),(0,r.kt)("h2",{id:"set-up-calm-endpoint"},"Set up Calm Endpoint"),(0,r.kt)("p",null,"Let's create a Calm endpoint for authentication, authorization and DNS updates for OCP cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Services")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Calm"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Endpoint"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"+Create Endpoint")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9726).Z,width:"1267",height:"491"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - OCP DNS Integration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description")," - (optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project")," - BootcampInfra"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - Windows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target Type")," - IP Addresses"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IP Address")," - Your AutoAD VM IP (get from list of VMs)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connection Protocol")," - HTTP (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," - 5985 (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - ",(0,r.kt)("a",{parentName:"li",href:"mailto:administrator@ntnxlab.local"},"administrator@ntnxlab.local")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Type")," - Password"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - nutanix/4u")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(6340).Z,width:"814",height:"885"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("h2",{id:"upload-blueprints"},"Upload Blueprints"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download blueprint1 by right-clicking on this link ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/import_bp/XYZ_OCP_Prov_VM.json"},"Provisioning VM")," and save as ",(0,r.kt)("em",{parentName:"p"},"Initials"),"_OCP_Prov_VM.json file (e.g XYZ_OCP_Prov_VM.json)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download blueprint2 by right-clicking on this link ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/import_bp/XYZ_OCP_Master_Worker.json"},"OCP Master Worker")," and save as ",(0,r.kt)("em",{parentName:"p"},"Initials"),"_OCP_Master_Worker.json file (e.g XYZ_OCP_Master_Worker.json)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Services")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Calm"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Blueprints"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your Provisioning VM Initials_OCP_Prov_VM.json blueprint")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill the following Details"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blueprint Name")," - XYZ_OCP_Prov_VM"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project")," - BootcampInfra")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9444).Z,width:"539",height:"263"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Upload"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to ",(0,r.kt)("strong",{parentName:"p"},"Blueprints")," and upload OC Master Worker\nInitials_OCP_Master_Worker.json blueprint"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blueprint Name")," - XYZ_OCP_Master_Worker"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project")," - BootcampInfra")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(8124).Z,width:"544",height:"262"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to ",(0,r.kt)("strong",{parentName:"p"},"Blueprints")," once again and you will see both blueprints\nuploaded to Calm"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5155).Z,width:"1318",height:"285"})))),(0,r.kt)("p",null,"Now that we are setup with all required information. We can proceed to deploying the Provisioning VM and ultimately OCP Cluster in the next sections of the lab."))}u.isMDXComponent=!0},4203:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_bp_actions-ed86c5047179f4722ec8c710c5769ea1.png"},5155:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_bp_list-ae49dd7512c059cf88f1ea9ef611090e.png"},9726:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_calm_endpoint-d032822cf7a6f9b53d41ab52a92bdbf7.png"},6340:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_create_endpoint-8e243f0825684cdeb3075343b960e132.png"},4421:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_infra-caa612e9f1cee03a77856956ea9b34d8.png"},1890:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_runbook-2cbd1f0ce8c5d1f6000f05ba3951bdd8.png"},9444:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_upload_bp-3475d6c622c8d75ff2c577636be9cc18.png"},8124:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ocp_upload_bp_mw-26834e720c85341006ba4e12b1a821fc.png"}}]);