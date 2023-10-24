'use strict';

const Role = require('../models/role');

const User = require('../models/user');
const userData = require('../data/user.json');
const { hashPassword } = require('../lib/bcrypt');

(async function () {
    const roleData = await Role.findOne({ name: 'Admin' });
    const user = new User({
        ...userData,
        role: roleData._id,
    });

    user.password = hashPassword(user.password);
    await user.save();

    console.log('user created');
})();
