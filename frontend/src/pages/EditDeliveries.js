import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import '../index.css';


function EditDeliveries() {
    const { id } = useParams();
    const form = useRef();

    const [orderid, setorderid] = useState('');
    const [iName, setiName] = useState('');
    const [quantity, setquantity] = useState('');
    const [deliveryPrice, setdeliveryPrice] = useState('');
    const [TotalPrice, setTotalPrice] = useState('');
    const [stAddress, setstAddress] = useState('');
    const [deliveryDate, setdeliveryDate] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:7000/delivery/${id}`).then((res) => {
            
            const deliveryDetail = res.data.existingDelivery;
            console.log(deliveryDetail)
            setorderid(deliveryDetail.orderid)
            setiName(deliveryDetail.iName)
            setquantity(deliveryDetail.quantity)
            setdeliveryPrice(deliveryDetail.deliveryPrice)
            setTotalPrice(deliveryDetail.TotalPrice)
            setstAddress(deliveryDetail.stAddress)
            setdeliveryDate(deliveryDetail.deliveryDate)
        })

    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const deliverylist = {
            orderid,
            iName,
            quantity,
            deliveryPrice,
            TotalPrice,
            stAddress,
            deliveryDate
            
        }
        axios.put(`http://localhost:7000/delivery/update/${id}`, deliverylist)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
        
        alert("Delivery Details Updated Successfully")
    }


    return (

        <div>
            <br />
            <div className="addpayment">
                <div className="ish">
                <button className="abtn" type="button"><a href="/viewdelivery" style={{textDecoration:'none',color:'white'}} required><b>View Deliveries</b></a></button>
                <div className="new"> 
                    <h1>Update Delivery Details</h1>
                    <br/>
                    <form ref={form} onSubmit={handleSubmit} className="form1">

                        <label for="orderid"><b>Order ID :</b></label>
                        <input type="text"
                            className="form-control mb-2"
                            name="orderid"
                            value={orderid}
                            onChange={(e) => setorderid(e.target.value)}
                        /><br/>

                        <label htmlFor="iName"><b>Item Name :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="iName"
                            value={iName}
                            onChange={(e) => setiName(e.target.value)}
                             /><br/>

                        <label htmlFor="quantity"><b>Quantity :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setquantity(e.target.value)}
                             /><br/>

                        <label htmlFor="deliveryPrice"><b>Delivery Price :</b></label>
                        <input type="number"
                            className="form-control mb-3"
                            name="deliveryPrice"
                            value={deliveryPrice}
                            onChange={(e) => setdeliveryPrice(e.target.value)}
                             /><br/>

                        <label htmlFor="TotalPrice"><b>Total Price :</b></label>
                        <input type="number"
                            className="form-control mb-3"
                            name="TotalPrice"
                            value={TotalPrice}
                            onChange={(e) => setTotalPrice(e.target.value)}
                             /><br/>

                        <label htmlFor="stAddress"><b>Site Address :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="stAddress"
                            value={stAddress}
                            onChange={(e) => setstAddress(e.target.value)}
                             /><br/>

                        <label htmlFor="deliveryDate"><b>Delivery Date :</b></label>
                        <input type="date" 
                            min="2018-01-01" max="2030-12-31" 
                            className="form-control mb-3"
                            name="deliveryDate"
                            value={deliveryDate}
                            onChange={(e) => setdeliveryDate(e.target.value)}
                             /><br/><br/>

                        

                        <button type="submit" className="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Update </button>

                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EditDeliveries;