"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[9671],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,N=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9881:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"/",lastupdate:"git",lastupdateauthor:"git"},i="Getting Started",o={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Welcome to the Openshift Container Platform (OCP) on Nutanix HCI workshop.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/ocp-gitp/",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1672816170,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{slug:"/",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",next:{title:"OCP IPI Introduction",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_intro"}},s={},p=[{value:"What is new?",id:"what-is-new",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Cluster Assignment",id:"cluster-assignment",level:2},{value:"Environment Details",id:"environment-details",level:2},{value:"Networking",id:"networking",level:3},{value:"Three/Four node HPOC clusters",id:"threefour-node-hpoc-clusters",level:4},{value:"Single Node HPOC Clusters",id:"single-node-hpoc-clusters",level:4},{value:"Credentials",id:"credentials",level:3},{value:"Access Instructions",id:"access-instructions",level:2},{value:"Lab Access User Credentials",id:"lab-access-user-credentials",level:3},{value:"Frame VDI",id:"frame-vdi",level:3},{value:"Parallels VDI",id:"parallels-vdi",level:3},{value:"Employee Pulse Secure VPN",id:"employee-pulse-secure-vpn",level:3}],u={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Welcome to the Openshift Container Platform (OCP) on Nutanix HCI workshop."),(0,r.kt)("p",null,"This workbook accompanies an instructor-led session that introduces OCP on Nutanix HCI, Infrastructure lifecycle management for OCP using\nNutanix Calm, OCP using Nutanix HCI storage (volumes), and many common\nmanagement tasks. Each section has a lesson and an exercise to give you\nhands-on practice. The instructor explains the exercises and answers any\nadditional questions that you may have."),(0,r.kt)("p",null,"Lifecycle management for kubernetes and storage yet another silo within\nIT, introducing unnecessary complexity and suffering from the same\nissues of scale and lack of continuous innovation seen in SAN storage."),(0,r.kt)("p",null,"Nutanix believes there is no room for silos in the Enterprise Cloud. By\napproaching Infrastructure and storage as an app, running in software on\ntop of a proven HCI core, Nutanix delivers high performance,\nscalability, and rapid innovation through One-Click management."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP: IPI Installation")," - 60 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nutanix Storage CSI")," - 30 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP and Nutanix NDB")," - 60 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP Workload Backup/Restore")," - 60 minutes "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP: NCM Installation")," - 90 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP: Assited Installer")," - 40 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optional Labs")," - 30 minutes")),(0,r.kt)("p",{parentName:"admonition"},"All lab durations are estimates. Actual duration will depend on your familiarity with OCP, Linux and kubernetes concepts in general.")),(0,r.kt)("h2",{id:"what-is-new"},"What is new?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This workshop uses for the following software versions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AOS 6.1.1.5"),(0,r.kt)("li",{parentName:"ul"},"Prism Central - pc.2022.4.0.1"),(0,r.kt)("li",{parentName:"ul"},"Calm 3.4.1")))),(0,r.kt)("h2",{id:"agenda"},"Agenda"),(0,r.kt)("p",null,"The lab is designed to take your through installing OCP cluster on Nutanix HCI, deploying workloads, and doing optional labs.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose one installation of the OCP cluster methods:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OCP IPI Installation"),(0,r.kt)("li",{parentName:"ul"},"OCP on Nutanix NCM Installation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OCP: Deploying OCP Cluster"),(0,r.kt)("li",{parentName:"ul"},"OCP: Scale out and Scale in OCP Cluster Worker Nodes"),(0,r.kt)("li",{parentName:"ul"},"OCP: Deploying Nutanix CSI Drivers for OCP Cluster"))),(0,r.kt)("li",{parentName:"ul"},"OCP Assisted Installation"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setting up Nutanix Storage CSI"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Nutanix Storage CSI  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OCP and Nutanix NDB"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Using NDB deployed database as a datastore for a microservice application"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Workloads on OCP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deploying Wordpress application on OCP"),(0,r.kt)("li",{parentName:"ul"},"Setting up Nutanix Objects as for backup target"),(0,r.kt)("li",{parentName:"ul"},"Deploying Kasten K10 backup applicaiton on OCP"),(0,r.kt)("li",{parentName:"ul"},"Backup and Restore Wordpress"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional Labs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deploy second OCP cluster using NCM"),(0,r.kt)("li",{parentName:"ul"},"Deploying IDP for OCP")))),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Take note of the ",(0,r.kt)("em",{parentName:"li"},"Passwords")," being used from you RX reservation details"),(0,r.kt)("li",{parentName:"ul"},"Log into your virtual desktops (connection info below)"),(0,r.kt)("li",{parentName:"ul"},"Login to Global Protect VPN if you have access")),(0,r.kt)("h2",{id:"cluster-assignment"},"Cluster Assignment"),(0,r.kt)("p",null,"The instructor will inform the attendees of their assigned clusters."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If these are Single Node Clusters (SNCs) pay close attention on the networking part. The SNCs are setup and configured differently to the 3 or 4 node clusters")),(0,r.kt)("h2",{id:"environment-details"},"Environment Details"),(0,r.kt)("p",null,"Nutanix Workshops are intended to be run in the Nutanix Hosted POC\nenvironment. Your cluster will be provisioned with all necessary images,\nnetworks, and VMs required to complete the exercises."),(0,r.kt)("h3",{id:"networking"},"Networking"),(0,r.kt)("p",null,"As we are able to provide three/four node clusters and single node\nclusters in the HPOC environment, we need to describe each sort of\ncluster separately. The clusters are setup and configured differently."),(0,r.kt)("h4",{id:"threefour-node-hpoc-clusters"},"Three/Four node HPOC clusters"),(0,r.kt)("p",null,"Three or four node Hosted POC clusters follow a standard naming\nconvention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster Name")," - POC",(0,r.kt)("em",{parentName:"li"},"XYZ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Subnet")," - 10.",(0,r.kt)("strong",{parentName:"li"},"42"),".",(0,r.kt)("em",{parentName:"li"},"XYZ"),".0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster IP")," - 10.",(0,r.kt)("strong",{parentName:"li"},"42"),".",(0,r.kt)("em",{parentName:"li"},"XYZ"),".37")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster Name")," - POC055"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Subnet")," - 10.42.55.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster IP")," - 10.42.55.37 for the VIP of the Cluster")),(0,r.kt)("p",null,"Throughout the Workshop there are multiple instances where you will need\nto substitute ",(0,r.kt)("em",{parentName:"p"},"XYZ")," with the correct octet for your subnet, for example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"IP Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".37"),(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Cluster Virtual IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".39"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PC")," VM IP, Prism Central")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".41"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DC")," VM IP, NTNXLAB.local Domain Controller")))),(0,r.kt)("p",null,"Each cluster is configured with 2 VLANs which can be used for VMs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"VLAN"),(0,r.kt)("th",{parentName:"tr",align:null},"DHCP Scope"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary"),(0,r.kt)("td",{parentName:"tr",align:null},"10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".1/25"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".50-10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".124")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secondary"),(0,r.kt)("td",{parentName:"tr",align:null},"10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".129/25"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"XYZ1")),(0,r.kt)("td",{parentName:"tr",align:null},"10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".132-10.42.",(0,r.kt)("em",{parentName:"td"},"XYZ"),".253")))),(0,r.kt)("h4",{id:"single-node-hpoc-clusters"},"Single Node HPOC Clusters"),(0,r.kt)("p",null,"For some workshops we are using Single Node Clusters (SNC). The reason\nfor this is to allow more people to have a dedicated cluster but still\nhave enough free clusters for the bigger workshops including those for\ncustomers."),(0,r.kt)("p",null,"The network in the SNC config is using a /26 network. This splits the\nnetwork address into four equal sizes that can be used for workshops.\nThe below table describes the setup of the network in the four\npartitions. It provides essential information for the workshop with\nrespect to the IP addresses and the services running at that IP address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Partition 1"),(0,r.kt)("th",{parentName:"tr",align:null},"Partition 2"),(0,r.kt)("th",{parentName:"tr",align:null},"Partition 3"),(0,r.kt)("th",{parentName:"tr",align:null},"Partition 4"),(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.1"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.65"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.129"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.193"),(0,r.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.5"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.69"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.133"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.197"),(0,r.kt)("td",{parentName:"tr",align:null},"AHV Host"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.6"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.70"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.134"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.198"),(0,r.kt)("td",{parentName:"tr",align:null},"CVM IP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.7"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.71"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.135"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.199"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster IP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.8"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.72"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.136"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.200"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Services IP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.9"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.73"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.137"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.201"),(0,r.kt)("td",{parentName:"tr",align:null},"Prism Central IP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.11"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.75"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.139"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.203"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoDC IP(DC)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.32-37"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.96-101"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.160-165"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.224-229"),(0,r.kt)("td",{parentName:"tr",align:null},"Objects 1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.38-58"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.102-122"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.166-186"),(0,r.kt)("td",{parentName:"tr",align:null},"10.38.x.230-250"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary"),(0,r.kt)("td",{parentName:"tr",align:null},"6 Free IPs for static assignment")))),(0,r.kt)("h3",{id:"credentials"},"Credentials"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},"Cluster Password")," is unique to each cluster and will be\nprovided by the leader of the Workshop.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Credential"),(0,r.kt)("th",{parentName:"tr",align:null},"Username"),(0,r.kt)("th",{parentName:"tr",align:null},"Password"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prism Element"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Cluster Password"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prism Central"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Cluster Password"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Controller VM"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Cluster Password"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prism Central VM"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Cluster Password"))))),(0,r.kt)("p",null,"Each cluster has a dedicated domain controller VM, ",(0,r.kt)("strong",{parentName:"p"},"DC"),", responsible\nfor providing AD services for the ",(0,r.kt)("strong",{parentName:"p"},"NTNXLAB.local")," domain. The domain\nis populated with the following Users and Groups:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Group"),(0,r.kt)("th",{parentName:"tr",align:null},"Username(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Password"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Administrators"),(0,r.kt)("td",{parentName:"tr",align:null},"Administrator"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix/4u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSP Admins"),(0,r.kt)("td",{parentName:"tr",align:null},"adminuser01-adminuser25"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix/4u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSP Developers"),(0,r.kt)("td",{parentName:"tr",align:null},"devuser01-devuser25"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix/4u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSP Consumers"),(0,r.kt)("td",{parentName:"tr",align:null},"consumer01-consumer25"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix/4u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSP Operators"),(0,r.kt)("td",{parentName:"tr",align:null},"operator01-operator25"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix/4u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSP Custom"),(0,r.kt)("td",{parentName:"tr",align:null},"custom01-custom25"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix/4u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bootcamp Users"),(0,r.kt)("td",{parentName:"tr",align:null},"user01-user25"),(0,r.kt)("td",{parentName:"tr",align:null},"nutanix/4u")))),(0,r.kt)("h2",{id:"access-instructions"},"Access Instructions"),(0,r.kt)("p",null,"The Nutanix Hosted POC environment can be accessed a number of different\nways:"),(0,r.kt)("h3",{id:"lab-access-user-credentials"},"Lab Access User Credentials"),(0,r.kt)("p",null,"PHX Based Clusters: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username:")," PHX-POCxxx-User01 (up to PHX-POCxxx-User20), "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password:")," ",(0,r.kt)("em",{parentName:"li"},"Provided by Instructor"))),(0,r.kt)("p",null,"RTP Based Clusters: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username:")," RTP-POCxxx-User01 (up to RTP-POCxxx-User20), "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password:")," ",(0,r.kt)("em",{parentName:"li"},"Provided by Instructor"))),(0,r.kt)("h3",{id:"frame-vdi"},"Frame VDI"),(0,r.kt)("p",null,"Login to: ",(0,r.kt)("a",{parentName:"p",href:"https://console.nutanix.com/x/labs"},"https://console.nutanix.com/x/labs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nutanix Employees")," - Use your ",(0,r.kt)("strong",{parentName:"p"},"NUTANIXDC")," credentials\n",(0,r.kt)("strong",{parentName:"p"},"Non-Employees")," - Use ",(0,r.kt)("strong",{parentName:"p"},"Lab Access User")," Credentials"),(0,r.kt)("h3",{id:"parallels-vdi"},"Parallels VDI"),(0,r.kt)("p",null,"PHX Based Clusters Login to: ",(0,r.kt)("a",{parentName:"p",href:"https://xld-uswest1.nutanix.com"},"https://xld-uswest1.nutanix.com")),(0,r.kt)("p",null,"RTP Based Clusters Login to: ",(0,r.kt)("a",{parentName:"p",href:"https://xld-useast1.nutanix.com"},"https://xld-useast1.nutanix.com")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nutanix Employees")," - Use your ",(0,r.kt)("strong",{parentName:"p"},"NUTANIXDC")," credentials\n",(0,r.kt)("strong",{parentName:"p"},"Non-Employees")," - Use ",(0,r.kt)("strong",{parentName:"p"},"Lab Access User")," Credentials"),(0,r.kt)("h3",{id:"employee-pulse-secure-vpn"},"Employee Pulse Secure VPN"),(0,r.kt)("p",null,"Download the client:"),(0,r.kt)("p",null,"PHX Based Clusters Login to: ",(0,r.kt)("a",{parentName:"p",href:"https://xld-uswest1.nutanix.com"},"https://xld-uswest1.nutanix.com")),(0,r.kt)("p",null,"RTP Based Clusters Login to: ",(0,r.kt)("a",{parentName:"p",href:"https://xld-useast1.nutanix.com"},"https://xld-useast1.nutanix.com")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nutanix Employees")," - Use your ",(0,r.kt)("strong",{parentName:"p"},"NUTANIXDC")," credentials\n",(0,r.kt)("strong",{parentName:"p"},"Non-Employees")," - Use ",(0,r.kt)("strong",{parentName:"p"},"Lab Access User")," Credentials"),(0,r.kt)("p",null,"Install the client."),(0,r.kt)("p",null,"In Pulse Secure Client, ",(0,r.kt)("strong",{parentName:"p"},"Add")," a connection:"),(0,r.kt)("p",null,"For PHX:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - Policy Secure (UAC) or Connection Server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - X-Labs - PHX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server URL")," - xlv-uswest1.nutanix.com")),(0,r.kt)("p",null,"For RTP:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - Policy Secure (UAC) or Connection Server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - X-Labs - RTP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server URL")," - xlv-useast1.nutanix.com")))}m.isMDXComponent=!0}}]);