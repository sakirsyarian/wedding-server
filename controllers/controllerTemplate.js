'use strict';

const Template = require('../models/template');

class ControllerTemplate {
    static async adminFind(req, res, next) {
        try {
            const template = await Template.find();
            if (!template.length) {
                throw {
                    name: 'NotFound',
                    message: 'template data does not exist',
                };
            }

            res.status(200).json({ isSuccess: true, data: template });
        } catch (error) {
            next(error);
        }
    }

    static async adminSave(req, res, next) {
        try {
            const { name, category } = req.body;

            // colors
            const { primary, secondary, tertiary, quaternary, quinary, text } = req.body;
            const colors = { primary, secondary, tertiary, quaternary, quinary, text };

            // fonts
            const { heading, subHeading, body } = req.body;
            const fonts = { heading, subHeading, body };

            // images
            const { greeting, background, above, frame, below, card } = req.body;
            const images = { greeting, background, above, frame, below, card };

            const createTemplate = new Template({ name, category, colors, fonts, images });
            const template = await createTemplate.save();

            res.status(201).json({ isSuccess: true, data: template });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindById(req, res, next) {
        try {
            const { id } = req.params;
            const template = await Template.findById(id);

            if (!template) {
                throw {
                    name: 'NotFound',
                    message: 'template not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: template });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndUpdate(req, res, next) {
        try {
            const { id } = req.params;
            const { name, category } = req.body;

            // colors
            const { primary, secondary, tertiary, quaternary, quinary, text } = req.body;
            const colors = { primary, secondary, tertiary, quaternary, quinary, text };

            // fonts
            const { heading, subHeading, body } = req.body;
            const fonts = { heading, subHeading, body };

            // images
            const { greeting, background, above, frame, below, card } = req.body;
            const images = { greeting, background, above, frame, below, card };

            const template = await Template.findByIdAndUpdate(
                id,
                { name, category, colors, fonts, images },
                { returnDocument: 'after', runValidators: true }
            );

            if (!template) {
                throw {
                    name: 'NotFound',
                    message: 'template not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: template });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndDelete(req, res, next) {
        try {
            const { id } = req.params;
            const template = await Template.findByIdAndDelete(id);

            if (!template) {
                throw {
                    name: 'NotFound',
                    message: 'template not found',
                };
            }

            res.status(200).json({ message: `${template.name} successfully deleted` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerTemplate;
