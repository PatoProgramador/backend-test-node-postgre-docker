const Empleado = require('../models/empleado');

const createEmployee = async (req, res) => {
    const { nif, nombre, apellido1, apellido2 } = req.body;
    const newEmployee = await Empleado.create({
        nif,
        nombre,
        apellido1,
        apellido2
    });

    console.log(newEmployee);
};

module.exports = {createEmployee};