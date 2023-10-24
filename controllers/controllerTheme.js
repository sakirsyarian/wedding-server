'use strict';

const Theme = require('../models/theme');
const Wedding = require('../models/wedding');

class ControllerTheme {
    // * role = admin
    static async adminFind(req, res, next) {
        try {
            const themes = await Theme.find().populate('category');
            if (!themes.length) {
                throw {
                    name: 'NotFound',
                    message: 'theme data does not exist',
                };
            }

            res.status(200).json({ isSuccess: true, data: themes });
        } catch (error) {
            next(error);
        }
    }

    static async adminSave(req, res, next) {
        try {
            const { name, cover, category } = req.body;

            // colors
            const { primary, secondary, tertiary, quaternary, quinary, text } = req.body;
            const colors = { primary, secondary, tertiary, quaternary, quinary, text };

            // fonts
            const { heading, subHeading, body } = req.body;
            const fonts = { heading, subHeading, body };

            // images
            const { greeting, background, above, frame, below, card } = req.body;
            const images = { greeting, background, above, frame, below, card };

            const createTheme = new Theme({ name, cover, category, colors, fonts, images });
            const theme = await createTheme.save();

            res.status(201).json({ isSuccess: true, data: theme });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindById(req, res, next) {
        try {
            const { id } = req.params;
            const theme = await Theme.findById(id);

            if (!theme) {
                throw {
                    name: 'NotFound',
                    message: 'theme not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: theme });
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

            const theme = await Theme.findByIdAndUpdate(
                id,
                { name, category, colors, fonts, images },
                { returnDocument: 'after', runValidators: true }
            );

            if (!theme) {
                throw {
                    name: 'NotFound',
                    message: 'theme not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: theme });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndDelete(req, res, next) {
        try {
            const { id } = req.params;
            const theme = await Theme.findByIdAndDelete(id);

            if (!theme) {
                throw {
                    name: 'NotFound',
                    message: 'theme not found',
                };
            }

            res.status(200).json({ message: `${theme.name} successfully deleted` });
        } catch (error) {
            next(error);
        }
    }

    // * role = customer
    static async customerFind(req, res, next) {
        try {
            const themes = await Theme.find().populate('category');
            if (!themes.length) {
                throw {
                    name: 'NotFound',
                    message: 'theme data does not exist',
                };
            }

            res.status(200).json({ isSuccess: true, data: themes });
        } catch (error) {
            next(error);
        }
    }

    static async customerThemeFindOne(req, res, next) {
        try {
            const { id } = req.user;
            const theme = await Wedding.findOne({ user: id });

            if (!theme) {
                throw {
                    name: 'NotFound',
                    message: 'Theme not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: theme });
        } catch (error) {
            next(error);
        }
    }

    static async customerThemeFindOneAndUpdate(req, res, next) {
        try {
            const { id } = req.user;
            const { theme } = req.body;

            const result = await Wedding.findOneAndUpdate(
                { user: id },
                { theme },
                { returnDocument: 'after', runValidators: true }
            );

            if (!result) {
                throw {
                    name: 'NotFound',
                    message: 'Theme not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: result });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerTheme;
