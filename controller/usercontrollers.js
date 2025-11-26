const usermodel=require('../models/usermodel')
const jwt =require('jsonwebtoken')






 exports.userLogin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existing=await usermodel.findOne({email})
        console.log(existing);
        
        if(existing){
            const token=jwt.sign({userId:existing._id},process.env.SECRETKEY)
            res.status(201).json({token,username:existing.name})
        }
        else{
            res.status(406).json("Invalid email or password")

        }

    }
     catch(err){
        console.log(err);
        res.status(401).json(err)
        
    }
 }
exports.userRegister=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const existing=await usermodel.findOne({email})
        if(existing){
            res.status(406).json("user already existed")
        }
        else{
            const newuser=new usermodel({name,email,password})
            await newuser.save()
            res.status(201).json(newuser)
        }

    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
        
    }
}
