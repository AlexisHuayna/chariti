const express = require('express');
const cors = require('cors')
const routes = require('../routes/main');
const morgan = require('morgan');

module.exports = app => {
    app.set('port', process.env.PORT || 8000);

    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cors());

    routes(app);

    return app;
}

