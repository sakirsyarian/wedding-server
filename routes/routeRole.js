const express = require('express');
const router = express.Router();

const ControllerRole = require('../controllers/controllerRole');

router.get('/v1/admin/roles', ControllerRole.adminFind);
router.post('/v1/admin/roles', ControllerRole.adminSave);
router.get('/v1/admin/roles/:id', ControllerRole.adminFindById);
router.put('/v1/admin/roles/:id', ControllerRole.adminFindByIdAndUpdate);
router.delete('/v1/admin/roles/:id', ControllerRole.adminFindByIdAndDelete);

module.exports = router;
