const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/carSpecies",(req,res)=>{
    var carModel=req.query.carModel;
    if(!carModel){
        res.send("0");
    }
    var sql=`SELECT * FROM cars_title WHERE carModel=?`;
    pool.query(sql,[carModel],(err,result)=>{
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    });
});
module.exports=router;