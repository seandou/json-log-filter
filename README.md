json-log-filter
================




例子
----------

- 查看响应时间大于 800 毫秒的请求

```
tail -f access.json.log | filter '*' '_["request-time"]>0.8'
```

- 查看 404 的请求

```
tail -f access.json.log | filter '*' '_.status==404'
```

