const express = require('express');
const user_routes = express.Router();
const User = require('../models/User');

user_routes.get('/users', (req, res) => {
    var query = { UserEmail: req.body.email, UserStatus: true }

    User.findOne(query, (err, user) => {
        if(err){
            res.status(500).end()
        }

        res.status(201).send(user);
    });

});

user_routes.post('/users', (req, res) => {
    
    var new_user = new User({
        UserEmail: req.body.email,
        UserName: req.body.name,
        UserDescription: req.body.description,
        UserNumberContact: req.body.numberContact ? req.body.numberContact : "",
    });
    
    new_user.save((err, user) => {
        if(err){
            res.status(500).end();
        }
        res.status(201).send(user);
    });

});

user_routes.put('/users/:id', (req, res) => {

});

user_routes.delete('/users', (req, res) => {

    var query = { UserEmail: req.body.email, UserStatus: true }

    User.findOneAndUpdate(query, {UserStatus: false}, (err, user) => {
        if(err) res.status(500).end()
        
        res.status(204).send(user)
    });

});

/*
ruta para obtener user params correo
ruta para agregar user params correo, name, descripcion, contact
ruta para borrar usuario logicamente
ruta para obtner lista de usuarios
*/

module.exports = user_routes;