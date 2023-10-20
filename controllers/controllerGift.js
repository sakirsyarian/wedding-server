'use strict';

const Gift = require('../models/gift');

class ControllerGift {
    // * role = admin

    // * role = customer
    static async customerGiftFindOne(req, res, next) {
        try {
            const { id } = req.user;
            const gift = await Gift.findOne({ user: id });

            if (!gift) {
                throw {
                    name: 'NotFound',
                    message: 'Gift not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: gift });
        } catch (error) {
            next(error);
        }
    }

    static async customerGiftSave(req, res, next) {
        try {
            const { id } = req.user;

            // bank
            const { bankName, bankUser, bankNumber } = req.body;
            const bank = {
                bankName,
                bankUser,
                bankNumber,
            };

            // digital
            const { digitalName, digitalUser, digitalNumber } = req.body;
            const digital = {
                digitalName,
                digitalUser,
                digitalNumber,
            };

            // address
            const { addressName, addressNumber, addressHome } = req.body;
            const address = {
                addressName,
                addressNumber,
                addressHome,
            };

            const createGift = new Gift({ bank, digital, address, user: id });
            const gift = await createGift.save();

            res.status(201).json({ isSuccess: true, data: gift });
        } catch (error) {
            next(error);
        }
    }

    static async customerGiftFindOneAndUpdate(req, res, next) {
        try {
            const { id } = req.user;

            // bank
            const { bankName, bankUser, bankNumber } = req.body;
            const bank = {
                bankName,
                bankUser,
                bankNumber,
            };

            // digital
            const { digitalName, digitalUser, digitalNumber } = req.body;
            const digital = {
                digitalName,
                digitalUser,
                digitalNumber,
            };

            // address
            const { addressName, addressNumber, addressHome } = req.body;
            const address = {
                addressName,
                addressNumber,
                addressHome,
            };

            const gift = await Gift.findOneAndUpdate(
                { user: id },
                { bank, digital, address },
                { returnDocument: 'after', runValidators: true }
            );

            if (!gift) {
                throw {
                    name: 'NotFound',
                    message: 'Gift not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: gift });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerGift;
