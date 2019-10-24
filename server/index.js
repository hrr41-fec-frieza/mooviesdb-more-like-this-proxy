const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4001;
const cors = require('cors');

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());
// app.use('/', proxy('http://localhost:4000'))



app.listen(port, () => {
  console.log('Server listening on port: ', port)
})