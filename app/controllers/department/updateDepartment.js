const Departamento = require('../../models/departamento');

const updateDepartment = async (req, res) => {
    const { id } = req.params;
    try {
        const department = await Departamento.findOne({
            where: {codigo: id}
        });
        department.set(req.body)
        await department.save();
        res.json(department)
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = { updateDepartment};