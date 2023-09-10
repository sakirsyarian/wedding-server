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
        wedding: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wedding',
            required: true,
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
