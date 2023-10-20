const express = require('express');
const router = express.Router();

const ControllerGift = require('../controllers/controllerGift');

// * role = admin

// * role = customer
router.get('/v1/customer/gift', ControllerGift.customerGiftFindOne);
router.post('/v1/customer/gift', ControllerGift.customerGiftSave);
router.put('/v1/customer/gift', ControllerGift.customerGiftFindOneAndUpdate);

module.exports = router;
