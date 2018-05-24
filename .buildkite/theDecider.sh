#!/bin/bash
set -e

if git log -1 --pretty=%B | cat | grep -e '\[Prepublish Built\]'; then
    buildkite-agent pipeline upload ./buildPipeline.yml
else
    buildkite-agent pipeline upload ./publishPipeline.yml
fi
