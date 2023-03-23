const mongoose = require('mongoose')

const url = "mongodb+srv://test:12345@gql-cluster.3ipfgax.mongodb.net/office?retryWrites=true&w=majority";
const conn = mongoose.connect(url, { useNewUrlParser: true }).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log("error",error)
})

module.exports = conn;