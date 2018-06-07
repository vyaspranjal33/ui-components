#!/bin/bash
set -e

cd $(dirname ${0})
mkdir packages/
cd src

rsync --relative ./**/*.scss* ../packages/ui-components/
