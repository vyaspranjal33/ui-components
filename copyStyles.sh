#!/bin/bash
set -e

cd $(dirname ${0})
mkdir -p packages/
cd src

rsync --relative -r --include="*/" --include="*.scss" --exclude="*" ./ ../packages/ui-components/
rsync --relative -r --prune-empty-dirs  --include="*/" --include="*.scss.d.ts" --exclude="*" ./ ../packages/ui-components/@types/