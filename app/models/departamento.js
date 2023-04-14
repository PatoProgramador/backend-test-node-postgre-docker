const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Empleado = require('./empleado');

const Departamento = db.define('departamentos', {
    codigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    presupuesto: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

Departamento.hasMany(Empleado, {
    foreignKey: 'codigo_departamento',
    sourceKey: 'codigo'
});

Empleado.belongsTo(Departamento,{
    foreignKey: 'codigo_departamento',
    sourceKey: 'codigo'
})

module.exports = Departamento;
