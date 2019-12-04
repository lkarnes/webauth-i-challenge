const express = require('express');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

server.get('/', (req, res) => {
    res.status(200).json({message: "Welcome!"})
})

server.use('/api', apiRouter);

module.exports = server;