const Course = require('../models/coursemodel')
exports.AddCourse =async (req,res) =>{
    try {
        const {name,Duration,Price,Status } = req.body 
        const course = await Course.create({
            name,Duration,Price,Status
        })
        res.status(200).json({
            sucess: true,
            res:course,
        })
    } catch (error) {
        console.log(error)
    }
}

exports.GetCourse =async (req,res) =>{
    try {
        const course = await Course.find()
        res.status(200).json({
            sucess: true,
            res:course,
        })
    } catch (error) {
        console.log(error)
    }
}
exports.UpdateCourse = async (req,res) =>{
    try {
        const {name,Duration,Price,Status } = req.body 
        const course = await Course.findByIdAndUpdate(req.query.id,req.body)
        res.status(200).json({
            sucess: true,
            res:course,
        })
    } catch (error) {
        console.log(error)
    }
}