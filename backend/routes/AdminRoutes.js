const express = require('express')
const { Adminsignup, AdminLogin, ForgetPassword} = require('../controllers/admincontroller')
const router = express.Router()

router.route('/adminsignup').post(Adminsignup)
router.route('/adminlogin').post(AdminLogin)
router.route('/ForgetPassword').post(ForgetPassword)



module.exports = router