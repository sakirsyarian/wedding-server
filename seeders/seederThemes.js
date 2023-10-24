'use strict';

const Theme = require('../models/theme');
const themeData = require('../data/theme.json');

const Category = require('../models/category');

(async function () {
    const categoryData = await Category.findOne({ name: 'Warrior' });

    themeData.map(async (el) => {
        const theme = new Theme({
            ...el,
            category: categoryData._id,
        });

        await theme.save();
    });

    console.log('theme created');
})();
