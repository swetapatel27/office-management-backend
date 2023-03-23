const mongoose = require('mongoose');
const Role = require("../models/Role");

exports.getAllRoles = async function (req,res){
    const roles = await Role.find({});
    return res.json({"msg":roles});
}