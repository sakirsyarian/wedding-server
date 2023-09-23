// auth
const express = require('express');
const router = express.Router();

const ControllerUser = require('../controllers/controllerUser');

// * role = admin
router.post('/v1/admin/signin', ControllerUser.adminSignin);
router.get('/v1/admin/refresh-token', ControllerUser.adminRefreshToken);

// * role = customer

module.exports = router;
