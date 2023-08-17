const doctorModel=require('../Models/DoctorModel');


const createNewDoctor=async(req,res)=>{

  // >>>>> CHECK EMAIL IS EXIST OR NOT <<<<< (START)
  const registeredEmail = await doctorModel.find().count({email: req.body.email});
  console.log("registeredEmail",registeredEmail);
  if (registeredEmail>0) {
    return res.status(403).send({'errorMessage':'This Email-ID is already registred'});
  }
  // >>>>> CHECK EMAIL IS EXIST OR NOT <<<<< (END)

  // >>>>> CHECK PhoneNO IS EXIST OR NOT  <<<<< (START)
  const registeredPhoneNumber = await doctorModel.find().count({phoneNumber: req.body.phoneNumber});
  console.log("registeredPhoneNumber",registeredPhoneNumber);
  if (registeredPhoneNumber>0) {
    return res.status(403).send({'errorMessage':'This Phone Number is already registred'});
  }
   // >>>>> CHECK PhoneNO IS EXIST OR NOT  <<<<< (END)

   try{
    let doctor=new doctorModel(req.body); // It prepares a JSON object as per the Doctor Model
    await doctor.save(); // It saves the new doctor details into the database
    res.status(201).send({'message':"New Doctor inserted Successfully"}); //Finally it returns success message to the end user
   } 
   catch(e){
    console.log(e);
   }
}


const getAllDoctors=async(req,res)=>{
    try{
     const allDoctors=await doctorModel.find({});
     res.status(200).send({"totalNumberofRecords":allDoctors.length,"data":allDoctors});
    } 
    catch(e){
     console.log(e);
    }
 }

module.exports={getAllDoctors,createNewDoctor};

