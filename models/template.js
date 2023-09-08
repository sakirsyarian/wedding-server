'use strict';

const mongoose = require('../config/mongo');

const templateSchema = new mongoose.Schema({
    name: String,
    categoryId: String,
    author: String,
    colors: {
        primary: String,
        secondary: String,
        tertiary: String,
        text: String,
    },
    fonts: {
        heading: String,
        subHeading: String,
        body: String,
    },
    images: {
        greeting: String,
        background: String,
        above: String,
        frame: String,
        below: String,
        card: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    test: Boolean,
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
