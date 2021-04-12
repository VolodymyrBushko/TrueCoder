const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

module.exports = {

  async registerUser(req, res) {
    try {

      const postsRef = global.db.ref('/').child('users');
      const newPostRef = postsRef.push();

      let {login, email, password} = req.body;

      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      newPostRef.set({login, email, password, isAdmin: false});
      await res.status(201).json({login, email, password});

    } catch (ex) {
      console.log(ex);
      await res.status(500).json({message: ex.message});
    }
  },

  async loginUser(req, res) {
    try {

      const ref = global.db.ref('/').child('users');
      const {login, password} = req.body;

      ref.orderByChild('login').equalTo(login).on('child_added', snapshot => {

        const {login: dblogin, email: dbemail, password: dbpassword} = snapshot.val();
        const passwordResult = bcrypt.compareSync(password, dbpassword);

        if (passwordResult) {
          const token = jwt.sign({
            id: snapshot.key,
            login: dblogin,
            email: dbemail
          }, jwtSecret, {expiresIn: 60 * 60 * 60});
          res.json({token: `Bearer ${token}`});
        } else {
          res.status(401).json({message: 'invalid login or password'});
        }
      });

    } catch (ex) {
      console.log(ex);
      await res.status(500).json({message: ex.message});
    }
  }

};
