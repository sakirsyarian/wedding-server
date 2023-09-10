'use strict';

const express = require('express');
const router = express.Router();

const authentication = require('../middlewares/auth');
const routerUser = require('./routeUser');
const routerRole = require('./routeRole');
const routerAuth = require('./routeAuth');
const routerTestimonial = require('./routeTestimonial');

router.get('/', (req, res) => {
    res.status(200).json({
        title: 'Wedding Server',
        author: 'Ahmad Sarian',
        version: '1.0.0',
        message: 'Hello World!',
    });
});

router.use(routerAuth);
router.use(authentication);

router.use(routerUser);
router.use(routerRole);
router.use(routerTestimonial);

module.exports = router;
