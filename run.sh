#!/bin/bash

git pull

build_doc.sh

cd docweb

npm install

node app.js