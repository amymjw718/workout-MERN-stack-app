const express =  require('express');
const router = express.Router();
const Workout = require('../model/WorkOutModel');
const {postWorkout, getAllWorkout, getWorkout, deleteWorkout, updateWorkout} = require('../controller/WorkOutController')

router.get('/',getAllWorkout)

router.get('/:id',getWorkout)

router.post('/',postWorkout);

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router;