const mongoose=require('mongoose')

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        required: true
    }
})


const eventmodel=mongoose.model('eventmodel',eventSchema)

module.exports=eventmodel



