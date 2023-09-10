'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.use(errorHandler);

module.exports = app;
