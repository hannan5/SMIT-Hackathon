const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
    AdminName:{
        type:String,
        required:true 
    },
    Password:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('Admin',AdminSchema)