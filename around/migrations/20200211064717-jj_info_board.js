'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jj_info_board', {
      jj_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jj_post_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      jj_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      jj_writer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      jj_write_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('now()')
        },
        jj_post_file: {
          type: Sequelize.STRING,
          unique: true
        },
        jj_hit: {
          type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      jj_post_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jj_board_no: {
          type:Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'board_info',
            key: 'board_no'
        },
        defaultValue: '8',
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'jj_info_board'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jj_info_board');
  }
};