'use strict'

module.exports = (sequelize, DataTypes) => {
    const jj_info_board = sequelize.define('jj_info_board', {
        jj_post_no : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        jj_post_title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        jj_post_text : {
            type : DataTypes.TEXT,
            allowNUll : false
        },
        jj_writer : {
            type : DataTypes.STRING,
            allowNull : false,
            references: {
                model : 'user',
                key : 'user_nickname' 
              },
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
        },
        jj_write_date : {
            type : DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
        },
        jj_post_file : {
            type : DataTypes.STRING,
            unique : true
        },
        jj_hit : {
            type : DataTypes.INTEGER,
            allowNull : true,
            defaultValue : '0'
        },
        jj_post_state : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        jj_board_no : {
            type : DataTypes.INTEGER,
            allowNull : true,
            references: {
                model: 'board_info',
                key: 'board_no'
            },
            defaultValue: '8',
            onDelete: 'CASCADE'
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'jj_info_board'
    })

    jj_info_board.associate = function(models){
        jj_info_board.hasMany(models.jj_comment,{
          foreignKey : 'fk_board_no',
          sourceKey : 'jj_post_no'
        })

        jj_info_board.hasMany(models.jj_attachment, {
            foreignKey : 'postId',
            sourceKey : 'jj_post_no'
          })
      }

    return jj_info_board
}