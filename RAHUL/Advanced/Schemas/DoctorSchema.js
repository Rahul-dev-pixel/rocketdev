const mongoose=require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
  doctorName: { type: String, required: true },
  doctorSpecialization: { type: String, required: true },
  email:{type:String,required:true},
  phoneNumber:{type:String,required:true},
});

module.exports=doctorSchema;