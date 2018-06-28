#!/bin/bash
set -e

cd $(dirname ${0})
mkdir -p packages/
cd src

rsync --relative -r ./*/*.scss* ../packages/ui-components/
rsync -r ./*/*.d.ts ../packages/ui-components/@types
