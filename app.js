const mongoose = require('mongoose');
const express = require("express");
const morgan = require('morgan');
const result  = require('lodash');
const studentRoutes = require('./routes/studentRoutes');
   

const app = express();

app.set('view engine', 'ejs')

const dbURL = "mongodb+srv://shahsaaqib01:qwerty123@cluster0.7fmvi.mongodb.net/my-project?retryWrites=true&w=majority"
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



/*
app.get('/add-std', (req, res) => {
    const student = new Student({
      stdName: 'Saaqib Ashraf',
      stdAddress: 'Vehil',
      stdMarks: '70',
      stdPercentage:'70'
    })
  
    student.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });*/





app.use(studentRoutes);

app.use((req, res) => {
    res.status(404).render('404' , { title:'NotFound' });
});