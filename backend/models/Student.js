const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
 name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }

}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)