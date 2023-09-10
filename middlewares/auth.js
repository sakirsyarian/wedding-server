'use strict';

const { verifyToken } = require('../lib/jwt');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw {
                name: 'AuthenticationError',
                message: 'you must login first',
            };
        }

        const decode = verifyToken(authorization);
        const user = await User.findById(decode.id);

        if (!user) {
            throw {
                name: 'AuthenticationError',
                message: 'you must login first',
            };
        }

        delete decode.iat;
        delete decode.exp;
        req.user = decode;

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = auth;
