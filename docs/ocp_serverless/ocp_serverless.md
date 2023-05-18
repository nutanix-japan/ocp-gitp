---
title: "OCP Serverless"
lastupdate: git
lastupdateauthor: git
---

# OCP Serverless

In this lab we will delve into the world of Serverless with OCP. 

We will also see how Nutanix offers solutions that will facilitate serverless offerings with OCP.

Nutanix offers:

- HCI Compute and Storage
  - Objects as Container Registry location
    - This is where all the newly developed containers images are stored
  - OCP nodes runs as virtual machines on Nutanix 
    - Virtual machines needs volumes as storage
    - Virtual machines need compute and networking
    - Virtual machines can be deployed and destroyed with easy to use Nutanix APIs facilitating serverless 

In this lab, we will be deploy this OCP lab and exposing it internally as application.

In essence, this instruction website is a NodeJS application called [Docusaurus](https://docusaurus.io). 

OCP has Integrated Source to Image [S2I](https://github.com/openshift/source-to-image) capabilities natively and we will use this to demonstrate serverless functionality. 

- OCP S2I implementation decides on the best deployment strategy (dockerfile, pre-built container images, etc) without the developer having to worry about this 
- OCP will take care of the deployment part in the OCP (kubernetes)
- OCP will also create a route/ingress where the end-users can access the application

## High Level steps

1. Use OCP's Import from Git functionality to get source code
2. Build a container 
3. Upload to OCP image registry
4. Deploy application to OCP cluster
5. Expose the application and access

