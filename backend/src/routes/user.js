const express = require('express');
const user_routes = express.Router();
const user_controller = require('./controllers/users');

user_routes.get('/users', (req, res) => {
    user_controller.getUsers(req, res);
});

user_routes.get('/users/:userId', (req, res) => {
    user_controller.getUserByUserId(req, res);
})

user_routes.post('/users', (req, res) => {
    
    user_controller.createUser(req, res);
});

user_routes.put('/users/:userId', (req, res) => {
    user_controller.updateUser(req, res);
});

user_routes.delete('/users', (req, res) => {
    user_controller.deleteUser(req, res);
});

module.exports = user_routes;