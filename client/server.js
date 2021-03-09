const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 4200;

app.use('/', express.static(__dirname + '/dist/client'));

const server = http.createServer(app);

server.listen(port, ()=> console.log(`>>>> server running in port ${port}`));
