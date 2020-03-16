'use strict'
module.exports = (sequelize, DataTypes) => {
    let user = sequelize.define("user", {
        user_no: {
            field: "user_no",
            type: DataTypes.INTEGER(11),
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        user_email: {
            field: "user_email",
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            primaryKey: true,
            validate: {
                isEmail: true
            }
        },
        user_name: {
            field: "user_name",
            type: DataTypes.STRING(10),
            allowNull: false
        },
        user_nickname: {
            field: "user_nickname",
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        user_pw: {
            field: "user_pw",
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        user_phone: {
            field: "user_phone",
            type: DataTypes.STRING(11),
            allowNull: false
        },
        user_salt: {
            field: "user_salt",
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
          }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user'
    });

    user.associate = (models) => {
        models.user.hasMany(models.c_comment, {
            foreignKey: 'c_comment_writer',
            sourceKey: 'user_nickname'
        });
    }
    return user
}