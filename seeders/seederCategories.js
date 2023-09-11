'use strict';

const Category = require('../models/category');
const categoriesData = require('../data/category.json');

(async function () {
    await Category.create(categoriesData);
    console.log('category created');
})();
