import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../index.css'

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

        <div style={{backgroundColor:"#d1d1d1",margin:"5px"}}>
            <br />
            <div className="one">
                <div className="formw">
                    <div className="ordersHeader1">
                    <h1><i className='fa-solid fa-clock' ></i>Pending Approval</h1>
                    </div>
                    
                    <br/>
                    <form ref={form} onSubmit={handleSubmit} className="form1" >
                        <div style={{backgroundColor:"white", padding:"20px",borderRadius:"10px"}}>
                        <table>
                            <tr>
                                <th><b>Supplier :</b></th>
                                <td>
                                    <input type="text"
                                        className="form-control mb-2"
                                        name="supplier"
                                        disabled = "disabled"
                                        value={supplier}
                                        onChange={(e) => setSupplier(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Require Date :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="reqDate"
                                    //disabled = "disabled"
                                    value={reqDate}
                                    onChange={(e) => setReqDate(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Street Address :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="stAddress"
                                    disabled = "disabled"
                                    value={stAddress}
                                    onChange={(e) => setStAddress(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>City :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="city"
                                    disabled = "disabled"
                                    value={city}
                                    onChange={(e) => setStAddress(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Province :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="province"
                                    disabled = "disabled"
                                    value={province}
                                    onChange={(e) => setProvince(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Postal Code :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="zipCode"
                                    disabled = "disabled"
                                    value={zipCode}
                                    onChange={(e) => setZip(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Mobile Number :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="contact"
                                    disabled = "disabled"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Email :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="email"
                                    disabled = "disabled"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Additional Information :</b></th>
                                <td>
                                <input type="text"
                                    className="form-control mb-3"
                                    name="adInfo"
                                    disabled = "disabled"
                                    value={adInfo}
                                    onChange={(e) => setAdInfo(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><b>Status :</b></th>
                                <td>
                                {/*<input type="text"
                                    className="form-control mb-3"
                                    name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
    />*/}
                                    <select name="status" id="status">
                                        <option value={status === 'accepted'} onChange={(e) => setStatus(e.target.value)}>accepted</option>
                                        <option value={status === 'rejected'} onChange={(e) => setStatus(e.target.value)}>rejected</option>
                                        
                                    </select>

                                </td>
                            </tr>
                        </table>
                        </div>
                       
                    

                        
                        



                <div className="itemdet">
                <label htmlFor="adInfo"><b>Details of Requested Items :</b></label>
                        <div >
                            <table className="table1" >
                                <tr className='tritem'>
                                    <th style={{padding:"50px"}}>Item Name</th>
                                    <th style={{padding:"50px"}}>Quantity</th>
                                    <th style={{padding:"50px"}}>Price</th>
                                </tr>
                                {items && items.map((item, index) => (
                                <tr className='tritem'> 
                                    <td style={{padding:"50px"}}>{item.iName}</td>
                                    <td style={{padding:"50px"}}>{item.quantity}</td>
                                    <td style={{padding:"50px"}}>{item.quantity*item.unitPrice}</td>
                                </tr>
                                ))} 
                                <hr/>
                                <tr>
                                <td style={{padding:"50px"}}><b>Total Price : </b></td>
                                <td style={{padding:"50px"}}></td>
                                <td style={{padding:"50px"}}><b>{total}</b></td>
                                </tr>
                            </table>
                        
                         </div>
                 </div>       
                        

                        <button type="submit" className="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Update </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditOrder;