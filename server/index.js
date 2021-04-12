const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const admin = require('firebase-admin');

const userRouter = require('./routes/userRouter.js');
const exerciseRouter = require('./routes/exerciseRouter.js');

const PORT = config.get('port');
const serviceAccount = require('./config/firebase-admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://truecoder-4e6a0-default-rtdb.firebaseio.com"
});

const app = express();
global.db = admin.database();

app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

async function start() {
  try {
    app.listen(PORT, function () {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (ex) {
    console.log('Server error', ex.message);
    process.exit();
  }
}

app.use('/api/users/', userRouter);
app.use('/api/exercises/', exerciseRouter);

start();

process.on('SIGINT', () => {
  console.log('Server has been finished');
});
