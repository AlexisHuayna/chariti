const user_routes = require('./user');
const donation_routes = require('./donation');
const project_routes = require('./project');
const participation_routes = require('./participation');

module.exports = app => {
    app.use(user_routes);
    app.use(donation_routes);
    app.use(project_routes);
    app.use(participation_routes);
}