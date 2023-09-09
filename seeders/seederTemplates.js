'use strict';

const Template = require('../models/template');
const templateData = require('../data/template.json');

const { Category } = require('../models/category');
const categoryData = require('../data/category.json');

(async function () {
    const category = new Category(categoryData);
    const template = new Template({
        ...templateData,
        category,
    });

    await category.save();
    await template.save();
    console.log('template created');
})();
