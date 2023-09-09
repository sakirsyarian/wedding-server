'use strict';

const Role = require('../models/role');
const rolesData = require('../data/role.json');

(async function () {
    await Role.create(rolesData);
    console.log('role created');
})();
