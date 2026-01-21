const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Users=require('../models/User')
exports.register=async(req,res)=>{
    const {name,email,password}=req.body;
    const existUser=await Users.findOne({email})
    if(existUser){
        res.status(400).json({
            message:"user is existing"
        })
    }
    const haspassword=await bcrypt.hash(password,10)
    const user=await Users.create({
        name,
        email,
        password:haspassword
    })
    res.status(201).json({message:"user is created"})
}
exports.login=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existUser=await Users.findOne({email})
        if(!existUser){
            res.status(400).json({message:"email not registered"})
        }
        const ismatch=await bcrypt.compare(password,existUser.password)
        if(!ismatch){
            res.status(400).json({msg:"Invalid Crediatails"})
        }
        const token=jwt.sign(
            {id:existUser._id},
            process.env.JWT_SECRET,
            {expiresIn:"3d"}
        )
        // res.status(200).json({msg:"user loginned"})
        res.json({token})
    }catch(err){
        res.status(500).json(err)
    }
}