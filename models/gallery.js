'use strict';

const mongoose = require('../config/mongodb');

const GallerySchema = new mongoose.Schema(
    {
        image: {
            imageOne: String,
            imageTwo: String,
            imageThree: String,
            imageFour: String,
            imageFive: String,
            imageSix: String,
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

const Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;
