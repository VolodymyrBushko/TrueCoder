const request = require("request");
const config = require('config');
const Exercise = require('../models/Exercise');

const clientId = config.get('clientId');
const clientSecret = config.get('clientSecret');

module.exports = {

  async createExercise(req, res) {
    try {

      const postsRef = global.db.ref('/').child('exercises');
      const newPostRef = postsRef.push();
      const exercise = new Exercise();

      for (const key of Object.keys(req.body)) {
        exercise[key] = req.body[key];
      }

      newPostRef.set(exercise);
      await res.status(201).json(exercise);

    } catch (ex) {
      await res.status(500).json({message: ex.message});
    }
  },

  async getExercises(req, res) {
    try {

      const ref = global.db.ref('/exercises');
      const language = req.params.language;
      let exercises = null;

      await ref.orderByChild('language').equalTo(language).once('value', async (snapshot) => {
        exercises = await snapshot.val();
      });

      if (exercises) {
        res.status(200).json(exercises);
      } else {
        res.status(404).json({message: `Not found any exercise by ${language}`})
      }

    } catch (ex) {
      await res.status(500).json({message: ex.message});
    }
  },

  async verifyExercise(req, res) {
    try {

      const {code: script, language, expectedResult} = req.body;
      const program = {script, language, versionIndex: '0', clientId, clientSecret};

      request({
          url: "https://api.jdoodle.com/v1/execute",
          method: "POST",
          json: program
        },
        function (error, response, body) {
          if (error) {
            res.status(400).json({message: error});
          } else {
            let hasError = body.output !== expectedResult;
            res.status(200).json({output: body.output, hasError});
          }
        });

    } catch (ex) {
      await res.status(500).json({message: ex.message});
    }
  }

};
