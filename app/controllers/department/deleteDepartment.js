const Departamento = require('../../models/departamento');

const deleteDepartment = async (req, res) => {
    const { id } = req.params;

    try {
        await Departamento.destroy({
            where: {codigo: id},
        });
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {deleteDepartment};