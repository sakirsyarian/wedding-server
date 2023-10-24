'use strict';

const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT, { expiresIn: '30m' });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT, { expiresIn: '2d' });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT, (err, decoded) => {
        if (err) return err;
        return decoded;
    });
};

module.exports = {
    generateToken,
    generateRefreshToken,
    verifyToken,
};
