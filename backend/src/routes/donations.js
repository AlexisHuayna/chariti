const express = require('express')
const donation_routes = express.Router();
const Donation = require('../models/Donation');

donation_routes.get('/donations', (req, res) => {
    res.status(500).end()
});

donation_routes.post('/donations', (req, res) => {
    res.status(500).end()
});


/*
ruta para obtener donaciones params id usuario
ruta para obtener donaciones params id proyecto
ruta para obtener donacion params id usuario, id proyecto
ruta para agregar donacion params id usuario, id proyecto, monto 
*/

module.exports = donation_routes;