'use strict';

const User = require('../models/user');
const Role = require('../models/role');

class ControllerUser {
    // * role = admin

    // auth
    static async findOne(req, res, next) {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });

            res.status(200).json({ isSuccess: true, data: user });
        } catch (error) {
            res.status(500).json({ isSuccess: false, error });
            next(error);
        }
    }

    // user
    static async adminFind(req, res, next) {
        try {
            const user = await User.find();
            res.status(200).json({ isSuccess: true, data: user });
        } catch (error) {
            res.status(500).json({ isSuccess: false, error });
            next(error);
        }
    }

    static async adminSave(req, res, next) {
        try {
            const { email, password, name, phoneNumber, role } = req.body;

            const createUser = new User({ email, password, name, phoneNumber, role });
            const user = await createUser.save();

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
                    message: 'User not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndUpdate(req, res, next) {
        try {
            const { id } = req.params;
            const { email, password, name, phoneNumber } = req.body;

            const user = await User.findByIdAndUpdate(
                id,
                { email, password, name, phoneNumber },
                { returnDocument: 'after', runValidators: true }
            );

            if (!user) {
                throw {
                    name: 'NotFound',
                    message: 'User not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: user });
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
                    message: 'User not found',
                };
            }

            res.status(200).json({ message: `${user.name} deleted successfully` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerUser;
