const filterBooks = async (lessOrMore, numberOfPages) => {
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;
    const {
        Book,
    } = require('../models');
    const utils= require('../utils/compareNames');
    let result;

    switch (lessOrMore) {
        case 'less':
            result = await Book.findAll({
                where: {
                    pages: {
                        [Op.lt]: numberOfPages,
                    },
                },
            });
            break;
        case 'more':
        result = await Book.findAll({
            where: {
                pages: {
                    [Op.gte]: numberOfPages,
                },
            },
        });
            break;
        default:
            break;
    }
    result= result.sort(utils.compareTitle);
    return result;
};

module.exports = {
    filterBooks,
};
