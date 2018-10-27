```
▲ ~ http POST 127.0.0.1:2048 query="{__typename}" -v
POST / HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 25
Content-Type: application/json
Host: 127.0.0.1:4040
User-Agent: HTTPie/0.9.9

{
    "query": "{__typename}"
}

HTTP/1.1 200 OK
cache-control: max-age=0, private, must-revalidate
content-length: 39
content-type: application/json; charset=utf-8
date: Sat, 22 Sep 2018 21:58:16 GMT
server: Cowboy

{
    "data": {
        "__typename": "RootQueryType"
    }
}
```
