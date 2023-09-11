const express = require('express');
const router = express.Router();

const ControllerTemplate = require('../controllers/controllerTemplate');

router.get('/v1/admin/templates', ControllerTemplate.adminFind);
router.post('/v1/admin/templates', ControllerTemplate.adminSave);
router.get('/v1/admin/templates/:id', ControllerTemplate.adminFindById);
router.put('/v1/admin/templates/:id', ControllerTemplate.adminFindByIdAndUpdate);
router.delete('/v1/admin/templates/:id', ControllerTemplate.adminFindByIdAndDelete);

module.exports = router;
