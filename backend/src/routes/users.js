const express = require('express');
const user_routes = express.Router();

user_routes.get('/api/user', (req, res) => {
    res.status(500).end()
});

module.exports = user_routes;