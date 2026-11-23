# Install Leantime on Kubernetes

Leantime's repository includes a Helm chart in its `helm` folder. It runs one Leantime pod and its own MariaDB database, with volumes for uploaded files. It isn't published in a Helm repository, so you install it from a copy of the repository.

The steps below were tested with Leantime 3.15.3 on a local Kubernetes cluster; the chart is the same in 3.16.0. If you don't need Kubernetes, [Docker Compose](installation/docker.md) is simpler and covers more settings.

## Before you start

- A Kubernetes cluster with a default storage class, and `kubectl` set up to reach it.
- [Helm](https://helm.sh/docs/intro/install/) 3 or later.
- `git`, to get the chart.
- For your own domain: an ingress controller, like ingress-nginx, and a way to get a certificate.

## How do I install Leantime with Helm?

1. **Get the chart** from the latest release (3.16.0 in this example):

   ```sh
   git clone --depth 1 --branch v3.16.0 https://github.com/Leantime/leantime
   ```

2. **Get the chart's MariaDB dependency.** It comes from Bitnami's Helm repository, so add that first:

   ```sh
   helm repo add bitnami https://charts.bitnami.com/bitnami
   helm dependency build ./leantime/helm
   ```

3. **Write your settings** in a file called `values.yaml`, next to the `leantime` folder. Replace every value in angle brackets:

   ```yaml
   image:
     tag: "3.16.0"                 # the Leantime version; don't use "latest"
   app:
     url: "https://projects.example.com"
     session:
       password: "<long random value>"     # openssl rand -base64 32
   mariadb:
     auth:
       rootPassword: "<database root password>"
       password: "<database password>"
   ```

   The chart's defaults are public `changeme` passwords, so replace all three. `app.session.password` is Leantime's secret key. Keep `values.yaml` private: the passwords are stored in it as plain text.

4. **Install it:**

   ```sh
   helm install leantime -f values.yaml ./leantime/helm
   ```

5. **Wait for both pods** to show `Running` and `1/1`. The first start takes a minute or two:

   ```sh
   kubectl get pods
   ```

6. **Open the installer.** Set up your domain as described in [How do I use my own domain?](#how-do-i-use-my-own-domain), and open it in your browser. Enter your email address, name and company name and click **Install**, then set your password and click through the welcome steps.

> **Tip:** To try Leantime before you set up a domain, add `leanSessionSecure: "false"` under `app:` and `url: "http://localhost:8080"`, run `helm upgrade leantime -f values.yaml ./leantime/helm`, then `kubectl port-forward svc/leantime 8080:80`, and open `http://localhost:8080`. Without `leanSessionSecure: "false"`, you can't sign in over plain `http://`. Put both back before you go live.

If you name the release something other than `leantime`, the service is called `<release>-leantime`.

## How do I use my own domain?

Turn on the chart's ingress in `values.yaml`, with your domain and your ingress controller's class:

```yaml
ingress:
  enabled: true
  className: "nginx"
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt"   # if you use cert-manager
  hosts:
    - host: projects.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: leantime-tls
      hosts:
        - projects.example.com
```

Set `app.url` to the same `https://` address, and apply it with `helm upgrade leantime -f values.yaml ./leantime/helm`. Leantime trusts proxies on private networks, which usually includes an ingress controller inside the cluster, so you don't need `app.trustedProxies` unless a public CDN like Cloudflare sits in front (see [Run Leantime behind a reverse proxy](installation/reverse-proxy.md)).

## Which settings can I change?

The chart passes these groups of settings to Leantime. The chart's [README](https://github.com/Leantime/leantime/tree/master/helm) lists every key.

| Values | What they set |
| --- | --- |
| `image.tag` | The Leantime version |
| `app.url`, `app.trustedProxies`, `app.leanSessionSecure` | Your address and HTTPS (see [Run Leantime behind a reverse proxy](installation/reverse-proxy.md)) |
| `app.session.password`, `app.session.expiration` | The secret key, and the minutes without activity before sign-out (default 480, 8 hours) |
| `app.sitename`, `app.language`, `app.defaultTimezone` | Name, default language and time zone |
| `app.email.*` | Sending email through SMTP (see [Email configuration](installation/email-configuration.md)) |
| `app.s3.*` | Storing files in S3 (see [Configuration](installation/configuration.md#s3-file-storage)) |
| `app.ldap.*` | Signing in with LDAP (see [Authentication](installation/authentication-configuration.md)) |
| `persistence.size` | The size of each file volume (default 5 GB) |
| `mariadb.auth.*` | The database passwords |

Other settings, like OpenID Connect, Redis or the sign-in limits, can't be set through the chart in 3.16.

## What can't the chart do yet?

- **Run more than one pod.** Keep `replicaCount: 1` and leave `autoscaling` off. Sign-ins are kept inside each pod, the file volumes can only be attached to one node (`ReadWriteOnce`), and every pod runs Leantime's scheduled jobs.
- **Keep plugins.** The plugins folder isn't on a volume, so plugins you install in **My Apps** are gone when the pod restarts. Their data in the database stays.
- **Use your own database.** The chart always runs its own MariaDB 10.6, from Bitnami's archived `bitnamilegacy` images, and Leantime always connects to it.
- **Use LDAP without a small fix.** `app.ldap.baseDN` and `app.ldap.userDomain` don't reach Leantime. And with `app.ldap.keys` or `app.ldap.groupAssignment` set, the install fails with `expected string`. To fix that, open `leantime/helm/templates/deployment.yaml` and add `| quote` to those two lines, so they read:

  ```yaml
  value: {{ .Values.app.ldap.keys | quote }}
  value: {{ .Values.app.ldap.groupAssignment | quote }}
  ```

Each restart or update of the Leantime pod also signs everyone out, because sign-ins are kept inside the pod.

## How do I update Leantime?

1. [Back up](#how-do-i-back-up-leantime-on-kubernetes) the database and the files.
2. Change `image.tag` in `values.yaml` to the new version.
3. Stop the Leantime pod, then apply the update:

   ```sh
   kubectl scale deployment/leantime --replicas=0
   helm upgrade leantime -f values.yaml ./leantime/helm
   ```

   Its file volumes can only be attached to one pod at a time. Stopping the old pod first lets the new one attach them, even if it starts on another node. `helm upgrade` starts the new pod by itself. Leantime is offline for the minute in between. Do the same whenever you apply changed settings with `helm upgrade` on a cluster with more than one node.

4. Open Leantime. If the new version changes the database, Leantime shows **Update Database**: click **Update Now!**

Read what changed first in [Upgrade Leantime](installation/upgrade-guide.md).

## How do I back up Leantime on Kubernetes?

**The database:**

```sh
kubectl exec leantime-mariadb-0 -- sh -c 'mysqldump -u root -p"$MARIADB_ROOT_PASSWORD" --single-transaction leantime' > leantime-backup.sql
```

**The files.** Find the Leantime pod's name with `kubectl get pods`, then copy both folders out:

```sh
kubectl cp <leantime-pod>:/var/www/html/userfiles ./userfiles
kubectl cp <leantime-pod>:/var/www/html/public/userfiles ./public-userfiles
```

Keep `values.yaml` with the backups: it holds the secret key. See [Backup and restore](installation/backup-restore.md) for what to keep and how to restore.

> **Warning:** `helm uninstall leantime` deletes the volumes with your uploaded files. Only the database volume (`data-leantime-mariadb-0`) stays. Back up the files before you uninstall.

## What if something goes wrong?

- **`Error: no repository definition for https://charts.bitnami.com/bitnami`:** run `helm repo add bitnami https://charts.bitnami.com/bitnami`, then `helm dependency build ./leantime/helm` again.
- **The sign-in page just reloads:** `app.leanSessionSecure` is `"true"` (the default) and you opened Leantime over plain `http://`. Use your `https://` address, or see the tip under [How do I install Leantime with Helm?](#how-do-i-install-leantime-with-helm)
- **The Leantime pod stays at `0/1`:** it waits until it can reach the database. Check the database pod with `kubectl get pods`, and both logs with `kubectl logs deploy/leantime` and `kubectl logs leantime-mariadb-0`.
- **Anything else:** see [Common issues](installation/common-issues.md) and [Docker troubleshooting](installation/docker-troubleshooting.md). Leantime runs the same image on Kubernetes.

## Related

- [Install Leantime with Docker](installation/docker.md)
- [Run Leantime behind a reverse proxy](installation/reverse-proxy.md)
- [Upgrade Leantime](installation/upgrade-guide.md)
- [Backup and restore](installation/backup-restore.md)
