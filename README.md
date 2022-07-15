
## Get data

Use the other repo

1. change single quotes to double
2. put it all in an array 

## Get episode list from discovery list

```
cat discoveries.json | jq 'group_by(.episode.name) | map(.[0].episode)'
```

create a `number` key for each episode

https://unix.stackexchange.com/questions/628855/add-key-value-to-json-object

`jq --argjson newval "$( jo new_key="$somevalue" )" '.array[] += $newval' <<<"$json"`


https://unix.stackexchange.com/questions/680004/use-jq-to-update-property-of-object-that-contains-other-property-with-specific-v