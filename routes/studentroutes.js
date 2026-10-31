const express = require('express')
const router = express.Router()
const {createStudent,getallStudent,getStudentById,updateStudent,deleteStudent}   = require('../controller/studentcontroller')

router.post('/createstudent',createStudent)
router.get('/getallstudent',getallStudent)
router.get('/getstudentbyid/:id',getStudentById)
router.put('/updatestudent/:id',updateStudent)
router.delete('/deletestudent/:id',deleteStudent)

module.exports = router