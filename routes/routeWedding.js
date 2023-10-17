const express = require('express');
const router = express.Router();

const ControllerWedding = require('../controllers/controllerWedding');

// * role = admin
router.get('/v1/admin/weddings', ControllerWedding.adminFind);
router.post('/v1/admin/weddings', ControllerWedding.adminSave);
router.get('/v1/admin/weddings/:id', ControllerWedding.adminFindById);
router.put('/v1/admin/weddings/:id', ControllerWedding.adminFindByIdAndUpdate);
router.patch('/v1/admin/weddings/:id', ControllerWedding.adminFindByIdAndPatch);
router.delete('/v1/admin/weddings/:id', ControllerWedding.adminFindByIdAndDelete);

// * role = customer
router.post('/v1/customer/weddings', ControllerWedding.customerSave);
router.get('/v1/customer/weddings/:id', ControllerWedding.customerFindOne);

module.exports = router;
