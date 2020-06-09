const express = require('express');
const Participation = require('../models/Participation');
const participation_routes = express.Router();

participation_routes.get('/participation/:userId/:projectId', (req, res) => {
    var query = {}
    var user_id = req.params.userId
    var project_id = req.params.projectId
    
    Participation.find(query, (err, participation))
    const all = await Participation_model.find(filter);

    res.send(all)
});

participation_routes.post('/participation', (req, res) => {

});

participation_routes.put('/participation', (req, res) => {

});


participation_routes.delete('/participation', (req, res) => {

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