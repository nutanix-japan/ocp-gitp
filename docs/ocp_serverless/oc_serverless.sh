oc project stage
oc delete all --selector app=$(params.APP_NAME)
oc new-app dev/$(params.APP_NAME):promote-stage -n stage --as-deployment-config
oc scale --replicas=3 dc $(params.APP_NAME)
oc delete svc $(params.APP_NAME)
oc expose dc $(params.APP_NAME) --type=ClusterIP --target-port=3000 --port=3000
oc expose svc $(params.APP_NAME) --path='/ocp-gitp/'


---
oc project stage
oc delete all --selector app=$(params.APP_NAME)
oc create dc $(params.APP_NAME) --image='dev/$(params.APP_NAME):promote-stage' -n stage
oc scale --replicas=3 dc $(params.APP_NAME)
oc expose dc $(params.APP_NAME) --type=ClusterIP --target-port=3000 --port=3000
oc expose svc $(params.APP_NAME) --path='/ocp-gitp/'

----

oc create dc --image=ocp-gitp-git:promote-stage -n stage
oc scale --replicas=3 dc
oc expose dc ocp-gitp-git  --type=ClusterIP --target-port=3000 --port=3000
oc expose svc ocp-gitp-git --path='/ocp-gitp/'
