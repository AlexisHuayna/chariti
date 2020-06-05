const express = require('express');
const project_routes = express.Router();

project_routes.get('/api/project', (req, res) => {
    res.status(500).end()
});

/*
ruta para obtener lista de projectos
ruta para obtener un proyecto params id user
ruta para obtener agregar proyecto
ruta para modificar proyecto
ruta para cerrar un proyecto 
*/

module.exports = project_routes;