const mongoose=require('mongoose');

//defining student schema

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    marks:{
        type:Number
    },
    email:{
        type:String
    },
    work:{
        type:String
    }

})

const student=mongoose.model('student',studentSchema);
module.exports=student;





