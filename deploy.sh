#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

git init
git add dist
git commit -m 'deploy ✨🚀'

git push -f git@github.com:Zenika/conference-kit.git master:gh-pages

cd -
