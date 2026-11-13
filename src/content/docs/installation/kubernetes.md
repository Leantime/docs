---
title: "Install on Kubernetes (Helm)"
description: "Install Leantime on Kubernetes with the community gissilabs Helm chart. Data is not persistent by default, so set the chart's storage options."
glance:
  minutes: 10
  level: "Advanced"
  needs:
    - "A Kubernetes cluster"
    - "Helm, set up to reach that cluster"
  where:
    - "A terminal where `helm` can reach your cluster"
  result: "Leantime running in your cluster from the community gissilabs chart. Data isn't kept by default: set the chart's storage options."
---

## Kubernetes Helm (3rd Party)

Minimal install on Kubernetes using 3rd party Helm chart. Note that by default data is not persistent, see [chart options](https://github.com/gissilabs/charts/tree/master/leantime) for more details.

```
helm repo add gissilabs https://gissilabs.github.io/charts/
helm repo update
helm install myleantime gissilabs/leantime
```
