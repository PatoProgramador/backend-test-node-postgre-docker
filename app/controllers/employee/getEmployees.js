const Empleado = require('../../models/empleado');
const { Op } = require("sequelize");

const getEmployees = async (req, res) => {
    try {
        let employees;
        // busquedas por filtros
        if (req.query.nombre || req.query.apellido1 || req.query.apellido2) {
            const { nombre, apellido1, apellido2 } = req.query;
            let nameSearch = {
                nombre,
                apellido1,
                apellido2
            };
            // busquedas por nombres y apellidos
            for (const key in nameSearch) {
                if (nameSearch[key]) {
                    employees = await Empleado.findAll({
                        where: {
                            [key]: { [Op.iLike]: `%${req.query[key]}%` },
                        }
                    });
                }
            }
        } else if (req.query.nif || req.query.codigo_departamento) {
            // busquedas que no requieren un op.ilike
            const { nif, codigo_departamento } = req.query;
            let numberSearch = {
                nif,
                codigo_departamento
            };
            for (const key in numberSearch) {
                if (numberSearch[key]) {
                    employees = await Empleado.findAll({
                        where: {
                            [key]: req.query[key],
                        }
                    });
                }
            }
        } else {
            // en caso de no tene req.query
            employees = await Empleado.findAll();
        };
        // en caso de no existir employees
        if (employees.length === 0) {
            throw new Error("No hay empleados registrados")
        }
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
};

module.exports = { getEmployees };