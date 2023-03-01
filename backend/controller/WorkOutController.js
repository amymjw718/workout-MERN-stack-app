const Workout = require('../model/WorkOutModel');
const mongoose = require('mongoose');

const postWorkout = (req,res) => {
    const {title, reps, load} = req.body;
    Workout.create({title,reps,load})
    .then(()=>{
        res.status(200).json({title,reps,load});
    })
    .catch((err)=>{
        if(err){
            res.status(400).json({error:err.message});
        }
    })
}

const getAllWorkout = (req, res) => {
    Workout.find({}).then((data)=>{
        res.status(200).json(data);
    })
}

const getWorkout = (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    Workout.findById(id).then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        if(err){
            res.status(404).json({error:"No such workout"})
        }
    })
}

const deleteWorkout = (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    Workout.findByIdAndDelete(id).then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        if(err){
            res.status(404).json({error:"No such workout"})
        }
    })
}

const updateWorkout = (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    Workout.findByIdAndUpdate(id,{...req.body}).then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        if(err){
            res.status(404).json({error:"No such workout"})
        }
    })
}

module.exports = {
    postWorkout,
    getAllWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
}