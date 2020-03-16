'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gs_comment', {
      gs_comment_no: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },
      gs_comment_writer : {
          type:Sequelize.STRING,
          allowNull : false,
          references : {
              model:"user",
              key: "user_nickname"
          }
      },
      gs_comment_text : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      gs_comment_write_date : {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()')
      },
      gs_comment_state : {
          type : Sequelize.INTEGER,
          allowNull:false
      },
      fk_board_no : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
              model:"gs_info_board",
              key : "gs_post_no"
          }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'gs_comment'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gs_comment')
  }
};
