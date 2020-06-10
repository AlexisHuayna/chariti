const express = require('express');
const project_routes = express.Router();
const project_controller = require('./controllers/projects')

project_routes.get('/projects', (req, res) => {
    project_controller.getProjects(req, res)
});

project_routes.get('/projects/:id', (req, res) => {
    project_controller.getProjectByProjectId(req, res)
});

project_routes.get('/projects/owners/:userId', (req, res) => {
    project_controller.getProjectsByOwnerId(req, res)
});

project_routes.post('/projects/:userId', (req, res) => {
   project_controller.createProject(req, res) 
});

project_routes.put('/projects/:projectId', (req, res) => {
    project_controller.updateProject(req, res)
});

project_routes.delete('/project/:projectId', (req, res) => {
    project_controller.deleteProject(req, res)
});

/*
How handle project close 
*/

module.exports = project_routes