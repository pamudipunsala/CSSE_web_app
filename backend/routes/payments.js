const express = require('express');
const Payments = require('../models/payments');

const router = express.Router();

//insert payment details
router.post('/payment/add', (req,res) =>{
    let newPayment = new Payments(req.body);

    newPayment.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:newPayment
            
        });
    });
});

//get payments
router.get('/payments',(req,res)=>{
    Payments.find().exec((err,payments) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPayment:payments
        });
    });
});

//get a specific payment details
router.get('/payment/:id',(req,res)=>{
    let paymentId = req.params.id;

    Payments.findById(paymentId,(err,payments) => {
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            existingPayment:payments
        });
    });
});

//update payment
router.put('/payment/update/:id',(req,res) => {
    Payments.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err) =>{
            if(err) {
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Details Updated Successfully"
            });
        }
    );
});

//delete payment
router.delete('/payment/delete/:id',(req,res) => {
    Payments.findByIdAndRemove(req.params.id).exec((err,deletePayment) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deletePayment 
        });
    });
});

module.exports = router;