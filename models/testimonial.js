'use strict';

const mongoose = require('../config/mongodb');

const TestimonialSchema = new mongoose.Schema({
    valuation: {
        type: String,
        required: true,
    },
    message: String,
});

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = { Testimonial, TestimonialSchema };
