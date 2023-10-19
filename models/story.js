'use strict';

const mongoose = require('../config/mongodb');

const StorySchema = new mongoose.Schema(
    {
        beginning: {
            beginningImage: String,
            beginningDate: Date,
            beginningStory: String,
        },
        dating: {
            datingImage: String,
            datingDate: Date,
            datingStory: String,
        },
        wedding: {
            weddingImage: String,
            weddingDate: Date,
            weddingStory: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, '{PATH} is required'],
        },
    },
    { timestamps: true }
);

const Story = mongoose.model('Story', StorySchema);

module.exports = Story;
