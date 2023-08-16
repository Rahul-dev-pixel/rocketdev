const express = require('express');
const app = express();
const port = 3000;
const { default:mongoose} = require('mongoose');
require('./Database/MongoConnection');


app.get('/', (req, res) => {
  res.send('Welcome to  medical-advisor-api')
})


// MongoDB Connection Start
const db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongo Database is connected successfully!');
});
// MongoDB Connection End


app.get('/*', (req, res) => {
  res.send('404 Invalid URL')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})