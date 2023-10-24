'use strict';

const mongoose = require('../config/mongodb');

const TestimonialSchema = new mongoose.Schema({
    score: {
        type: String,
        required: [true, '{PATH} is required'],
    },
    message: String,
});

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = { Testimonial, TestimonialSchema };
