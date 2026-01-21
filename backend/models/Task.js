const mongoose=require('mongoose')
const taskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",       
        required:true
    }
})
module.exports = mongoose.model('Tasks',taskSchema)