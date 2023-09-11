const [seed] = process.argv.slice(2);

if (seed === 'all') {
    require('./seederRoles');
    require('./seederCategories');

    setTimeout(() => require('./seederUsers'), 100);
    setTimeout(() => require('./seederWeddings'), 200);
    setTimeout(() => require('./seederTemplates'), 300);
    setTimeout(() => console.log('successfully seeded'), 400);
}
