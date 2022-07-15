#!/bin/bash

s3cmd --no-mime-magic --acl-public --delete-removed --delete-after sync _site/ s3://lnl-disco