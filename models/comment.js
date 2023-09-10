'use strict';

const mongoose = require('../config/mongodb');

const CommentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
        },
        attendance: {
            type: String,
            required: [true, '{PATH} is required'],
        },
        message: String,
        wedding: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wedding',
            required: [true, '{PATH} is required'],
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
