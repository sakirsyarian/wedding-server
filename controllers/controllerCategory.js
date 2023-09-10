'use strict';

const Category = require('../models/category');

class ControllerCategory {
    static async adminFind(req, res, next) {
        try {
            const category = await Category.find();
            if (!category.length) {
                throw {
                    name: 'NotFound',
                    message: 'category data does not exist',
                };
            }

            res.status(200).json({ isSuccess: true, data: category });
        } catch (error) {
            next(error);
        }
    }

    static async adminSave(req, res, next) {
        try {
            const { name } = req.body;

            const createCategory = new Category({ name });
            const category = await createCategory.save();

            res.status(201).json({ isSuccess: true, data: category });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindById(req, res, next) {
        try {
            const { id } = req.params;
            const category = await Category.findById(id);

            if (!category) {
                throw {
                    name: 'NotFound',
                    message: 'category not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: category });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndUpdate(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const category = await Category.findByIdAndUpdate(id, { name }, { returnDocument: 'after', runValidators: true });

            if (!category) {
                throw {
                    name: 'NotFound',
                    message: 'category not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: category });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndDelete(req, res, next) {
        try {
            const { id } = req.params;
            const category = await Category.findByIdAndDelete(id);

            if (!category) {
                throw {
                    name: 'NotFound',
                    message: 'category not found',
                };
            }

            res.status(200).json({ message: `${category.name} successfully deleted` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerCategory;
