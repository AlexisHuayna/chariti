const express = require('express');
const participation_routes = express.Router();
const participation_controller = require('./controllers/participations');

participation_routes.get('/participations/users/:userId', (req, res) => {
    participation_controller.getParticipationsByUserId(req, res);
});

participation_routes.get('/participations/projects/:projectId', (req, res) => {
    participation_controller.getParticipationsByProjectId(req, res);
});

participation_routes.post('/participations/:userId/:projectId', (req, res) => {
    participation_controller.createParticipation(req, res);
});

participation_routes.delete('/participations/:participationId', (req, res) => {
    participation_controller.deleteParticipation(req, res);
});

module.exports = participation_routes;