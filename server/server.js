const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const database = require('../database/database');
const routes = require('./routes');

const server = express();
server.use(bodyParser.json());

server.use('/api/', routes);

const port = 8082;
server.listen(port, () => {
  console.log('Listening on port ' + port);
});