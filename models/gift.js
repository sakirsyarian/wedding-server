'use strict';

const mongoose = require('../config/mongodb');

const GiftSchema = new mongoose.Schema(
    {
        bank: {
            bankName: String,
            bankUser: String,
            bankNumber: String,
        },
        digital: {
            digitalName: String,
            digitalUser: String,
            digitalNumber: String,
        },
        address: {
            addressName: String,
            addressNumber: String,
            addressHome: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, '{PATH} is required'],
        },
    },
    { timestamps: true }
);

const Gift = mongoose.model('Gift', GiftSchema);

module.exports = Gift;
