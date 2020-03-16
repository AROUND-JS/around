'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotlist', {
      hot_user: {
        type: Sequelize.STRING,
          allowNull: false,
          references: {
            model : 'user',
            key : 'user_nickname' 
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
      },
      hot_board_no: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model : 'board_info',
          key : 'board_no' 
        },
        onDelete: 'CASCADE'
      },
      hot_post_title: {
          type: Sequelize.STRING,
          primaryKey: true
      },
      hot_writer_no: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model : 'user',
            key : 'user_no' 
          },
          onDelete: 'CASCADE'
      },
      hot_write_date: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("now()"),
          allowNull: false
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotlist'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotlist');
  }
};
