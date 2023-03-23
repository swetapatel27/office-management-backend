const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dept:{type:String,
        required: true
    },
    email: {type: String,
        required: true
    },
    company:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    },
    role:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    }
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
