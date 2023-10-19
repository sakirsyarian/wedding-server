'use strict';

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('../config/mongodb');

const WeddingSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: [true, '{PATH} is required'],
            unique: true,
        },
        mainImage: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, '{PATH} is required'],
        },
        bride: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bride',
            required: [true, '{PATH} is required'],
        },
        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: [true, '{PATH} is required'],
        },
        theme: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Theme',
            required: [true, '{PATH} is required'],
        },
        story: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Story',
        },
        galleries: [String],
        music: String,
        gift: {
            bank: {
                bca: String,
                bri: String,
                bni: String,
                mandiri: String,
            },
            digital: {
                gopay: String,
                ovo: String,
                dana: String,
                linkaja: String,
            },
            address: String,
        },

        test: Boolean,
    },
    { timestamps: true }
);

// Menerapkan plugin pada skema
WeddingSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Wedding = mongoose.model('Wedding', WeddingSchema);

module.exports = Wedding;
