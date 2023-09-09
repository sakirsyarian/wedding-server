'use strict';

const Role = require('../models/role');

const User = require('../models/user');
const userData = require('../data/user.json');

(async function () {
    const roleData = await Role.findOne({ name: 'admin' });
    const user = new User({
        ...userData,
        role: roleData._id,
    });

    await user.save();
    console.log('user created');
})();
