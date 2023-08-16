const express = require('express');
const app = express();
const port = 3000;
const cors=require('cors');
const bodyParser=require('body-parser');
const { default:mongoose} = require('mongoose');
require('./Database/MongoConnection');


app.get('/', (req, res) => {
  res.send('Welcome to  medical-advisor-api')
})

// API Req Settings Start
app.options('*',cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
// API Req Settings End

// MongoDB Connection Start
const db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongo Database is connected successfully!');
});
// MongoDB Connection End


app.use('/doctors',require('./Routers/DoctorRouter'));


app.get('/*', (req, res) => {
  res.send('404 Invalid URL')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})