'use strict';

const uniqueValidator = require('mongoose-unique-validator');

const mongoose = require('../config/mongodb');
const { TestimonialSchema } = require('./testimonial');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            uniqueCaseInsensitive: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: String,
        image: {
            type: String,
            default: 'default.png',
        },
        phoneNumber: String,
        isActive: Boolean,
        testimonial: TestimonialSchema,
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
            required: true,
        },
        test: Boolean,
    },
    { timestamps: true }
);

// Menerapkan plugin pada skema
UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema);

module.exports = User;
