const express = require('express');
const router = express.Router();

const ControllerBride = require('../controllers/controllerBride');

// * role = admin

// * role = customer
router.get('/v1/customer/brides', ControllerBride.customerBrideFindOne);
router.post('/v1/customer/brides', ControllerBride.customerBrideSave);
router.put('/v1/customer/brides', ControllerBride.customerBrideFindOneAndUpdate);

module.exports = router;
