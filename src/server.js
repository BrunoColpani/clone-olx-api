const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const routers = require('./routes');

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static('public'));

server.use('/', routers);

server.listen(process.env.PORT, () => {
  console.log('Server is running!');
});