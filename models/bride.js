'use strict';

const mongoose = require('../config/mongodb');

const BrideSchema = new mongoose.Schema(
    {
        male: {
            maleFullName: {
                type: String,
                required: [true, '{PATH} is required'],
            },
            maleNickName: String,
            maleImage: String,
            maleFatherName: String,
            maleMotherName: String,
            maleSocialMedia: {
                maleFacebook: String,
                maleInstagram: String,
                maleThreads: String,
            },
        },
        female: {
            femaleFullName: {
                type: String,
                required: [true, '{PATH} is required'],
            },
            femaleNickName: String,
            femaleImage: String,
            femaleFatherName: String,
            femaleMotherName: String,
            femaleSocialMedia: {
                femaleFacebook: String,
                femaleInstagram: String,
                femaleThreads: String,
            },
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

const Bride = mongoose.model('Bride', BrideSchema);

module.exports = Bride;
