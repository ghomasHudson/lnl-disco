
Basic website that lists all the discoveries on the [Late Night Linux podcast](https://latenightlinux.com/)

🔴 Live: https://lnl-disco.website-eu-central-1.linodeobjects.com/

## Installation

`npm install` from the root of this repo 

The built website is in the `_site` folder

to run a local server `npm run serve`  
to build the site `npm run build`

## Get data

I gathered the data using [ghomasHudson's python script](https://github.com/ghomasHudson/latenightlinux-discoveries)

Then I:

1. changed single quotes to double
2. put it all in an array 

## Create episode list from discovery list

This is used to build episode pages

```
cd _data
cat discoveries.json | jq 'group_by(.episode.name) | map(.[0].episode)' > episodes.json
```
