const express = require('express');
const router = express.Router();
const {getDepartments} = require('../controllers/department/getDepartments');
const {createDepartment} = require('../controllers/department/createDepartment');
const {updateDepartment} = require('../controllers/department/updateDepartment');
const {deleteDepartment} = require('../controllers/department/deleteDepartment')
const {getEmployeeDepartment} = require('../controllers/department/getEmployeDepartment')

router.get('/', getDepartments);
router.post('/', createDepartment);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);
router.get('/:id/empleados', getEmployeeDepartment);

module.exports = router;