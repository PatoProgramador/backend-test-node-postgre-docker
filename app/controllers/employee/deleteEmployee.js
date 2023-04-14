const Empleado = require('../../models/empleado');

const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        // validacion de la eliminacion de la tabla
        const employee = await Empleado.findOne({
            where: { codigo: id }
        });
        if (!employee) {
            throw new Error(`No existen empleados con el código: ${id}`)
        }
        // caso donde si existe
        await employee.destroy();

        res.status(200).json({ "message": "El empleado se elimino correctamente" });
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
};

module.exports = { deleteEmployee };