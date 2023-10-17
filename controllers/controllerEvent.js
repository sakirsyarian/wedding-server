'use strict';

const Event = require('../models/event');

class ControllerEvent {
    // * role = admin

    // * role = customer
    static async customerEventFindOne(req, res, next) {
        try {
            const { id } = req.user;
            const event = await Event.findOne({ user: id });

            if (!event) {
                throw {
                    name: 'NotFound',
                    message: 'Event not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: event });
        } catch (error) {
            next(error);
        }
    }

    static async customerEventSave(req, res, next) {
        try {
            const { id } = req.user;

            // main
            const {
                mainHeading,
                mainDate,
                mainTimeStart,
                mainTimeFinish,
                mainUntilDone,
                mainTimeZone,
                mainLocation,
                mainAddress,
            } = req.body;
            const main = {
                mainHeading,
                mainDate,
                mainTimeStart,
                mainTimeFinish,
                mainUntilDone,
                mainTimeZone,
                mainLocation,
                mainAddress,
            };

            // optional
            const {
                optionalHeading,
                optionalDate,
                optionalTimeStart,
                optionalTimeFinish,
                optionalUntilDone,
                optionalTimeZone,
                optionalLocation,
                optionalAddress,
            } = req.body;
            const optional = {
                optionalHeading,
                optionalDate,
                optionalTimeStart,
                optionalTimeFinish,
                optionalUntilDone,
                optionalTimeZone,
                optionalLocation,
                optionalAddress,
            };

            const createEvent = new Event({ main, optional, user: id });
            const event = await createEvent.save();

            res.status(201).json({ isSuccess: true, data: event });
        } catch (error) {
            next(error);
        }
    }

    static async customerEventFindOneAndUpdate(req, res, next) {
        try {
            const { id } = req.user;

            // main
            const {
                mainHeading,
                mainDate,
                mainTimeStart,
                mainTimeFinish,
                mainUntilDone,
                mainTimeZone,
                mainLocation,
                mainAddress,
            } = req.body;
            const main = {
                mainHeading,
                mainDate,
                mainTimeStart,
                mainTimeFinish,
                mainUntilDone,
                mainTimeZone,
                mainLocation,
                mainAddress,
            };

            // optional
            const {
                optionalHeading,
                optionalDate,
                optionalTimeStart,
                optionalTimeFinish,
                optionalUntilDone,
                optionalTimeZone,
                optionalLocation,
                optionalAddress,
            } = req.body;
            const optional = {
                optionalHeading,
                optionalDate,
                optionalTimeStart,
                optionalTimeFinish,
                optionalUntilDone,
                optionalTimeZone,
                optionalLocation,
                optionalAddress,
            };

            const event = await Event.findOneAndUpdate(
                { user: id },
                { main, optional },
                { returnDocument: 'after', runValidators: true }
            );

            if (!event) {
                throw {
                    name: 'NotFound',
                    message: 'Event not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: event });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerEvent;
