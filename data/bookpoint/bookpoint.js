
const constPartOfLink = 'http://www.bookpoint.bg/?cid=3&cat=16&p=';
const productThumbSelector = '.BodyTd .ListBoxItem a';
const startFromPage = 2;

// selectors for the book info
const title = '.viewItemInfo h1';
const author = '.author a';
const year = '.viewItemInfo .lineInfo:contains("Издадена")';
const pages ='.viewItemInfo .lineInfo:contains("Брой")';
const bookInfoTable = '.viewItemInfo .lineInfo';

const itemsPerpage = 10;
const pagePaginationClass = '.PageBar a:last';


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
