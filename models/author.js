'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'unknown author',
    },
  }, );
  Author.associate = function(models) {};
  return Author;
};
