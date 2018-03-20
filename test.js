const db = require('./models/index');
const con = db.sequelize;
console.log(con);


// const con = new Sequelize('bookDB', 'root', null, {
//     host: 'localhost',
//     dialect: 'mysql',
// });
// const db = require('../models/index');
// const con = db.sequelize;
