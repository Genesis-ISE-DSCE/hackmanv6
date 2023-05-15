const Admin = require("../models/Admin")
const BigPromise = require("../middlewares/BigPromise");
const cookieToken =require("../utilis/CookieToken");
const CustomError = require("../utilis/CustomError")



exports.signUp= BigPromise(async (req,res,next)=>{
const {email,password} = req.body 
 if( ! email || !password ){
    return next(new CustomError("email, password are required",400))
 }
 const admin= await Admin.create({
    email,
    password,
  
 });
 cookieToken(admin,res)
})

exports.login=BigPromise(async (req,res,next)=>{
   const {email, password} = req.body
   if(!email || !password){
      return next(new CustomError("email and password are required",400))
   }
   const admin =await Admin.findOne({email}).select("+password");
   if(!admin){
      return next(new CustomError("user not registerd",400))
   }
   const isPasswordCorrect = await admin.isValidatedPassword(password);
   if(!isPasswordCorrect){
      return next(new CustomError("wrong password",400))
   }
   cookieToken(admin,res)
});

exports.logout=async(req,res,next)=>{
   res.cookie("token",null,{
      expires: new Date(Date.now()),
      httpOnlly: true,
   })
   res.status(200).json({
      sucess:true,
      message:"Logout sucessfull"
   })}