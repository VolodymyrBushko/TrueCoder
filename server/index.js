const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const PORT = config.get('port');

const app = express();

app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

async function start() {
  try {
    app.listen(PORT, function () {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (ex) {
    console.log('Server error', e.message);
    process.exit();
  }
}

start();

process.on('SIGINT', () => {
  console.log('Server has been finished');
});
