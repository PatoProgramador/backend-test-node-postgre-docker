const {getEmployees} = require('../controllers/getEmployees');
const {createEmployee} = require('../controllers/createEmployee');
const express = require('express');
const router = express.Router();

router.get('/empleado', getEmployees);
router.post('/empleado', createEmployee);
// router.put('/empleado', controller.version);
// router.delete('/empleado', controller.version);
// router.get('/empleado/:id', controller.version);

module.exports = router;