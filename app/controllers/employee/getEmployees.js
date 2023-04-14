const Empleado = require('../../models/empleado');
const {Op} = require("sequelize");

const getEmployees = async (req, res) => {
    try {
        let employees;
        if(req.query) {
            const {name} = req.query;
            employees = await Empleado.findAll({
                where: {
                    nombre: {[Op.iLike]: `%${name}%`},
                }
            });
        }
        employees = await Empleado.findAll();
        res.status(200).json(employees) 
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {getEmployees};