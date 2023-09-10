const express = require('express');
const router = express.Router();

const ControllerUser = require('../controllers/controllerUser');

// * role = admin

// auth
router.get('/signin', ControllerUser.findOne);

// user
router.get('/v1/admin/users', ControllerUser.adminFind);
router.post('/v1/admin/users', ControllerUser.adminSave);
router.get('/v1/admin/users/:id', ControllerUser.adminFindById);
router.put('/v1/admin/users/:id', ControllerUser.adminFindByIdAndUpdate);
router.delete('/v1/admin/users/:id', ControllerUser.adminFindByIdAndDelete);

// * role = customer

module.exports = router;
