const pageIterator = async (storeData, getMethod, maxPage) => {
    console.log('starting page iteration');
    const allItems = [];
    const allStorePages = await Array.from({
        length: maxPage,
    });
    await Promise.all(allStorePages.map((item, index) =>
    getMethod(allItems, index, storeData)));
    return allItems;
};

module.exports = pageIterator;
