const path = require('path');

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use('/public', express.static(path.join(__dirname, 'public')))


app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.post('*', function(req, res) {
  res.json({ message: process.env.GREET_MESSAGE });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });