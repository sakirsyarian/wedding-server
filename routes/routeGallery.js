const express = require('express');
const router = express.Router();

const ControllerGallery = require('../controllers/controllerGallery');

// * role = admin

// * role = customer
router.get('/v1/customer/galleries', ControllerGallery.customerGalleryFindOne);
router.post('/v1/customer/galleries', ControllerGallery.customerGallerySave);
router.put('/v1/customer/galleries', ControllerGallery.customerGalleryFindOneAndUpdate);

module.exports = router;
