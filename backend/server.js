const express=require('express');
const mongoose =require('mongoose');
const dotenv=require('dotenv')
const app=express();
app.use(express.json());
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("mongodb on sucessfull")})
.catch((err)=>{console.log("mongodb on unsucess",err)})


app.use('/auth',require('./routes/authRoutes.js'))
app.use('/tas',require('./routes/taskRoutes.js'))
app.get('/get',(req,res)=>{
    res.json("hi exprss");
})
app.post('/post',(req,res)=>{
    const temp=req.body;
    res.json(temp);
})
app.listen(3000,()=>{
    console.log("Stset server",3000);
})