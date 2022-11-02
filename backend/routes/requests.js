const express = require('express');
const Requests = require('../models/requests');

const router = express.Router();

//insert requeats details
router.post('/request/insert', (req,res) =>{
    let newRequest = new Requests(req.body);

    newRequest.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:newRequest
            
        });
    });
});

//get requests
router.get('/request',(req,res)=>{
    Requests.find().exec((err,requests) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRequest:requests
        });
    });
});

//get a specific requests details
router.get('/request/:id',(req,res)=>{
    let requestId = req.params.id;

    Requests.findById(requestId,(err,requests) => {
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            existingRequest:requests
        });
    });
});

//update request
router.put('/request/update/:id',(req,res) => {
    Requests.findByIdAndUpdate(
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

//delete request
router.delete('/request/delete/:id',(req,res) => {
    Order.findByIdAndRemove(req.params.id).exec((err,deleteRequest) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteRequest 
        });
    });
});

module.exports = router;