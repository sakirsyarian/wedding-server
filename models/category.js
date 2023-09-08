'use strict';

const mongoose = require('../config/mongo');

const categorySchema = new mongoose.Schema({
    name: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    test: Boolean,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
