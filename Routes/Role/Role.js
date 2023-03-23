const express = require('express')
const Route = express.Router();
const {getAllRoles}  = require('./../../Controller/roleController');

Route.get('/get-roles',getAllRoles);

module.exports = Route;