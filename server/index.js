const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const cors = require('cors');

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', proxy('http://localhost:3030'))

app.get('/', (req, res) => {
  if (err) {
    console.log('Server error requesting home page: ', err)
  } else {
    res.send('Hello from the server')
  }
})

app.listen(port, () => {
  console.log('Server listening on port: ', port)
})