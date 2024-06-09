const mongoose=require("mongoose")

const mongodbfieldexport=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        requiredL:true
    },
    gender:{
        type:String,
        requiredL:true
    },
    mobilenumber:{
        type:Number,
        requiredL:true
    }
    
})

const mongodbfileexport=mongoose.model("KaranData",mongodbfieldexport)


module.exports=mongodbfileexport;
