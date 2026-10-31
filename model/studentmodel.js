const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:String,
    age:Number,
   email:String,
   contact:Number,

})

const student = mongoose.model('students',studentSchema)

module.exports = student