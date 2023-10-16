'use strict';

const Bride = require('../models/bride');

class ControllerBride {
    // * role = admin

    // * role = customer
    static async customerBrideFindOne(req, res, next) {
        try {
            const { id } = req.user;
            const bride = await Bride.findOne({ user: id });

            if (!bride) {
                throw {
                    name: 'NotFound',
                    message: 'Bride not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: bride });
        } catch (error) {
            next(error);
        }
    }

    static async customerBrideSave(req, res, next) {
        try {
            const { id } = req.user;

            // male
            const { maleImage, maleFullName, maleNickName, maleFatherName, maleMotherName } = req.body;
            const male = {
                maleImage,
                maleFullName,
                maleNickName,
                maleFatherName,
                maleMotherName,
            };

            // female
            const { femaleImage, femaleFullName, femaleNickName, femaleFatherName, femaleMotherName } = req.body;
            const female = {
                femaleImage,
                femaleFullName,
                femaleNickName,
                femaleFatherName,
                femaleMotherName,
            };

            const createBride = new Bride({ male, female, user: id });
            const bride = await createBride.save();

            res.status(201).json({ isSuccess: true, data: bride });
        } catch (error) {
            next(error);
        }
    }

    static async customerBrideFindOneAndUpdate(req, res, next) {
        try {
            const { id } = req.user;

            // male
            const {
                maleImage,
                maleFullName,
                maleNickName,
                maleFatherName,
                maleMotherName,
                maleFacebook,
                maleInstagram,
                maleThreads,
            } = req.body;
            const male = {
                maleImage,
                maleFullName,
                maleNickName,
                maleFatherName,
                maleMotherName,
                maleSocialMedia: {
                    maleFacebook,
                    maleInstagram,
                    maleThreads,
                },
            };

            // female
            const {
                femaleImage,
                femaleFullName,
                femaleNickName,
                femaleFatherName,
                femaleMotherName,
                femaleFacebook,
                femaleInstagram,
                femaleThreads,
            } = req.body;
            const female = {
                femaleImage,
                femaleFullName,
                femaleNickName,
                femaleFatherName,
                femaleMotherName,
                femaleSocialMedia: {
                    femaleFacebook,
                    femaleInstagram,
                    femaleThreads,
                },
            };

            const bride = await Bride.findOneAndUpdate(
                { user: id },
                { male, female },
                { returnDocument: 'after', runValidators: true }
            );

            if (!bride) {
                throw {
                    name: 'NotFound',
                    message: 'Bride not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: bride });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerBride;
