'use strict';

const mongoose = require('../config/mongo');

const TestimonialSchema = new mongoose.Schema(
    {
        valuation: {
            type: String,
            required: true,
        },
        message: String,
        test: Boolean,
    },
    { timestamps: true }
);

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = { Testimonial, TestimonialSchema };
