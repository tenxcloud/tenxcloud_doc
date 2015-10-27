gitbook build

rm -rf _book/docweb

echo copied views into docweb
cp -r _book/doc/*  docweb/views/doc

echo copied gitbook into docweb
cp -r _book/gitbook/*  docweb/static/gitbook

cp -r _book/doc/v1/images  docweb/static/doc/v1