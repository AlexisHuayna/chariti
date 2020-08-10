const Project = require('../../models/Project');
const Donation = require('../../models/Donation');
const mongoose = require('mongoose');

module.exports = {

    getProjects: (req, res) => {
        var query = { ProjectStatus: true }

        Project.find(query, (err, projects) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(projects);
        });

    },

    getProjectByProjectId: (req, res) => {
        var project_id = req.params.id

        Project.findById(project_id, (err, project) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(project)
        });
    },

    getProjectsByOwnerId: (req, res) => {
        var user_owner = req.params.userId
        var query = { UserOwnerId: user_owner, ProjectStatus: true }

        Project.find(query, (err, projects) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(projects)
        });
    },
    
    getTotalAmount: (req, res) => {
        var project_id = req.params.projectId
        Donation.aggregate([
            { $match: { ProjectId: mongoose.Types.ObjectId(project_id)}},
            { $group: { _id: "$ProjectId", amount: {$sum: "$DonationAmount"} } }
        ]).exec((err, total) => {
            if(err){
                res.status(500).end();
            };
            res.status(200).send(total);
        });
    },

    createProject: (req, res) => {
        var user_owner = req.body.UserOwnerId

        var new_project = new Project({
            UserOwnerId: user_owner,
            ProjectName: req.body.ProjectName,
            ProjectDescription: req.body.ProjectDescription,
            ProjectDateInit: req.body.ProjectDateInit,
            ProjectDateClose: req.body.ProjectDateClose
        });

        new_project.save((err, project) => {
            if(err) {
                console.log(err)
                res.status(500).end()
            }
            res.status(200).send(project)
        });
    },

    updateProject: (req, res) => {
        var project_id = req.params.projectId
        
        var update_values = {
            ProjectName: req.body.ProjectName ? req.body.ProjectName : "",
            ProjectDescription: req.body.ProjectDescription ? req.body.ProjectDescription : "",
            ProjectDateInit: req.body.ProjectDateInit ? req.body.ProjectDateInit : "",
            ProjectDateClose: req.body.ProjectDateClose ? req.body.ProjectDateClose : ""
        }

        Project.findByIdAndUpdate(project_id, update_values, {new: true}, (err, project_updated) => {
            if(err){
                res.status(500).end()
            }

            res.status(200).send(project_updated)
        })
    },

    deleteProject: (req, res) => {
        var project_id = req.params.projectId
        var query = {ProjectStatus: false}

        //here send mail to all participants

        Project.findByIdAndUpdate(project_id, query, {new: true}, (err, project_updated) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(project_updated)
        });

    }
    
}
/*
How handle project close 
*/
