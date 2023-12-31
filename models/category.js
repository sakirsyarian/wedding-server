'use strict';

const mongoose = require('../config/mongodb');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
        },
    },
    { timestamps: true }
);

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
