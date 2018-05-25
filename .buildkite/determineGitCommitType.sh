#!/bin/bash
set -e

if git status --porcelain | cut -d ' ' -f 1 | grep A; then
    echo "Git add" 
    git commit -m "[Prepublish Built]"
else
    echo "Git skip" 
    git commit -m "[Prepublish Built]" --allow-empty
fi
