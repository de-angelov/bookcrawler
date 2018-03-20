
const constPartOfLink = 'https://www.booktrading.bg/Книги/English-Language-Books/Fashion?page=';
const productThumbSelector = '#content .image a';
const startFromPage = 2;

// selectors for the book info
const title = '.row h1';
const author = '#content .list-unstyled li:contains("Автор:") span';
const year = '#content .list-unstyled li:contains("Година на издаване:") span';
const pages ='#content .list-unstyled li:contains("Страници:") span';
const bookInfoTable = '.list-unstyled';

const itemsPerpage = 15;
const pagePaginationClass = '.pagination a:last';


module.exports = {
    constPartOfLink,
    productThumbSelector,
    startFromPage,
    bookInfoTable,
    author,
    title,
    year,
    pages,
    pagePaginationClass,
};
