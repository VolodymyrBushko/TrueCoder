class UserService {

  baseUrl = 'http://localhost:5000/api/users';

  postFetch = async (user, url) => {
    const res = await fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await res.json();
  }

  register = async user => {
    return await this.postFetch(user, '/register');
  }

  login = async user => {
    return await this.postFetch(user, '/login');
  }

}

export default UserService;
