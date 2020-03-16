'use strict';
module.exports = (sequelize, DataTypes) => {
  const jj_comment = sequelize.define('jj_comment', {
    jj_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    jj_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    jj_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    jj_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    jj_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"jj_info_board",
            key : "jj_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'jj_comment'
  });


  jj_comment.associate = function(models){
    jj_comment.belongsTo(models.jj_info_board,{
      foreignKey : 'fk_board_no',
      targetKey : 'jj_post_no',
    })
  }

  return jj_comment;
};