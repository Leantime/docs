## Kubernetes Helm (3rd Party)

Minimal install on Kubernetes using 3rd party Helm chart. Note that by default data is not persistent, see [chart options](https://github.com/gissilabs/charts/tree/master/leantime) for more details.

```
helm repo add gissilabs https://gissilabs.github.io/charts/
helm repo update
helm install myleantime gissilabs/leantime
```
