const searchBooks = async (yearToSearch) => {
    const {
        Book,
    } = require('../models');
    const utils= require('../utils/compareNames');
    let result = await Book.findAll({
        where: {
            year: yearToSearch,
        },
    });

    result = result.sort(utils.compareTitle);
    console.log(result);
    return result;
};
module.exports = {
    searchBooks,
};
