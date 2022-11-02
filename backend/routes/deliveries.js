const express = require('express');
const Deliveries = require('../models/deliveries');

const router = express.Router();

//insert delivery details
router.post('/delivery/add', (req,res) =>{
    let newDelivery = new Deliveries(req.body);

    newDelivery.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:newDelivery
            
        });
    });
});

//get deliveries
router.get('/deliveries',(req,res)=>{
    Deliveries.find().exec((err,deliveries) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDelivery:deliveries
        });
    });
});

//get a specific delivery details
router.get('/delivery/:id',(req,res)=>{
    let deliveryId = req.params.id;

    Deliveries.findById(deliveryId,(err,deliveries) => {
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            existingDelivery:deliveries
        });
    });
});

//update delivery
router.put('/delivery/update/:id',(req,res) => {
    Deliveries.findByIdAndUpdate(
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

//delete delivery
router.delete('/delivery/delete/:id',(req,res) => {
    Deliveries.findByIdAndRemove(req.params.id).exec((err,deleteDelivery) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteDelivery 
        });
    });
});

module.exports = router;