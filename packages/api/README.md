```
docker build -t adeira/mobile-quick-payments-api .
docker image ls
docker run -p 80:3000 adeira/mobile-quick-payments-api
docker ps
docker stop fe37e002feda
```

Open: http://127.0.0.1/graphql

```
yarn babel-node packages/api/index.js
```

http://127.0.0.1:3000/graphql
