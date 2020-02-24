#!/usr/bin/env sh

# abort on errors
set -e

cd dist

# build
npm run build

git init
git add dist
git commit -m 'deploy ✨🚀'

git push -f git@github.com:Zenika/conference-kit.git master:gh-pages

cd -
