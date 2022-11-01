const express = require('express');
const Order = require('../models/orders');

const router = express.Router();

//save payment
router.post('/order/save', (req,res) =>{
    let newOrder = new Order(req.body);

    newOrder.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:newOrder
            
        });
    });
});

//get payment
router.get('/order',(req,res)=>{
    Order.find().exec((err,order) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrder:order
        });
    });
});

//get a specific payment details
router.get('/order/:id',(req,res)=>{
    let orderId = req.params.id;

    Order.findById(orderId,(err,order) => {
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            existingOrder:order
        });
    });
});

//update payment
router.put('/order/update/:id',(req,res) => {
    Order.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err) =>{
            if(err) {
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete payment 
router.delete('/order/delete/:id',(req,res) => {
    Order.findByIdAndRemove(req.params.id).exec((err,deleteOrder) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteOrder
        });
    });
});

module.exports = router;
