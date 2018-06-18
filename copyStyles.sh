#!/bin/bash
set -e

cd $(dirname ${0})
mkdir -p packages/
cd src

rsync --relative ./**/*.scss* ../packages/ui-components/
