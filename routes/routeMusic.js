const express = require('express');
const router = express.Router();

const ControllerMusic = require('../controllers/controllerMusic');

// * role = admin

// * role = customer
router.get('/v1/customer/musics', ControllerMusic.customerFind);
router.patch('/v1/customer/music', ControllerMusic.customerMusicFindOneAndUpdate);
router.get('/v1/customer/music/selected', ControllerMusic.customerMusicFindOne);

module.exports = router;
