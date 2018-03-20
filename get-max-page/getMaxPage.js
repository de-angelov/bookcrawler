const getMaxPage = async (storeData) => {
    const {
        JSDOM,
    } = require('jsdom');
    const $init = require('jquery');

    const selector = storeData.pagePaginationClass;
    const start = storeData.startFromPage;
    const dom = await JSDOM.fromURL(storeData.constPartOfLink + start);
    const $ = $init(dom.window);
    const link = $(selector).attr('href');
    const fromIndex = link.lastIndexOf('=')+1;
    const maxPage = link.substring(fromIndex);
    return maxPage;
};

module.exports = getMaxPage;
