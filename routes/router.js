// const express=require('express')
// const eventcontroller=require('../controller/eventcontroller')
// const facultycontroller=require('../controller/facultycontroller')
// const  coursecontroller=require('../controller/coursecontroller')
// const usercontroller=require('../controller/usercontrollers')
// const jwtmiddleware=require('../middleware/jwtMiddleware')

// const router=express.Router()
 


// // event routes
// router.post('/addevent',jwtmiddleware,eventcontroller.addevent)
// router.get('/getevent',jwtmiddleware,eventcontroller.getallevents)
// router.get('/getevent/:id',jwtmiddleware,eventcontroller.geteventsbyId)
// router.delete('/deleteevent/:id',jwtmiddleware,eventcontroller.deleteevent)
// router.put('/editevent/:id',jwtmiddleware,eventcontroller.updateevent)



// // faculties routes

// router.post('/addfaculty', jwtmiddleware,facultycontroller.addfaculty)
// router.get('/getfaculty',jwtmiddleware,facultycontroller.getallfaculty)
// router.get('/getfaculty/:id',jwtmiddleware,facultycontroller.facultyBYId)
// router.delete('/deletefaculty/:id',jwtmiddleware,facultycontroller.deletefacultybyId)
// router.put('/editfaculty/:id',jwtmiddleware,facultycontroller.updatefaculty)



// // cources routes

// router.post('/addcourse',jwtmiddleware,coursecontroller.addcourse)
// router.get('/getcourse',jwtmiddleware,coursecontroller.getallcourses)
// router.get('/getcourse/:id',jwtmiddleware,coursecontroller.getcourseBYID)
// router.delete('/deletecourse/:id',jwtmiddleware,coursecontroller.deletecourse)
// router.put('/editcourse/:id',jwtmiddleware,coursecontroller.updatecourse)




// // user routes

// router.post('/login',usercontroller.userLogin)
// router.post('/reg',usercontroller.userRegister)


// module.exports=router








const express = require('express');
const eventcontroller = require('../controller/eventcontroller');
const facultycontroller = require('../controller/facultycontroller');
const coursecontroller = require('../controller/coursecontroller');
const usercontroller = require('../controller/usercontrollers');
const jwtmiddleware = require('../middleware/jwtMiddleware');

const router = express.Router();

// ----- Event routes -----
// Public: read/list
router.get('/getevent', eventcontroller.getallevents);
router.get('/getevent/:id', eventcontroller.geteventsbyId);

// Protected: create / edit / delete
router.post('/addevent', jwtmiddleware, eventcontroller.addevent);
router.put('/editevent/:id', jwtmiddleware, eventcontroller.updateevent);
router.delete('/deleteevent/:id', jwtmiddleware, eventcontroller.deleteevent);

// ----- Faculty routes -----
// Public: read/list
router.get('/getfaculty', facultycontroller.getallfaculty);
router.get('/getfaculty/:id', facultycontroller.facultyBYId);

// Protected: create / edit / delete
router.post('/addfaculty', jwtmiddleware, facultycontroller.addfaculty);
router.put('/editfaculty/:id', jwtmiddleware, facultycontroller.updatefaculty);
router.delete('/deletefaculty/:id', jwtmiddleware, facultycontroller.deletefacultybyId);

// ----- Course routes -----
// Public: read/list
router.get('/getcourse', coursecontroller.getallcourses);
router.get('/getcourse/:id', coursecontroller.getcourseBYID);

// Protected: create / edit / delete
router.post('/addcourse', jwtmiddleware, coursecontroller.addcourse);
router.put('/editcourse/:id', jwtmiddleware, coursecontroller.updatecourse);
router.delete('/deletecourse/:id', jwtmiddleware, coursecontroller.deletecourse);

// ----- User routes -----
router.post('/login', usercontroller.userLogin);
router.post('/reg', usercontroller.userRegister);

module.exports = router;

