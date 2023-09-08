'use strict';

const mongoose = require('../config/mongo');

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
        test: Boolean,
    },
    { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
