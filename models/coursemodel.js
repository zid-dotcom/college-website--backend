const mongoose=require('mongoose')


const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true

    },
    imgurl:{
        type:String,
        required:true
    }
})


const coursemodel=mongoose.model('coursemodel',courseSchema)
module.exports=coursemodel