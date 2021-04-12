const request = require("request");
const config = require('config');

const clientId = config.get('clientId');
const clientSecret = config.get('clientSecret');

module.exports = {

  async createExercise(req, res) {
    try {

      const postsRef = global.db.ref('/').child('exercises');
      const newPostRef = postsRef.push();

      const {title, description, difficulty, struct, result, language} = req.body;

      newPostRef.set({title, description, difficulty, struct, result, language});
      await res.status(201).json({title, description, difficulty, struct, result, language});

    } catch (ex) {
      console.log(ex);
      await res.status(500).json({message: ex.message});
    }
  },

  async getExercises(req, res) {
    try {

      const ref = global.db.ref('/exercises');
      const language = req.params.language;

      ref.orderByChild('language').equalTo(language).on("child_added", snapshot => {
        res.status(200).json({id: snapshot.key, ...snapshot.val()});
      }, error => {
        res.status(500).json({message: error.message});
      });

    } catch (ex) {
      console.log(ex);
      await res.status(500).json({message: ex.message});
    }
  },

  async verifyExercise(req, res) {
    try {

      const {struct: script, language, result} = req.body;
      const program = {script, language, versionIndex: '0', clientId, clientSecret};

      request({
          url: "https://api.jdoodle.com/v1/execute",
          method: "POST",
          json: program
        },
        function (error, response, body) {
          console.log("error:", error);
          console.log("body:", body);

          if (error) {
            res.status(400).json({message: error});
          } else {
            const output = body.output;
            let hasError = output !== result;
            res.status(200).json({output, hasError});
          }

        });

    } catch (ex) {
      console.log(ex);
      await res.status(500).json({message: ex.message});
    }
  }

};
