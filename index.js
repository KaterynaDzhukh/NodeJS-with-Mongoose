import express from 'express';
import 'dotenv/config';
import client from './db/db.js';
import 'dotenv/config';
import studentsRouter from './routes/students.js';



const app = express();
app.use(express.json());
app.use('/api/students', studentsRouter);
const port = process.env.PORT || 3000;

client.on('connected', () => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})



