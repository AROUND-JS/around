'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cc_info_board', {
      cc_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cc_post_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cc_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      cc_writer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cc_write_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('now()')
        },
        cc_post_file: {
          type: Sequelize.STRING,
          unique: true
        },
        cc_hit: {
          type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      cc_post_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cc_board_no: {
          type:Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'board_info',
            key: 'board_no'
        },
        defaultValue: '5',
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'cc_info_board'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cc_info_board');
  }
};