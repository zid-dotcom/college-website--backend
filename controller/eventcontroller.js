const eventmodel = require('../models/eventsmodel')


exports.addevent = async (req, res) => {
    try {
        const { name, description, date } = req.body

        const events = new eventmodel({ name, description, date })
        await events.save()
        res.status(201).json(events)

    }
    catch (err) {
        console.log(err);
        console.log(err);

        res.status(401).json(err)

    }

}

exports.getallevents = async (req, res) => {
    try {
        const listevents = await eventmodel.find()
        res.status(200).json(listevents)


    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)


    }
}


exports.geteventsbyId = async (req, res) => {
    try {
        const { id } = req.params
        const getevent = await eventmodel.findById(id)
        res.status(200).json(getevent)


    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }
}




exports.deleteevent=async(req,res)=>{
    try{
        const {id}=req.params
        const deletevent=await eventmodel.findByIdAndDelete(id)
        res.status(200).json(deletevent)


    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
        
    }
}

exports.updateevent = async (req, res) => {
    try {
        const { name, description, date } = req.body


        const { id } = req.params
        const updateevent = await eventmodel.findByIdAndUpdate(id, { name, description, date })
        res.status(200).json(updateevent)


    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }
}



