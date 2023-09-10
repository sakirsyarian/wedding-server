'use strict';

const express = require('express');
const router = express.Router();

const routerUser = require('./routeUser');
const routerRole = require('./routeRole');

router.get('/', (req, res) => {
    res.status(200).json({
        title: 'Wedding Server',
        author: 'Ahmad Sarian',
        version: '1.0.0',
        message: 'Hello World!',
    });
});

router.use(routerUser);
router.use(routerRole);

module.exports = router;
