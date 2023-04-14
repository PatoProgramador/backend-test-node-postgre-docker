const Empleado = require('../../models/empleado');

const getEmployees = async (req, res) => {
    try {
        const employees = await Empleado.findAll();
        res.status(200).json(employees) 
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {getEmployees};