import axios from 'axios';
import React, { useEffect, useState } from 'react'


function OrdersList() {
    const [orders, setOrders] = useState();
    const [searchkey, setsearchkey] = useState('');

    useEffect(() => {
        axios.get('http://localhost:7000/order').then(res => {
            setOrders(res.data)
            console.log(res.data)
        })
    }, [])

    const filterOrders = async (e) => {
        console.log(searchkey)
        const response = await axios.get(
            'http://localhost:7000/order'
        );
        const filterOrders = response.data.filter((orders) =>
            orders.supplier.toLowerCase().includes(searchkey)
        );
        if (filterOrders.length > 0) {
            setOrders(filterOrders);
        }
        else {
            alert("Search Not Found")
        }
    }

    return (
        <div className="container">
            <br />
            <h1>All orders</h1>
            <br />
            <div >
                <div className="row mb-2">
                    <input type="text"
                        className="form-control col-4 mt-1"
                        onChange={(e) => { setsearchkey(e.target.value) }}
                        placeholder="Search orders"
                        style={{ width: "200px", borderRadius: "10px" }}
                    />

                    <div className="col">
                        <button className="btn btn-secondary mt-1"
                            style={{ marginLeft: "1px" }}
                            onClick={() => filterOrders(searchkey)}>Search
                        </button>
                    </div>

                    {/*<div className="col">
                        <a href={"/adminallreply"}>
                            <button className="btn btn-warning mt-1" ><i class="fas fa-eye" aria-hidden="true"></i> &nbsp;View Responded orders</button>
                        </a>
    </div>*/}

                    <div className="col">
                        <a href={"/#"}>
                            <button className="btn btn-success mt-1" ><i class="fa fa-file" aria-hidden="true"></i> &nbsp;Generate Report</button>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th> Supplier </th>
                        <th> Require Date </th>
                        <th> Street Address </th>
                        <th> City </th>
                        <th> Province </th>
                        <th> Zip Code </th>
                        <th> Contact </th>
                        <th> Email </th>
                        <th> Additional Information </th>
                    </tr>
                </thead>
                <tbody>
                {orders && orders.map((order, index) => (
                    <tr>
                        <td>{order.supplier}</td>
                        <td>{order.reqDate}</td>
                        <td>{order.stAddress}</td>
                        <td>{order.city}</td>
                        <td>{order.province}</td>
                        <td>{order.zipCode}</td>
                        <td>{order.email}</td>
                        <td>{order.adInfo}</td>
                    </tr>
                     ))}
                </tbody>
            </table>
            </div>
    )
}

export default OrdersList;