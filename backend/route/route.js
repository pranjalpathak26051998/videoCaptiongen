const express=require('express');

const router=express.Router()

router.post('/test-api',(req,res)=>{
    res.status(200).send({status:true,message:"route connected successfully"})
})

module.exports=router