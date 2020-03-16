'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gw_info_board', {
      gw_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      gw_post_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      gw_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      gw_writer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      gw_write_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('now()')
        },
        gw_post_file: {
          type: Sequelize.STRING,
          unique: true
        },
        gw_hit: {
          type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      gw_post_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gw_board_no: {
          type:Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'board_info',
            key: 'board_no'
        },
        defaultValue: '4',
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'gw_info_board'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gw_info_board');
  }
};