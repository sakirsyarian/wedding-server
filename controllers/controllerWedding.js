'use strict';

const randomString = require('../helpers/randomString');

const Wedding = require('../models/wedding');
const Bride = require('../models/bride');
const Event = require('../models/event');

class ControllerWedding {
    // * role = admin
    static async adminFind(req, res, next) {
        try {
            const weddings = await Wedding.find();
            if (!weddings.length) {
                throw {
                    name: 'NotFound',
                    message: 'Wedding data does not exist',
                };
            }

            res.status(200).json({ isSuccess: true, data: weddings });
        } catch (error) {
            next(error);
        }
    }

    static async adminSave(req, res, next) {
        try {
            const { slug, mainImage, music, countDown, galleries } = req.body;

            // men
            const { menName, menImage, menFather, menMother } = req.body;
            const { menFacebook, menInstagram, menThreads } = req.body;

            const menSocialMedia = { menFacebook, menInstagram, menThreads };
            const men = { menName, menImage, menFather, menMother, menSocialMedia };

            // female
            const { femaleName, femaleImage, femaleFather, femaleMother } = req.body;
            const { femaleFacebook, femaleInstagram, femaleThreads } = req.body;

            const femaleSocialMedia = { femaleFacebook, femaleInstagram, femaleThreads };
            const female = { femaleName, femaleImage, femaleFather, femaleMother, femaleSocialMedia };

            // marriage contract
            const { marriageDate, marriageLocation } = req.body;
            const marriageContract = { marriageDate, marriageLocation };

            // reception
            const { receptionDate, receptionLocation } = req.body;
            const reception = { receptionDate, receptionLocation };

            // love story
            const { beginningImage, beginningDate, beginningDescription } = req.body;
            const beginning = { beginningImage, beginningDate, beginningDescription };

            const { datingImage, datingDate, datingDescription } = req.body;
            const dating = { datingImage, datingDate, datingDescription };

            const { weddingImage, weddingDate, weddingDescription } = req.body;
            const wedding = { weddingImage, weddingDate, weddingDescription };

            const loveStory = { beginning, dating, wedding };

            // gift
            const { bca, bri, bni, mandiri } = req.body;
            const bank = { bca, bri, bni, mandiri };

            const { gopay, ovo, dana, linkAja } = req.body;
            const digital = { gopay, ovo, dana, linkAja };

            const gift = { bank, digital, address };

            // user
            const { id } = req.user;

            const createWedding = new Wedding({
                slug,
                mainImage,
                music,
                men,
                female,
                countDown,
                marriageContract,
                reception,
                loveStory,
                galleries,
                gift,
                user: id,
            });
            const weddingData = await createWedding.save();

            res.status(201).json({ isSuccess: true, data: weddingData });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindById(req, res, next) {
        try {
            const { id } = req.params;
            const wedding = await Wedding.findById(id);

            if (!wedding) {
                throw {
                    name: 'NotFound',
                    message: 'Wedding not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: wedding });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndUpdate(req, res, next) {
        try {
            const { id } = req.params;
            const { email, name, phoneNumber, role } = req.body;

            const wedding = await Wedding.findByIdAndUpdate(
                id,
                { email, name, phoneNumber, role },
                { returnDocument: 'after', runValidators: true }
            );

            if (!wedding) {
                throw {
                    name: 'NotFound',
                    message: 'Wedding not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: wedding });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndPatch(req, res, next) {
        try {
            const { id } = req.params;
            const { password } = req.body;

            const bcryptjs = hashPassword(password);
            const wedding = await Wedding.findByIdAndUpdate(
                id,
                { password: bcryptjs },
                { returnDocument: 'after', runValidators: true }
            );

            if (!wedding) {
                throw {
                    name: 'NotFound',
                    message: 'Wedding not found',
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
            const wedding = await Wedding.findByIdAndDelete(id);

            if (!wedding) {
                throw {
                    name: 'NotFound',
                    message: 'Wedding not found',
                };
            }

            res.status(200).json({ message: `${wedding.name} successfully deleted` });
        } catch (error) {
            next(error);
        }
    }

    // * role = customer
    static async customerSave(req, res, next) {
        try {
            // user
            const { id } = req.user;
            const { bride, event, theme } = req.body;

            // slug
            const brideNickName = await Bride.findById(bride);
            const slug = `${randomString()}-${brideNickName.male?.maleNickName.toLowerCase()}-${brideNickName.female?.femaleNickName.toLowerCase()}`;

            const createWedding = new Wedding({
                slug,
                bride,
                event,
                theme,
                user: id,
            });
            const weddingData = await createWedding.save();

            res.status(201).json({ isSuccess: true, data: weddingData });
        } catch (error) {
            next(error);
        }
    }

    static async customerFindOne(req, res, next) {
        try {
            const { id } = req.params;
            const wedding = await Wedding.findOne({ user: id });

            if (!wedding) {
                throw {
                    name: 'NotFound',
                    message: 'Wedding not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: wedding });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerWedding;
