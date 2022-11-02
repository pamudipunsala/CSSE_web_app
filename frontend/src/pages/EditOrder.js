import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function EditOrder() {
    const { id } = useParams();
    const form = useRef();

    const [supplier, setSupplier] = useState('');
    const [reqDate, setReqDate] = useState('');
    const [stAddress, setStAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZip] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [adInfo, setAdInfo] = useState('');
    const [items, setItems] = useState(['']);
    const [status, setStatus] = useState('');
    const [total, setTotal] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:7000/order/${id}`).then((res) => {
            
            const orderDetail = res.data.existingOrder;
            console.log(orderDetail)
            setSupplier(orderDetail.supplier)
            setReqDate(orderDetail.reqDate)
            setStAddress(orderDetail.stAddress)
            setCity(orderDetail.city)
            setProvince(orderDetail.province)
            setZip(orderDetail.zipCode)
            setContact(orderDetail.contact)
            setEmail(orderDetail.email)
            setAdInfo(orderDetail.adInfo)
            setItems(orderDetail.items)
            setStatus(orderDetail.status)
            setTotal(orderDetail.TotalPrice)
        })

    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const orderlist = {
            supplier,
            reqDate,
            stAddress,
            city,
            province,
            zipCode,
            contact,
            email,
            adInfo,
            items,
            status,
            total
            
        }
        axios.put(`http://localhost:7000/order/update/${id}`, orderlist)
        emailjs.send('service_po4f3vc', 'template_mzpvntf', orderlist, 'r0p6mYficqz5Ov-qX')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
        
        alert("Mail Sent Successfully")
        window.location.href = ('/orders')
    }


    return (

        <div>
            <br />
            <div className="one">
                <div className="formw">
                    <h1>View Order</h1>
                    <br/>
                    <form ref={form} onSubmit={handleSubmit} className="form1">

                        <label for="supplier"><b>Supplier :</b></label>
                        <input type="text"
                            className="form-control mb-2"
                            name="supplier"
                            disabled = "disabled"
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                        /><br/>

                        <label htmlFor="reqDate"><b>Require Date :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="reqDate"
                            disabled = "disabled"
                            value={reqDate}
                            onChange={(e) => setReqDate(e.target.value)}
                             /><br/>

                        <label htmlFor="stAddress"><b>Street Address :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="stAddress"
                            disabled = "disabled"
                            value={stAddress}
                            onChange={(e) => setStAddress(e.target.value)}
                             /><br/>

<label htmlFor="city"><b>City :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="city"
                            disabled = "disabled"
                            value={city}
                            onChange={(e) => setStAddress(e.target.value)}
                             /><br/>

<label htmlFor="province"><b>Province :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="province"
                            disabled = "disabled"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                             /><br/>

<label htmlFor="zipCode"><b>Postal Code :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="zipCode"
                            disabled = "disabled"
                            value={zipCode}
                            onChange={(e) => setZip(e.target.value)}
                             /><br/>

<label htmlFor="contact"><b>Mobile Number :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="contact"
                            disabled = "disabled"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                             /><br/>

                        

                        <label htmlFor="email"><b>Email :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="email"
                            disabled = "disabled"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             /><br/>

<label htmlFor="adInfo"><b>Additional Information :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="adInfo"
                            disabled = "disabled"
                            value={adInfo}
                            onChange={(e) => setAdInfo(e.target.value)}
                             /><br/>


                <div className="formw mb-5">
                <label htmlFor="adInfo"><b>Details of Requested Items :</b></label>
                        <div >
                            <table className="table1">
                                <tr>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                                {items && items.map((item, index) => (
                                <tr>
                                    <td>{item.iName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity*item.unitPrice}</td>
                                </tr>
                                ))} 
                                <hr/>
                                <tr>
                                <td><b>Total Price : </b></td>
                                <td></td>
                                <td><b>{total}</b></td>
                                </tr>
                            </table>
                        
                         </div>
                 </div>          

<label htmlFor="status"><b>Status :</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                             /><br/>

                        

                        <button type="submit" className="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Update </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditOrder;