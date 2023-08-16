const doctorModel=require('../Models/DoctorModel');
const createNewDoctor=async(req,res)=>{
   try{
    let doctor=new doctorModel(req.body);
    await doctor.save();
    res.status(201).send("New Doctor inserted Successfully");
   } 
   catch(e){
    console.log(e);
   }
}

const getAllDoctors=async(req,res)=>{
    try{
     const allDoctors=await doctorModel.find({});
     res.status(200).send(allDoctors);
    } 
    catch(e){
     console.log(e);
    }
 }

module.exports={getAllDoctors,createNewDoctor};