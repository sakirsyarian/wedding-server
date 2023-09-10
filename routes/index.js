'use strict';

const express = require('express');
const router = express.Router();

const routerUser = require('./routeUser');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

router.use(routerUser);

module.exports = router;
