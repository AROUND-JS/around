'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jj_comment', {
      jj_comment_no: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },
      jj_comment_writer : {
          type:Sequelize.STRING,
          allowNull : false,
          references : {
              model:"user",
              key: "user_nickname"
          }
      },
      jj_comment_text : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      jj_comment_write_date : {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()')
      },
      jj_comment_state : {
          type : Sequelize.INTEGER,
          allowNull:false
      },
      fk_board_no : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
              model:"jj_info_board",
              key : "jj_post_no"
          }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'jj_comment'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jj_comment')
  }
};
