#!/bin/bash
set -e
# build document
build_doc() {
  set -x
  gitbook build
  cp -rf _book/doc/v1/images/* docweb/static/doc/v1/images
  cp -rf _book/doc/v1/* docweb/views/doc/v1
  rm -rf docweb/views/doc/v1/images
  cp _book/doc/index.html docweb/views/doc/index.html
  set +x
}

if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  cat << EOF
Run the command the build release of the doc:
sh build_doc.sh
EOF
注意： Windows下也可使用（需要安装git）
else
  echo "start build doc"
  build_doc
  echo "build doc success"
fi