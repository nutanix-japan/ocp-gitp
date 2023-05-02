"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,d=m["".concat(s,".").concat(u)]||m[u]||k[u]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Deploying Backup Application"},i="Deploying Backup Application",l={unversionedId:"workloads_on_ocp/ocp_k10",id:"workloads_on_ocp/ocp_k10",title:"Deploying Backup Application",description:"In this section we will implement Kasten K10 as a backup and restore",source:"@site/docs/workloads_on_ocp/ocp_k10.mdx",sourceDirName:"workloads_on_ocp",slug:"/workloads_on_ocp/ocp_k10",permalink:"/ocp-gitp/workloads_on_ocp/ocp_k10",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/workloads_on_ocp/ocp_k10.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1682989409,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Deploying Backup Application"},sidebar:"tutorialSidebar",previous:{title:"Nutanix Objects as Backup Destination",permalink:"/ocp-gitp/optional_labs/objects_prep"},next:{title:"Deploying Workload",permalink:"/ocp-gitp/workloads_on_ocp/ocp_wordpress_deploy"}},s={},p=[{value:"Backup and Restore Architecture",id:"backup-and-restore-architecture",level:2},{value:"Potential Architectures",id:"potential-architectures",level:3},{value:"Installing VolumeSnapshotClass",id:"installing-volumesnapshotclass",level:2},{value:"Installing Kasten K10",id:"installing-kasten-k10",level:2},{value:"Setup up Backup Target",id:"setup-up-backup-target",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-backup-application"},"Deploying Backup Application"),(0,o.kt)("p",null,"In this section we will implement Kasten K10 as a backup and restore\nmanagement applicaion."),(0,o.kt)("h2",{id:"backup-and-restore-architecture"},"Backup and Restore Architecture"),(0,o.kt)("p",null,"At the very high level, implementing backup, restore and DR involves the\nfollowing components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source")," - applications hosted on OCP cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Processing/management")," - Kasten K10 application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Destination")," - Nutanix Objects as a backup location")),(0,o.kt)("p",null,"We will also be implement Nutanix HCI snapshots to facilitate quiescing of worloads to back them up. This will be done using VolumeSnapshotClass kubernetes object in this lab."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Concept"),(0,o.kt)("th",{parentName:"tr",align:null},"Storage Location"),(0,o.kt)("th",{parentName:"tr",align:null},"RTO/RPO"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Backup (Snapshots)"),(0,o.kt)("td",{parentName:"tr",align:null},"Nutanix HCI Cluster (along with Storage container)"),(0,o.kt)("td",{parentName:"tr",align:null},"High")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Exports"),(0,o.kt)("td",{parentName:"tr",align:null},"Nutanix Objects S3 (stored in backup target)"),(0,o.kt)("td",{parentName:"tr",align:null},"Medium")))),(0,o.kt)("h3",{id:"potential-architectures"},"Potential Architectures"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Architecture 1 - All in one cluster (applications, backup\napplication and backup destination)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Workload snapshots and backup exports are stored in the same\nNutanix HCI cluster"),(0,o.kt)("li",{parentName:"ul"},"Snapshots are provided by Nutanix DFS")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(7929).Z,width:"812",height:"501"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Architecture 2 - Source in one cluster (applications, backup\napplication)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Workload snapshot location is the source Nutanix HCI cluster"),(0,o.kt)("li",{parentName:"ul"},"Snapshots are provided by Nutanix DFS"),(0,o.kt)("li",{parentName:"ul"},"Backup export location in the Objects/Files cluster")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(4180).Z,width:"951",height:"518"})))),(0,o.kt)("p",null,"In this lab, we will be implementing Architecture 1 with all components\nin a single cluster."),(0,o.kt)("h2",{id:"installing-volumesnapshotclass"},"Installing VolumeSnapshotClass"),(0,o.kt)("p",null,"Before you proceed with this section, verify that Nutanix CSI operator version and make sure it is ",(0,o.kt)("inlineCode",{parentName:"p"},"2.5.1")," - we need this version to be able to implement volumesnapshotclass"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1085).Z,width:"1194",height:"334"})),(0,o.kt)("p",null,"We will start by creating a VolumeSnapshotClass kubernetes object with Nutanix CSI. This helps in facilitating snapshots of the source workload."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Calm go to your ",(0,o.kt)("strong",{parentName:"p"},"Applications")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Openshift xyz1"),"\napplication")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Services"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("strong",{parentName:"p"},"LB_DNS")," service")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Open Terminal")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(2638).Z,width:"1326",height:"335"})),(0,o.kt)("p",{parentName:"li"},"The terminal will open in a new browser tab")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following commands in sequence"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=~/openshift/auth/kubeconfig\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF | oc create -f -\napiVersion: snapshot.storage.k8s.io/v1beta1\nkind: VolumeSnapshotClass\nmetadata:\n  name: acs-abs-snapshot-class\n  annotations:\n    k10.kasten.io/is-snapshot-class: "true" # << Note the annotation to let kasten k10 use this volumesnapshotclass\ndriver: csi.nutanix.com\nparameters:\n  storageType: NutanixVolumes\n  csi.storage.k8s.io/snapshotter-secret-name: ntnx-secret\n  csi.storage.k8s.io/snapshotter-secret-namespace: ntnx-system\ndeletionPolicy: Delete\nEOF\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following script to check if your OCP cluster is Kasten K10\nready"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add kasten helm repo\nhelm repo add kasten https://charts.kasten.io/\n# Run kasten pre-install check\ncurl https://docs.kasten.io/tools/k10_primer.sh | bash\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You would notice output as following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Validating Provisioners: \ncsi.nutanix.com:\n  Is a CSI Provisioner  -  OK\n  Storage Classes:\n    nutanix-volume\n      Valid Storage Class  -  OK\n  Volume Snapshot Classes:\n    acs-abs-snapshot-class\n      Has k10.kasten.io/is-snapshot-class annotation set to true  -  OK\n      Has deletionPolicy \'Delete\'  -  OK\n\nValidate Generic Volume Snapshot:\n  Pod Created successfully  -  OK\n  GVS Backup command executed successfully  -  OK\n  Pod deleted successfully  -  OK\n\nserviceaccount "k10-primer" deleted\nclusterrolebinding.rbac.authorization.k8s.io "k10-primer" deleted\njob.batch "k10primer" deleted\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure all pre-checks are OK. If not, go back and check the associated errors and resolve them. Ask your instructor for help."))),(0,o.kt)("h2",{id:"installing-kasten-k10"},"Installing Kasten K10"),(0,o.kt)("p",null,"In this section we will install Kasten K10 in our OCP cluster to backup and restore of our OCP workload (wordpress in our case)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Kasten K10 can also be implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.kasten.io/latest/install/openshift/operator.html"},"OCP Operator"),".\nHowever, at the time of writing this lab there were issues with the Operator approach. So we will use Helm based install.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install K10 using ",(0,o.kt)("strong",{parentName:"p"},"helm")),(0,o.kt)("p",{parentName:"li"},"Helm is pre-installed in your LB_DNS VM for your convenience."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create a new ocp project to host kasten k10 applicaion\noc new-project kasten-io\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'helm install k10 kasten/k10 --namespace=kasten-io --set scc.create=true --set route.enabled=true --set route.path="/k10" --set auth.tokenAuth.enabled=true\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will see output similar to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME: k10\nLAST DEPLOYED: Tue Mar  1 06:40:27 2022\nNAMESPACE: kasten-io\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nThank you for installing Kasten\u2019s K10 Data Management Platform!\n\nDocumentation can be found at https://docs.kasten.io/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure all kasten k10 resources are deployed properly by running\nthe following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oc get pods -n kasten-io -w\n\n# Output here. Wait until  all pods are running\n# This may take a few minutes \n\nNAME                                  READY   STATUS    RESTARTS   AGE\naggregatedapis-svc-7874bdc658-hcvbh   1/1     Running   0          3m26s\nauth-svc-7f6f89dcc9-tcrcz             1/1     Running   0          3m26s\ncatalog-svc-5c65cc87c7-bq7c8          2/2     Running   0          3m25s\nconfig-svc-6568f6cf-d9h8c             1/1     Running   0          3m26s\ncrypto-svc-6f6bcf669b-72vr7           3/3     Running   0          3m26s\ndashboardbff-svc-7d69c79b85-q55rd     1/1     Running   0          3m26s\nexecutor-svc-69c8c779cc-5r5r6         2/2     Running   0          3m26s\nexecutor-svc-69c8c779cc-mccxp         2/2     Running   0          3m25s\nexecutor-svc-69c8c779cc-tpx7w         2/2     Running   0          3m25s\nfrontend-svc-5cfdc5dc57-sxsqn         1/1     Running   0          3m25s\ngateway-74b76b57d-7flsm               1/1     Running   0          3m26s\njobs-svc-6c77c5d887-pwnt5             1/1     Running   0          3m25s\nk10-grafana-8684cdd9c-jbjtc           1/1     Running   0          3m25s\nkanister-svc-74f76676c5-27t56         1/1     Running   0          3m25s\nlogging-svc-7b84756c64-226rz          1/1     Running   0          3m25s\nmetering-svc-5c77f69d74-b4fw4         1/1     Running   0          3m25s\nprometheus-server-85dff88779-j4rrq    2/2     Running   0          3m25s\nstate-svc-84589d9df9-wkdll            2/2     Running   0          3m25s\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Look for the route where you can access Kasten Web UI"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oc get route -n kasten-io \n\n#Output here.\n\nNAME        HOST/PORT                                     PATH    SERVICES   PORT   TERMINATION   WILDCARD\nk10-route   k10-route-kasten-io.apps.ocp1.ntnxlab.local   /k10/   gateway    http                 None\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make the URL by appending the path to the HOST shown in the command\nabove"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# URL + PATH\n# Example below\n# Your URL will be almost the same. Verify to make sure\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-url"},"http://k10-route-kasten-io.apps.ocp1.ntnxlab.local/k10/#\n\n# if the above URL doesn't work, try this one:\n\nhttp://k10-route-kasten-io.apps.ocp1.ntnxlab.local/k10/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the URL and paste in a browser in your ",(0,o.kt)("strong",{parentName:"p"},"WindowsToolsVM"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will get a login page, to get the credentials, return to the shell and run the following commands:"),(0,o.kt)("p",{parentName:"li"},"Kasten K10 gives admin priveleges to k10-k10 service account during deployment."),(0,o.kt)("p",{parentName:"li"},"This service account will have two secrets."),(0,o.kt)("p",{parentName:"li"},"We need to find the secret starting with ",(0,o.kt)("em",{parentName:"p"},"k10-k10-token-")," and find the token value by decoding it."),(0,o.kt)("p",{parentName:"li"},"Run the following commands to get this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'k10_login_secret=$(kubectl get serviceaccount k10-k10 -o jsonpath="{.secrets[0].name}" --namespace kasten-io)\n\nkubectl get secret $k10_login_secret --namespace kasten-io -ojsonpath="{.data.token}{\'\\n\'}" | base64 --decode; echo ""\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Sample output shown here - your token will be different\n\neyJhbGciOiJSUzI1NiIsImtpZCI6IlpDdnRDQmFvandWa0VTSWNTb042a2dpVTItVFMtd3huREpKZDM1dl9CX0kifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrYXN0ZW4taW8iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlY3JldC5uYW1lIjoiazEwLWsxMC10b2tlbi1jdnZreCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJrMTAtazEwIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiZGQ2NDI4MzYtZmE4ZS00NWYyLTg2YTctNjgyMzJlMDE2NjAwIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omthc3Rlbi1pbzprMTAtazEwIn0.SXo18kP4FKBEu6377n24okNg3yh8oGw2LE4JGhc4lr_V2-fm7HI13hoMnPVWaHIGPqB-NUQXtoTPQxuFO8zEjNKtFZ0g3YSfbRa_Brt-ALzclkqdVGuxPaOpmt1MDnlY6WsCkaHTAIu9pP0knEo1YTip0kxhaAJwP9v15nP3IDIcqzH4lgz28SWdOetoiMRps6bdcWfsaZxs2gLWfC5xHMd2klM8-vsDWoU2YT0WIAxrfT7As5n9b4IAmbMf80hyElypwmaRRI-q7rka-M1t4y81-TNmmd7p29wqiL04jlkuIr4oh554yQ8yfUyw0AukwUj4ARNRbfEiirH4pEs4PQ\n\n# Copy the token from your ssh console and paste in the Kasten login UI\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the secret doesn't work: use the following commands to get the second secret in serviceaccount k10-k10"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'k10_login_secret=$(kubectl get serviceaccount k10-k10 -o jsonpath="{.secrets[1].name}" --namespace kasten-io)\n\nkubectl get secret $k10_login_secret --namespace kasten-io -ojsonpath="{.data.token}{\'\\n\'}" | base64 --decode; echo ""\n')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Return to the broswer and paste the secret value"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(8938).Z,width:"1250",height:"1160"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Sign In")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You may be asked to enter your company email ID and company name before you can see the Kasten K10 administration page. Please do so if necesary.")))),(0,o.kt)("h2",{id:"setup-up-backup-target"},"Setup up Backup Target"),(0,o.kt)("p",null,"We will create a backup target to point to our bucket we created in the previous section. In Kasten this is called Location Profiles."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Kasten dashboard click on ",(0,o.kt)("strong",{parentName:"p"},"Settings")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(4269).Z,width:"1550",height:"581"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Locations")," > ",(0,o.kt)("strong",{parentName:"p"},"+ New Profile")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(1036).Z,width:"1210",height:"299"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following details"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Profile Name")," - ntnx-objects"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cloud Storage Provider")," - S3 Compatible"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"S3 Access Key")," - Access key from the file you downloaded in\nthe previous section"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"S3 Secret Key")," - Secret key from the file you downloaded in\nthe previous section"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Endpoint")," - Public IP of ntnx-objects Object Store (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://10.42.32.18"},"https://10.42.32.18"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Skip certificate chain and hostname verification")," - Checked and confirm to ",(0,o.kt)("strong",{parentName:"li"},"Disable SSL Verify")," in the prompt"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Region")," - Leave blank"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bucket Name")," - ",(0,o.kt)("em",{parentName:"li"},"Initials"),"-k10 (e.g. xyz-k10)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(483).Z,width:"467",height:"1145"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Save"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Kasten will do a validation and the profile will be available in the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"Locations")," page"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(9411).Z,width:"1445",height:"876"})),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If there are validation errors, please go back to checking all the input parameters for creating location profile")))),(0,o.kt)("p",null,"You have successfully setup Kasten backup application to backup your application."))}m.isMDXComponent=!0},7929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backup_design_1-1666066d8f647e335d0b66dedae8a067.png"},4180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backup_design_2-171690305de2b1922960fe7389508aba.png"},1085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/csi_operator_version-7177927885047848059e18dba82bfb7b.png"},4269:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasten_dash-b78155817a8e01e8db28c58a8b81cb56.png"},1036:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasten_location_profile-1808459342ed9630103d3185a967fbed.png"},9411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/location_profile-cb8b42025d17311124d15a36af0a6afa.png"},483:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/location_profile_config-6f561c9daebdccaf669e7dc399d15d58.png"},8938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_k10_login_token-3285e92a24156def951a95f2877ed1f7.png"},2638:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_lbdns_terminal-d3f4e8c9d40b6c5fbaa1c269f6f7e482.png"}}]);