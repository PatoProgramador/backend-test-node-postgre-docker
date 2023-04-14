const Empleado = require('../../models/empleado');

const createEmployee = async (req, res) => {
    const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    try {
        let validate = {
            nif,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        };
        for(const key in validate) {
            const element = validate[key];
            if(!element && key !== "apellido2") {
                res.status(400).json({"message": `el campo ${key} no puede estar vacio`})
            };
        };
        const newEmployee = await Empleado.create({
            nif,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        });
    
        return res.status(200).json(newEmployee)  
    } catch (error) {
        return res.status(500).json({"error": error.message});
    }
};

module.exports = {createEmployee};