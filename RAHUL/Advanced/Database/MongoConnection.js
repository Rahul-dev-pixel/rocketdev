const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
// desitination is mongo cloud (virginia)
mongoose.connect("mongodb+srv://rahul:meher@cluster0.tfd5j6v.mongodb.net/?retryWrites=true&w=majority", {}); 
