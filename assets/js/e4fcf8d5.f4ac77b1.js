"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[8950],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"OCP Serverless",lastupdate:"git",lastupdateauthor:"git"},i="OCP Serverless and CICD",o={unversionedId:"ocp_serverless/ocp_serverless",id:"ocp_serverless/ocp_serverless",title:"OCP Serverless",description:"In this lab we will delve into the world of Serverless and CICD with OCP.",source:"@site/docs/ocp_serverless/ocp_serverless.md",sourceDirName:"ocp_serverless",slug:"/ocp_serverless/",permalink:"/ocp-gitp/ocp_serverless/",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_serverless/ocp_serverless.md",tags:[],version:"current",lastUpdatedBy:"Lakshmi Balaramane",lastUpdatedAt:1696914068,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"OCP Serverless",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"OCP and Nutanix NDB",permalink:"/ocp-gitp/ocp_ndb/"},next:{title:"OCP CICD",permalink:"/ocp-gitp/ocp_serverless/extend_pipeline"}},p={},s=[{value:"Serverless",id:"serverless",level:2},{value:"High Level steps",id:"high-level-steps",level:2},{value:"Install Red Hat OpenShift Pipelines operator",id:"install-red-hat-openshift-pipelines-operator",level:2},{value:"Create Projects and Access",id:"create-projects-and-access",level:2},{value:"Deploying Application",id:"deploying-application",level:2}],c={toc:s};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ocp-serverless-and-cicd"},"OCP Serverless and CICD"),(0,r.kt)("p",null,"In this lab we will delve into the world of Serverless and CICD with OCP. "),(0,r.kt)("p",null,"We will also see how Nutanix offers solutions that will facilitate serverless offerings with OCP."),(0,r.kt)("p",null,"Nutanix offers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HCI Compute and Storage",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Objects as Container Registry location",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is where all the newly developed containers images are stored"))),(0,r.kt)("li",{parentName:"ul"},"OCP nodes runs as virtual machines on Nutanix ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Virtual machines needs volumes as storage"),(0,r.kt)("li",{parentName:"ul"},"Virtual machines need compute and networking"),(0,r.kt)("li",{parentName:"ul"},"Virtual machines can be deployed and destroyed with easy to use Nutanix APIs facilitating serverless ")))))),(0,r.kt)("h2",{id:"serverless"},"Serverless"),(0,r.kt)("p",null,"Serverless concepts bridges the gap between developers and infrastructure. A developer should be able to test and deploy applications with tight integration to infrastructure. Serverless concepts allow the following (not limited to):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once a developer is aware of infrastructure resources and capacity planning, they should be able to deploy applications without in-depth knowledge of the infrastructure. Infrastructure should be available as a service for developers to consume"),(0,r.kt)("li",{parentName:"ul"},"Use infrastructure only when there is a requirement to do so to control spending. If there is no demand for applications, the used infrastructure should be zero or be in a stand-by state to become ready ")),(0,r.kt)("p",null,"In this lab, we will be deploy this OCP lab and exposing it internally as application to check whether a developer is able to deploy applications from their source code. "),(0,r.kt)("p",null,"In essence, the lab instruction website is a NodeJS application called ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),". "),(0,r.kt)("p",null,"OCP has Integrated Source to Image ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openshift/source-to-image"},"S2I")," capabilities natively and we will use this to demonstrate serverless functionality. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OCP S2I implementation decides on the best deployment strategy (dockerfile, pre-built container images, etc) without the developer having to worry about this "),(0,r.kt)("li",{parentName:"ul"},"OCP will take care of the deployment part in the OCP (kubernetes)"),(0,r.kt)("li",{parentName:"ul"},"OCP will also create a route/ingress where the end-users can access the application")),(0,r.kt)("h2",{id:"high-level-steps"},"High Level steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Red Hat OpenShift Pipelines operator from OperatorHub"),(0,r.kt)("li",{parentName:"ol"},"Use OCP's Import from Git functionality to get source code"),(0,r.kt)("li",{parentName:"ol"},"Build a container "),(0,r.kt)("li",{parentName:"ol"},"Upload to OCP image registry"),(0,r.kt)("li",{parentName:"ol"},"Deploy application to OCP cluster"),(0,r.kt)("li",{parentName:"ol"},"Expose the application and access")),(0,r.kt)("h2",{id:"install-red-hat-openshift-pipelines-operator"},"Install Red Hat OpenShift Pipelines operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Browse to you OCP cluster's web UI"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.ocpuserXX.ntnxlab.local/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login as kubeadmin or a IDP user")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"pipelines")," keyword")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Red Hat OpenShift Pipelines"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1e3).Z,width:"706",height:"432"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select latest release")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Install"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monitor the installation to make sure it is installed without errors"))),(0,r.kt)("h2",{id:"create-projects-and-access"},"Create Projects and Access"),(0,r.kt)("p",null,"Logon to your OC command line to create projects (namespaces) and necessary access for services accounts. "),(0,r.kt)("p",null,"Projects/namespaces are treated like different deployment environment (dev and stage). "),(0,r.kt)("p",null,"In the bare-metal and virtual machine world, one would create different servers for these deployments. However, we will simulate this by creating different projects/namespaces in OCP cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to UserXX-LinuxToolsVM and connect to OCP cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIGKUBECONFIG=/path/to/kubeconfig\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create our dev and stage projects "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc create ns dev\noc create ns stage\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant ServiceAccount to projects"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-group edit system:serviceaccounts -n dev\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-group edit system:serviceaccounts -n stage\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-user system:image-puller system:serviceaccounts:stage -n dev\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-user system:deployer system:serviceaccounts:dev -n stage\n")))),(0,r.kt)("h2",{id:"deploying-application"},"Deploying Application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch to Developer view"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8721).Z,width:"792",height:"215"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"+Add")," just under Developer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you are under ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," project "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5186).Z,width:"798",height:"553"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Import from Git"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the following url"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://github.com/nutanix-japan/ocp-gitp.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Edit Import Strategy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the following options"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Import strategy")," - Buider Ima-cluster1ge"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Buider Image")," - NodeJS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Buider Image version")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"latest")," (ok for testing - not great for production)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add pipeline")," - leave checked (click show pipeline visualization to see build steps)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target port")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"3000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create a route")," - leave checked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"/ocp-gitp/ ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secure route")," - unchecked ")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5081).Z,width:"1429",height:"663"}),"\n",(0,r.kt)("img",{src:a(4661).Z,width:"857",height:"636"}),"\n",(0,r.kt)("img",{src:a(9045).Z,width:"841",height:"714"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Pipelines"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Last run")," pipeline run (PLR) corresponding to your ",(0,r.kt)("strong",{parentName:"p"},"ocp-gitp-git")," pipeline you created"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3826).Z,width:"1302",height:"316"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can see which step of the pipeline you are at"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6958).Z,width:"754",height:"397"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Logs")," tab to see detailed logs at any point of the pipeline"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7590).Z,width:"668",height:"365"})),(0,r.kt)("p",{parentName:"li"},"Since our pipeline has successfully rolled out our NodeJS application (our documentation website), let us check out if we are able to access it")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Topology")," option, and click on the URL on your application as shown here, this is a route created by the pipeline for application access"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3180).Z,width:"811",height:"342"})),(0,r.kt)("p",{parentName:"li"},"The application should open in a new browser tab"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6724).Z,width:"1442",height:"713"})),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that the documentation site NodeJS application is now hosted on your OCP cluster"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"http://ocp-gitp-git-dev.apps.user02.ntnxlab.local/ocp-gitp/\n")),(0,r.kt)("p",{parentName:"admonition"},"Where:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ocp-gitp-git")," - is your application name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev")," - is your namespace/project name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ocpuser02")," - is your OCP cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ntnxlab.local")," - is your domain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ocp-gitp/")," - is your basePath url"))))),(0,r.kt)("p",null,"You can note that OCP has combined both serverless and CICD functionality into one single workflow."))}m.isMDXComponent=!0},5186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_gitrepo-ec2cca8a53cbc1731873cafb1705297c.png"},5081:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dev_option1-f4ba3e6901548c899c0f15419ebff228.png"},4661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dev_option2-480f7c87dfb15a5cfa95af988e628fe3.png"},9045:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dev_option3-00be6395a5556bf7efde11053a4aa214.png"},8721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dev_view-f2842c0e51aa355bc9e3989ce4a39260.png"},6724:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gitp_hosted_on_ocp-0a777f1bccde93d1d57ecb6bb3e5f0f4.png"},1e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/install_pipeline_operator-b613afc090ca23cbc2dcfc17f7d1c2d7.png"},3826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lr_plr-a980b9fcee4babe99a084a479e9be70e.png"},6958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plr_details-e08afb28a20c996139e40f4073e0f02b.png"},7590:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plr_logs-44ce60f7ac8f671d947e65d46777463b.png"},3180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plr_topology_app_access-c02661344004ba2ec94a59c87bc0e34d.png"}}]);