const express = require('express')
const Route = express.Router();
const {getemployees,saveEmployee,updateEmployee,deleteEmployee} = require('../../Controller/employeeController');

Route.post('/add-employee',saveEmployee);
Route.get('/get-employees',getemployees);
Route.patch('/update-employee/:id',updateEmployee);
Route.delete('/delete-employee/:id',deleteEmployee);

module.exports = Route;