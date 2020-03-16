'use strict'

module.exports = (sequelize, DataTypes) => {
    const gw_info_board = sequelize.define('gw_info_board', {
        gw_post_no : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        gw_post_title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        gw_post_text : {
            type : DataTypes.TEXT,
            allowNUll : false
        },
        gw_writer : {
            type : DataTypes.STRING,
            allowNull : false,
            references: {
                model : 'user',
                key : 'user_nickname' 
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        gw_write_date : {
            type : DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
        },
        gw_post_file : {
            type : DataTypes.STRING,
            unique : true
        },
        gw_hit : {
            type : DataTypes.INTEGER,
            allowNull : true,
            defaultValue : '0'
        },
        gw_post_state : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        gw_board_no : {
            type : DataTypes.INTEGER,
            allowNull : true,
            references: {
                model: 'board_info',
                key: 'board_no'
            },
            defaultValue:'4',
            onDelete: 'CASCADE'
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'gw_info_board'
    })

    gw_info_board.associate = function(models){
        gw_info_board.hasMany(models.gw_comment,{
          foreignKey : 'fk_board_no',
          sourceKey : 'gw_post_no'
        })
      }

    return gw_info_board
}