const express = require('express');

const server = express();
const actionsRouter = require('./actions-router.js');
const projectsRouter = require('./project-router.js');




server.use(express.json());
server.use('/api/actions', actionsRouter);
server.use('/api/project', projectsRouter);




server.get('/', (req, res) => {
    res.send('birthday sprint....')
});





module.exports = server;