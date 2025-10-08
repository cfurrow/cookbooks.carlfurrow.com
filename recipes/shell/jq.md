
# jq
[jqlang.github.io/jq/](https://jqlang.github.io/jq/)

> jq is like sed for JSON data - you can use it to slice and filter and map and transform structured data with the same ease that sed, awk, grep and friends let you play with text.


Filter a JSON array of objects by only outputting those that have a `state` that is NOT equal to "SUCCESS" or "SKIPPED":

```sh
gh pr checks --json 'state,name,workflow,link' | \
  jq '.[] | select(.state != "SUCCESS" and .state != "SKIPPED")'
```

Map the JSON objects (from kubernetes) in the `items` array by first setting each item's `.metadata.name` to the `$podname` variable, then collect the `.spect.container[]` items, and output the name and image of each container, along with the stored `$podname` variable.

```sh
kprod get -ojson pods -l app=identity-service | \
  jq -r '.items[] | .metadata.name as $podname | .spec.containers[] | {$podname, name, image}'
```
