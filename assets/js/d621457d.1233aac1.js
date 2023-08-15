"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),p=a(7392),c=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=d({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=s??u;return k({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var g=a(2389);const N="tabList__CuJ",b="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==i&&(u(t),s(n))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},5:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={title:"Deploying Backup Application"},s="Deploying Backup Application",p={unversionedId:"workloads_on_ocp/ocp_k10",id:"workloads_on_ocp/ocp_k10",title:"Deploying Backup Application",description:"In this section we will implement Kasten K10 as a backup and restore",source:"@site/docs/workloads_on_ocp/ocp_k10.mdx",sourceDirName:"workloads_on_ocp",slug:"/workloads_on_ocp/ocp_k10",permalink:"/ocp-gitp/workloads_on_ocp/ocp_k10",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/workloads_on_ocp/ocp_k10.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1692098480,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{title:"Deploying Backup Application"},sidebar:"tutorialSidebar",previous:{title:"Nutanix Objects as Backup Destination",permalink:"/ocp-gitp/optional_labs/objects_prep"},next:{title:"Deploying Workload",permalink:"/ocp-gitp/workloads_on_ocp/ocp_wordpress_deploy"}},c={},u=[{value:"Backup and Restore Architecture",id:"backup-and-restore-architecture",level:2},{value:"Potential Architectures",id:"potential-architectures",level:3},{value:"Installing VolumeSnapshotClass",id:"installing-volumesnapshotclass",level:2},{value:"Installing Kasten K10",id:"installing-kasten-k10",level:2},{value:"Setup up Backup Target",id:"setup-up-backup-target",level:2}],m={toc:u};function k(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-backup-application"},"Deploying Backup Application"),(0,r.kt)("p",null,"In this section we will implement Kasten K10 as a backup and restore\nmanagement applicaion."),(0,r.kt)("h2",{id:"backup-and-restore-architecture"},"Backup and Restore Architecture"),(0,r.kt)("p",null,"At the very high level, implementing backup, restore and DR involves the\nfollowing components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source")," - applications hosted on OCP cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Processing/management")," - Kasten K10 application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination")," - Nutanix Objects as a backup location")),(0,r.kt)("p",null,"We will also be implement Nutanix HCI snapshots to facilitate quiescing of worloads to back them up. This will be done using VolumeSnapshotClass kubernetes object in this lab."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage Location"),(0,r.kt)("th",{parentName:"tr",align:null},"RTO/RPO"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backup (Snapshots)"),(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix HCI Cluster (along with Storage container)"),(0,r.kt)("td",{parentName:"tr",align:null},"High")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exports"),(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Objects S3 (stored in backup target)"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium")))),(0,r.kt)("h3",{id:"potential-architectures"},"Potential Architectures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Architecture 1 - All in one cluster (applications, backup\napplication and backup destination)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Workload snapshots and backup exports are stored in the same\nNutanix HCI cluster"),(0,r.kt)("li",{parentName:"ul"},"Snapshots are provided by Nutanix DFS")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7929).Z,width:"812",height:"501"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Architecture 2 - Source in one cluster (applications, backup\napplication)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Workload snapshot location is the source Nutanix HCI cluster"),(0,r.kt)("li",{parentName:"ul"},"Snapshots are provided by Nutanix DFS"),(0,r.kt)("li",{parentName:"ul"},"Backup export location in the Objects/Files cluster")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4180).Z,width:"951",height:"518"})))),(0,r.kt)("p",null,"In this lab, we will be implementing Architecture 1 with all components\nin a single cluster."),(0,r.kt)("h2",{id:"installing-volumesnapshotclass"},"Installing VolumeSnapshotClass"),(0,r.kt)("p",null,"Before you proceed with this section, verify that Nutanix CSI operator version and make sure it is ",(0,r.kt)("inlineCode",{parentName:"p"},"2.5.1")," - we need this version to be able to implement volumesnapshotclass"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1085).Z,width:"1194",height:"334"})),(0,r.kt)("p",null,"We will start by creating a VolumeSnapshotClass kubernetes object with Nutanix CSI. This helps in facilitating snapshots of the source workload."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Depending on the OCP cluster installation you chose, log on to the ",(0,r.kt)("strong",{parentName:"p"},"UserXX-LinuxToolsVM")," or ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," VM to be able to access OCP cluster. "),(0,r.kt)("admonition",{parentName:"li",title:"How did you install OCP?",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you installed OCP using NCM (Calm), you will be performing commands in ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," VM's console."),(0,r.kt)("p",{parentName:"admonition"},"We suggest doing the following when modifications to commands are required:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit code from lab instructions using vi/nano/vim")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the required fields (highlighted)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the commands into the terminal of LB_DNS vm through Calm UI"))),(0,r.kt)("p",{parentName:"admonition"},"Use the following key combinations to paste content into Calm invoked terminal. "),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use ",(0,r.kt)("b",null,"Command + v")," to paste."),(0,r.kt)(l.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use ",(0,r.kt)("b",null,"Shift + Insert")," to paste.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the OCP cluster's KUBECONFIG file to environment so we can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," commands"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"On NCM deployed OCP Clusters - use LB_DNS VM",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=~/openshift/auth/kubeconfig\n"))),(0,r.kt)(l.Z,{value:"On IPI deployed OCP Clusters - use UserXX-LinuxToolsVM",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/root/xyz/auth/kubeconfig \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Install Helm"',title:'"Install','Helm"':!0},"# We also need to install Helm and jq on on Linux Tools VM\n# This will help us set up to install Kasten K10\ncurl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nchmod 700 get_helm.sh\n./get_helm.sh\nhelm version\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Install jq"',title:'"Install','jq"':!0},"yum install jq -y\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"VolumeSnapshotClass")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF | oc create -f -\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshotClass\nmetadata:\n  name: acs-abs-snapshot-class\n  annotations:\n    k10.kasten.io/is-snapshot-class: "true" # << Note the annotation to let kasten k10 use this volumesnapshotclass\ndriver: csi.nutanix.com\nparameters:\n  storageType: NutanixVolumes\n  csi.storage.k8s.io/snapshotter-secret-name: ntnx-secret\n  csi.storage.k8s.io/snapshotter-secret-namespace: openshift-cluster-csi-drivers\ndeletionPolicy: Delete\nEOF\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following script to check if your OCP cluster is Kasten K10 ready"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Add kasten helm repo\nhelm repo add kasten https://charts.kasten.io/\n# Run kasten pre-install check\ncurl https://docs.kasten.io/tools/k10_primer.sh | bash\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You would notice output as following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Validating Provisioners: \ncsi.nutanix.com:\n  Is a CSI Provisioner  -  OK\n  Storage Classes:\n    nutanix-volume\n      Valid Storage Class  -  OK\n  Volume Snapshot Classes:\n    acs-abs-snapshot-class\n      Has k10.kasten.io/is-snapshot-class annotation set to true  -  OK\n      Has deletionPolicy \'Delete\'  -  OK\n\nValidate Generic Volume Snapshot:\n  Pod Created successfully  -  OK\n  GVS Backup command executed successfully  -  OK\n  Pod deleted successfully  -  OK\n\nserviceaccount "k10-primer" deleted\nclusterrolebinding.rbac.authorization.k8s.io "k10-primer" deleted\njob.batch "k10primer" deleted\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure all pre-checks are OK. If not, go back and check the associated errors and resolve them. Ask your instructor for help."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you see warnings about security context constraints, you can ignore them as we will fix them soon.")))),(0,r.kt)("h2",{id:"installing-kasten-k10"},"Installing Kasten K10"),(0,r.kt)("p",null,"In this section we will install Kasten K10 in our OCP cluster to backup and restore of our OCP workload (wordpress in our case)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kasten K10 can also be implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.kasten.io/latest/install/openshift/operator.html"},"OCP Operator"),".\nHowever, at the time of writing this lab there were issues with the Operator approach. So we will use Helm based install.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install K10 using ",(0,r.kt)("strong",{parentName:"p"},"helm")),(0,r.kt)("p",{parentName:"li"},"Helm is pre-installed in your LB_DNS VM for your convenience."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# create a new ocp project to host kasten k10 applicaion\noc new-project kasten-io\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm install k10 kasten/k10 --namespace=kasten-io --set scc.create=true --set route.enabled=true --set route.path="/k10" --set auth.tokenAuth.enabled=true\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see output similar to the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME: k10\nLAST DEPLOYED: Tue Mar  1 06:40:27 2022\nNAMESPACE: kasten-io\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nThank you for installing Kasten\u2019s K10 Data Management Platform!\n\nDocumentation can be found at https://docs.kasten.io/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure all kasten k10 resources are deployed properly by running\nthe following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get pods -n kasten-io -w\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output - Wait until  all pods are running"',title:'"Output',"-":!0,Wait:!0,until:!0,"":!0,all:!0,pods:!0,are:!0,'running"':!0},"# This may take a few minutes \nNAME                                  READY   STATUS    RESTARTS   AGE\naggregatedapis-svc-7874bdc658-hcvbh   1/1     Running   0          3m26s\nauth-svc-7f6f89dcc9-tcrcz             1/1     Running   0          3m26s\ncatalog-svc-5c65cc87c7-bq7c8          2/2     Running   0          3m25s\nconfig-svc-6568f6cf-d9h8c             1/1     Running   0          3m26s\ncrypto-svc-6f6bcf669b-72vr7           3/3     Running   0          3m26s\ndashboardbff-svc-7d69c79b85-q55rd     1/1     Running   0          3m26s\nexecutor-svc-69c8c779cc-5r5r6         2/2     Running   0          3m26s\nexecutor-svc-69c8c779cc-mccxp         2/2     Running   0          3m25s\nexecutor-svc-69c8c779cc-tpx7w         2/2     Running   0          3m25s\nfrontend-svc-5cfdc5dc57-sxsqn         1/1     Running   0          3m25s\ngateway-74b76b57d-7flsm               1/1     Running   0          3m26s\njobs-svc-6c77c5d887-pwnt5             1/1     Running   0          3m25s\nk10-grafana-8684cdd9c-jbjtc           1/1     Running   0          3m25s\nkanister-svc-74f76676c5-27t56         1/1     Running   0          3m25s\nlogging-svc-7b84756c64-226rz          1/1     Running   0          3m25s\nmetering-svc-5c77f69d74-b4fw4         1/1     Running   0          3m25s\nprometheus-server-85dff88779-j4rrq    2/2     Running   0          3m25s\nstate-svc-84589d9df9-wkdll            2/2     Running   0          3m25s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Look for the route where you can access Kasten Web UI"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get route -n kasten-io \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME        HOST/PORT                                     PATH    SERVICES   PORT   TERMINATION   WILDCARD\nk10-route   k10-route-kasten-io.apps.ocp1.ntnxlab.local   /k10/   gateway    http                 None\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make the URL by appending the path to the HOST shown in the command\nabove"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# URL + PATH\n# Example below\n# Your URL will be almost the same. Verify to make sure\n")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Template URL",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"http://k10-route-kasten-io.apps.<your-ocp-cluster>.ntnxlab.local/k10/#\n"))),(0,r.kt)(l.Z,{value:"Sample URL",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"http://k10-route-kasten-io.apps.xyz.ntnxlab.local/k10/#\n")))),(0,r.kt)("p",{parentName:"li"},"If the above URL doesn't work, try this one"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Template URL",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"http://k10-route-kasten-io.apps.<your-ocp-cluster>.ntnxlab.local/k10/\n"))),(0,r.kt)(l.Z,{value:"Sample URL",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"http://k10-route-kasten-io.apps.xyz.ntnxlab.local/k10/\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the URL and paste in a browser in your ",(0,r.kt)("strong",{parentName:"p"},"WindowsToolsVM"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will get a login page, to get the credentials, return to the shell and run the following commands:"),(0,r.kt)("p",{parentName:"li"},"Kasten K10 gives admin priveleges to k10-k10 service account during deployment."),(0,r.kt)("p",{parentName:"li"},"This service account will have two secrets."),(0,r.kt)("p",{parentName:"li"},"We need to find the secret starting with ",(0,r.kt)("em",{parentName:"p"},"k10-k10-token-")," and find the token value by decoding it."),(0,r.kt)("p",{parentName:"li"},"Run the following commands to get this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc --namespace kasten-io create token k10-k10 --duration=48h\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Sample output shown here - your token will be different\n\neyJhbGciOiJSUzI1NiIsIm.....\n\n# Copy the token from your ssh console and paste in the Kasten login UI\n")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can also create a permanent token that doesn't expire. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.kasten.io/access/authentication.html?highlight=token#obtaining-tokens"},"Kasten")," documentation for more details."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to the broswer and paste the secret value"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8938).Z,width:"1250",height:"1160"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Sign In")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You may be asked to enter your company email ID and company name before you can see the Kasten K10 administration page. Please do so if necesary.")))),(0,r.kt)("h2",{id:"setup-up-backup-target"},"Setup up Backup Target"),(0,r.kt)("p",null,"We will create a backup target to point to our bucket we created in the previous section. In Kasten this is called Location Profiles."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Kasten dashboard click on ",(0,r.kt)("strong",{parentName:"p"},"Settings")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4269).Z,width:"1550",height:"581"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Locations")," > ",(0,r.kt)("strong",{parentName:"p"},"+ New Profile")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1036).Z,width:"1210",height:"299"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following details"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Profile Name")," - ntnx-objects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Storage Provider")," - S3 Compatible"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Access Key")," - Access key from the file you downloaded in\nthe previous section"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Secret Key")," - Secret key from the file you downloaded in\nthe previous section"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Endpoint")," - Public IP of ntnx-objects Object Store (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://10.42.32.18"},"https://10.42.32.18"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Skip certificate chain and hostname verification")," - Checked and confirm to ",(0,r.kt)("strong",{parentName:"li"},"Disable SSL Verify")," in the prompt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Region")," - Leave blank"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bucket Name")," - ",(0,r.kt)("em",{parentName:"li"},"Initials"),"-k10 (e.g. xyz-k10)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(483).Z,width:"467",height:"1145"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kasten will do a validation and the profile will be available in the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Locations")," page"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9411).Z,width:"1445",height:"876"})),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If there are validation errors, please go back to checking all the input parameters for creating location profile")))),(0,r.kt)("p",null,"You have successfully setup Kasten backup application to backup your application."))}k.isMDXComponent=!0},7929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backup_design_1-1666066d8f647e335d0b66dedae8a067.png"},4180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backup_design_2-171690305de2b1922960fe7389508aba.png"},1085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/csi_operator_version-7177927885047848059e18dba82bfb7b.png"},4269:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasten_dash-b78155817a8e01e8db28c58a8b81cb56.png"},1036:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasten_location_profile-1808459342ed9630103d3185a967fbed.png"},9411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/location_profile-cb8b42025d17311124d15a36af0a6afa.png"},483:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/location_profile_config-6f561c9daebdccaf669e7dc399d15d58.png"},8938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_k10_login_token-3285e92a24156def951a95f2877ed1f7.png"}}]);