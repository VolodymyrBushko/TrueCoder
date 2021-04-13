class ExerciseService {

  baseUrl = 'http://localhost:5000/api/exercises/';

  createExercise = async exercise => {
    const res = await fetch(`${this.baseUrl}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exercise)
    });
    if (!res.ok) {
      throw new Error('Could not create exercise');
    }
    return await res.json();
  }

  getExercises = async language => {
    const res = await fetch(`${this.baseUrl}${language}`);
    if (!res.ok) {
      throw new Error(`Could not fetch exercises by ${language}`);
    }
    return await res.json();
  }

  getExerciseById = async id => {
    const res = await fetch(`${this.baseUrl}/one/${id}`);
    if (!res.ok) {
      throw new Error(`Could not fetch exercises with id: ${id}`);
    }
    return await res.json();
  }

  verifyExercise = async exercise => {
    const res = await fetch(`${this.baseUrl}verifyExercise`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exercise)
    });
    return await res.json();
  }

}

export default ExerciseService;
