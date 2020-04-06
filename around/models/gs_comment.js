'use strict';
module.exports = (sequelize, DataTypes) => {
  const gs_comment = sequelize.define('gs_comment', {
    gs_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    gs_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    gs_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    gs_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    gs_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"gs_info_board",
            key : "gs_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'gs_comment'
  });


  gs_comment.associate = function(models){
    gs_comment.belongsTo(models.gs_info_board,{
      foreignKey : 'fk_board_no',
      targetKey : 'gs_post_no',
    })
  }

  return gs_comment;
};