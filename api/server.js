const express = require('express');

const server = express();

server.use(express.json());

server.get('/', () => {
    res.status(200).json({ message: 'Hi there user'});
});

module.exports = server;