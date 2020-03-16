'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gs_info_board', {
      gs_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      gs_post_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      gs_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      gs_writer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      gs_write_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('now()')
        },
        gs_post_file: {
          type: Sequelize.STRING,
          unique: true
        },
        gs_hit: {
          type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      gs_post_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gs_board_no: {
          type:Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'board_info',
            key: 'board_no'
        },
        defaultValue: '7',
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'gs_info_board'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gs_info_board');
  }
};