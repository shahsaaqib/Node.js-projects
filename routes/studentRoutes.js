const express = require('express');
const studentController = require('../controllers/studentController');



const router = express.Router();


router.get('/',studentController.student_Home);

router.get('/stdCreate',studentController.student_create);

router.get('/student/:id',studentController.student_single); 

router.post('/addStd', studentController.student_add);
  
router.delete('/student/:id', studentController.student_delete);
  
router.get('/stdDetails',studentController.student_Details);

module.exports = router;