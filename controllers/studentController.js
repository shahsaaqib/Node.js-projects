const Student = require('../models/student');

const student_Details = (req, res) => {
    Student.find()
        .then((result) => {
            res.render('stdDetails', { title:'Details', student:result });
        })
        .catch((err) => {
            console.log(err);
        });    
    }
const student_Home = (req, res) => { 
    Student.find()
        .then((result) => {
            res.render('Home', { title:'Home', student:result });
        })
        .catch((err) => {
            console.log(err);
        });    
    }
const student_create = (req, res) => {
    res.render('create', { title:'Create' });
    }
const student_add = (req, res) => {
    // console.log(req.body);
    const student = new Student(req.body);
  
    student.save()
      .then(result => {
        res.redirect('/stdDetails');
      })
      .catch(err => {
        console.log(err);
      });
    }
const student_delete = (req, res) => {
    const id = req.params.id;
    
    Student.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/stdDetails' });
      })
      .catch(err => {
        console.log(err);
      });
    }
const student_single = (req, res) => {
    const id = req.params.id;
    Student.findById(id)
      .then(result => {
        res.render('details', { student: result, title: 'Blog Details' });
      })
      .catch(err => {
        res.render('404', {title:'Student Not Found'});
      });
    }

    module.exports = {
        student_Details,
        student_Home,
        student_add,
        student_create,
        student_delete,
        student_single
    }
