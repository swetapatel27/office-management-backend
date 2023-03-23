const Company = require('../models/Company');
const mongoose = require('mongoose');


exports.getAllCompanies = async function (req,res){
    const companies = await Company.find({});
    return res.json({"msg":companies});
}

exports.saveCompany = async function(req,res){
    try {
        const {name}= req.body
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
          }
        const company = new Company({name:name})
        await company.save()
        res.status(201).json({'msg':company});
    }catch(error){
        res.status(400).json({ error: error.message });
    }

    
}

exports.updateCompany = async function(req,res){
    try{
    const id = req.params.id;
    const {name}= req.body
    if (!name) {
            return res.status(400).json({ message: 'Name is required' });
    }
    const company = await Company.findByIdAndUpdate(id,{name:name},{
        new: true
      });
    res.status(201).json({'msg':company});
}catch(error){
    res.status(400).json({ error: error.message });
}
}

exports.deleteCompany = async function(req,res){
    try{
    const id = req.params.id;
    const company = await Company.deleteOne({_id:mongoose.Types.ObjectId(id)});
    res.status(201).json({'msg':company});
}catch(error){
    res.status(400).json({ error: error.message });
}
}