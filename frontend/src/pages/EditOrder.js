import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditOrder() {
    const { id } = useParams();

    const [supplier, setSupplier] = useState('');
    const [reqDate, setReqDate] = useState('');
    const [stAddress, setStAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZip] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [adInfo, setAdInfo] = useState('');
    const [status, setStatus] = useState('');


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
            setStatus(orderDetail.status)
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
            status
        }
        axios.put(`http://localhost:7000/order/update/${id}`, orderlist)
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
                    <form onSubmit={handleSubmit}>

                        <label for="supplier"><b>Supplier</b></label>
                        <input type="text"
                            className="form-control mb-2"
                            name="supplier"
                            disabled = "disabled"
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                        /><br/><br/>

                        <label htmlFor="reqDate"><b>reqDate Number</b></label>
                        <input type="text"
                            className="form-control mb-3"
                            name="reqDate"
                            disabled = "disabled"
                            value={reqDate}
                            onChange={(e) => setReqDate(e.target.value)}
                             /><br/><br/>

                        <label htmlFor="stAddress"><b>Street Address</b></label>
                        <input type="stAddress"
                            className="form-control mb-3"
                            name="stAddress"
                            disabled = "disabled"
                            value={stAddress}
                            onChange={(e) => setStAddress(e.target.value)}
                             /><br/><br/>

<label htmlFor="city"><b>Street Address</b></label>
                        <input type="city"
                            className="form-control mb-3"
                            name="city"
                            disabled = "disabled"
                            value={city}
                            onChange={(e) => setStAddress(e.target.value)}
                             /><br/><br/>

<label htmlFor="province"><b>Street Address</b></label>
                        <input type="province"
                            className="form-control mb-3"
                            name="province"
                            disabled = "disabled"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                             /><br/><br/>

<label htmlFor="zipCode"><b>Street Address</b></label>
                        <input type="zipCode"
                            className="form-control mb-3"
                            name="zipCode"
                            disabled = "disabled"
                            value={zipCode}
                            onChange={(e) => setZip(e.target.value)}
                             /><br/><br/>

<label htmlFor="contact"><b>Street Address</b></label>
                        <input type="contact"
                            className="form-control mb-3"
                            name="contact"
                            disabled = "disabled"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                             /><br/><br/>

                        

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email"
                            className="form-control mb-3"
                            name="email"
                            disabled = "disabled"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             /><br/><br/>

<label htmlFor="adInfo"><b>Street Address</b></label>
                        <input type="adInfo"
                            className="form-control mb-3"
                            name="adInfo"
                            disabled = "disabled"
                            value={adInfo}
                            onChange={(e) => setAdInfo(e.target.value)}
                             /><br/><br/>

<label htmlFor="status"><b>Street Address</b></label>
                        <input type="status"
                            className="form-control mb-3"
                            name="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                             /><br/><br/>

                        

                        <button type="submit" className="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Update </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditOrder;