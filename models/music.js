'use strict';

const mongoose = require('../config/mongodb');

const MusicSchema = new mongoose.Schema(
    {
        title: String,
        singer: String,
        source: String,
    },
    { timestamps: true }
);

const Music = mongoose.model('Music', MusicSchema);

module.exports = Music;
