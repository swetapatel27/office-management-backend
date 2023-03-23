const mongoose = require('mongoose');
const Employee = require('../models/Employee');
const company = require('../models/Company');
const role = require("../models/Role");

exports.getemployees = async function(req,res){
    const employees = await Employee.find().populate({
        path:'role',
        select:['name']
    }).populate({
        path:'company',
        select:['name']
    })
    return res.json({"employees":employees});
}

exports.saveEmployee = async function(req,res){
    try{
        const {name,dept,email,company,role}= req.body
        if (!name || !dept || !email || !company || !role) {
            return res.status(400).json({ message: 'Name, deparmtent, email, company and role are required' });
          }
        const employee = new Employee({name:name,dept:dept,email:email,company:company,role:role});
        await employee.save();
        res.status(201).json({'msg':employee});
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

exports.updateEmployee = async function(req,res){

    try{
    const id = req.params.id;
    const {name,dept,email,company,role}= req.body
    if (!name || !dept || !email || !company || !role) {
        return res.status(400).json({ message: 'Name, deparmtent, email, company and role are required' });
      }
    const updatedEmp = {name:name,dept:dept,email:email,company:company,role:role};
    const employee = await Employee.findByIdAndUpdate(id,updatedEmp,{
        new: true
      });
      res.status(201).json({'msg':employee});
    }
    catch(error){
    res.status(400).json({ error: error.message });
}

}

exports.deleteEmployee = async function(req,res){
    try{
    const id = req.params.id;
    const employee = await Employee.deleteOne({_id:mongoose.Types.ObjectId(id)});
    res.status(201).json({'msg':employee});
}catch(error){
    res.status(400).json({ error: error.message });
}
}


