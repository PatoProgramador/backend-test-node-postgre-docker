const Departamento = require('../../models/departamento');

const getDepartments = async (req, res) => {
    try {
        const departments = await Departamento.findAll();
        res.json(departments)
    } catch (error) {
        res.send(500).json({"error": error.message})
    }
};

module.exports = {getDepartments}