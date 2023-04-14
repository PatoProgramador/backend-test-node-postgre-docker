const Empleado = require('../../models/empleado');

const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Empleado.findOne({
            where: {codigo: id}
        })
        // validacion 
        if(!employee) {
            throw new Error(`No existen empleados con el código: ${id}`)
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {getEmployee};