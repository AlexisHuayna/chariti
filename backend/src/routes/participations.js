const express = require('express');
const participation_routes = express.Router();

project_routes.get('/api/participation', (req, res) => {
    res.status(500).end()
});

/*
ruta para agregar participacion
ruta para eliminar participacion manera logica
ruta para ver todas las participaciones
ruta para ver participaciones por id project
ruta para ver participaciones por id user
ruta para ver numero de participaciones en project
*/

module.exports = participation_routes;