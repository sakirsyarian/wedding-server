'use strict';

const Music = require('../models/music');
const musicsData = require('../data/music.json');

(async function () {
    await Music.create(musicsData);
    console.log('music created');
})();
