'use strict';

const User = require('../models/user');

const Wedding = require('../models/wedding');
const weddingData = require('../data/wedding.json');

(async function () {
    const userData = await User.findOne({ name: 'Ahmad Sarian' });
    const wedding = new Wedding({
        ...weddingData,
        user: userData._id,
    });

    await wedding.save();
    console.log('wedding created');
})();
