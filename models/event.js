'use strict';

const mongoose = require('../config/mongodb');

const EventSchema = new mongoose.Schema(
    {
        main: {
            mainHeading: {
                type: String,
                required: [true, '{PATH} is required'],
            },
            mainDate: {
                type: Date,
                required: [true, '{PATH} is required'],
            },
            mainTimeStart: String,
            mainTimeFinish: String,
            mainUntilDone: Boolean,
            mainTimeZone: String,
            mainLocation: String,
            mainAddress: String,
        },
        optional: {
            optionalHeading: String,
            optionalDate: Date,
            optionalTimeStart: String,
            optionalTimeFinish: String,
            optionalUntilDone: Boolean,
            optionalTimeZone: String,
            optionalLocation: String,
            optionalAddress: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, '{PATH} is required'],
        },
        test: Boolean,
    },
    { timestamps: true }
);

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
