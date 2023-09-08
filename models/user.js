'use strict';

const uniqueValidator = require('mongoose-unique-validator');

const mongoose = require('../config/mongo');
const { TestimonialSchema } = require('./testimonial');
const { RoleSchema } = require('./role');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: String,
        image: String,
        phoneNumber: Number,
        isActive: Boolean,
        testimonial: TestimonialSchema,
        role: RoleSchema,
        test: Boolean,
    },
    { timestamps: true }
);

// Menerapkan plugin pada skema
UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema);

module.exports = User;
