const express =require('express');
const router = express.Router()
const {User}= require("../models/Auth")

router.route('/')
    .post(async (req, res) => {
        let getUserData = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        })
        try {
            getUserData = await getUserData.save()
            res.status(200).json({ "success": true, getUserData })
        } catch (err) {
            res.status(400).json({ "success": false, error:err.message })
        }
})

router.route('/login')
    .post( async (req, res) => {
       const {email , password} = req.body
       console.log(email)
       console.log(password)
     
       if(!email || !password){
            res.status(400).json({success:false , message:"please enter your email and password"})
       }
       try {
         const getUser = await User.findOne({email})
 
         if(!getUser){
             res.status(404).json({ success: false, message: "invalid credentials" })
         }
 
         if (getUser.password.includes(password)) {
             res.status(200).json({success:true , user:getUser})
         } else {
             res.status(404).json({success:false , message:'invalid credentials'})
         }
       } catch (error) {
         res.status(400).json({success:false , message:error.message})
       }
})

module.exports = router;



    
