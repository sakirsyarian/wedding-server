const express = require('express');
const router = express.Router();

const ControllerStory = require('../controllers/controllerStory');
const multerConfig = require('../lib/multer');

// * role = admin

// * role = customer
router.get('/v1/customer/story', ControllerStory.customerStoryFindOne);
router.post('/v1/customer/story', ControllerStory.customerStorySave);
router.put(
    '/v1/customer/story',
    multerConfig.fields([{ name: 'beginningImage' }, { name: 'datingImage' }, { name: 'weddingImage' }]),
    ControllerStory.customerStoryFindOneAndUpdate
);

module.exports = router;
