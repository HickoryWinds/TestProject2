// define calendar to keep track of journal entries
// all entries except for event are take from pull down menus
module.exports = function(sequelize, DataTypes){
    var calendar = sequelize.define('calendar', {
        month: {
            type: DataTypes.STRING,
            allowNull: false
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        min: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ampm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    message: 'Event must be between 1 and 255 characters in length.'
                }
            }
        }
    },{
        // keeps 's' from being added to table name
        freezeTableName: true
    });
    
    // an event belongs to a user
    calendar.associate = function(models){
        calendar.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return calendar;
};
