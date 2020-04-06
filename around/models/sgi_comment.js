'use strict';
module.exports = (sequelize, DataTypes) => {
  const sgi_comment = sequelize.define('sgi_comment', {
    sgi_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    sgi_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    sgi_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    sgi_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    sgi_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"sgi_info_board",
            key : "sgi_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'sgi_comment'
  });


  sgi_comment.associate = function(models){
    sgi_comment.belongsTo(models.sgi_info_board,{
      foreignKey : 'fk_board_no',
      targetKey : 'sgi_post_no',
    })
  }

  return sgi_comment;
};