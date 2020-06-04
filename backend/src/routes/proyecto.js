const express = require('express');
const proyecto_routes = express.Router();

proyecto_routes.get('/api/proyecto', (req, res) => {
    res.status(500).end()
});

module.exports = proyecto_routes;