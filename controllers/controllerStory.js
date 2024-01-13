'use strict';

const Story = require('../models/story');

class ControllerStory {
    // * role = admin

    // * role = customer
    static async customerStoryFindOne(req, res, next) {
        try {
            const { id } = req.user;
            const story = await Story.findOne({ user: id });

            if (!story) {
                throw {
                    name: 'NotFound',
                    message: 'Story not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: story });
        } catch (error) {
            next(error);
        }
    }

    static async customerStorySave(req, res, next) {
        try {
            const { id } = req.user;

            // beginning
            const { beginningDate, beginningStory } = req.body;
            const beginning = {
                beginningDate,
                beginningStory,
            };

            // dating
            const { datingDate, datingStory } = req.body;
            const dating = {
                datingDate,
                datingStory,
            };

            // wedding
            const { weddingDate, weddingStory } = req.body;
            const wedding = {
                weddingDate,
                weddingStory,
            };

            const createStory = new Story({ beginning, dating, wedding, user: id });
            const story = await createStory.save();

            res.status(201).json({ isSuccess: true, data: story });
        } catch (error) {
            next(error);
        }
    }

    static async customerStoryFindOneAndUpdate(req, res, next) {
        try {
            const { id } = req.user;
            console.log(req.body, '<<< body');
            console.log(req.files, '<<< files');

            // beginning
            const { beginningImage } = req.files;
            const { beginningDate, beginningStory } = req.body;
            const beginning = {
                beginningImage: beginningImage[0].filename,
                beginningDate,
                beginningStory,
            };

            // dating
            const { datingImage } = req.files;
            const { datingDate, datingStory } = req.body;
            const dating = {
                datingImage: datingImage[0].filename,
                datingDate,
                datingStory,
            };

            // wedding
            const { weddingImage } = req.files;
            const { weddingDate, weddingStory } = req.body;
            const wedding = {
                weddingImage: weddingImage[0].filename,
                weddingDate,
                weddingStory,
            };

            const story = await Story.findOneAndUpdate(
                { user: id },
                { beginning, dating, wedding },
                { returnDocument: 'after', runValidators: true }
            );

            if (!story) {
                throw {
                    name: 'NotFound',
                    message: 'Story not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: story });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = ControllerStory;
