'use strict';

const { verifyToken } = require('../lib/jwt');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        let { authorization } = req.headers;
        // console.log(authorization, 'authorization');

        if (!authorization) {
            throw {
                name: 'AuthenticationError',
                message: 'you must login first',
            };
        }

        authorization = authorization.replace('Bearer ', '');
        const decode = verifyToken(authorization);

        if (decode.name === 'TokenExpiredError') {
            throw {
                name: 'AuthenticationError',
                message: 'you must login again',
            };
        }

        const user = await User.findById(decode.id);
        if (!user) {
            throw {
                name: 'NotFound',
                message: 'user not found, please login first',
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
