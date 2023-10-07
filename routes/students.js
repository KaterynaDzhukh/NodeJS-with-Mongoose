import express from 'express';
const studentsRouter = express.Router();
import Student from '../models/Student.js';


studentsRouter.get("/", async (req, res) => {
    try {
        const response = await Student.find();
        res.json(response)
    } catch (err) {
        res.status(500).json(err)
    }
})

studentsRouter.post("/", async (req, res) => {
    try {
        const {name, first_name, email} = req.body;
        const response = await Student.create({name, first_name, email});
        res.json(response)
    } catch(err){
        res.status(500).json(err)
    }
});

studentsRouter.get("/johns", async (req, res) => {
    try {
      const johns = await Student.find({ name: "John" });
  
      res.json(johns);
    } catch (err) {
      res.status(500).json(err);
    }
  });

studentsRouter.put("/", async (req, res) => {
    try {
      const updateResult = await Student.updateMany(
        { name: "John" },
        { $set: { name: "Bob" } }
      ); 
  
      // Check if any documents were updated
      if (updateResult.nModified > 0) {

        res.json({ message: "Updated successfully" });
      } else {
        res.json({ message: "No documents matched the criteria" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  studentsRouter.delete("/:id", async (req, res) => {
    try {
      const studentId = req.params.id;
      const student = await Student.findById(studentId);
  
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
     
      await Student.findByIdAndDelete(studentId);
      res.json({ message: "Student deleted successfully" });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

export default studentsRouter;