const { default: mongoose } = require("mongoose");

let shoescollection= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    inStock:{
        type:Boolean,
        required:true
    },    

})

let allshoescollection=mongoose.model("allshoescollection",shoescollection)
module.exports=allshoescollection