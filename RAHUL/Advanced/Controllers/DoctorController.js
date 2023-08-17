const doctorModel=require('../Models/DoctorModel');
const createNewDoctor=async(req,res)=>{
    console.log("Rahul Test Start createNewDoctor controller ");
    console.log(req.body.doctorName);

    // // Check emailid exist in the database or not : START
    // let email=req.body.email;
    // //console.log(email);
    // let dbDoctor=await doctorModel.find({"email": email});
    // console.log(dbDoctor[0]?.email);
    // if(dbDoctor[0]?.email==email)
    // { 
    //    return res.status(400).send("This email address already exist in the database");    
    // }
    // // Check emailid exist in the database or not : END
    // Check emailid exist in the database or not : START
    
    let email=req.body.email;
    //console.log(email);
    let dbDoctor=await doctorModel.find({"email": email});
    console.log(dbDoctor[0]?.email);
    if(dbDoctor[0]?.email==email)
    { 
       return res.status(400).send("This email address already exist in the database");    
    }
    // Check emailid exist in the database or not : END

    // Check Phone number exist in the database or not : START
    let phoneNumber=req.body.phoneNumber;
    //console.log(phoneNumber);
    let dbDoctor2=await doctorModel.find({"phoneNumber": phoneNumber});
    console.log("Meher is test");
    console.log(dbDoctor2[0]?.phoneNumber);
    if(dbDoctor2[0]?.phoneNumber==phoneNumber)
    { 
       return res.status(400).send("This Phone Number address already exist in the database");
        
    }

    // Check Phone number exist in the database or not : END
   try{
    let doctor=new doctorModel(req.body);// It prepares a JSON object as per the Doctor Model
    await doctor.save();// It saves the new doctor details into the database
    res.status(201).send("New Doctor inserted Successfully"); //Finally it returns success message to the end user
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

