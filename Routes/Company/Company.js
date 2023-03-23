const express = require('express')
const Route = express.Router()
const {getAllCompanies,saveCompany,updateCompany,deleteCompany}= require('../../Controller/companyController');

Route.post('/add-company',saveCompany);
Route.patch('/update-company/:id',updateCompany);
Route.delete('/delete-company/:id',deleteCompany);
Route.get('/get-companies',getAllCompanies);

module.exports = Route;