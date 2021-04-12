module.exports = {

  async registerUser(req, res) {
    try {

      const postsRef = global.db.ref('/').child('users');
      const newPostRef = postsRef.push();

      const {login, email, password} = req.body;
      newPostRef.set({login, email, password});

    } catch (ex) {
      console.log(ex);
      await res.status(500).json({message: ex.message});
    }
  }

};
