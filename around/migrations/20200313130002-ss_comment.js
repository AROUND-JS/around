'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ss_comment', {
      ss_comment_no: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },
      ss_comment_writer : {
          type:Sequelize.STRING,
          allowNull : false,
          references : {
              model:"user",
              key: "user_nickname"
          }
      },
      ss_comment_text : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      ss_comment_write_date : {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()')
      },
      ss_comment_state : {
          type : Sequelize.INTEGER,
          allowNull:false
      },
      fk_board_no : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
              model:"schedule_share",
              key : "ss_post_no"
          }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'ss_comment'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ss_comment')
  }
};
