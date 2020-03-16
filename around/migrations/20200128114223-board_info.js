'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('board_info', {
      board_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      board_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }
    },{
    timestamps: false,
    freezeTableName: true,
    tableName: 'board_info'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('board_info');
  }
};