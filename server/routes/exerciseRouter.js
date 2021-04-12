const express = require("express");
const exerciseController = require("../controllers/exerciseController.js");
const exerciseRouter = express.Router();

exerciseRouter.post('/', exerciseController.createExercise);
exerciseRouter.get('/:language', exerciseController.getExercises);
exerciseRouter.post('/verifyExercise', exerciseController.verifyExercise);

module.exports = exerciseRouter;
