const Empleado = require('../../models/empleado');

const updateEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const employee = await Empleado.findOne({
            where: {codigo: id}
        });
        employee.set(req.body);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {updateEmployee};