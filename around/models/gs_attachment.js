'use strict';
module.exports = (sequelize, DataTypes) => {
    const gs_attachment = sequelize.define('gs_attachment', {
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
                model : 'gs_info_board',
                key : 'gs_post_no'
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
        tableName: 'gs_attachment'
    })

    gs_attachment.associate = (models) => {
        gs_attachment.belongsTo(models.gs_info_board, {
            foreignKey : 'postId',
            targetKey : 'gs_post_no'
        })
    }

    return gs_attachment
}