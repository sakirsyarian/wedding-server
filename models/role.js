'use strict';

const mongoose = require('../config/mongo');

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        test: Boolean,
    },
    { timestamps: true }
);

const Role = mongoose.model('Role', RoleSchema);

module.exports = { Role, RoleSchema };
