const usuario_routes = require('./user');
const donacion_routes = require('./donacion');
const proyecto_routes = require('./proyecto');

module.exports = app => {
    app.use(usuario_routes);
    app.use(donacion_routes);
    app.use(proyecto_routes);
}