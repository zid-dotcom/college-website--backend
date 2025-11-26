const coursemodel = require('../models/coursemodel')


exports.addcourse = async (req, res) => {
    try {

        const { title, description, duration, imgurl } = req.body
        const courses = new coursemodel({ title, description, duration, imgurl })
        await courses.save()
        res.status(201).json(courses)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }




}

exports.getallcourses = async (req, res) => {
    try {
        const listcourses = await coursemodel.find()
        res.status(200).json(listcourses)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }

}



exports.getcourseBYID = async (req, res) => {
    try {
        const { id } = req.params
        const coursebyid = await coursemodel.findById(id)
        res.status(200).json(coursebyid)


    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }

}

exports.deletecourse = async (req, res) => {
    try {
        const { id } = req.params
        const deletecourse = await coursemodel.findByIdAndDelete(id)
        res.status(200).json(deletecourse)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }

}

exports.updatecourse = async (req, res) => {
    try {
        const { title, description, duration, imgurl } = req.body
        const { id } = req.params
        const editecourse = await coursemodel.findByIdAndUpdate(id, { title, description, duration, imgurl })
        res.status(200).json(editecourse)




 




    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }
}


