const express = require('express');
const router = express.Router();

const ControllerCategory = require('../controllers/controllerCategory');

router.get('/v1/admin/categories', ControllerCategory.adminFind);
router.post('/v1/admin/categories', ControllerCategory.adminSave);
router.get('/v1/admin/categories/:id', ControllerCategory.adminFindById);
router.put('/v1/admin/categories/:id', ControllerCategory.adminFindByIdAndUpdate);
router.delete('/v1/admin/categories/:id', ControllerCategory.adminFindByIdAndDelete);

module.exports = router;
