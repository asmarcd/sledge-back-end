module.exports = function (sequelize, DataTypes) {
    const Label = sequelize.define("Label", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })
    return Label;
};

// associations to go here