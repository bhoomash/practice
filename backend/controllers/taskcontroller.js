const jwt=require('jsonwebtoken')
const Tasks=require('../models/Task')
exports.createtask=async(req,res)=>{
    const {title,description,status,userid}=req.body;
    const newTask=await Tasks.create({
        title,
        description,
        status,
        userid
    })
    if(newTask){
        res.status(201).json({message:"Task created",task:newTask})
    }
}