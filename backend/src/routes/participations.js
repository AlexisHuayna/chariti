const express = require('express');
const Participation = require('../models/Participation');
const participation_routes = express.Router();

participation_routes.get('/participations/users/:userId', (req, res) => {
    var user_id = req.params.userId

    var query = { UserId: user_id, ParticipationStatus: true }

    Participation.find(query, (err, participations) => {
        if(err){
            res.status(500).end()
        }
        res.status(200).send(participations)
    })
});

participation_routes.get('/participations/projects/:projectId', (req, res) => {
    var project_id = req.params.projectId

    var query = { ProjectId: project_id, ParticipationStatus: true }

    Participation.find(query, (err, participations) => {
        if(err){
            res.status(500).end()
        }
        res.status(200).send(participations)
    })
});

participation_routes.post('/participations/:userId/:projectId', (req, res) => {
    var user_id = req.params.userId
    var project_id = req.params.projectId
    
    var new_participation = new Participation({
        UserId: user_id,
        ProjectId: project_id,
    });

    new_participation.save((err, participation) => {
        if(err){
            res.status(500).end()
        }
        res.status(200).send(participation)
    });
});

participation_routes.delete('/participations/:participationId', (req, res) => {
    var participation_id = req.params.participationId

    var query = { ParticipationStatus: false }

    Participation.findByIdAndUpdate(participation_id, query, (err, participation) => {
        if(err){
            res.status(500).end()
        }
        res.status(200).send(participation)
    });
});


module.exports = participation_routes;