"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[8398],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:6,title:"Day 0 and Day 1 Operations"},i="OCP: Day 0 and Day 1 Operations",s={unversionedId:"ocp_ntnx_hci/ocp_scale_out_in",id:"ocp_ntnx_hci/ocp_scale_out_in",title:"Day 0 and Day 1 Operations",description:"In this section we will look at Typical Day 1 operations of your OCP cluster in terms of scaling out and scaling in VMs.",source:"@site/docs/ocp_ntnx_hci/ocp_scale_out_in.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/ocp_scale_out_in",permalink:"/ocp-gitp/ocp_ntnx_hci/ocp_scale_out_in",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ntnx_hci/ocp_scale_out_in.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1672810046,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Day 0 and Day 1 Operations"},sidebar:"tutorialSidebar",previous:{title:"Deploy OCP Infrastructure",permalink:"/ocp-gitp/ocp_ntnx_hci/ocp_vms"},next:{title:"OCP Assisted Installation",permalink:"/ocp-gitp/ocp_assisted_install/"}},l={},p=[{value:"Day 0: Accessing OCP Cluster Manager",id:"day-0-accessing-ocp-cluster-manager",level:2},{value:"Day 1: Scale Out Worker Nodes",id:"day-1-scale-out-worker-nodes",level:2},{value:"Day 1: Scale In Worker Nodes",id:"day-1-scale-in-worker-nodes",level:2},{value:"Takeaways",id:"takeaways",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ocp-day-0-and-day-1-operations"},"OCP: Day 0 and Day 1 Operations"),(0,o.kt)("p",null,"In this section we will look at Typical Day 1 operations of your OCP cluster in terms of scaling out and scaling in VMs."),(0,o.kt)("p",null,"For the purposes of the lab, we will achieve scale in/out operations by triggering a Calm Action manually. These Calm Actions can also be triggered using REST calls from an automation script."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This section can only be attempted if the previous sections are completed successfully")),(0,o.kt)("h2",{id:"day-0-accessing-ocp-cluster-manager"},"Day 0: Accessing OCP Cluster Manager"),(0,o.kt)("p",null,"In the HPOC environment all the DNS lookups are contained within each HPOC cluster."),(0,o.kt)("p",null,"For this reason, we will have to access the OCP Cluster Manager using the Windows Tools VM."),(0,o.kt)("p",null,"If you don't have a Windows Tools VM in your HPOC. Use these instructions ",(0,o.kt)("a",{parentName:"p",href:"/ocp-gitp/toolsvms/windows_tools_vm"},"here")," to create one."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"DNS lookup will not work from anywhere else except the Windows Tools VM within your HPOC/SPOC cluster as it is connected to the AutoAD server which also is a DNS server."),(0,o.kt)("p",{parentName:"admonition"},"Only use this Windows Tools VM to access the ocp cluster manager web UI.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to you Windows Tools VM using the following credentials;"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username")," - ",(0,o.kt)("a",{parentName:"li",href:"mailto:administrator@ntnxlab.local"},"administrator@ntnxlab.local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password")," - nutanix/4u"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using Chrome browser browse to Console URL you obtained in the previous section. Note that this URL will be different for each cluster that you deploy."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.<initials>1.ntnxlab.local\n# example URL\n# https://console-openshift-console.apps.xyz1.ntnxlab.local\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use your credentials to Login"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username")," - kubeadmin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password")," - password from previous ",(0,o.kt)("a",{parentName:"li",href:"#Day-0:-Getting-OCP-Cluster-Login-Details"},"section")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Log in")),(0,o.kt)("p",{parentName:"li"},"You will see the cluster manager\\'s web interface."),(0,o.kt)("p",{parentName:"li"},"This is in principle similar to Nutanix Karbon's individual kubernetes cluster management page. Note that you can only manage the resources of just this local cluster."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(730).Z,width:"1633",height:"1162"})),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To be able to manage other clusters or a group of clusters, you will need to register this cluster to ",(0,o.kt)("img",{parentName:"p",src:"https://console.redhat.com/openshift/",alt:null})," web interface")))),(0,o.kt)("p",null,"You can see how managing all parts of the OCP cluster are in a single place. In a open source kubernetes cluster you would have to install many management packages and go many places them.This is one of the strong selling points of a OCP kubernetes cluster."),(0,o.kt)("h2",{id:"day-1-scale-out-worker-nodes"},"Day 1: Scale Out Worker Nodes"),(0,o.kt)("p",null,"As any environment would require more kubernetes nodes from time to time to host more workloads. In this sectoin we will look at how a extra worker node is added to this OCP cluster."),(0,o.kt)("p",null,"We will do this using Calm Actions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Calm")," > ",(0,o.kt)("strong",{parentName:"p"},"Applications"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Openshift xyz1")," application and go to ",(0,o.kt)("strong",{parentName:"p"},"Manage")," tab")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Scale Out")," action, click on play button"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(6974).Z,width:"1324",height:"569"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," as the ",(0,o.kt)("strong",{parentName:"p"},"Scale out number of Workers")," and click on ",(0,o.kt)("strong",{parentName:"p"},"Run")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(844).Z,width:"542",height:"206"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Scale Out")," action, click on the eye button to see the action's progression status"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(9567).Z,width:"1303",height:"725"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Monitor the events in Prism Central to see what is being create on the HCI infrastructure")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note down the number of resources created (e.g VM, Disk, etc)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This will take about 5-10 minutes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the Scale Out action is successfully completed, go to the ",(0,o.kt)("strong",{parentName:"p"},"Service")," tab of the VM and check if two more nodes are added"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(3105).Z,width:"1316",height:"432"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your OCP Console, go to Compute > Nodes and make sure OCP has picked up the two extra worker nodes"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(7411).Z,width:"1544",height:"719"})))),(0,o.kt)("p",null,"Calm makes it really simple to scale out your OCP cluster Day 1 operations."),(0,o.kt)("h2",{id:"day-1-scale-in-worker-nodes"},"Day 1: Scale In Worker Nodes"),(0,o.kt)("p",null,"As any environment would require more kubernetes nodes from time to time to host more workloads. In this section we will look at how a worker node is removed from this OCP cluster as the resource requirements for workloads decreases."),(0,o.kt)("p",null,"We will do this using Calm Actions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Calm")," > ",(0,o.kt)("strong",{parentName:"p"},"Applications"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Openshift xyz1")," application and go to ",(0,o.kt)("strong",{parentName:"p"},"Manage")," tab")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Scale In")," action, click on play button"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(2662).Z,width:"1314",height:"549"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," as the ",(0,o.kt)("strong",{parentName:"p"},"SCALEIN_WORKER")," input and click on ",(0,o.kt)("strong",{parentName:"p"},"Run")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(2500).Z,width:"539",height:"207"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Scale In")," action, click on the eye button to see the action's progression status"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(5357).Z,width:"1326",height:"794"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Monitor the events in Prism Central to see what is being create on the HCI infrastructure")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note down the number of resources deleted (e.g VM, Disk, etc)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This will take about 5 minutes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the Scale In action is successfully completed, go to the ",(0,o.kt)("strong",{parentName:"p"},"Service")," tab of the VM and check if one worker nodes is deleted"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(4191).Z,width:"1326",height:"435"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your OCP Console, go to Compute ",">"," Nodes and make sure OCP has deleted 1 worker node (there will be three left)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(2420).Z,width:"1563",height:"829"})),(0,o.kt)("admonition",{parentName:"li",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"OCP keeps the node entry as ",(0,o.kt)("strong",{parentName:"p"},"Not Ready")," (unless manually deleted) to prevent any data corruption to workloads running on the node and to register a new node that comes in as a result of another scale\nout operation"),(0,o.kt)("p",{parentName:"admonition"},"Only delete a node that you have confirmed is completely stopped and cannot be restored.")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As an optional task run the ",(0,o.kt)("strong",{parentName:"p"},"Scale Out")," action once again with ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," node and check if the OCP node becomes ",(0,o.kt)("strong",{parentName:"p"},"Ready"),".")))),(0,o.kt)("p",null,"Calm makes it simple to scale in your OCP cluster Day 1 operations as the resource requirements reduces."),(0,o.kt)("p",null,"We have now successfully completed this section of the lab doing Day 1 operations."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4142).Z,width:"968",height:"446"})),(0,o.kt)("h2",{id:"takeaways"},"Takeaways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Calm makes Day 0 and Day 1 operations easy to manage in a complex environment"),(0,o.kt)("li",{parentName:"ul"},"As maintaining a OCP environment is difficult in terms of administration, Calm helps facilitate this in a repeatable and reliable manner")),(0,o.kt)("p",null,"We will proceed to deploying Nutanix CSI drivers section of the lab."))}m.isMDXComponent=!0},4142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_day1_complete-6a5ffefbc0ac1efcb6ddbef590fce7e5.png"},730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_overview-73b48a11df28ca1de1b3b1a3a3c1dfb8.png"},2662:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scalein-e6db83a734a8a53ea4aff4e567739744.png"},2420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scalein_check_cm-76bef8392b96d9647d008de6be102349.png"},4191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scalein_complete-5c729f69f02a11cc70396bb2f9427c69.png"},2500:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scalein_no-7196fe34fc387c1b82e8074a3db47d4b.png"},5357:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scalein_prog-8fcbadb93487bd97fd4963c44484cf8a.png"},6974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scaleout-11f9b5cf265d691e8459401f0b99a33d.png"},7411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scaleout_check_cm-64a7075268687a95763b20a6cc4183d6.png"},3105:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scaleout_complete-27cad7ccd411b615898c755287150d92.png"},844:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scaleout_no-8d5aa112439187c5e55367c3bb306bf2.png"},9567:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_scaleout_prog-6b19857d3071301d6a1dc7ef6671d78e.png"}}]);