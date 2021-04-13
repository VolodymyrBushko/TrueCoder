const express = require("express");
const exerciseController = require("../controllers/exerciseController.js");
const exerciseRouter = express.Router();

exerciseRouter.get('/:language', exerciseController.getExercises);
exerciseRouter.get('/one/:id', exerciseController.getExercise);
exerciseRouter.post('/', exerciseController.createExercise);
exerciseRouter.post('/verifyExercise', exerciseController.verifyExercise);

module.exports = exerciseRouter;
