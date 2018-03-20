const collect = require('./collect-books/collectBooks');
const filter = require('./filter-books/filterBooks');
const search = require('./search-books/searchBooks');
const databasePrinter = require('./database-printer/printer');

/* eslint-disable */
const consoleInput = process.argv;
/* eslint-enable */

const input = consoleInput[2];

const app = async (command) => {
    switch (command + '') {
        case 'collect':
            collect.collectBooks();
            break;
        case 'search-year':
            const searchYear = consoleInput[3];
            const searchResult =
                await search.searchBooks(searchYear);
            databasePrinter.printer(searchResult);
            break;
        case 'filter-more-pages':
            const numberPagesMore = consoleInput[3];
            const filterMoreResults =
                await filter.filterBooks('more', numberPagesMore);
            databasePrinter.printer(filterMoreResults);
            break;
        case 'filter-less-pages':
            const numberPagesLess = consoleInput[3];
            const filterLessResults =
                await filter.filterBooks('less', numberPagesLess);
            databasePrinter.printer(filterLessResults);
            break;
        default:
            break;
    }
};

app(input);
