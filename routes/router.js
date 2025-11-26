const express=require('express')
const eventcontroller=require('../controller/eventcontroller')
const facultycontroller=require('../controller/facultycontroller')
const  coursecontroller=require('../controller/coursecontroller')
const usercontroller=require('../controller/usercontrollers')
const jwtmiddleware=require('../middleware/jwtMiddleware')

const router=express.Router()
 


// event routes
router.post('/addevent',jwtmiddleware,eventcontroller.addevent)
router.get('/getevent',jwtmiddleware,eventcontroller.getallevents)
router.get('/getevent/:id',jwtmiddleware,eventcontroller.geteventsbyId)
router.delete('/deleteevent/:id',jwtmiddleware,eventcontroller.deleteevent)
router.put('/editevent/:id',jwtmiddleware,eventcontroller.updateevent)



// faculties routes

router.post('/addfaculty', jwtmiddleware,facultycontroller.addfaculty)
router.get('/getfaculty',jwtmiddleware,facultycontroller.getallfaculty)
router.get('/getfaculty/:id',jwtmiddleware,facultycontroller.facultyBYId)
router.delete('/deletefaculty/:id',jwtmiddleware,facultycontroller.deletefacultybyId)
router.put('/editfaculty/:id',jwtmiddleware,facultycontroller.updatefaculty)



// cources routes

router.post('/addcourse',jwtmiddleware,coursecontroller.addcourse)
router.get('/getcourse',jwtmiddleware,coursecontroller.getallcourses)
router.get('/getcourse/:id',jwtmiddleware,coursecontroller.getcourseBYID)
router.delete('/deletecourse/:id',jwtmiddleware,coursecontroller.deletecourse)
router.put('/editcourse/:id',jwtmiddleware,coursecontroller.updatecourse)




// user routes

router.post('/login',usercontroller.userLogin)
router.post('/reg',usercontroller.userRegister)


module.exports=router







