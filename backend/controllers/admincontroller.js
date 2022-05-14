const Admin = require('../models/adminSchema')
const jwt = require('jsonwebtoken')
exports.AdminLogin = async (req,res) =>{
    try {
    const { AdminName, Password } = req.body
    if (!AdminName || !Password) {
        return res.json({ message: 'Please input all fields' })
    }

    const user = await Admin.findOne({
        AdminName
    })
    console.log(user)
    if (!user) {
        return res.json({ message: 'User are not authorized' })
    }
    const isMatch = req.body.Password == user.Password;
    if (isMatch) {
        const token = jwt.sign(JSON.stringify(user), process.env.SECRET)
        res.cookie('practice', token,{
            expires:new Date(Date.now()+ 3000000)
        })

        return res.json({ status: 200, message: 'login', user, user, token: token })
    }
    else {
        return res.json({ status: 403, message: "Invalid Password" });
    }
    } catch (error) {
        
    }
}


exports.Adminsignup = async (req, res) => {
    try {
        const { AdminName, Password } = req.body
        const user = await Admin.create({
            AdminName, Password      
        })
        res.status(200).json({
            sucess: true,
            user,
        })
    }
    catch (e) {
        console.log(e)
    }
}

exports.ForgetPassword = (req,res) =>{
try {
    const { Password } = req.body
    if(req.body.Password){
        const admin = Admin.findByIdAndUpdate(res._id,{Password:Password})
        return res.json({ status: 2003, message: admin });
    }
    else{
        return res.json({ status: 403, message: "Invalid Password" });
        
    }
} catch (error) {
    console.log(error)
    
}
}