'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL || `mongodb://127.0.0.1:${MONGO_PORT}/wedding`;

try {
    const URI = MONGO_URL;
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.once('open', () => {
        console.log(`MongoDB connection successfully!`);
    });

    db.on('error', (error) => {
        console.log(`MongoDB connection error: ${error}`);
    });
} catch (error) {
    console.log(error);
}

module.exports = mongoose;
