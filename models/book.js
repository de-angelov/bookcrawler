'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
    pages: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
  }, );
  Book.associate = function(models) {
    const {
      Author,
    } = models;
    Book.belongsTo(Author, {
      foreignKey: 'author',
    });
  };
  return Book;
};
