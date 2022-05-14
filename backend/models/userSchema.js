const mongoose = require('mongoose')
const Userschema = new mongoose.Schema({
    RollNo:{
        type:Number,
        required:true 
    },
    CNIC:{
        type:Number,
        required:true 
    },
    Password:{
        type:String,
        required:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    Course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
    }
})
module.exports = mongoose.model('User',Userschema)