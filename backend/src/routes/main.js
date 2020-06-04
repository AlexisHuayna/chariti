const user_routes = require('./users');
const donation_routes = require('./donations');
const project_routes = require('./projects');

module.exports = app => {
    app.use(user_routes);
    app.use(donation_routes);
    app.use(project_routes);
}