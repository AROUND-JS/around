'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('c_comment', {
      c_comment_no: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },
      c_comment_writer : {
          type:Sequelize.STRING,
          allowNull : false,
          references : {
              model:"user",
              key: "user_nickname"
          }
      },
      c_comment_text : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      c_comment_write_date : {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()')
      },
      c_comment_state : {
          type : Sequelize.INTEGER,
          allowNull:false
      },
      fk_board_no : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
              model:"companion_board",
              key : "c_post_no"
          }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'c_comment'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('c_comment')
  }
};
