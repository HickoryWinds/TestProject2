module.exports = function(sequelize, DataTypes){
    var calendar = sequelize.define('calendar', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
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
        freezeTableName: true
    });
    
    // A customer belongs to a burger
    calendar.associate = function(models){
        calendar.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return calendar;
};
    
console.log('10');