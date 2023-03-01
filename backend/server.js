require('dotenv').config();
const express = require('express');
const workOutRoutes = require('./routers/workout');

const app = express();
const mongoose = require('mongoose');

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next();
})

app.use(express.json())

app.use('/api/workouts/',workOutRoutes);

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017')
    .then(()=>{
        console.log("Successfully connect to MongoDB");
        app.listen(process.env.PORT,()=>{
            console.log("Listening on port 3000!");
        })
    })
    .catch((err)=>{
        console.log(err)
    })

//listen
// app.listen(process.env.PORT,()=>{
//     console.log("Listening on port 3000!");
// })