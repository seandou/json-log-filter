json-log-filter
================

安装
--------

```
npm install -g json-log-filter
```


使用
----------

- 查看响应时间大于 800 毫秒的请求

```
tail -f access.json.log | filter '*' '_["request-time"]>0.8'
```

- 查看 404 的请求

```
tail -f access.json.log | filter '*' '_.status==404'
```

- 过滤出时间在 2016-01-01 10:10 ~ 2016-01-01 10:11 的日志

```
cat access.json.log | filter 'ip,time,host,uri' '_.time.range("2016-01-01 10:10","2016-01-01 10:11")' 'json' > 20160101-10.log
```
