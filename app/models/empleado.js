const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Empleado = db.define('empleados', {
    codigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nif: {
        type: DataTypes.STRING(9),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido1: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido2: {
        type: DataTypes.STRING(100),
    }
});

module.exports = Empleado;
