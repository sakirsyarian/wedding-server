'use strict';

const Gallery = require('../models/gallery');

class ControllerGallery {
    // * role = admin

    // * role = customer
    static async customerGalleryFindOne(req, res, next) {
        try {
            const { id } = req.user;
            const gallery = await Gallery.findOne({ user: id });

            if (!gallery) {
                throw {
                    name: 'NotFound',
                    message: 'Gallery not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: gallery });
        } catch (error) {
            next(error);
        }
    }

    static async customerGallerySave(req, res, next) {
        try {
            const { id } = req.user;
            const { imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix } = req.body;

            // galleries
            const image = {
                imageOne,
                imageTwo,
                imageThree,
                imageFour,
                imageFive,
                imageSix,
            };

            const createGallery = new Gallery({ image, user: id });
            const gallery = await createGallery.save();

            res.status(201).json({ isSuccess: true, data: gallery });
        } catch (error) {
            next(error);
        }
    }

    static async customerGalleryFindOneAndUpdate(req, res, next) {
        try {
            const { id } = req.user;
            const { imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix } = req.body;

            // galleries
            const image = {
                imageOne,
                imageTwo,
                imageThree,
                imageFour,
                imageFive,
                imageSix,
            };

            const gallery = await Gallery.findOneAndUpdate(
                { user: id },
                { image },
                { returnDocument: 'after', runValidators: true }
            );

            if (!gallery) {
                throw {
                    name: 'NotFound',
                    message: 'Gallery not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: gallery });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerGallery;
