const User = require('../models/userSchema')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res, next) => {
    try {
        const { RollNo, CNIC, Password } = req.body
        const haspassword = Bcrypt.hashSync(req.body.Password, 12)
        // req.body.password = await Bcrypt.hashSync(req.body.password,12)
        const user = await User.create({
            RollNo, CNIC, Password: haspassword
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

exports.UserLogin = async (req,res) =>{
    try {
    const { RollNo, Password } = req.body
    console.log(RollNo, Password)

    if (!RollNo || !Password) {
        return res.json({ message: 'Please input all fields' })
    }

    const user = await User.findOne({
        RollNo
    })
    console.log(user)
    if (!user) {
        return res.json({ message: 'User are not authorized' })
    }
    const isMatch =  await Bcrypt.compare(req.body.Password, user.Password);
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
