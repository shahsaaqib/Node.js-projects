const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  stdName: {
    type: String,
    required: true,
  },
  stdAddress: {
    type: String,
    required: true,
  },
  stdMarks: {
    type: String,
    required: true
  },
  stdPercentage: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;