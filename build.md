# 构建方法

## gitbook安装

* npm install gitbook-cli -g

## 首次构建

* 进入文档根目录，执行gitbook install
* 执行build_doc.sh
* 进入docweb目录，执行npm install 

## 非首次构建

* 文档根目录执行build_doc.sh

## 浏览效果

* 进入docweb目录，执行node app.js。
* 在浏览器中访问127.0.0.1:3002

## 修改与提交

* 文档在doc目录下修改。
* 提交时doc和docweb目录均需要提交。