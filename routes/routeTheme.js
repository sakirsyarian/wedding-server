const express = require('express');
const router = express.Router();

const ControllerTheme = require('../controllers/controllerTheme');

// * role = admin
router.get('/v1/admin/themes', ControllerTheme.adminFind);
router.post('/v1/admin/themes', ControllerTheme.adminSave);
router.get('/v1/admin/themes/:id', ControllerTheme.adminFindById);
router.put('/v1/admin/themes/:id', ControllerTheme.adminFindByIdAndUpdate);
router.delete('/v1/admin/themes/:id', ControllerTheme.adminFindByIdAndDelete);

// * role = customer
router.get('/v1/customer/themes', ControllerTheme.customerFind);
router.get('/v1/customer/theme/selected', ControllerTheme.customerThemeFindOne);
router.patch('/v1/customer/theme', ControllerTheme.customerThemeFindOneAndUpdate);

module.exports = router;
