const mongoose=require('mongoose')

const facultySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    imgURl:{
        type:String,
        required:true
    }
})


const facultymodel=mongoose.model('facultymodel',facultySchema)
module.exports=facultymodel