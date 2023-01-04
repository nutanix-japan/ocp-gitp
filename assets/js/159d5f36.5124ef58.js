"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[9434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,N=u["".concat(p,".").concat(c)]||u[c]||k[c]||o;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Windows Tools VM",sidebar_position:2},l="Windows Tools VM",i={unversionedId:"toolsvms/windows_tools_vm",id:"toolsvms/windows_tools_vm",title:"Windows Tools VM",description:"Overview",source:"@site/docs/toolsvms/windows_tools_vm.mdx",sourceDirName:"toolsvms",slug:"/toolsvms/windows_tools_vm",permalink:"/ocp-gitp/toolsvms/windows_tools_vm",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/toolsvms/windows_tools_vm.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1672810046,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:2,frontMatter:{title:"Windows Tools VM",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux Tools VM",permalink:"/ocp-gitp/toolsvms/linux_tools_vm"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Deploying Windows Tools VM",id:"deploying-windows-tools-vm",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"windows-tools-vm"},"Windows Tools VM"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This Windows Server 2012 R2 image comes pre-installed with a number of\ntools, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microsoft Remote Server Administration Tools (RSAT)"),(0,r.kt)("li",{parentName:"ul"},"PuTTY, CyberDuck, WinSCP"),(0,r.kt)("li",{parentName:"ul"},"Sublime Text 3, Visual Studio Code"),(0,r.kt)("li",{parentName:"ul"},"OpenOffice"),(0,r.kt)("li",{parentName:"ul"},"Python"),(0,r.kt)("li",{parentName:"ul"},"pgAdmin"),(0,r.kt)("li",{parentName:"ul"},"Chocolatey package manager"),(0,r.kt)("li",{parentName:"ul"},"Google Chrome browser")),(0,r.kt)("p",null,"Deploy this VM on your assigned cluster if directed to do so as part of ",(0,r.kt)("strong",{parentName:"p"},"Lab Setup"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only deploy the VM once, it does not need to be cleaned up as part of any lab completion.")),(0,r.kt)("h2",{id:"deploying-windows-tools-vm"},"Deploying Windows Tools VM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.kt)("strong",{parentName:"p"},"Menu")," > Compute and StorageVMs",(0,r.kt)("strong",{parentName:"p"},", and click "),"Create VM**")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - ",(0,r.kt)("em",{parentName:"li"},"Initials"),"-Windows-ToolsVM"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description")," - (Optional) Description for your VM."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of VMs")," - 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vCPU(s)")," - 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of Cores per vCPU")," - 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memory")," - 2 GiB"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Disks")," select ",(0,r.kt)("strong",{parentName:"p"},"Attach Disk")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - DISK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operation")," - Clone from Image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image")," - WinToolsVM-Q1CY21.qcow2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Capacity")," - leave at default size"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bus Type")," - leave at default SCSI Setting"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Networks")," select ",(0,r.kt)("strong",{parentName:"p"},"Attach to Subnet")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VLAN Name")," - Primary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Connection State")," - Connected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assignment Type")," - Assign with DHCP"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," at the bottom")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Management")," section"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Categories")," - leave blank"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timezone")," - leave at default UTC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guest Customization")," - No customization"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create VM")," at the bottom")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.kt)("strong",{parentName:"p"},"Menu")," > ",(0,r.kt)("strong",{parentName:"p"},"Compute and Storage")," > ",(0,r.kt)("strong",{parentName:"p"},"VMs"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-Windows-ToolsVM")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Actions")," drop-down menu, choose ",(0,r.kt)("strong",{parentName:"p"},"Power On")))),(0,r.kt)("p",null,"Login to the VM via RDP or Console session, using the following credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - NTNXLAB","\\","Administrator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password")," - nutanix/4u")))}u.isMDXComponent=!0}}]);