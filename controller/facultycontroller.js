const facultymodel = require('../models/facultymodel')


exports.addfaculty = async (req, res) => {
    try {
        const { name, department, imgURl } = req.body
        const faculty = new facultymodel({ name, department, imgURl })
        await faculty.save()
        res.status(201).json(faculty)


    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)




    }

}


exports.getallfaculty = async (req, res) => {
    try {
        const facultylist = await facultymodel.find()
        res.status(200).json(facultylist)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)




    }
}

exports.facultyBYId = async (req, res) => {
    try {
        const { id } = req.params
        const facultybyid = await facultymodel.findById(id)
        res.status(200).json(facultybyid)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)




    }
}

exports.deletefacultybyId = async (req, res) => {
    try {
        const { id } = req.params
        const deletefaculty = await facultymodel.findByIdAndDelete(id)
        res.status(200).json(deletefaculty)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)




    }
}


exports.updatefaculty = async (req, res) => {
    try {
        const { name, department, imgURl } = req.body

        const { id } = req.params

        const updatefaculty=await facultymodel.findByIdAndUpdate(id,{ name, department, imgURl })
        res.status(200).json(updatefaculty)


    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)




    }
}