"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[1553],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=s(a),u=l,c=k["".concat(p,".").concat(u)]||k[u]||d[u]||r;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5469:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={title:"IDP and DNS Implementation",categories:["training","instructions","ocp","nutanix","csi","topology","az"],tags:["csi","topology","idp","dns","instructions"],lastupdate:"git",lastupdateauthor:"git"},i="IDP and DNS Implementation",o={unversionedId:"ocp_topology/infra_topology",id:"ocp_topology/infra_topology",title:"IDP and DNS Implementation",description:"Design Overview",source:"@site/docs/ocp_topology/infra_topology.md",sourceDirName:"ocp_topology",slug:"/ocp_topology/infra_topology",permalink:"/ocp-gitp/ocp_topology/infra_topology",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_topology/infra_topology.md",tags:[{label:"csi",permalink:"/ocp-gitp/tags/csi"},{label:"topology",permalink:"/ocp-gitp/tags/topology"},{label:"idp",permalink:"/ocp-gitp/tags/idp"},{label:"dns",permalink:"/ocp-gitp/tags/dns"},{label:"instructions",permalink:"/ocp-gitp/tags/instructions"}],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1683718402,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"IDP and DNS Implementation",categories:["training","instructions","ocp","nutanix","csi","topology","az"],tags:["csi","topology","idp","dns","instructions"],lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/ocp-gitp/ocp_topology/"},next:{title:"OCP Clusters Implementation",permalink:"/ocp-gitp/ocp_topology/ocp_setup"}},p={},s=[{value:"Design Overview",id:"design-overview",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"IDP and DNS Implementation",id:"idp-and-dns-implementation-1",level:2},{value:"Upload Images",id:"upload-images",level:3},{value:"Create Primary AD and DNS VM",id:"create-primary-ad-and-dns-vm",level:3},{value:"Prepare AD Sites and Services",id:"prepare-ad-sites-and-services",level:3},{value:"Implement DNS Best Practices",id:"implement-dns-best-practices",level:3},{value:"Deploy Additional AD and DNS Controllers",id:"deploy-additional-ad-and-dns-controllers",level:3},{value:"Prepare VM",id:"prepare-vm",level:4},{value:"Install Additional Domain Controller",id:"install-additional-domain-controller",level:4},{value:"Check Replication Status",id:"check-replication-status",level:4}],m={toc:s};function k(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"idp-and-dns-implementation"},"IDP and DNS Implementation"),(0,l.kt)("h2",{id:"design-overview"},"Design Overview"),(0,l.kt)("p",null,"In this section we will look at design decisions that has driven IDP and DNS design."),(0,l.kt)("p",null,"One of the primary requirements is to deploy IDP and DNS across multiple Availability Zones (AZ) to tolerate failure. This IDP and DNS services will be used by the OCP cluster and  workloads hosted on it. "),(0,l.kt)("p",null,"Other requirements could be the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Local storage availability"),(0,l.kt)("li",{parentName:"ul"},"IDP and DNS information to replicate across AZ"),(0,l.kt)("li",{parentName:"ul"},"Failure of any one AZ will start automated failover of IDP and DNS")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"We will not be using Active Directory Federation Services in an attempt to keep the implementation simple. However, please feel free to deploy it if necessary. ")),(0,l.kt)("p",null,"We will look at deploying a inter-AZ infrastructure services."),(0,l.kt)("p",null,"These are the high-level steps we will go through in this section:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install 2 x Microsoft AD and DNS servers in AZ1 ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"One Primary AD DNS (DM3-POC009)"),(0,l.kt)("li",{parentName:"ul"},"One additional AD DNS (DM3-POC009)"))),(0,l.kt)("li",{parentName:"ol"},"Install 3 x additional AD and DNS server in AZ2, AZ3 and AZ3 to provide redundancy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"One additional AD DNS (DM3-POC010)"),(0,l.kt)("li",{parentName:"ul"},"One additional AD DNS (DM3-POC011)"),(0,l.kt)("li",{parentName:"ul"},"One additional AD DNS (DM3-POC013)")))),(0,l.kt)("p",null,"We will build the following resilient AD(IDP) and DNS implementation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Availability Zone (AZ)"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Nutanix Cluster"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Role"),(0,l.kt)("th",{parentName:"tr",align:"center"},"VM Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"IP Address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AZ 1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DM3-POC009"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Primary DC and DNS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DC"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10.54.63.51")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AZ 1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DM3-POC009"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Additional DC and DNS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DC-AZ1-1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10.54.63.52")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AZ 2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DM3-POC010"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Additional DC and DNS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DC-AZ2-2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10.54.63.111")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AZ 3"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DM3-POC011"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Additional DC and DNS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DC-AZ3-3"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10.54.63.151")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AZ 4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DM3-POC013"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Additional DC and DNS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DC-AZ4-4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10.54.63.191")))),(0,l.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,l.kt)("p",null,"You will need the following pre-requisites:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Access to Windows server OS image "),(0,l.kt)("li",{parentName:"ul"},"Basic Windows roles and features installation knowledge"),(0,l.kt)("li",{parentName:"ul"},"5x Static IPs chosen for 4 AD+DNS VMs ")),(0,l.kt)("h2",{id:"idp-and-dns-implementation-1"},"IDP and DNS Implementation"),(0,l.kt)("p",null,"Since you will potentially build this environment using a HPOC/SPOC, we will use the Windows OS images in our DFS share to build these VMs."),(0,l.kt)("h3",{id:"upload-images"},"Upload Images"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Prism Central")," "),(0,l.kt)("li",{parentName:"ol"},"In the search window (on top left), enter the text ",(0,l.kt)("strong",{parentName:"li"},"Images")),(0,l.kt)("li",{parentName:"ol"},"Choose the Images option and Click on ",(0,l.kt)("strong",{parentName:"li"},"Add Image")),(0,l.kt)("li",{parentName:"ol"},"Select URL and enter the following ",(0,l.kt)("a",{parentName:"li",href:"http://10.42.194.11/workshop_staging/autoad.qcow2"},"AutoAD")," (right-click and copy URL)"),(0,l.kt)("li",{parentName:"ol"},"Paste the URL in the ",(0,l.kt)("strong",{parentName:"li"},"Enter Image URL")," text box"),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Upload File")),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Next")),(0,l.kt)("li",{parentName:"ol"},"Choose ",(0,l.kt)("strong",{parentName:"li"},"Place image directly on clusters")),(0,l.kt)("li",{parentName:"ol"},"Select all your three or four clusters (this design uses four clusters) each representing different AZs."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Save")),(0,l.kt)("li",{parentName:"ol"},"Monitor the progress in the background and make sure the images are available in all four clusters in the three AZ. ")),(0,l.kt)("p",null,"Repeat these steps to upload ",(0,l.kt)("a",{parentName:"p",href:"http://10.42.194.11/workshop_staging/Windows2019.qcow2"},"Windows2019")," (right-click and copy URL) image for the additional domain controllers."),(0,l.kt)("h3",{id:"create-primary-ad-and-dns-vm"},"Create Primary AD and DNS VM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In ",(0,l.kt)("strong",{parentName:"p"},"Prism Central")," > select ",(0,l.kt)("strong",{parentName:"p"},"Menu")," > ",(0,l.kt)("strong",{parentName:"p"},"Compute and Storage > VMs"),", and click ",(0,l.kt)("strong",{parentName:"p"},"Create VM"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fill out the following fields:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name")," - DC-AZ1-0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description")," - (Optional) Description for your VM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cluster")," - Choose the AZ1 cluster (DM3-POC009)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Number of VMs")," - 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CPU(s)")," - 4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Number of Cores per CPU")," - 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Memory")," - 4 GiB"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Next"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under ",(0,l.kt)("strong",{parentName:"p"},"Disks")," select ",(0,l.kt)("strong",{parentName:"p"},"Attach Disk")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type")," - DISK"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Operation")," - Clone from Image"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Image")," - autoad.qcow2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Capacity")," - leave at default size"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bus Type")," - leave at default SCSI Setting"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Save"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under ",(0,l.kt)("strong",{parentName:"p"},"Networks")," select ",(0,l.kt)("strong",{parentName:"p"},"Attach to Subnet")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"VLAN Name")," - Primary"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Network Connection State")," - Connected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Assignment Type")," - Assign a static IP in your CIDR"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Save"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Next")," at the bottom")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In ",(0,l.kt)("strong",{parentName:"p"},"Management")," section"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Categories")," - leave blank"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Timezone")," - leave at default UTC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Guest Customization")," - No Customization"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go back to ",(0,l.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,l.kt)("strong",{parentName:"p"},"Menu")," > ",(0,l.kt)("strong",{parentName:"p"},"Compute and Storage")," > ",(0,l.kt)("strong",{parentName:"p"},"VMs"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select your ",(0,l.kt)("em",{parentName:"p"},"Initials"),"-Linux-ToolsVM")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Under ",(0,l.kt)("strong",{parentName:"p"},"Actions")," drop-down menu, choose ",(0,l.kt)("strong",{parentName:"p"},"Power On")),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"It may take up to 10 minutes for the VM to be ready."),(0,l.kt)("p",{parentName:"admonition"},"You can watch the console of the VM from Prism Central to make sure all the sysprep script has finished running."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Login to the VM via SSH or Console session and confirm the presence of following components :"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Active Directory Users and Computers"),(0,l.kt)("li",{parentName:"ul"},"DNS"),(0,l.kt)("li",{parentName:"ul"},"Active Directory Sites and Services")))),(0,l.kt)("h3",{id:"prepare-ad-sites-and-services"},"Prepare AD Sites and Services"),(0,l.kt)("p",null,"We will prepare our Active Directory Sites and Services to reflect our physical AZ."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Logon to the primary domain controller"),(0,l.kt)("li",{parentName:"ol"},"Opens Active Directory Sites and Services"),(0,l.kt)("li",{parentName:"ol"},"Create a new site for each AZ as shown in the table below. ")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"AZ"),(0,l.kt)("th",null,"AD Site Name"),(0,l.kt)("th",null,"AD Sever"),(0,l.kt)("th",null,"Notes"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"AZ1"),(0,l.kt)("td",{rowspan:"2"},"Default First Site"),(0,l.kt)("td",null,"DC"),(0,l.kt)("td",{rowspan:"2"},"This is automatically created with DC install.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"DC-AZ1-1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"AZ2"),(0,l.kt)("td",null,"AZ2"),(0,l.kt)("td",null,"DC-AZ2-2"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"AZ3"),(0,l.kt)("td",null,"AZ3"),(0,l.kt)("td",null,"DC-AZ3-3"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"AZ4"),(0,l.kt)("td",null,"AZ4"),(0,l.kt)("td",null,"DC-AZ4-4"),(0,l.kt)("td",null)))),(0,l.kt)("p",null,"Once you have finished creatin the AZ2, AZ3 and AZ4 sites, the console should looks as follows: "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The primary domain controller is by default a part of ",(0,l.kt)("strong",{parentName:"p"},"Default-First-Site-Name"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8885).Z,width:"861",height:"263"})),(0,l.kt)("p",null,"We can use these sites to deploy our additional domain controllers."),(0,l.kt)("h3",{id:"implement-dns-best-practices"},"Implement DNS Best Practices"),(0,l.kt)("p",null,"The following DNS best practices should be implemented in PoC to get a resilient DNS infrastructure."),(0,l.kt)("p",null,"On your domain controller, configure your network cards static IP and DNS addresses to suit the best practices."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Round-robin approach to ",(0,l.kt)("strong",{parentName:"li"},"Preferred DNS Server"),"-"),(0,l.kt)("li",{parentName:"ul"},"Loop back address to ",(0,l.kt)("strong",{parentName:"li"},"Alternate DNS Server"),"-"),(0,l.kt)("li",{parentName:"ul"},"All other additional DNS servers including public DNS servers in ",(0,l.kt)("strong",{parentName:"li"},"Addtional DNS Server"))),(0,l.kt)("p",null,"Here is a summation of what the configuration would like like."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"#"),(0,l.kt)("th",null,"DC Name"),(0,l.kt)("th",null,"DC IP Address"),(0,l.kt)("th",null,"Preferred DNS Server"),(0,l.kt)("th",null,"Alternate DNS Server"),(0,l.kt)("th",null,"Additional DNS Servers"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"DC"),(0,l.kt)("td",null,"10.54.63.51"),(0,l.kt)("td",null,"10.54.63.51"),(0,l.kt)("td",null,"127.0.0.1"),(0,l.kt)("td",{rowspan:"5"},"10.54.63.51,52,111,151,111,8.8.8.8,8.8.4.4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"DC-AZ1-1"),(0,l.kt)("td",null,"10.54.63.52"),(0,l.kt)("td",null,"10.54.63.51"),(0,l.kt)("td",null,"127.0.0.1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"DC-AZ2-2"),(0,l.kt)("td",null,"10.54.63.111"),(0,l.kt)("td",null,"10.54.63.52"),(0,l.kt)("td",null,"127.0.0.1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"DC-AZ3-3"),(0,l.kt)("td",null,"10.54.63.151"),(0,l.kt)("td",null,"10.54.63.111"),(0,l.kt)("td",null,"127.0.0.1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"DC-AZ4-4"),(0,l.kt)("td",null,"10.54.63.191"),(0,l.kt)("td",null,"10.54.63.151"),(0,l.kt)("td",null,"127.0.0.1")))),(0,l.kt)("h3",{id:"deploy-additional-ad-and-dns-controllers"},"Deploy Additional AD and DNS Controllers"),(0,l.kt)("p",null,"In this section we will deploy additional AD and DNS VMs in AZ1, AZ2 and AZ3. "),(0,l.kt)("h4",{id:"prepare-vm"},"Prepare VM"),(0,l.kt)("p",null,"Deploy an addtional domain controller and DNS VM in AZ1 (DM3-POC009)"),(0,l.kt)("p",null,"Create a VM with the following details:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Fill out the following fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name")," - DC-AZ1-1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description")," - (Optional) Description for your VM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cluster")," - Choose the AZ1 cluster (cluster DM3-POC010)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Number of VMs")," - 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CPU(s)")," - 4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Number of Cores per CPU")," - 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Memory")," - 4 GiB"))),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Next")),(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("strong",{parentName:"li"},"Disks")," select ",(0,l.kt)("strong",{parentName:"li"},"Attach Disk"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type")," - DISK"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Operation")," - Clone from Image"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Image")," - Windows2019"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Capacity")," - leave at default size"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bus Type")," - leave at default SCSI Setting"))),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Save")),(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("strong",{parentName:"li"},"Networks")," select ",(0,l.kt)("strong",{parentName:"li"},"Attach to Subnet"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"VLAN Name")," - Primary"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Network Connection State")," - Connected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Assignment Type")," - Assign Static IP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IP Address")," - Assign one IP from you reserved CIDR "))),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Save")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Next")," at the bottom  "),(0,l.kt)("li",{parentName:"ol"},"In ",(0,l.kt)("strong",{parentName:"li"},"Management")," section",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Categories")," - leave blank"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Timezone")," - leave at default UTC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Guest Customization")," - No Customization"))),(0,l.kt)("li",{parentName:"ol"},"Go back to ",(0,l.kt)("strong",{parentName:"li"},"Prism Central")," > ",(0,l.kt)("strong",{parentName:"li"},"Menu")," > ",(0,l.kt)("strong",{parentName:"li"},"Compute and Storage")," > ",(0,l.kt)("strong",{parentName:"li"},"VMs")),(0,l.kt)("li",{parentName:"ol"},"Select your DC-AZ1-01 VM"),(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("strong",{parentName:"li"},"Actions")," drop-down menu, choose ",(0,l.kt)("strong",{parentName:"li"},"Power On")),(0,l.kt)("li",{parentName:"ol"},"In the welcome screen, set the following: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"What's your home country/region? - United States"),(0,l.kt)("li",{parentName:"ul"},"What's your preferred app languages? - English (United States)"),(0,l.kt)("li",{parentName:"ul"},"What keyboard layout would you like to user? - US"))),(0,l.kt)("li",{parentName:"ol"},"Click Accept in License terms Window"),(0,l.kt)("li",{parentName:"ol"},"Set a local administrator password"),(0,l.kt)("li",{parentName:"ol"},"Set the static the IP address on the NIC to the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IP")," - 10.54.63.52"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Subnet")," - 255.255.255.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Gateway")," - 10.54.63.1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Preferred DNS Server"),"- 10.54.63.51 (the primary domain controller)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alternate DNS Server"),"- 127.0.0.1 (loopback)"))),(0,l.kt)("li",{parentName:"ol"},"Set the hostname name to ",(0,l.kt)("strong",{parentName:"li"},"DC-AZ1-1")," (reboot if required)")),(0,l.kt)("p",null,"Repeat these steps to create additional domain controllers in AZ2 (DM3-POC010), AZ3 (DM3-POC011) and AZ4(DM3-POC013). "),(0,l.kt)("h4",{id:"install-additional-domain-controller"},"Install Additional Domain Controller"),(0,l.kt)("admonition",{title:"Reference",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"We have followed ",(0,l.kt)("a",{parentName:"p",href:"https://activedirectorypro.com/add-secondary-domain-controller/"},"this")," article to implement additional domain controllers.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Server Manager")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select Role-based or featured-based installation and click Next")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select a server from the server pool. Select your server and click Next")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select Active Directory Domain Services, you will get a popup to add features that are required for Active Directory Domain Services, click Add features. Click Next")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click next on the features page. Nothing additional needs to be selected on this page")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click next on the AD DS page. This page is just informational")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Install on the confirmation page ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Monitor to make sure the installation is complete")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the server manager click the yellow icon at the top and click ",(0,l.kt)("strong",{parentName:"p"},"Promote this server to a domain controller"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select \u201cAdd a domain controller to an existing domain\u201d")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Next, enter or select the existing domain (",(0,l.kt)("strong",{parentName:"p"},"dc.ntnxlab.local"),") you want to add the secondary domain controller to. You will need to click the change button to enter in administrator credentials. Click Next.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Domain Controller Options page, Domain Name System (DNS) server and Global Catalog (GC) should be checked. The ",(0,l.kt)("strong",{parentName:"p"},"Default First Site Name")," should be selected."),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"While installing additonal domain controllers in AZ2, AZ3 and AZ4, choose the appropriate site you created in AD Sites and Services ",(0,l.kt)("a",{parentName:"p",href:"/ocp-gitp/ocp_topology/infra_topology#prepare-ad-sites-and-services"})," section.")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ocp-gitp/ocp_topology/infra_topology#prepare-ad-sites-and-services"})),(0,l.kt)("ol",{start:13},(0,l.kt)("li",{parentName:"ol"},"Enter a password for the Directory Services Restore mode and click ",(0,l.kt)("strong",{parentName:"li"},"Next")),(0,l.kt)("li",{parentName:"ol"},"Ignore warnings about delegation and click ",(0,l.kt)("strong",{parentName:"li"},"Next")),(0,l.kt)("li",{parentName:"ol"},"Accept the defaults for the remainder of the configuration and monitor the installation")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Repeat")," these steps for other additional domain controllers in your configuration:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AZ2")," - DC-AZ2-2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AZ3")," - DC-AZ3-3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AZ4")," - DC-AZ4-4")),(0,l.kt)("p",null,"Once you have finished adding all other addtional domain controllers and DNS the configuration should look as follows:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AD")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(677).Z,width:"858",height:"406"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DNS")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(166).Z,width:"1015",height:"690"})),(0,l.kt)("h4",{id:"check-replication-status"},"Check Replication Status"),(0,l.kt)("p",null,"Once the additional domain controller is deployed you can check the replciation status. "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Active Directory Users and Services and check for existance of user records")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If replication is not complete, open PowerShell and run the following command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-PowerShell"},"repadmin /replsummary\n")),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The lowest setting is 15 minutes. However this can be changed to immediate by configuring the following registry key. Note that this is not recommended in production environment and decision should be made considering the available bandwidth and compute resources for the domain controllers."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://www.itgeared.com/modifying-behavior-of-inter-site/"},"Here")," is an article to accomplish this.")))))}k.isMDXComponent=!0},166:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ad-dns-after-be29b0a19d676ddcdfa0ae22db9261b2.png"},677:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ad-sites-after-397c50a65e93313ea88fdf48c6bd29d4.png"},8885:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ad-sites-0692fd9d0bbb7a8965cc21af93d073c2.png"}}]);