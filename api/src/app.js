const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dogs = require('./routes/dogs')
const temperament = require('./routes/temperament');
const dog = require('./routes/dog');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true}));
server.use(express.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/dogs', dogs);
server.use('/temperament', temperament);
server.use('/dog', dog);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
