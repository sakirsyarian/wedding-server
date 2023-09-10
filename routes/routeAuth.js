// auth
const express = require('express');
const router = express.Router();

const ControllerUser = require('../controllers/controllerUser');

// * role = admin
router.post('/v1/admin/signin', ControllerUser.adminSignin);

// * role = customer

module.exports = router;
