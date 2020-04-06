'use strict'

module.exports = (sequelize, DataTypes) => {
    const gs_info_board = sequelize.define('gs_info_board', {
        gs_post_no : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        gs_post_title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        gs_post_text : {
            type : DataTypes.TEXT,
            allowNUll : false
        },
        gs_writer : {
            type : DataTypes.STRING,
            allowNull : false,
            references: {
                model : 'user',
                key : 'user_nickname' 
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        gs_write_date : {
            type : DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
        },
        gs_post_file : {
            type : DataTypes.STRING,
            unique : true
        },
        gs_hit : {
            type : DataTypes.INTEGER,
            allowNull : true,
            defaultValue : '0'
        },
        gs_post_state : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        gs_board_no : {
            type : DataTypes.INTEGER,
            allowNull : true,
            references: {
                model: 'board_info',
                key: 'board_no'
            },
            defaultValue:'7',
            onDelete: 'CASCADE'
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'gs_info_board'
    })


    gs_info_board.associate = function(models){
        gs_info_board.hasMany(models.gs_comment,{
          foreignKey : 'fk_board_no',
          sourceKey : 'gs_post_no'
        })

        gs_info_board.hasMany(models.gs_attachment, {
            foreignKey : 'postId',
            sourceKey : 'gs_post_no'
          })
      }

    return gs_info_board
}