'use strict';

const mongoose = require('../config/mongodb');

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
        },
    },
    { timestamps: true }
);

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;
