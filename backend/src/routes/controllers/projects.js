const Project = require('../../models/Project');

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
        var query = { UserOwnerId: user_owner, ProjectState: true }

        Project.find(query, (err, projects) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(projects)
        });
    },

    createProject: (req, res) => {
        var user_owner = req.params.userId

        var new_project = new Project({
            UserOwnerId: user_owner,
            ProjectName: req.body.ProjectName,
            ProjectDescription: req.body.ProjectDescription,
            ProjectDateInit: req.body.ProjectDateInit,
            ProjectDateClose: req.body.ProjectDateClose
        });

        new_project.save((err, project) => {
            if(err) {
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

        Project.findByIdAndUpdate(project_id, update_values, (err, project) => {
            if(err){
                res.status(500).end()
            }

            res.status(204).send(project)
        })
    },

    deleteProject: (req, res) => {
        var project_id = req.params.projectId
        var query = {ProjectStatus: false}

        //here send mail to all participants

        Project.findByIdAndUpdate(project_id, query, (err, project) => {
            if(err){
                res.status(500).end()
            }
            res.status(200).send(project)
        });

    }
    
}
/*
How handle project close 
*/
