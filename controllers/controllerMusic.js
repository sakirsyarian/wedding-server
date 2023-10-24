'use strict';

const Wedding = require('../models/wedding');
const Music = require('../models/music');

class ControllerMusic {
    // * role = admin

    // * role = customer
    static async customerFind(req, res, next) {
        try {
            const musics = await Music.find();
            if (!musics.length) {
                throw {
                    name: 'NotFound',
                    message: 'Music data does not exist',
                };
            }

            res.status(200).json({ isSuccess: true, data: musics });
        } catch (error) {
            next(error);
        }
    }

    static async customerMusicFindOne(req, res, next) {
        try {
            const { id } = req.user;
            const music = await Wedding.findOne({ user: id });

            if (!music) {
                throw {
                    name: 'NotFound',
                    message: 'Music not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: music });
        } catch (error) {
            next(error);
        }
    }

    static async customerMusicFindOneAndUpdate(req, res, next) {
        try {
            const { id } = req.user;
            const { music } = req.body;

            const result = await Wedding.findOneAndUpdate(
                { user: id },
                { music },
                { returnDocument: 'after', runValidators: true }
            );

            if (!result) {
                throw {
                    name: 'NotFound',
                    message: 'Music not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: result });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerMusic;
