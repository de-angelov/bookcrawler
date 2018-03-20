const getBooks = async (arrayToAdd, index, storeData) => {
    const {
        JSDOM,
    } = require('jsdom');
    const $init = require('jquery');
    const addToArrayBook = async (link) => {
        const domJs = await JSDOM.fromURL(link).catch((err) => {
            // Handle the error here
        });
        const useDom = (dom) => {
            const $ = $init(dom.window);
            const title = $(storeData.title).text().replace('\t', '').trim();
            const author = $(storeData.author).html();
            const year = +('' + $(storeData.year).html())
                .replace(/[^0-9]/gi, '');
            const pages = +('' + $(storeData.pages).html())
                .replace(/[^0-9]/gi, '');

            const book = {
                title,
                author,
                year,
                pages,
            };
            if (title !== '' && author !== '') {
                arrayToAdd.push(book);
            }
        };
        if (domJs) {
            useDom(domJs);
        }
    };

    const start = storeData.startFromPage;

    const dom = await JSDOM.fromURL(storeData.constPartOfLink +
        (index + start));
    const $ = $init(dom.window);
    const bookLinks = [...$(storeData.productThumbSelector)];
    await Promise.all(
        bookLinks.map((link) =>
            addToArrayBook(link.href)));
};

module.exports = {
    getBooks,
};
