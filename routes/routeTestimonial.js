const express = require('express');
const router = express.Router();

const ControllerTestimonial = require('../controllers/controllerTestimonial');

// * role = admin
router.get('/v1/admin/testimonials', ControllerTestimonial.adminFind);
router.delete('/v1/admin/testimonials/:id', ControllerTestimonial.adminFindByIdAndDelete);

// * role = customer
router.post('/v1/customer/testimonials', ControllerTestimonial.customerSave);
router.put('/v1/customer/testimonials/:id', ControllerTestimonial.customerFindByIdAndUpdate);

module.exports = router;
