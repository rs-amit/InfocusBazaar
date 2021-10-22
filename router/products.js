const express =require('express');
const {extend}=require('lodash');
const {Product} =require('../models/products')
const router = express.Router()


router.route('/')
.get(async(req,res)=>{
  try{
  const getData = await Product.find({})
  getData.__v = undefined;
  res.json({ success:true,getData })
  }catch(error){
    res.json({success:false, message:error.message })
  }
})

.post(async(req,res)=>{
  try{
    const getData=req.body;
    console.log(getData)
    const postData = new Product(getData);
    const saveData = await postData.save();
    res.json({success:true,saveData})
  }catch(error){
    res.status(500).json({success:false, message:error.message})
  }

})


router.route('/:productId')
.get(async(req,res)=>{
    const productId = req.params.productId;
    console.log("productId",productId)
    const productDetail = await Product.findById(productId);
    console.log("productDetail",productDetail)
    if(!productDetail){
        return res.json({success:false , message:"problem occuring during retriving data"})
    }
   res.json({"success": true , productDetail})
})

.post(async(req,res)=>{
  const Id = req.params.productId;
  let productDetail = await Product.findById(Id);
  if(!productDetail){
      res.json({success:false, message:"problem occuring during retriving data" })
  }
  const updatePart  = req.body;
  console.log(productDetail)
  productDetail = extend(productDetail,updatePart)
  productDetail = await productDetail.save();
  res.json({"success":true , productDetail })
})
.delete(async(req,res)=>{
  const {productDetail} = req;
  const deleteItem = await getdata.remove();
  res.json({"success":true , deleteItem})
})


module.exports = router;