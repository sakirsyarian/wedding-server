'use strict';

const errorHandler = (err, req, res, next) => {
    const statusCode = (code, message) => {
        return res.status(code).json(message);
    };

    if (err.name === 'ValidationError') {
        const msg = [];
        for (let name in err.errors) {
            msg.push(err.errors[name].message);
        }

        return statusCode(400, { name: err.name, message: msg });
    }

    if (err.name === 'AuthenticationError') {
        return statusCode(401, { name: err.name, message: err.message });
    }

    if (err.name === 'JsonWebTokenError') {
        return statusCode(401, { name: err.name, message: 'Invalid token' });
    }

    if (err.name === 'TokenExpiredError') {
        return statusCode(401, { name: err.name, message: 'Invalid token' });
    }

    if (err.name === 'RefreshTokenExpiredError') {
        return statusCode(401, { name: err.name, message: err.message });
    }

    if (err.name === 'Forbidden') {
        return statusCode(403, { name: err.name, message: err.message });
    }

    if (err.name === 'NotFound') {
        return statusCode(404, { name: err.name, message: err.message });
    }

    return statusCode(500, { message: 'Internal server error' });
};

module.exports = errorHandler;
