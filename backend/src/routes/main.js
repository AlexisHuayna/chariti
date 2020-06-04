const user_routes = require('./user');
const donation_routes = require('./donation');
const project_routes = require('./project');

module.exports = app => {
    app.use(user_routes);
    app.use(donation_routes);
    app.use(project_routes);
}