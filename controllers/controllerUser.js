'use strict';

const User = require('../models/user');
const Role = require('../models/role');
const { hashPassword, comparePassword } = require('../lib/bcrypt');
const { generateToken } = require('../lib/jwt');

class ControllerUser {
    // * role = admin

    // auth
    static async adminSignin(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                throw {
                    name: 'AuthenticationError',
                    message: 'invalid email/ password',
                };
            }

            const isValid = comparePassword(password, user.password);
            if (!isValid) {
                throw {
                    name: 'AuthenticationError',
                    message: 'invalid email/ password',
                };
            }

            // if role is not admin, return 403
            const role = await Role.findOne({ _id: user.role });
            if (role.name !== 'Admin') {
                throw {
                    name: 'Forbidden',
                    message: 'user is forbidden to enter',
                };
            }

            user.password = null;
            const access_token = generateToken({ id: user._id });

            res.status(200).json({
                isSuccess: true,
                access_token,
                data: user,
            });
        } catch (error) {
            next(error);
        }
    }

    // user
    static async adminFind(req, res, next) {
        try {
            const users = await User.find().populate('role');
            if (!users.length) {
                throw {
                    name: 'NotFound',
                    message: 'user data does not exist',
                };
            }

            users.map((item) => (item.password = null));
            res.status(200).json({ isSuccess: true, data: users });
        } catch (error) {
            next(error);
        }
    }

    static async adminSave(req, res, next) {
        try {
            const { email, password, name, phoneNumber, role } = req.body;

            const bcryptjs = hashPassword(password);
            const createUser = new User({ email, password: bcryptjs, name, phoneNumber, role });
            const user = await createUser.save();

            user.password = null;
            res.status(201).json({ isSuccess: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindById(req, res, next) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                throw {
                    name: 'NotFound',
                    message: 'user not found',
                };
            }

            user.password = null;
            res.status(200).json({ isSuccess: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndUpdate(req, res, next) {
        try {
            const { id } = req.params;
            const { email, name, phoneNumber, role } = req.body;

            const user = await User.findByIdAndUpdate(
                id,
                { email, name, phoneNumber, role },
                { returnDocument: 'after', runValidators: true }
            );

            if (!user) {
                throw {
                    name: 'NotFound',
                    message: 'user not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndPatch(req, res, next) {
        try {
            const { id } = req.params;
            const { password } = req.body;

            const bcryptjs = hashPassword(password);
            const user = await User.findByIdAndUpdate(
                id,
                { password: bcryptjs },
                { returnDocument: 'after', runValidators: true }
            );

            if (!user) {
                throw {
                    name: 'NotFound',
                    message: 'user not found',
                };
            }

            res.status(200).json({ isSuccess: true, message: 'password successfully updated' });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndDelete(req, res, next) {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndDelete(id);

            if (!user) {
                throw {
                    name: 'NotFound',
                    message: 'user not found',
                };
            }

            res.status(200).json({ message: `${user.name} successfully deleted` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerUser;
