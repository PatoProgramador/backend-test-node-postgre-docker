const Empleado = require('../../models/empleado');

const getEmployeeDepartment = async (req, res) => {
    const { id } = req.params;
    try {
        const employees = await Empleado.findAll({
            where: {codigo_departamento: id}
        })
        res.json(employees);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {getEmployeeDepartment};