const express = require('express');
const user_routes = express.Router();

user_routes.get('/api/user', (req, res) => {
    res.status(500).end()
});

/*
ruta para obtener user params correo
ruta para agregar user params correo, name, descripcion, contact
ruta para borrar usuario logicamente
ruta para obtner lista de usuarios
*/

module.exports = user_routes;