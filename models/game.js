'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game.belongsToMany(models.genre, { through: models.gameGenre });
      game.hasOne(models.gameProfile)
    }
  }
  game.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name must not be empty!"
        }
      }
    },
    image: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};