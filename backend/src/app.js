const express = require('express');
const server_config = require('./server/config');

const app = server_config(express());

require('./database/db');

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});