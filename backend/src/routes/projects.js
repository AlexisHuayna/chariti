const express = require('express');
const project_routes = express.Router();

project_routes.get('/api/project', (req, res) => {
    res.status(500).end()
});

module.exports = project_routes;