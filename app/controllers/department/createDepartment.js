const Departamento = require('../../models/departamento');

const createDepartment = async (req, res) => {
    const { nombre, presupuesto} = req.body;
    try {
        const newDeparment = await Departamento.create({
            nombre,
            presupuesto,
        });
        res.json(newDeparment);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {createDepartment};