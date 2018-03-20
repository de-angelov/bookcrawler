const bookpoint= require('../data/bookpoint/bookpoint');
const booktrading = require('../data/booktrading/booktrading');
const pageIterator = require('../page-iterator/pageIterator');
const book = require('../get-books/getBooks');
const page = require('../get-max-page/getMaxPage');
const insert = require('../db/insert-books/insertBooks');

const collectBooks = async () => {
    console.log('starting crawling operation');
    const lastPageBooktrading = await page(booktrading);
    const lastPageBookpoint = await page(bookpoint);

    const booktradingBooks =
    await pageIterator(booktrading, book.getBooks, lastPageBooktrading);
    const bookpointBooks =
    await pageIterator(bookpoint, book.getBooks, lastPageBookpoint);


    await insert.insertBooks(bookpointBooks);
    await insert.insertBooks(booktradingBooks);
    console.log('finishing crawling operation');
};

module.exports = {
    collectBooks,
};
