//const error=new Error("Something went wrong");
// console.log(error.stack);
// console.log(error.message);

//throw new Error("I am error")

const {CustomError}=require("./CustomError")
throw new CustomError("This is a custom error object")