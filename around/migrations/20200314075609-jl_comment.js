'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jl_comment', {
      jl_comment_no: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull: false
      },
      jl_comment_writer : {
          type:Sequelize.STRING,
          allowNull : false,
          references : {
              model:"user",
              key: "user_nickname"
          }
      },
      jl_comment_text : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      jl_comment_write_date : {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()')
      },
      jl_comment_state : {
          type : Sequelize.INTEGER,
          allowNull:false
      },
      fk_board_no : {
          type : Sequelize.INTEGER,
          allowNull : false,
          references : {
              model:"jl_info_board",
              key : "jl_post_no"
          }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'jl_comment'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jl_comment')
  }
};
