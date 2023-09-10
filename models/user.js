'use strict';

const uniqueValidator = require('mongoose-unique-validator');

const mongoose = require('../config/mongodb');
const { TestimonialSchema } = require('./testimonial');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            index: true,
            unique: true,
            required: [true, '{PATH} is required'],
            uniqueCaseInsensitive: true,
        },
        password: {
            type: String,
            required: [true, '{PATH} is required'],
        },
        name: String,
        image: {
            type: String,
            default: 'default.png',
        },
        phoneNumber: String,
        isActive: {
            type: Boolean,
            default: true,
        },
        testimonial: TestimonialSchema,
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
            required: [true, '{PATH} is required'],
        },
        test: Boolean,
    },
    { timestamps: true }
);

// Menerapkan plugin pada skema
UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const User = mongoose.model('User', UserSchema);

module.exports = User;
