'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cc_comment', {
      cc_comment_no: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },
      cc_comment_writer : {
          type:Sequelize.STRING,
          allowNull : false,
          references : {
              model:"user",
              key: "user_nickname"
          }
      },
      cc_comment_text : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      cc_comment_write_date : {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()')
      },
      cc_comment_state : {
          type : Sequelize.INTEGER,
          allowNull:false
      },
      fk_board_no : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
              model:"cc_info_board",
              key : "cc_post_no"
          }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'cc_comment'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cc_comment')
  }
};
