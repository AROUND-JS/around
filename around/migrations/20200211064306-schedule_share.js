'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedule_share', {
      ss_post_no: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      ss_post_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ss_post_text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      ss_writer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ss_write_date: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("now()"),
          allowNull: false
      },
      ss_post_file: {
          type: Sequelize.STRING,
          unique: true
      },
      ss_region: {
          type: Sequelize.STRING,
          allowNull: false
      },
      ss_dept_date: {
          type: Sequelize.DATE,
      },
      ss_hit: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: '0'
      },
      ss_post_state: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      ss_board_no: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'board_info',
            key: 'board_no'
        },
        defaultValue : '2',
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'schedule_share'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('schedule_share');
  }
};
