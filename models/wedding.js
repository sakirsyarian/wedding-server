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
        mainImage: {
            type: String,
            required: [true, '{PATH} is required'],
        },
        music: String,
        men: {
            menName: {
                type: String,
                required: [true, '{PATH} is required'],
            },
            menImage: {
                type: String,
                required: [true, '{PATH} is required'],
            },
            menFather: String,
            menMother: String,
            menSocialMedia: {
                menFacebook: String,
                menInstagram: String,
                menThreads: String,
            },
        },
        female: {
            femaleName: {
                type: String,
                required: [true, '{PATH} is required'],
            },
            femaleImage: {
                type: String,
                required: [true, '{PATH} is required'],
            },
            femaleFather: String,
            femaleMother: String,
            femaleSocialMedia: {
                femaleFacebook: String,
                femaleInstagram: String,
                femaleThreads: String,
            },
        },
        countDown: Date,
        marriageContract: {
            marriageDate: Date,
            marriageLocation: String,
        },
        reception: {
            receptionDate: Date,
            receptionLocation: String,
        },
        loveStory: {
            beginning: {
                beginningImage: String,
                beginningDate: Date,
                beginningDescription: String,
            },
            dating: {
                datingImage: String,
                datingDate: Date,
                datingDescription: String,
            },
            wedding: {
                weddingImage: String,
                weddingDate: Date,
                weddingDescription: String,
            },
        },
        galleries: [String],
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
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, '{PATH} is required'],
        },
        test: Boolean,
    },
    { timestamps: true }
);

// Menerapkan plugin pada skema
WeddingSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Wedding = mongoose.model('Wedding', WeddingSchema);

module.exports = Wedding;
