'use strict';
module.exports = (sequelize, DataTypes) => {
  const board_info = sequelize.define('board_info', {
    board_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    board_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'board_info'
  });
  return board_info;
};