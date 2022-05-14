const express = require('express')
const { signup, UserLogin} = require('../controllers/usercontroller')
const router = express.Router()

router.route('/signup').post(signup)
router.route('/login').post(UserLogin)

module.exports = router
