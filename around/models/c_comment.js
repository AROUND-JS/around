'use strict';
module.exports = (sequelize, DataTypes) => {
  const c_comment = sequelize.define('c_comment', {
    c_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    c_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    c_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    c_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    c_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"companion_board",
            key : "c_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'c_comment'
  });


  c_comment.associate = function(models){
    c_comment.belongsTo(models.companion_board,{
      foreignKey : 'fk_board_no',
      targetKey : 'c_post_no',
    })

    c_comment.belongsTo(models.user,{
      foreignKey : 'c_comment_writer',
      targetKey : 'user_nickname'
    })
  }

  return c_comment;
};