const {getEmployees} = require('../controllers/employee/getEmployees');
const {createEmployee} = require('../controllers/employee/createEmployee');
const {deleteEmployee} = require('../controllers/employee/deleteEmployee');
const {updateEmployee} = require('../controllers/employee/updateEmployee');
const {getEmployee} = require('../controllers/employee/getEmployee');

const express = require('express');
const router = express.Router();

router.get('/', getEmployees);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.get('/:id', getEmployee);


module.exports = router;