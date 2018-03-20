const printer = async (ar) => {
    const seperator =
        '-------------------------------------------------';
    const print = [];
    const db = require('../models/index');
    const con = db.sequelize;

    await Promise.all(ar.map(async (el) => {
        const author = await el.getAuthor();
        const info =
            `Title:${el.title} || Author:${author.name} || Year:${el.year} || Pages: ${el.pages}`;
        print.push(info);
    }));
    console.log(seperator);
    print.forEach((x) => {
        console.log(x);
        console.log(seperator);
    });

    con.close();
};

module.exports = {
    printer,
};
