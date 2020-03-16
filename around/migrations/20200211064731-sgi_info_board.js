'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sgi_info_board', {
      sgi_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sgi_post_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      sgi_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      sgi_writer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      sgi_write_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('now()')
        },
        sgi_post_file: {
          type: Sequelize.STRING,
          unique: true
        },
        sgi_hit: {
          type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      sgi_post_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sgi_board_no: {
          type:Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'board_info',
            key: 'board_no'
        },
        defaultValue: '3',
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'sgi_info_board'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sgi_info_board');
  }
};