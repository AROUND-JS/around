'use strict';
module.exports = (sequelize, DataTypes) => {
  const hotlist = sequelize.define('hotlist', {
    hot_user_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    hot_board_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hot_post_title: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    hot_writer_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hot_write_date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("now()"),
        allowNull: false
    }
  }, {

    freezeTableName: true,
    tableName: 'hotlist'
  });

  hotlist.associate = (models) => {
    hotlist.belongsTo(models.user, {
        foreignKey: 'hot_user_no',
        targetKey: 'user_no',
        onDelete: 'cascade'
    });
}
  return hotlist;
};