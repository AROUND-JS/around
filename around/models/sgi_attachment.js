'use strict';
module.exports = (sequelize, DataTypes) => {
    const sgi_attachment = sequelize.define('sgi_attachment', {
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
                model : 'sgi_info_board',
                key : 'sgi_post_no'
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
        tableName: 'sgi_attachment'
    })

    sgi_attachment.associate = (models) => {
        sgi_attachment.belongsTo(models.sgi_info_board, {
            foreignKey : 'postId',
            targetKey : 'sgi_post_no'
        })
    }

    return sgi_attachment
}