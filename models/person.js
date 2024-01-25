const mongoose=require('mongoose');

//Define person Schema

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        required:true,
        enum:['chef','waiter','manager']
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,

    },
    salary:{
        type:Number,
        required:true
    }
});

//Create Person Model

const Person=mongoose.model('Person',personSchema);
module.exports=Person;







