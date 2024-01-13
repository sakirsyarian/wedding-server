'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const errorHandler = require('./middlewares/error');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(errorHandler);

module.exports = app;
