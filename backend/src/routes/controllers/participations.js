const Participation = require('../../models/Participation');

module.exports = {

    getParticipationsByUserId: (req, res) => {
        var user_id = req.params.userId

        var query = { UserId: user_id, ParticipationStatus: true }

        Participation.find(query, (err, participations) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(participations)
        })
    },

    getParticipationsByProjectId: (req, res) => {
        var project_id = req.params.projectId

        var query = { ProjectId: project_id, ParticipationStatus: true }

        Participation.find(query, (err, participations) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(participations)
        })
    },

    createParticipation: (req, res) => {
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
    },

    deleteParticipation: (req, res) => {
        var participation_id = req.params.participationId

        var query = { ParticipationStatus: false }

        Participation.findByIdAndUpdate(participation_id, query, (err, participation) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(participation)
        });
    }

}