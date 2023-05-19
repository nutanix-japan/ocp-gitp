"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[8099],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),i=a(6010),o=a(2466),l=a(6550),p=a(1980),s=a(7392),c=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[p,s]=g({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),h=(()=>{const e=p??u;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),k(e)}),[s,k,i]),tabValues:i}}var h=a(2389);const f="tabList__CuJ",N="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:p,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(u(t),p(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",N,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},8129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(4866),o=a(5162);const l={title:"OCP CICD",lastupdate:"git",lastupdateauthor:"git"},p=void 0,s={unversionedId:"ocp_serverless/extend_pipeline",id:"ocp_serverless/extend_pipeline",title:"OCP CICD",description:"Deployment Scenario",source:"@site/docs/ocp_serverless/extend_pipeline.md",sourceDirName:"ocp_serverless",slug:"/ocp_serverless/extend_pipeline",permalink:"/ocp-gitp/ocp_serverless/extend_pipeline",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_serverless/extend_pipeline.md",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1684506842,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"OCP CICD",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"OCP Serverless",permalink:"/ocp-gitp/ocp_serverless/"},next:{title:"Deploying IDP for OCP",permalink:"/ocp-gitp/optional_labs/ocp_idp"}},c={},u=[{value:"Deployment Scenario",id:"deployment-scenario",level:2},{value:"Build and Test in Development",id:"build-and-test-in-development",level:3},{value:"Deploy in Staging",id:"deploy-in-staging",level:3}],m={toc:u};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"deployment-scenario"},"Deployment Scenario"),(0,r.kt)("p",null,"So far we have seen how to build and deploy an application using pipelines and serverless functionality. Now let us get into day-to-day life of a DevOps engineer or a Developer who needs to automate the following workflow."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build a container image from the source git repository"),(0,r.kt)("li",{parentName:"ol"},"Deploy the image into development environment "),(0,r.kt)("li",{parentName:"ol"},"If the deployment is successful, then tag the image as ready for staging"),(0,r.kt)("li",{parentName:"ol"},"Deploy the ready-for-staging to staging environment")),(0,r.kt)("p",null,"Lucky for us, as we have the pipelines operator (implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://tekton.dev"},"Tekton"),"), and serverless functionality using S2I, we can automate all this OCP and most other Kubernetes distribution (with a little know-how)."),(0,r.kt)("h3",{id:"build-and-test-in-development"},"Build and Test in Development"),(0,r.kt)("p",null,"Let us extend our previously built ",(0,r.kt)("inlineCode",{parentName:"p"},"ocp-gitp-git")," pipeline."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Browse to you OCP cluster's web UI"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.ocpuserXX.ntnxlab.local/add/ns/dev\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login as kubeadmin or a IDP user")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch to Developer view")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"+Add")," just under Developer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you are under ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," project ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Pipelines")," option and then click on ",(0,r.kt)("strong",{parentName:"p"},"ocp-gitp-git")," pipeline")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Actions")," menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Edit Pipeline")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8062).Z,width:"977",height:"452"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," step and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," mark next to it, to add a sequential task"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4657).Z,width:"712",height:"228"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A new task will appear and join the pipeline ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Add task")," and in the search text box type ",(0,r.kt)("inlineCode",{parentName:"p"},"openshift"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select this, click on ",(0,r.kt)("strong",{parentName:"p"},"Add and install")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2070).Z,width:"837",height:"415"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the right-hand side the task property window will open ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Display name (for task)")," - tag-good-image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SCRIPT")," - copy and paste the following script"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Paste this without altering"',title:'"Paste',this:!0,without:!0,'altering"':!0},"oc tag dev/$(params.APP_NAME):latest dev/$(params.APP_NAME):promote-stage\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"VERSION")," - latest (we are configuring to use the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"OC")," command)"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3293).Z,width:"1240",height:"617"})),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We will be using ",(0,r.kt)("inlineCode",{parentName:"p"},"$(PARAMS.APP_NAME)"),"variable's value (populated from when you created the pipeline) as the APP_NAME as it keeps things uniform. You can think of various use cases for variables/parameters.")))),(0,r.kt)("h3",{id:"deploy-in-staging"},"Deploy in Staging"),(0,r.kt)("p",null,"Now that we have built and deployed image in development ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," namespace. We can proceed to deploy in staging namespace."),(0,r.kt)("p",null,"We will do things a little different this time:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the image that was successfully deployed in staging namespace and tagged to be promoted to staging ",(0,r.kt)("inlineCode",{parentName:"li"},":promote-stage")),(0,r.kt)("li",{parentName:"ul"},"Increase the number of replicas to 3 as number of users testing will also increase ")),(0,r.kt)("p",null,"Let's do this!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the same steps as above to add another task and fill the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Display name (for task)")," - deploy-to-stage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SCRIPT")," - copy and paste the following script"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Paste this without altering"',title:'"Paste',this:!0,without:!0,'altering"':!0},"oc project stage\noc delete all --selector app=$(params.APP_NAME)\noc new-app dev/$(params.APP_NAME):promote-stage -n stage --as-deployment-config\noc scale --replicas=3 dc $(params.APP_NAME)\noc delete svc $(params.APP_NAME)\noc expose dc $(params.APP_NAME) --type=ClusterIP --target-port=3000 --port=3000\noc expose svc $(params.APP_NAME) --path='/ocp-gitp/'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"VERSION")," - latest  "))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3955).Z,width:"1112",height:"731"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Curious about Tekton pipeline?"),(0,r.kt)("div",null,(0,r.kt)("body",null,"If you would like to see a yaml view of the pipeline you just created: 1. Select your ``ocp-gitp-git`` pipeline 2. Click on **YAML** tab")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Actions")," menu, and click on ",(0,r.kt)("strong",{parentName:"p"},"Start"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monitor the run in the PipelineRuns tab, and you should be able to monitor the pipeline run"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6896).Z,width:"1118",height:"732"})),(0,r.kt)("p",{parentName:"li"},"Make sure the pipeline run is successful, if there issues, troubleshoot and fix before moving on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional - Using ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," command line, run the following commands to confirm the presence of resources in stage namespace/project"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Command",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get all -n stage\n"))),(0,r.kt)(o.Z,{value:"Command and output",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get all -n stage\n#\nNAME                        READY   STATUS      RESTARTS   AGE\npod/ocp-gitp-git-1-deploy   0/1     Completed   0          2m30s\npod/ocp-gitp-git-1-pmrv6    1/1     Running     0          2m28s\n\nNAME                                   DESIRED   CURRENT   READY   AGE\nreplicationcontroller/ocp-gitp-git-1   1         1         1       2m30s\n\nNAME                   TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nservice/ocp-gitp-git   ClusterIP   172.30.104.155   <none>        3000/TCP   113s\n\nNAME                                              REVISION   DESIRED   CURRENT   TRIGGERED BY\ndeploymentconfig.apps.openshift.io/ocp-gitp-git   1          1         1         config,image(ocp-gitp-git:promote-stage)\n\nNAME                                    HOST/PORT                                           PATH         SERVICES       PORT   TERMINATION   WILDCARD\nroute.route.openshift.io/ocp-gitp-git   ocp-gitp-git-stage.apps.ocp-cluster.ntnxlab.local   /ocp-gitp/   ocp-gitp-git   3000                 None\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Topology")," option, and click on the URL on your application as shown here, this is a route created by the pipeline for application access"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3180).Z,width:"811",height:"342"})),(0,r.kt)("p",{parentName:"li"},"The application should open in a new browser tab"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1171).Z,width:"1094",height:"593"})),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that the documentation site NodeJS application is now hosted on your OCP cluster"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"http://ocp-gitp-git-stage.apps.user02.ntnxlab.local/ocp-gitp/\n")),(0,r.kt)("p",{parentName:"admonition"},"Where:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ocp-gitp-git")," - is your application name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stage")," - is your namespace/project name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user02")," - is your OCP cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ntnxlab.local")," - is your domain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ocp-gitp/")," - is your basePath url"))))),(0,r.kt)("p",null,"You can note how easy it is build pipelines to automate your deployments using serverless and CICD."))}d.isMDXComponent=!0},4657:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-seq-step-4e2ae66632a74b59d69973561fb00fc4.png"},3955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deplopy-to-stage-script-dd0207e8f3a36d0f58ba1935671ec70e.png"},8062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-pl-97bae234dcd52d5615476aa0706ea0b3.png"},1171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gitp_hosted_on_ocp_stage-72c8b038f8703501f28827bed254302f.png"},6896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pl-run-success-d8b8cf4f508ca39fa2cc3334c0a08b79.png"},3180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plr_topology_app_access-c02661344004ba2ec94a59c87bc0e34d.png"},2070:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search-openshift-client-install-cf8506576a443f70cf13b14da659f326.png"},3293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tag-image-script-2ea3cc5199e90fed00acf0e7754c6885.png"}}]);