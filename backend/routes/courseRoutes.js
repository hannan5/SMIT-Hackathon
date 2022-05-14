const express = require('express')
const { AddCourse,GetCourse,UpdateCourse } = require('../controllers/coursecntroller')
const router = express.Router()
router.route('/addCourse').post(AddCourse)
router.route('/getCourse').get(GetCourse)
router.route('/updateCourse').put(UpdateCourse)
module.exports = router