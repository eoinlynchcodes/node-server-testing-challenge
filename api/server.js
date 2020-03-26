const express = require('express');
const server = express();

const bikeFunctions = require('../bikeFunctions');

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hi there user'});
});

server.get('/allBikes', (req, res) => {
    bikeFunctions.getAll()
    .then(allBikes => {
        res.status(200).json(allBikes);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = server;