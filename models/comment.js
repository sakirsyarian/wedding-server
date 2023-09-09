'use strict';

const mongoose = require('../config/mongodb');

const CommentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        attendance: {
            type: String,
            required: true,
        },
        message: String,
    },
    { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
