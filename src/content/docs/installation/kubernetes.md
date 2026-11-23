---
title: "Install Leantime on Kubernetes"
description: "Install Leantime on Kubernetes with the Helm chart from Leantime's repository: values to set, your own domain, updates, backups and what the chart can't do yet."
head:
  - tag: title
    content: "Install Leantime on Kubernetes with Helm"
edition: self-hosted
checked: "3.15"
glance:
  minutes: 30
  level: "Advanced"
  needs:
    - "A Kubernetes cluster with a default storage class"
    - "Helm 3 or later, and kubectl set up to reach the cluster"
  where:
    - "A terminal where `helm` and `kubectl` can reach your cluster"
  result: "Leantime and its MariaDB database running in your cluster, with volumes for uploaded files, from the chart in Leantime's repository."
---

## Kubernetes Helm (3rd Party)

Minimal install on Kubernetes using 3rd party Helm chart. Note that by default data is not persistent, see [chart options](https://github.com/gissilabs/charts/tree/master/leantime) for more details.

```
helm repo add gissilabs https://gissilabs.github.io/charts/
helm repo update
helm install myleantime gissilabs/leantime
```
