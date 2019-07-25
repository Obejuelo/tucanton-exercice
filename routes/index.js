const express = require('express');
const app = express();

app.use(require('./equipo'));
app.use(require('./usuario'));
app.use(require('./cliente'));

module.exports = app;