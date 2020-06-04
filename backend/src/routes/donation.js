const express = require('express')
const donation_routes = express.Router();

donation_routes.get('/api/donation', (req, res) => {
    res.status(500).end()
})

module.exports = donation_routes;