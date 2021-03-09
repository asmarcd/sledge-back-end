module.exports = function (sequelize, DataTypes) {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
    return Ticket;
};

// associations to go here