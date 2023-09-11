'use strict';

const Template = require('../models/template');
const templateData = require('../data/template.json');

const Category = require('../models/category');

(async function () {
    const categoryData = await Category.findOne({ name: 'Warrior' });
    const template = new Template({
        ...templateData,
        category: categoryData._id,
    });

    await template.save();
    console.log('template created');
})();
