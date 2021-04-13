class Exercise {

  title;
  difficulty;
  language;
  expectedResult;
  description;
  code;

  constructor (title, difficulty, language, expectedResult, description, code) {

    this.title = title;
    this.difficulty = difficulty;
    this.language = language;
    this.expectedResult = expectedResult;
    this.description = description;
    this.code = code;
  }
}

module.exports = Exercise;
