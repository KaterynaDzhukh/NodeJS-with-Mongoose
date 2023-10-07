import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{type: String, required: true},
    first_name: {type: String, required: true},
    email: {
        type: String,
        match: [
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please add a valid email address.',
        ],
        required: [true, 'Please enter Email Address'],
        unique: true,
        lowercase: true,
      },
})

const Student = mongoose.model('Student', StudentSchema);


export default Student;