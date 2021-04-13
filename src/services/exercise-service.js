class ExerciseService {

  baseUrl = 'http://localhost:5000/api/exercises/';

  getExercises = async language => {
    const res = await fetch(`${this.baseUrl}${language}`);
    if (!res.ok) {
      throw new Error(`Could not fetch exercises by ${language}`);
    }
    return await res.json();
  }
}

export default ExerciseService;
