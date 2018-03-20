const insertBooks = async (ar) => {
    const {
        Book,
        Author,
    } = require('../../models');
    const addToAr = async (element) => {
        const authorID = await Author.findOrCreate({
            where: {
                name: element.author,
            },
     });
        await Book.create({
            title: element.title,
            author: authorID[0].id,
            year: element.year,
            pages: element.pages,
        });
    };
    ar.map((el) => addToAr(el));
};

module.exports = {
    insertBooks,
};
