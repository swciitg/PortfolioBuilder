import mongoose from "mongoose";

var userSchemma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rollnumber:{
        type:Number,
        required:true
    },
    id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Portfolio"
    }]
});

