#!/bin/bash
set -e
# Get where the script is currently running from, through bash magic
DIRNAME=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )


if git log -1 --pretty=%B | cat | grep -e '\[Prepublish Built\]'; then
    echo "Publish Time" 
    buildkite-agent pipeline upload $DIRNAME/publishPipeline.yml
else
    echo "Need to build" 
    buildkite-agent pipeline upload $DIRNAME/buildPipeline.yml
fi
