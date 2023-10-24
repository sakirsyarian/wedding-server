const express = require('express');
const router = express.Router();

const ControllerEvent = require('../controllers/controllerEvent');

// * role = admin

// * role = customer
router.get('/v1/customer/events', ControllerEvent.customerEventFindOne);
router.post('/v1/customer/events', ControllerEvent.customerEventSave);
router.put('/v1/customer/events', ControllerEvent.customerEventFindOneAndUpdate);

module.exports = router;
