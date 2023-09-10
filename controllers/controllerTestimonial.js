'use strict';

const User = require('../models/user');
const { Testimonial } = require('../models/testimonial');

class ControllerTestimonial {
    // * role = admin
    static async adminFind(req, res, next) {
        try {
            const user = await User.find();
            if (!user.length) {
                throw {
                    name: 'NotFound',
                    message: 'testimonial data does not exist',
                };
            }

            const testimonial = [];
            user.map((item) => {
                if (item.testimonial) testimonial.push(item.testimonial);
            });

            res.status(200).json({ isSuccess: true, data: testimonial });
        } catch (error) {
            next(error);
        }
    }

    static async adminFindByIdAndDelete(req, res, next) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                throw {
                    name: 'NotFound',
                    message: 'testimonial not found',
                };
            }

            user.testimonial = null;
            await user.save();

            res.status(200).json({ message: `testimonial ${user.name} successfully deleted` });
        } catch (error) {
            next(error);
        }
    }

    // * role = customer
    static async customerSave(req, res, next) {
        try {
            const { id } = req.user;
            const { score, message } = req.body;

            const findUser = await User.findById(id);
            if (!findUser) {
                throw {
                    name: 'NotFound',
                    message: 'user data does not exist',
                };
            }

            findUser.testimonial = new Testimonial({ score, message });
            const user = await findUser.save();

            res.status(201).json({ isSuccess: true, data: user.testimonial });
        } catch (error) {
            next(error);
        }
    }

    static async customerFindByIdAndUpdate(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const testimonial = await Testimonial.findByIdAndUpdate(
                id,
                { name },
                { returnDocument: 'after', runValidators: true }
            );

            if (!testimonial) {
                throw {
                    name: 'NotFound',
                    message: 'testimonial not found',
                };
            }

            res.status(200).json({ isSuccess: true, data: testimonial });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerTestimonial;
