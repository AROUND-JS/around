'use strict';
module.exports = (sequelize, DataTypes) => {
  const ss_comment = sequelize.define('ss_comment', {
    ss_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    ss_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    ss_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    ss_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    ss_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"schedule_share",
            key : "ss_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'ss_comment'
  });


  ss_comment.associate = function(models){
    ss_comment.belongsTo(models.schedule_share,{
      foreignKey : 'fk_board_no',
      targetKey : 'ss_post_no',
    })
  }

  return ss_comment;
};