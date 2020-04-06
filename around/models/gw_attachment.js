'use strict';
module.exports = (sequelize, DataTypes) => {
    const gw_attachment = sequelize.define('gw_attachment', {
        originalFileName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        serverFileName : {
            type : DataTypes.STRING,
            primaryKey : true,
            allowNull : false
        },
        size : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        uploadedBy : {
            type : DataTypes.STRING,
            allowNull : false,
            references : {
                model : 'user',
                key : 'user_nickname'
            }
        },
        postId : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : 'gw_info_board',
                key : 'gw_post_no'
            }
        },
        path : {
            type : DataTypes.STRING,
            unique : true, 
            allowNull : false
        },
        state : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        },
        filetype : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        timestamps : false,
        freezeTableName: true,
        underscore : false,
        tableName: 'gw_attachment'
    })

    gw_attachment.associate = (models) => {
        gw_attachment.belongsTo(models.gw_info_board, {
            foreignKey : 'postId',
            targetKey : 'gw_post_no'
        })
    }

    return gw_attachment
}