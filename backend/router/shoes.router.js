const express =require('express')
const router=express.Router()
const allshoes=require('../Schema/shoes.model')

router.get('/getshoes',async(req,res)=>{
    try{
        let getshoes= await allshoes.find()
        res.send({
            success:true,
            results:getshoes.length,
            message:'data fetched',
            shoes:getshoes
        })
    }
    catch(error){
        res.send({
            success:false,
            message:'data not fetched',

        })
    }
     
    
})
module.exports = router;