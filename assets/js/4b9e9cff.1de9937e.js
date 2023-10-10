"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[999],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3e3:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Design",date:"Wed Jul 27 15:40:51 JST 2022",categories:["training","instructions","ocp","nutanix","csi","topology","az"],tags:["csi","topology","postgres","keycloak","instructions"]},i="Design",o={unversionedId:"ocp_topology/ocp_topology",id:"ocp_topology/ocp_topology",title:"Design",description:"Design Overview",source:"@site/docs/ocp_topology/ocp_topology.md",sourceDirName:"ocp_topology",slug:"/ocp_topology/",permalink:"/ocp-gitp/ocp_topology/",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_topology/ocp_topology.md",tags:[{label:"csi",permalink:"/ocp-gitp/tags/csi"},{label:"topology",permalink:"/ocp-gitp/tags/topology"},{label:"postgres",permalink:"/ocp-gitp/tags/postgres"},{label:"keycloak",permalink:"/ocp-gitp/tags/keycloak"},{label:"instructions",permalink:"/ocp-gitp/tags/instructions"}],version:"current",lastUpdatedBy:"Lakshmi Balaramane",lastUpdatedAt:1696914068,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"Design",date:"Wed Jul 27 15:40:51 JST 2022",categories:["training","instructions","ocp","nutanix","csi","topology","az"],tags:["csi","topology","postgres","keycloak","instructions"]},sidebar:"tutorialSidebar",previous:{title:"OCP CICD",permalink:"/ocp-gitp/ocp_serverless/extend_pipeline"},next:{title:"IDP and DNS Implementation",permalink:"/ocp-gitp/ocp_topology/infra_topology"}},s={},p=[{value:"Design Overview",id:"design-overview",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Testing Plan",id:"testing-plan",level:2},{value:"Plan 1 (with infrastructure services)",id:"plan-1-with-infrastructure-services",level:3},{value:"Plan 2 (without infrastructure services)",id:"plan-2-without-infrastructure-services",level:3},{value:"Nutanix Clusters Design",id:"nutanix-clusters-design",level:2},{value:"Nutanix Components Design",id:"nutanix-components-design",level:3},{value:"IDP and DNS Design",id:"idp-and-dns-design",level:2},{value:"OpenShift Clusters Design",id:"openshift-clusters-design",level:2},{value:"OCP Master and Worker Distribution across AZ",id:"ocp-master-and-worker-distribution-across-az",level:3}],u={toc:p};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design"},"Design"),(0,r.kt)("h2",{id:"design-overview"},"Design Overview"),(0,r.kt)("p",null,"In this section we will look at design decisions that has driven Nutanix infrastructure design."),(0,r.kt)("p",null,"One of the primary requirements is to deploy a customer application across multiple Availability Zones (AZ) to tolerate failure. "),(0,r.kt)("p",null,"Other requirements could be the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local storage availability"),(0,r.kt)("li",{parentName:"ul"},"Application to replicate across AZ"),(0,r.kt)("li",{parentName:"ul"},"Failure of any one AZ will start automated failover of applications")),(0,r.kt)("p",null,"Nutanix CSI drivers for Kubernetes distributions now has topology support. "),(0,r.kt)("p",null,"We will look at deploying a inter-AZ workload and how topology support helps in sustaining the design requirements."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"You will need the following pre-requisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Red Hat Portal access (if using OCP kubernetes clusters)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minimum of two Nutanix Clusters (we have used four clusters in this workshop)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Services IP must be set for all Nutanix clusters"),(0,r.kt)("admonition",{parentName:"li",title:"Contact XLABS team to get your Clusters provisioned",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get in touch with XLABS team with a JIRA ticket to get your clusters provisioned. "),(0,r.kt)("p",{parentName:"admonition"},"XLABS Team will help find appropriate clusters. Here is a sample JIRA ",(0,r.kt)("a",{parentName:"p",href:"https://jira.nutanix.com/browse/XLABS-780"},"ticket")," for your reference. "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Allow at least two weeks time to secure cluster reservation"),(0,r.kt)("li",{parentName:"ul"},"Make sure to provision at least two Nutanix clusters"),(0,r.kt)("li",{parentName:"ul"},"Make sure all the nodes are connected to same ToR network switch"),(0,r.kt)("li",{parentName:"ul"},"Get a PoC number going in SFDC to justify two weeks of clusters reservation time")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IP Address allocation for all infrastructure components and workloads. See this Google ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1a6-JBkf679PfmH6HxXdkGeEwABZ-M6R19bOEAXAvUFg/edit?usp=sharing"},"document")," for more network information and allocation ideas. We have secured the following CIDR from the HPOC hosting team. Routing is enabled between all these subnets."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"#"),(0,r.kt)("th",null,"PE Cluster"),(0,r.kt)("th",null,"Primary CIDR"),(0,r.kt)("th",null,"Secondary CIDR"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"DM3-POC009"),(0,r.kt)("td",{rowspan:"4"},"10.54.63.0/24"),(0,r.kt)("td",null,"10.55.9.128/25")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"DM3-POC010"),(0,r.kt)("td",null,"10.55.10.128/25")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"DM3-POC011"),(0,r.kt)("td",null,"10.55.11.128/25")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"DM3-POC013"),(0,r.kt)("td",null,"10.55.13.128/25"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DNS and internet connectivity for installation "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We have used replicated AD and DNS server in this design"),(0,r.kt)("li",{parentName:"ul"},"AD and DNS are also capable of sustaining region/zone failures"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OCP Installation "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Three masters VMs - one in each AZ "),(0,r.kt)("li",{parentName:"ul"},"Two or more worker VMs in each AZ - we have used 3 OCP worker VMs in each PE cluster"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic knowledge of Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic knowledge of Nutanix HCI"))),(0,r.kt)("h2",{id:"testing-plan"},"Testing Plan"),(0,r.kt)("p",null,"There are two ways you are able to test multi-region workloads."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Implement IDP and DNS services when you will like to implement a full-fledged soluion on Nutanix"),(0,r.kt)("li",{parentName:"ol"},"Directly test CSI topology deatures - when you would like to just test topolody feature")),(0,r.kt)("h3",{id:"plan-1-with-infrastructure-services"},"Plan 1 (with infrastructure services)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Implement 3 node Prism Central (PC) for four Prism Element(PE) accross four Availability Zones (AZ)"),(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("strong",{parentName:"li"},"resilient")," AD (IDP) and DNS services to offer dns, authentication and authorization services the workloads "),(0,r.kt)("li",{parentName:"ol"},"Install OpenShift Container Platform (OCP) - master and worker nodes accross three PE"),(0,r.kt)("li",{parentName:"ol"},"Install Nutanix CSI via Helm ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uninstall Nutanix CSI Operator in OCP through GUI if already installed"))),(0,r.kt)("li",{parentName:"ol"},"Install Postgres operator and database"),(0,r.kt)("li",{parentName:"ol"},"Create data in the database"),(0,r.kt)("li",{parentName:"ol"},"Find which postgress server is master and shutdown the workers where the Postgres master can run"),(0,r.kt)("li",{parentName:"ol"},"Let the pod on the other Availability Zone(AZ) take over and test if the database copies retain the data.")),(0,r.kt)("p",null,"Read on if you are following Plan 1"),(0,r.kt)("admonition",{title:"Time required for Plan 1",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After getting the clsuters built by the HPOC team, you would typically spend the following amount of time:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"PC - 30 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resilient")," AD and DNS - 60 to 90 minutes"),(0,r.kt)("li",{parentName:"ul"},"OCP - 60 minutes"),(0,r.kt)("li",{parentName:"ul"},"Testing topology with application - 60 minutes"))),(0,r.kt)("h3",{id:"plan-2-without-infrastructure-services"},"Plan 2 (without infrastructure services)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install OpenShift Container Platform (OCP) - master and worker nodes accross three PE"),(0,r.kt)("li",{parentName:"ol"},"Install Nutanix CSI via Helm ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uninstall Nutanix CSI Operator in OCP through GUI if already installed"))),(0,r.kt)("li",{parentName:"ol"},"Create data in the database"),(0,r.kt)("li",{parentName:"ol"},"Find which postgress server is master and shutdown the workers where the Postgres master can run"),(0,r.kt)("li",{parentName:"ol"},"Let the pod on the other Availability Zone(AZ) take over and test if the database copies retain the data.")),(0,r.kt)("p",null,"Start ",(0,r.kt)("a",{parentName:"p",href:"/ocp-gitp/ocp_topology/ocp_setup"},"here")," is you are following Plan 2."),(0,r.kt)("admonition",{title:"Time required for Plan 2",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After getting the clusters built by the HPOC team, you would typically spend the following amount of time:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"PC - 30 minutes"),(0,r.kt)("li",{parentName:"ul"},"OCP - 60 minutes"),(0,r.kt)("li",{parentName:"ul"},"Testing topology with application - 60 minutes"))),(0,r.kt)("h2",{id:"nutanix-clusters-design"},"Nutanix Clusters Design"),(0,r.kt)("p",null,"We will have four Nutanix clusters (in-theory) accross three AZ to have workloads distributed among them. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Availability Zone (AZ)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Prism Element (PE)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Prism Central (PC)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Workloads"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Infrastructure Services"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AZ 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DM3-POC010"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3-node PC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Nutanix Unified Storage - Files and Objects"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AD and DNS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AZ 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DM3-POC011"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"OCP VMs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AD and DNS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AZ 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DM3-POC013"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"OCP VMs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AD and DNS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AZ 3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DM3-POC013"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"OCP VMs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AD and DNS")))),(0,r.kt)("p",null,"All three regional clusters are reqistered to one Prism Central for manageability. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"From now all Nutanix Clusters deployed in Availability Zones will be referred to Availability Zones 1, 2 and 3. Our high-availability testing will be based on these Availability Zones (AZ).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pc-pe",src:n(1155).Z,width:"964",height:"207"})),(0,r.kt)("h3",{id:"nutanix-components-design"},"Nutanix Components Design"),(0,r.kt)("p",null,"The following Nutanix components have been planned and be implemented on one cluster (DM3-POC009). We will use this cluster to host infrastructure and management capabilities."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3 nodes Prism Central"),(0,r.kt)("li",{parentName:"ul"},"Nutanix Files implementation"),(0,r.kt)("li",{parentName:"ul"},"Nutanix Objects implementation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prism Central")," is constrained to one PE cluster at this time. When Nutanix is able to offer a cloud control plane, we will transition to this model."),(0,r.kt)("h2",{id:"idp-and-dns-design"},"IDP and DNS Design"),(0,r.kt)("p",null,"We will use the following to provide IDP and DNS services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IDP - Microsoft Active Directory(AD)"),(0,r.kt)("li",{parentName:"ul"},"DNS - Microsoft DNS ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IDP")),(0,r.kt)("p",null,"We will deploy Microsoft AD in a highly available fashion, at least one AD server per AZ to protect against failures."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DNS")),(0,r.kt)("p",null,"We will install DNS role in the AD server which will be then replicated to all other DNS servers. "),(0,r.kt)("h2",{id:"openshift-clusters-design"},"OpenShift Clusters Design"),(0,r.kt)("p",null,"We will use RedHat Openshift (OCP) clusters for deploying our workload."),(0,r.kt)("p",null,"Since OCP mandates strict network latency requirements, we have chosen to deploy three Nutanix clusters in one network subnet. This will reduce hops and also adhere to OCP requirements. Real world implementation scenarios might vary for OCP clusters or any other kubernetes deployment out there."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The implementation and testing procedure documented here can be performed in any Nutanix supported Kubernetes implementation (OCP/Karbon/Rancher/Vanilla) and does not solely rely on RedHat Openshift.")),(0,r.kt)("p",null,"We will have the following 11 node OCP Clusters implemented."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3 Master Node VMs"),(0,r.kt)("li",{parentName:"ul"},"9 Worker Node VMs")),(0,r.kt)("h3",{id:"ocp-master-and-worker-distribution-across-az"},"OCP Master and Worker Distribution across AZ"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Availability Zone"),(0,r.kt)("th",null,"OCP Master"),(0,r.kt)("th",null,"OCP Worker"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"3"},"AZ 1"),(0,r.kt)("td",{rowspan:"3"},"ocp-master-1"),(0,r.kt)("td",null,"ocp-worker-1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ocp-worker-2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ocp-worker-3")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"3"},"AZ 2"),(0,r.kt)("td",{rowspan:"3"},"ocp-master-2"),(0,r.kt)("td",null,"ocp-worker-4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ocp-worker-5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ocp-worker-6")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"3"},"AZ 3"),(0,r.kt)("td",{rowspan:"3"},"ocp-master-3"),(0,r.kt)("td",null,"ocp-worker-7")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ocp-worker-8")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ocp-worker-9")))),(0,r.kt)("p",null,"Now that we have an understanding of what the design requirements are, we can proceed with the implementation part in the next section."))}c.isMDXComponent=!0},1155:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pc-pe-4560ed7534825c6d7f83f13c89b4ecab.png"}}]);