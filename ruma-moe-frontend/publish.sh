#!/usr/bin/env bash

docker build . -t budo-moe-frontend
docker tag budo-moe-frontend:latest registry.walruslab.org/pub/budo-moe-frontend:latest
docker push registry.walruslab.org/pub/budo-moe-frontend:latest
