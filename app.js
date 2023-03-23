const express = require('express');
const bodyParser = require("body-parser"); 
const conn = require('./db');
const app = express();
const employeeRoute = require('./Routes/Employee/Employee')
const companyRoute = require('./Routes/Company/Company');
const roleRoute = require('./Routes/Role/Role');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

conn;



app.use('/api',employeeRoute)
app.use('/api',companyRoute);
app.use('/api',roleRoute);

module.exports = app;