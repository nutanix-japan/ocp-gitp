---
title: "Deploy Multi-Zone MongoDB"
lastupdate: git
lastupdateauthor: git
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overview

In this section we will install a mutli-zone deployable workload. The workload will contain a MongoDB Database. 

# Add Mongo DB Helm Charts

This section requires Helm. 

1. Create a new OCP project
   ```bash
   oc new-project mongo
   ```

2. Install Helm (if not already present)
   ```bash
   curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
   #
   chmod 700 get_helm.sh
   #
   ./get_helm.sh
   ``` 
   ```bash title="Verify Helm version"
   helm version
   ```

4. Add the following Helm repo
   ```bash
   helm repo add my-mongo https://charts.bitnami.com/bitnami
   ```
   ```bash title="Check if repo is present"
   helm repo list
   ```
   ```bash title="Output"
   NAME   	URL                                  
   my-mongo	https://charts.bitnami.com/bitnami   
   ```

# Deploy Mongo DB Database

1. Create following Helm ``mongo_values.yaml`` file 

    ```bash
    cat << EOF > mongo_values.yaml
    global:
      storageClass: "nutanix-volume"
    
    ## MongoDB(&reg;) Authentication parameters
    ##
    architecture: replicaset
    auth:
      enabled: true
      rootUser: root
      rootPassword: "nutanix"
    ## @param replicaCount Number of MongoDB(&reg;) nodes (only when `architecture=replicaset`)
    ## Ignored when mongodb.architecture=standalone
    ##
    replicaCount: 3                                        ## << Three replicas for three AZs
    affinity:
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:    ## << Following strict scheduling in each zone
        - topologyKey: csi.nutanix.com/prism-element-uuid  ## << Nutanix provided topology key
          labelSelector:
            matchLabels:
              app.kubernetes.io/component: mongodb
              app.kubernetes.io/instance: mongo-topology
    EOF
    ```
3. Testing has indicated that wordpress container expects to run as root in terms of security context. To enable the ``mongo-mongodb`` service account in the ``mongo`` namespace to run as root, we need to grant anyuid security context to the service account.
   
   ```bash
   oc adm policy add-scc-to-user anyuid -z mongo-mongodb
   ```

4. Install MongoDB 
   
   - Using ``3`` replicas for the Deployment - as we have three availability zones
   - Using a topology key provided by Nutanix ``csi.nutanix.com/prism-element-uuid`` 
   - Using strict topology maintenance requirement ``requiredDuringSchedulingIgnoredDuringExecution``
  
   ```bash
   helm install mongo my-repo/mongodb -f mongo_values.yaml
   ```
   ```bash title="Output - we will use some commands in the output to access Mongo DB database"
   NAME: mongo
   LAST DEPLOYED: Mon Jan 23 07:40:12 2023
   NAMESPACE: mongo
   STATUS: deployed
   REVISION: 1
   TEST SUITE: None
   NOTES:
   CHART NAME: mongodb
   CHART VERSION: 13.6.3
   APP VERSION: 6.0.3
   
   ** Please be patient while the chart is being deployed **
   
   MongoDB&reg; can be accessed on the following DNS name(s) and ports from within your cluster:
   
       mongo-mongodb-0.mongo-mongodb-headless.mongo1.svc.cluster.local:27017
       mongo-mongodb-1.mongo-mongodb-headless.mongo1.svc.cluster.local:27017
       mongo-mongodb-2.mongo-mongodb-headless.mongo1.svc.cluster.local:27017
   
   To get the root password run:
   
       export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace mongo mongo-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 -d)
   
   To connect to your database, create a MongoDB&reg; client container:
   
       kubectl run --namespace mongo mongo-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:6.0.3-debian-11-r20 --command -- bash
   
   Then, run the following command:
       mongosh admin --host "mongo-mongodb-0.mongo-mongodb-headless.mongo1.svc.cluster.local:27017,mongo-mongodb-1.mongo-mongodb-headless.mongo1.svc.cluster.local:27017,mongo-mongodb-2.mongo-mongodb-headless.mongo1.svc.cluster.local:27017" --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD
    ```

   :::info

   This installation may take up to 5 minutes.

   :::
5. You are able to watch the pods to get details status
   
   ```bash
   oc get po -w
   NAME                      READY   STATUS              RESTARTS   AGE
   mongo-mongodb-0           0/1     ContainerCreating   0          26s
   mongo-mongodb-arbiter-0   1/1     Running             0          26s
   mongo-mongodb-0           0/1     ContainerCreating   0          39s
   mongo-mongodb-0           0/1     Running             0          40s
   mongo-mongodb-0           1/1     Running             0          50s
   mongo-mongodb-1           0/1     Pending             0          0s
   mongo-mongodb-1           0/1     Pending             0          7s
   mongo-mongodb-1           0/1     ContainerCreating   0          7s
   mongo-mongodb-1           0/1     ContainerCreating   0          40s
   mongo-mongodb-1           0/1     Running             0          41s
   mongo-mongodb-1           1/1     Running             0          50s
   mongo-mongodb-2           0/1     Pending             0          0s
   mongo-mongodb-2           0/1     Pending             0          43s
   mongo-mongodb-2           0/1     ContainerCreating   0          43s
   mongo-mongodb-2           0/1     ContainerCreating   0          69s
   mongo-mongodb-2           0/1     Running             0          70s
   ```

6. Once pods are running, examine the pods
   ```bash
   oc get po -w --output custom-columns=NAME:metadata.name,IP:status.podIP,NODE:spec.nodeName,STATUS:status.phase
   ```
   ```bash title="Output"
   NAME                      IP             NODE           STATUS
   mongo-mongodb-0           10.129.2.17    ocp-worker-8   Running ## Availability zone 3
   mongo-mongodb-1           10.130.1.107   ocp-worker-1   Running ## Availability zone 1
   mongo-mongodb-2           10.130.2.140   ocp-worker-4   Running ## Availability zone 2
   mongo-mongodb-arbiter-0   10.129.2.16    ocp-worker-8   Running 
   ```


7. Create a new MongoDB client container to access the MongoDB database

   ```bash
   kubectl run --namespace mongo mongo-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:6.0.3-debian-11-r20 --command -- bash
   ```

8. In the container prompt, run the following command to connect to the database
   
   ```bash
   mongosh admin --host "mongo-mongodb-0.mongo-mongodb-headless.mongo1.svc.cluster.local:27017, mongo-mongodb-1.mongo-mongodb-headless.mongo1.svc.cluster.local:27017, mongo-mongodb-2.mongo-mongodb-headless.mongo1.svc.cluster.local:27017" \ 
   --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD
   ```


   use myNewDatabase
db.myCollection.insertOne( { x: 1 } );