const express = require('express');
const Suppliers = require('../models/supplier.js');

const router = express.Router();

//register suppliers 
router.post('/supregister',(req,res)=>{
    const { sname, semail, userName, spwd} = req.body
    Suppliers.findOne({userName:userName}, (err,supplier) =>{
        if(supplier){
            res.send({message:"Supplier already registered"})
        } else {
            const newsupplier = new Suppliers({
                sname,
                semail,
                userName,
                spwd
            })
            newsupplier.save((err) => {
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }else{
                    return res.status(200).json({
                        message: "Successfully Registered." 
                    });
                }
                
            });
        }
    })

    
});

//login
router.post("/suplogin",(req,res) => {
    const {userName, spwd} = req.body
    Suppliers.findOne({userName:userName}, (err, suppliers) => {
        if (suppliers) {
            if(spwd === suppliers.spwd) {
                res.send({message :"Login Successful", suppliers:suppliers})
            } else {
                res.send({message : "Password didn't match"})
            }
        } else {
            res.send({message:"User not registered"})
        }
    })
})

//get suppliers
router.get('/suppliers',(req,res)=>{
    Suppliers.find().exec((err,suppliers) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSuppliers:suppliers
        });
    });
});

//get a specific supplier details
router.get('/suppliers/:id',(req,res) => {
    let supplierId = req.params.id;

    Suppliers.findById(supplierId,(err,supplier) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            supplier
        });
    });
});

//update suppliers
router.put('/suppliers/update/:id',(req,res)=>{
    Suppliers.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete suppliers
router.delete('/suppliers/delete/:id',(req,res)=>{
    Suppliers.findByIdAndRemove(req.params.id).exec((err,deleteSupplier)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteSupplier
        });
    });
});




module.exports = router;