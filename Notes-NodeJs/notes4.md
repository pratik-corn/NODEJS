# CRUD (Create, Read, Update, Read)
## Create an api to Receive the data from user
result of request :
|route: Route {
|
   path: '/register',
    stack: [ [Layer] ],
    methods: [Object: null prototype] { post: true }
  },
  params: [Object: null prototype] {},
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    'user-agent': 'PostmanRuntime/7.39.1',
    accept: '*/*',
    'cache-control': 'no-cache',
    'postman-token': '15613291-7009-4cce-a72b-1a183fdbb13c',
    host: 'localhost:3000',
    'accept-encoding': 'gzip, deflate, br',
    connection: 'keep-alive',
    'content-length': '0'
  },
  [Symbol(kHeadersCount)]: 16,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0
}

req-this shows the information of the client
thunder cleint acts as a frontend to send data to the backend when we send data in json format backend  doesnot understands it so we nned to initialize --app.use(express.json())-- now it can recive and interpret it.
same as ddata for user:
DO IT FOR BLOGS
<!-- make create and delete operation api for blog
for blogs
title,subtitle,descrption(these are the columns) -->