const express=require('express')
const outer=express.Router()
const {createtask}=require('../controllers/taskcontroller')
outer.post('/createtask',createtask)

module.exports= outer