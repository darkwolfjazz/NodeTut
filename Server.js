const express=require('express');
const app=express()
const db=require('./db')

const bodyParser=require('body-parser')
app.use(bodyParser.json());   //stores in req.body

const Student=require('./models/student');

app.get('/',()=>{
    console.log('Server rendering succesfully!');
})

app.post('/student',async(req,res)=>{

try{

const data=req.body;
const newStudent=new Student(data);
const response=await newStudent.save()
console.log('Student data is saved');
res.status(200).json(response);

}catch(err){
console.log('Error occured');
res.status(500).json({error:"Internal server occured"})
}
})

app.get('/student',async(req,res)=>{
try{
const data=await Student.find();
console.log(data,"DATA found");
}catch(err){
console.log("Unknown error occured");
}
})

app.get('/student/:workType',async(req,res)=>{
try{

    const workType=req.params.workType;
    if(workType=='teacher'||workType=='students'){
        const response=await Student.find();
        console.log('Getting you data according to the worktype');
        res.status(200).json(response);
    }
    else{
        console.log("Sahi worktype dalo")
    }


}catch(err){
console.log(err);
res.status(500).json({error:"Sahi worktype dalo !"})
}
})











app.listen(3000,()=>{
    console.log("Server started")
});   













// const Person=require('./models/person')


//  app.get('/',function(req,res){
//      res.send("Hello from server.js")   
//  })

// app.post('/person',async(req,res)=>{

//     try{

//     const data=req.body// Assuming that the data will be in req.body
     
//     //Create a newPerson document using Person model which exists in Person.js

//     const newPerson=new Person(data);
    
//     //Save the person in the database
//     const response=await newPerson.save()
//     console.log('data saved')
//     res.status(200).json(response)

// }catch(err){
//   console.log('Error Occured')
//   res.status(500).json({error:"Internal server error"})
// }

// })

// app.get('/person',async(req,res)=>{

// try{
// const data= await Person.find()
// console.log('Data fetched')
// }catch(err){

// }
// })








