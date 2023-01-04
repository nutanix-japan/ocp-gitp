"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[5818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),i=n(7294),r=n(6010),o=n(2389),l=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:d,className:f}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[P,N]=(0,i.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=v[d];null!=e&&e!==P&&k.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==P&&(w(t),N(a),null!=d&&y(d,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},f)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:I},o,{className:(0,r.Z)("tabs__item",c,o?.className,{"tabs__item--active":P===t})}),n??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},7437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));n(5488),n(5162);const r={title:"OCP IPI Introduction"},o="OCP IPI Introduction",l={unversionedId:"ocp_ipi_install/ocp_ipi_intro",id:"ocp_ipi_install/ocp_ipi_intro",title:"OCP IPI Introduction",description:"OCP Installer Provisioned Installation (IPI) was released in August 2022. It gives customer a intutive and easy way to deploy OCP cluster on Nutanix AOS.",source:"@site/docs/ocp_ipi_install/ocp_ipi_intro.mdx",sourceDirName:"ocp_ipi_install",slug:"/ocp_ipi_install/ocp_ipi_intro",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_intro",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ipi_install/ocp_ipi_intro.mdx",tags:[],version:"current",lastUpdatedAt:1672809226,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"OCP IPI Introduction"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/ocp-gitp/"},next:{title:"OCP IPI Pre-requisites",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_pre_reqs"}},s={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"High Level Plan",id:"high-level-plan",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ocp-ipi-introduction"},"OCP IPI Introduction"),(0,i.kt)("p",null,"OCP Installer Provisioned Installation (IPI) was released in August 2022. It gives customer a intutive and easy way to deploy OCP cluster on Nutanix AOS."),(0,i.kt)("p",null,"In this lab we will go through the steps of deploying OCP cluster using IPI."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Estimated time to complete this whole lab is ",(0,i.kt)("strong",{parentName:"p"},"60 minutes")," including OCP cluster deployment."),(0,i.kt)("p",{parentName:"admonition"},"The OCP cluster deployment will take up to ",(0,i.kt)("strong",{parentName:"p"},"30 minutes")," once started. ")),(0,i.kt)("admonition",{title:"Setting expectations",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Although it might seem like a lot of work for IPI, the aim of the lab is to take you through the one-time process a customer would go through. Once pre-requisites are set once, customers can deploy as many number of OCP clusters."),(0,i.kt)("p",{parentName:"admonition"},"You could also explore automating these one time pre-requisites preparation tasks using automation frameworks like Nutanix ",(0,i.kt)("strong",{parentName:"p"},"NCM"),".")),(0,i.kt)("admonition",{title:"References",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We have referred to the following documents for building this lab:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nutanix.dev/2022/08/16/red-hat-openshift-ipi-on-nutanix-cloud-platform"},"Nutanix Dev - IPI on Nutanix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.11/installing/installing_nutanix/installing-nutanix-installer-provisioned.html#installation-configure-proxy_installing-nutanix-installer-provisioned"},"RedHat IPI Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opendocs.nutanix.com/openshift/install/ipi/"},"RedHat IPI SSL Requirements")))),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"The following pre-requisites are necessary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prism Central - at least ",(0,i.kt)("strong",{parentName:"li"},"pc.2022.4.0.2")),(0,i.kt)("li",{parentName:"ul"},"AOS - at least ",(0,i.kt)("strong",{parentName:"li"},"5.20.4")),(0,i.kt)("li",{parentName:"ul"},"Access to RedHat Console to download the following    ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pull secret"),(0,i.kt)("li",{parentName:"ul"},"IPI installation binaries"),(0,i.kt)("li",{parentName:"ul"},"Openshift access tools (oc, kubectl)"),(0,i.kt)("li",{parentName:"ul"},"Cloud Credential Operator (CCOCTL) utility  binaries"))),(0,i.kt)("li",{parentName:"ul"},"An SSL certificate for Prism Central signed by a Certification Authority (we will also create certificates in this lab)"),(0,i.kt)("li",{parentName:"ul"},"Networking requirements",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AHV IPAM Network (your HPOC already has this)"),(0,i.kt)("li",{parentName:"ul"},"DNS server (Windows AutoAD VM is pre-deployed for DNS capabilities)"),(0,i.kt)("li",{parentName:"ul"},"Static IP addresses in your AHV IPAM network for OCP's api and apps endpoints ")))),(0,i.kt)("h2",{id:"high-level-plan"},"High Level Plan"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare pre-requiisites",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Preparing LinuxToolsVM - as a OCP provisioning VM"),(0,i.kt)("li",{parentName:"ul"},"Preparing HPOC cluster - AHV Networking and DNS"),(0,i.kt)("li",{parentName:"ul"},"Installing OCP tools "))),(0,i.kt)("li",{parentName:"ol"},"Prepare and install SSL certificate for Prism Central"),(0,i.kt)("li",{parentName:"ol"},"Creating OCP IPI installation manifest files  "),(0,i.kt)("li",{parentName:"ol"},"Installing OCP cluster and first login")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"During the OCP cluster installation, a ",(0,i.kt)("inlineCode",{parentName:"p"},"OCP bootstrap VM")," will be created and be deleted upon a successful OCP cluster creation."),(0,i.kt)("p",{parentName:"admonition"},"This bootstrapVM does most of the install function. "),(0,i.kt)("p",{parentName:"admonition"},"For more information on OCP install flow, check this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/installing/index.html#supported-platforms-for-openshift-clusters_ocp-installation-overview"},"overview"),".")),(0,i.kt)("p",null,"We can now move on to the setting up pre-requisites section."))}c.isMDXComponent=!0}}]);