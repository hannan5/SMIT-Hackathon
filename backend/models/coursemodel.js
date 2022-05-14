const mongoose = require('mongoose')
const Courseschema = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    Duration:{
        type:Number,
        required:true 
    },
    Price:{
        type:Number,
        required:true,
    },
    Status:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('Course',Courseschema)