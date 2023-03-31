"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[4984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=c(a),u=r,d=k["".concat(s,".").concat(u)]||k[u]||m[u]||p;return a?n.createElement(d,o(o({ref:t},l),{},{components:a})):n.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const p={title:"Nutanix Objects as Backup Destination"},o=void 0,i={unversionedId:"optional_labs/objects_prep",id:"optional_labs/objects_prep",title:"Nutanix Objects as Backup Destination",description:"In this section we will setup up Nutanix Objects to serve as a backup destination to backup our wordpress application.",source:"@site/docs/optional_labs/objects_prep.mdx",sourceDirName:"optional_labs",slug:"/optional_labs/objects_prep",permalink:"/ocp-gitp/optional_labs/objects_prep",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/optional_labs/objects_prep.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1680264219,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Nutanix Objects as Backup Destination"},sidebar:"tutorialSidebar",previous:{title:"OCP and Nutanix NDB",permalink:"/ocp-gitp/ocp_ndb/"},next:{title:"Deploying Backup Application",permalink:"/ocp-gitp/workloads_on_ocp/ocp_k10"}},s={},c=[],l={toc:c};function k(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section we will setup up Nutanix Objects to serve as a backup destination to backup our wordpress application."),(0,r.kt)("h1",{id:"generating-access-keys"},"Generating Access Keys"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.kt)("strong",{parentName:"p"},"Objects"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note down the ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects")," object store's public IP"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4475).Z,width:"1286",height:"261"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Access Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"+ Add people"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add people not in a directory service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your email and name (if you haven't already configured this part)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2987).Z,width:"486",height:"419"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Generate Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once generated, click on ",(0,r.kt)("strong",{parentName:"p"},"Download Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once downloaded, click on ",(0,r.kt)("strong",{parentName:"p"},"Close"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the downloaded file to verify contents"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4204).Z,width:"505",height:"83"})))),(0,r.kt)("h1",{id:"create-buckets-for-backup-destination"},"Create Buckets for Backup Destination"),(0,r.kt)("p",null,"We will create a bucket for backup destination"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Object Stores"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects"),", this will open objects store management\npage in a separate browser tab")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create Bucket"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-k10 as the bucket name"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1179).Z,width:"680",height:"395"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the list of buckets, click on the ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-k10 bucket"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2816).Z,width:"1296",height:"533"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"User Access")," menu and ",(0,r.kt)("strong",{parentName:"p"},"Edit User Access")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6890).Z,width:"1293",height:"326"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Share Bucket xyz-k10")," window, type in your email that you configured in User Access section")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give ",(0,r.kt)("strong",{parentName:"p"},"Read")," and ",(0,r.kt)("strong",{parentName:"p"},"Write")," permissions"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7076).Z,width:"1285",height:"386"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("p",null,"You have now provisioned a S3 bucket to store backups of the application which you will deploy in the next section."))}k.isMDXComponent=!0},2816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bucket_config-4034163e68208c509efd15e423329240.png"},6890:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bucket_ua-1fd474e93cabd3da4f18b81e81cdaf33.png"},1179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_k10_bucket-598eb0104a5f4f73f3abd8121e94cfc5.png"},4475:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/object_public_ip-aedd87a75c42d6ae06800efdd257344d.png"},2987:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/objects_access_key-aa39163bf1a7656d83fede9740b3bc34.png"},7076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share_k10_bucket-c635b387c97abf77241fde68822fb9a9.png"},4204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xyz_access_key-1c63648f67c83ffa06bc1656cc23b7a8.png"}}]);