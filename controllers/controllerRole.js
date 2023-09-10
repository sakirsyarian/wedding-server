'use strict';

const Role = require('../models/role');

class ControllerRole {
    static async adminFind(req, res, next) {
        try {
            const role = await Role.find();
            res.status(200).json({ isSuccess: true, data: role });
        } catch (error) {
            next(error);
        }
    }

    static async adminSave(req, res, next) {
        try {
            const { name } = req.body;

            const createRole = new Role({ name });
            const role = await createRole.save();

            res.status(201).json({ isSuccess: true, data: role });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindById(req, res, next) {
        try {
            const { id } = req.params;
            const role = await Role.findById(id);

            if (!role) {
                throw {
                    name: 'NotFound',
                    message: 'Role not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: role });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndUpdate(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const role = await Role.findByIdAndUpdate(id, { name }, { returnDocument: 'after', runValidators: true });

            if (!role) {
                throw {
                    name: 'NotFound',
                    message: 'Role not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: role });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndDelete(req, res, next) {
        try {
            const { id } = req.params;
            const role = await Role.findByIdAndDelete(id);

            if (!role) {
                throw {
                    name: 'NotFound',
                    message: 'Role not found',
                };
            }

            res.status(200).json({ message: `${role.name} successfully deleted` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerRole;
