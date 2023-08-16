const express=require('express');
const router=express.Router();
const doctorController=require('../Controllers/DoctorController');

router.route('/')
.get(doctorController.getAllDoctors)
.post(doctorController.createNewDoctor)

module.exports=router;
