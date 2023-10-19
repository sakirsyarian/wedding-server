const express = require('express');
const router = express.Router();

const ControllerStory = require('../controllers/controllerStory');

// * role = admin

// * role = customer
router.get('/v1/customer/story', ControllerStory.customerStoryFindOne);
router.post('/v1/customer/story', ControllerStory.customerStorySave);
router.put('/v1/customer/story', ControllerStory.customerStoryFindOneAndUpdate);

module.exports = router;
