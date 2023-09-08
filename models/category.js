'use strict';

const mongoose = require('../config/mongo');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        test: Boolean,
    },
    { timestamps: true }
);

const Category = mongoose.model('Category', CategorySchema);

module.exports = { Category, CategorySchema };
