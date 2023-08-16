const mongoose=require('mongoose');
const doctorSchema=require('./../Schemas/DoctorSchema');

const doctorModel=mongoose.model('Doctors',doctorSchema);

module.exports=doctorModel;