const mongoose=require('mongoose');

const mongoUrl='mongodb://localhost:27017/hotels';

mongoose.connect(mongoUrl)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDB")
})

db.on('error',()=>{
    console.log("Error ")
})

db.on('disconnected',()=>{
    console.log("Disconnected to MongoDB")
})

module.exports=db;

