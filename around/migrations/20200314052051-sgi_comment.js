'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sgi_comment', {
      sgi_comment_no: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },
      sgi_comment_writer : {
          type:Sequelize.STRING,
          allowNull : false,
          references : {
              model:"user",
              key: "user_nickname"
          }
      },
      sgi_comment_text : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      sgi_comment_write_date : {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()')
      },
      sgi_comment_state : {
          type : Sequelize.INTEGER,
          allowNull:false
      },
      fk_board_no : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
              model:"sgi_info_board",
              key : "sgi_post_no"
          }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'sgi_comment'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sgi_comment')
  }
};
