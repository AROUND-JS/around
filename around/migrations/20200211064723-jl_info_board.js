'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jl_info_board', {
      jl_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jl_post_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      jl_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      jl_writer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      jl_write_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('now()')
        },
        jl_post_file: {
          type: Sequelize.STRING,
          unique: true
        },
        jl_hit: {
          type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      jl_post_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jl_board_no: {
          type:Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'board_info',
            key: 'board_no'
        },
        defaultValue:'6',
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'jl_info_board'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jl_info_board');
  }
};