const express = require('express')
const donacion_routes = express.Router();

donacion_routes.get('/api/donacion', (req, res) => {
    res.status(500).end()
})

module.exports = donacion_routes;