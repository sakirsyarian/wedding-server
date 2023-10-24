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
            const { beginningImage, beginningDate, beginningStory } = req.body;
            const beginning = {
                beginningImage,
                beginningDate,
                beginningStory,
            };

            // dating
            const { datingImage, datingDate, datingStory } = req.body;
            const dating = {
                datingImage,
                datingDate,
                datingStory,
            };

            // wedding
            const { weddingImage, weddingDate, weddingStory } = req.body;
            const wedding = {
                weddingImage,
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

            // beginning
            const { beginningImage, beginningDate, beginningStory } = req.body;
            const beginning = {
                beginningImage,
                beginningDate,
                beginningStory,
            };

            // dating
            const { datingImage, datingDate, datingStory } = req.body;
            const dating = {
                datingImage,
                datingDate,
                datingStory,
            };

            // wedding
            const { weddingImage, weddingDate, weddingStory } = req.body;
            const wedding = {
                weddingImage,
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
            next(error);
        }
    }
}

module.exports = ControllerStory;
