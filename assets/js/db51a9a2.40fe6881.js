"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),p=n(7392),c=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,p]=f({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??u;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var g=n(2389);const k="tabList__CuJ",N="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==l&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",N,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const i={title:"Create Configuration Manifests",lastupdate:"git",lastupdateauthor:"git"},o=void 0,l={unversionedId:"ocp_ipi_install/ocp_ipi_config_file",id:"ocp_ipi_install/ocp_ipi_config_file",title:"Create Configuration Manifests",description:"Creating IPI Installation Config File",source:"@site/docs/ocp_ipi_install/ocp_ipi_config_file.mdx",sourceDirName:"ocp_ipi_install",slug:"/ocp_ipi_install/ocp_ipi_config_file",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_config_file",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ipi_install/ocp_ipi_config_file.mdx",tags:[],version:"current",lastUpdatedBy:"Lakshmi Balaramane",lastUpdatedAt:1696399312,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{title:"Create Configuration Manifests",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Pre-requisites",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_pre_reqs"},next:{title:"Deploy",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_install_cleanup"}},s={},p=[{value:"Creating IPI Installation Config File",id:"creating-ipi-installation-config-file",level:2},{value:"Preparing Provisioning VM",id:"preparing-provisioning-vm",level:3},{value:"Creating the Installation Manifests (files)",id:"creating-the-installation-manifests-files",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-ipi-installation-config-file"},"Creating IPI Installation Config File"),(0,r.kt)("p",null,"In this section we will create our installation configuration files which will be then used in the next section to deploy an OCP cluster."),(0,r.kt)("h3",{id:"preparing-provisioning-vm"},"Preparing Provisioning VM"),(0,r.kt)("p",null,"We will use your UserXX-LinuxToolsVM as a provisioning VM to deploy OCP."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to your UserXX-LinuxToolsVM ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the Root CA's public certificate to the local certiface repository"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /root/xyz\ncp rootCA.crt /etc/pki/ca-trust/source/anchors/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the local CA trust repository with the new one your created"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"update-ca-trust\n")),(0,r.kt)("p",{parentName:"li"},"Now your UserXX-LinuxToolsVM will be able to trust SSL connections to Prism Central and will ",(0,r.kt)("inlineCode",{parentName:"p"},"openshift-install")," binary")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a local ssh key which we will then use to access all the OCP cluster nodes/vms"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Execution example - accept default values and no passphrase"',title:'"Execution',example:!0,"-":!0,accept:!0,default:!0,values:!0,and:!0,no:!0,'passphrase"':!0},"Generating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa): \n/root/.ssh/id_rsa already exists.\nOverwrite (y/n)? y\nEnter passphrase (empty for no passphrase):  \nEnter same passphrase again: \nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:1gjz5zWw+aS7hiEje/pDGY2N5Y5anh6JEQYVf9GRmgs root@centos\nThe key's randomart image is:\n+---[RSA 2048]----+\n|  ..o.  ...o     |\n|   . .  ..o      |\n|    o +B.o.      |\n|   . .E=*o +     |\n|    .  *S.= +    |\n|    .oBo+o = .   |\n|    .Bo+ oo .    |\n|    o =.. ..     |\n|    .=o. .o.     |\n+----[SHA256]-----+\n")))),(0,r.kt)("h3",{id:"creating-the-installation-manifests-files"},"Creating the Installation Manifests (files)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your UserXX-LinuxToolsVM ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to you working directory that we created before (if not there already)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /root/xyz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the create install config command"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Copy the pull_secret value from Red Hat Console or the ",(0,r.kt)("inlineCode",{parentName:"p"},"pull_secret.json")," file into your clipboard as you will need to input in the interactive command execution")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openshift-install create install-config \n")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There are issues with ",(0,r.kt)("inlineCode",{parentName:"p"},"openshift-install")," command and it is a requirement to type the following IPs ",(0,r.kt)("inlineCode",{parentName:"p"},"as-is")," while creating the install-config manifest."),(0,r.kt)("p",{parentName:"admonition"},"Once created, these IPs can be edited to the real values. "),(0,r.kt)("p",{parentName:"admonition"},"Please type the following IPs ",(0,r.kt)("inlineCode",{parentName:"p"},"as-is"),":"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"IP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10.0.0.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10.0.0.2 ")))))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Execution example - use up and down arrow keys to choose options"',title:'"Execution',example:!0,"-":!0,use:!0,up:!0,and:!0,down:!0,arrow:!0,keys:!0,to:!0,choose:!0,'options"':!0},"# openshift-install create install-config \n? SSH Public Key /root/.ssh/id_rsa.pub\n? Platform nutanix\n? Prism Central pc.ntnxlab.local                   # << Your Prism Central FQDN address\n? Port 9440\n? Username admin\n? Password [? for help] **********                 # << Your Prism Central password entered as plain text\nINFO Connecting to Prism Central pc.ntnxlab.local \n? Prism Element PHX-SPOC018-4                      # << Choose your Prism Element cluster\nINFO Defaulting to only available network: Primary \n? Virtual IP Address for API 10.0.0.1              # << Type this exact IP for now\n? Virtual IP Address for Ingress 10.0.0.2          # << Type this exact IP for now\n? Base Domain ntnxlab.local                        # << Type the name of your base domain \n? Cluster Name xyz                                 # << Type the name of your sub domain or OCP cluster's name\n? Pull Secret [? for help] ************************************************\nINFO Install-Config created in: .\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now we have to prepare the install-config.yaml file by adding the following details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your self hosted Root CA's certificate"),(0,r.kt)("li",{parentName:"ul"},"Number of replcas for worker nodes (3 workers to 2 worker)"),(0,r.kt)("li",{parentName:"ul"},"Machine network details (your HPOC's subnet)")))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the details:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim install-config.yaml\n# if vim is not present, install using #yum install -y vim\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Toggle me for a file editing tip"),(0,r.kt)("div",null,(0,r.kt)("body",null,(0,r.kt)("admonition",{parentName:"li",title:"Editing instructions",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Inside vim, move the cursor the to beigging on the line ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN CERTIFICATE-----")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"crtl")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"v")," keyboard combination to enter visual block mode "),(0,r.kt)("li",{parentName:"ul"},"Select the lines until ",(0,r.kt)("inlineCode",{parentName:"li"},"-----END CERTIFICATE-----")),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"I")," (capital I using Shift key)"),(0,r.kt)("li",{parentName:"ul"},"Type in 4 spaces"),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"esc")," key"),(0,r.kt)("li",{parentName:"ul"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"wq!"))))))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'{3-14,20,36,42-43} title="Sample install-config.yaml file - Edit the highlighted parts"',"{3-14,20,36,42-43}":!0,title:'"Sample',"install-config.yaml":!0,file:!0,"-":!0,Edit:!0,the:!0,highlighted:!0,'parts"':!0},"apiVersion: v1\nbaseDomain: ntnxlab.local\nadditionalTrustBundlePolicy: Always                                    ## << Change the value to Always\nadditionalTrustBundle: |                                               ## << Add this key \n    -----BEGIN CERTIFICATE-----                                        ## << Paste the contents of rootCA.crt \n    MIIEBTCCAu2gAwIBAgIJAPDfr9SQbStmMA0GCSqGSIb3DQEBCwUAMIGYMQswCQYD\n    VQQGEwJKUDEOMAwGA1UECAwFQ2hpYmExEDAOBgNVBAcMB0thc2hpd2ExEDAOBgNV\n    BAoMB251dGFuaXgxDzANBgNVBAsMBnJvb3RjYTEdMBsGA1UEAwwUcm9vdGNhLm50\n    <snipped for brevity> \n    WtAYCgGyXEUNVltpXBg8M/0S3WLgkW+Z0r408vC4kIIHAWANfJiGt3qLYeVep91h\n    NDB2Cn14G9CSCN3Pb1jO2wz9sc1E3rEPo1VHjyOjWccDayTJ3i/lNz6taPbXcmV7\n    3ZIeb1v6oRYfB4O/XQMvonTHwTXgumBWOxGcoh5g4h9av+v4oPykJqJexNSbwtQy\n    m11nydu44BpIGL+LOm5z0jMd2JrSJFI2Fg==\n    -----END CERTIFICATE-----\ncompute:\n- architecture: amd64\n  hyperthreading: Enabled\n  name: worker\n  platform: {}\n  replicas: 2                           ## << Make sure this is 2 \ncontrolPlane:\n  architecture: amd64\n  hyperthreading: Enabled\n  name: master\n  platform: {}\n  replicas: 3\ncredentialsMode: Manual\nmetadata:\n  creationTimestamp: null\n  name: xyz\nnetworking:\n  clusterNetwork:\n  - cidr: 10.128.0.0/14\n    hostPrefix: 23\n  machineNetwork:\n  - cidr: 10.38.18.192/26               ## << This should be your HPOC cluster's subnet\n  networkType: OpenShiftSDN\n  serviceNetwork:\n  - 172.30.0.0/16\nplatform:\nnutanix:\n   apiVIP: 10.38.18.219                 ## << Change this to your api IP you reserved earlier\n   ingressVIP: 10.38.18.220             ## << Change this to your Ingress IP you reserved earlier\n   prismCentral:\n      endpoint:\n        address: pc.ntnxlab.local\n        port: 9440\n      password: techX2020!\n      username: admin\n   prismElements:\n   - endpoint:\n       address: 10.38.18.199\n       port: 9440\n     uuid: 0005e93a-3b29-fa1a-6b84-ac1f6b6922d1\n   subnetUUIDs:\n   - 34c84ddf-6c6e-46bf-9a5c-617b0b08a92c\npublish: External\npullSecret: '{\"auths\": ...}'\nsshKey: |\n  ssh-rsa AAAA..\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now we can create all the other manifests required for OCP cluster installation"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openshift-install create manifests\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"openshift-install create manifests\nINFO Consuming Install Config from target directory \nINFO Manifests created in: manifests and openshift\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Since we will be using CSI provisioned with Nutanix HCI storage later in the lab, we need to ",(0,r.kt)("strong",{parentName:"p"},"enable iSCSI daemon")," on all the worker nodes (optional for Master nodes) using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/post_installation_configuration/machine-configuration-tasks.html#machine-config-operator_post-install-machine-configuration-tasks"},"Machine Configuration Operator")," (MCO)."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"iSCSI daemon is usually in a disabled state while deploying OCP clusters. It is up to the customers to decide when and where to enable these daemons. "),(0,r.kt)("p",{parentName:"admonition"},"In our lab, we have decided to enable it now, so we can use Nutanix CSI to provide storage to applications. "),(0,r.kt)("p",{parentName:"admonition"},"Enabling iSCSI daemon at this stage prevents any reboot requirements after the cluster is deployed and serving workloads. ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create MCO config to start iSCSI daemon for worker nodes"',title:'"Create',MCO:!0,config:!0,to:!0,start:!0,iSCSI:!0,daemon:!0,for:!0,worker:!0,'nodes"':!0},"cat << EOF > manifests/99-worker-custom-enable-iscsid.yaml\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: worker\n  name: 99-worker-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n    systemd:\n      units:\n      - enabled: true\n        name: iscsid.service\nEOF\n")),(0,r.kt)("p",{parentName:"li"},"The following step is optional. Customer wouldn't usually run workloads on master nodes. But the following would be the way to prepare master nodes to access PV/PVC for their workloads."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Optional - create MCO config to start iSCSI daemon for master nodes"',title:'"Optional',"-":!0,create:!0,MCO:!0,config:!0,to:!0,start:!0,iSCSI:!0,daemon:!0,for:!0,master:!0,'nodes"':!0},"cat << EOF > manifests/99-master-custom-enable-iscsid.yaml\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: master\n  name: 99-master-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n    systemd:\n      units:\n      - enabled: true\n        name: iscsid.service\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"openshift")," directories to make sure all the files are present (including iSCSI daemon MCO config. files)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l openshift manifests\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests/cluster-proxy-01-config.yaml")," file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat manifests/cluster-proxy-01-config.yaml\n")),(0,r.kt)("p",{parentName:"li"},"We will now move on to the IPI deployment part."))))}u.isMDXComponent=!0}}]);