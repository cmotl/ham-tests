#!/bin/bash
mkdir -p .home
docker run -it --rm -p 3333:3333 -u $(id -u):$(id -g) -e "HOME=/src/.home" -v ${PWD}:/src -w /src node:10.15.3 bash
