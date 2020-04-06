"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("jl_attachment",
      {
        originalFileName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        serverFileName: {
          type: Sequelize.STRING,
          primaryKey : true,
          allowNull: false
        },
        size: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        uploadedBy: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: "user",
            key: "user_nickname"
          }
        },
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "jl_info_board",
            key: "jl_post_no"
          }
        },
        path: {
          type: Sequelize.STRING,
          primaryKey : true,
          allowNull: false
        },
        state: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 1
        },
        filetype : {
          type : Sequelize.STRING,
          allowNull : false
        }
      },
      {
        timestamps : false,
        freezeTableName: true,
        underscore : false,
        tableName: "jl_attachment"
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("jl_attachment");
  }
};
