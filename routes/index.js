'use strict';

const express = require('express');
const router = express.Router();

const authentication = require('../middlewares/auth');
const routerUser = require('./routeUser');
const routerRole = require('./routeRole');
const routerAuth = require('./routeAuth');
const routerWedding = require('./routeWedding');
const routerBride = require('./routeBride');
const routerCategory = require('./routeCategory');
const routerTheme = require('./routeTheme');
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
router.use(routerWedding);
router.use(routerBride);
router.use(routerCategory);
router.use(routerTheme);
router.use(routerTestimonial);

module.exports = router;
