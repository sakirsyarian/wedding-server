'use strict';

const mongoose = require('../config/mongodb');

const TemplateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
        },
        categoryId: String,
        author: String,
        colors: {
            primary: String,
            secondary: String,
            tertiary: String,
            quaternary: String,
            quinary: String,
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
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, '{PATH} is required'],
        },
        test: Boolean,
    },
    { timestamps: true }
);

const Template = mongoose.model('Template', TemplateSchema);

module.exports = Template;
