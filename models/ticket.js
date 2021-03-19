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
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        label: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
    return Ticket;
};

// associations to go here