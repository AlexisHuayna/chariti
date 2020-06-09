const express = require('express');
const user_routes = express.Router();
const User = require('../models/User');

user_routes.get('/users', (req, res) => {
    var query = { }

    User.find(query, (err, users) => {
        if(err){
            res.status(500).end()
        }

        res.status(201).send(users);
    });
    
});

user_routes.get('/users/:userId', (req, res) => {
    var user_id = req.params.userId
    
    User.findById(user_id, (err, user) => {
        if(err){
            res.status(500).end()
        }
        
        if(!user['UserStatus']){
        
            //Change user status ?
            res.status(500).send(user);
        }

        res.status(200).send(user)
    });
})

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

user_routes.put('/users/:userId', (req, res) => {
    var user_id = req.params.userId

    var update_values = {
        UserName: req.body.name ? req.body.name : "",
        UserDescription: req.body.description ? req.body.description : "",
        UserNumberContact: req.body.numberContact ? req.body.numberContact : "",
    }

    User.findByIdAndUpdate(user_id, update_values, (err, user) => {
        if(err){
            res.status(500).end()
        }

        res.status(204).send(user)
    })
});

user_routes.delete('/users', (req, res) => {

    var query = { UserEmail: req.body.email, UserStatus: true }

    User.findOneAndUpdate(query, {UserStatus: false}, (err, user) => {
        if(err){
            res.status(500).end()  
        } 
        
        res.status(204).send(user)
    });

});


module.exports = user_routes;