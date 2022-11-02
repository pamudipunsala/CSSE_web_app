import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import '../index.css';


function EditPayments() {
    const { id } = useParams();
    const form = useRef();

    const [orderid, setorderid] = useState('');
    const [supplierid, setsupplierid] = useState('');
    const [sname, setsname] = useState('');
    const [accid, setaccid] = useState('');
    const [date, setdate] = useState('');
    const [amount, setamount] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:7000/payment/${id}`).then((res) => {
            
            const paymentDetail = res.data.existingPayment;
            console.log(paymentDetail)
            setorderid(paymentDetail.orderid)
            setsupplierid(paymentDetail.supplierid)
            setsname(paymentDetail.sname)
            setaccid(paymentDetail.accid)
            setdate(paymentDetail.date)
            setamount(paymentDetail.amount)
        })

    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const paymentlist = {
            orderid,
            supplierid,
            sname,
            accid,
            date,
            amount
            
        }
        axios.put(`http://localhost:7000/payment/update/${id}`, paymentlist)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
        
        alert("Payment Updated Successfully")
    }


    return (

        <div>
            <br />
            <div className="editpayment">
                <div className="container">
                    <h1>Payment</h1>
                    <br/>
                    <form ref={form} onSubmit={handleSubmit} className="form1">

                        <label for="orderid"><b>Order ID :</b></label>
                        <input type="text"
                            className="form-control mb-2"
                            name="orderid"
                            value={orderid}
                            onChange={(e) => setorderid(e.target.value)}
                        /><br/>

                        <label htmlFor="supplierid"><b>Supplier ID :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="supplierid"
                            value={supplierid}
                            onChange={(e) => setsupplierid(e.target.value)}
                             /><br/>

                        <label htmlFor="sname"><b>Supplier Name :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="sname"
                            value={sname}
                            onChange={(e) => setsname(e.target.value)}
                             /><br/>

                        <label htmlFor="accid"><b>Accountant ID :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="accid"
                            value={accid}
                            onChange={(e) => setaccid(e.target.value)}
                             /><br/>

                        <label htmlFor="date"><b>Date :</b></label>
                        <input type="date" 
                            min="2018-01-01" max="2030-12-31" 
                            className="form-control mb-3"
                            name="date"
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                             /><br/>

                        <label htmlFor="amount"><b>Amount :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="amount"
                            value={amount}
                            onChange={(e) => setamount(e.target.value)}
                             /><br/><br/>

                        

                        <button type="submit" className="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Update </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPayments;