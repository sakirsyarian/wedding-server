'use strict';

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('../config/mongodb');

const WeddingSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        mainImage: {
            type: String,
            required: true,
        },
        music: String,
        men: {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            father: String,
            mother: String,
            socialMedia: {
                facebook: String,
                instagram: String,
                threads: String,
            },
        },
        female: {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            father: String,
            mother: String,
            socialMedia: {
                facebook: String,
                instagram: String,
                threads: String,
            },
        },
        countDown: Date,
        marriageContract: {
            date: Date,
            location: String,
        },
        reception: {
            date: Date,
            location: String,
        },
        loveStory: {
            beginning: {
                image: String,
                date: Date,
                description: String,
            },
            dating: {
                image: String,
                date: Date,
                description: String,
            },
            wedding: {
                image: String,
                date: Date,
                description: String,
            },
        },
        galleries: [String],
        gift: {
            bank: {
                bca: Number,
                bri: Number,
                bni: Number,
                mandiri: Number,
            },
            digital: {
                gopay: Number,
                ovo: Number,
                dana: Number,
                linkaja: Number,
            },
            address: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        test: Boolean,
    },
    { timestamps: true }
);

// Menerapkan plugin pada skema
WeddingSchema.plugin(uniqueValidator);
const Wedding = mongoose.model('Wedding', WeddingSchema);

module.exports = Wedding;
