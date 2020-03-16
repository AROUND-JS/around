'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companion_board', {
      c_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      c_post_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      c_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      c_writer: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model : 'user',
            key : 'user_nickname' 
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
      },
      c_write_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('now()')
        },
        c_post_file: {
          type: Sequelize.STRING,
          unique: true
        },
        c_region: {
          type: Sequelize.STRING,
        allowNull: false
      },
      c_dept_date: {
        type: Sequelize.DATE
        },
        c_hit: {
          type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      c_post_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      c_board_no: {
          type:Sequelize.INTEGER,
          allowNull: false,
          references: {
            model : 'board_info',
            key : 'board_no' 
          },
          defaultValue : '1',
          onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'companion_board'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companion_board');
  }
};