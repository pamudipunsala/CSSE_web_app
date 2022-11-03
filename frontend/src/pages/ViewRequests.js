import React, {Component} from "react";
import axios from 'axios';
import '../index.css';

export default class OrderList extends Component {

    constructor(props){
        super(props);
    
        this.state={
            orders:[]
        };
    }
    
    componentDidMount(){
        this.retrieveOrders();
    }
    
    retrieveOrders(){
        axios.get("http://localhost:7000/order").then(res => {
            if (res.data.success) {
                this.setState({
                    orders:res.data.existingOrder
                });
                console.log(this.state.orders)
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:7000/order/delete/${id}`).then((res) => {
            alert("Details Deleted Successfully");
            this.retrieveOrders();
        })
    }

    filterData(orders, searchKey){
        const result = orders.filter((orders) =>
        orders.companyName.toLowerCase().includes(searchKey)||
        orders.supplier.toLowerCase().includes(searchKey)||
        orders.iName.toLowerCase().includes(searchKey)
        )

        this.setState({orders:result});
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:7000/order").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingOrder,searchKey)
            }
        });
    }
    
        render(){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8-mt-2 mb-2">
                            <h2>All Requests</h2>
                        </div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input 
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}></input>
                        </div>
                    </div>
                    <table >
                    <div className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Supplier</th>
                                <th scope="col">Item Name</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            {this.state.orders.map((order,index) => (
                            <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{order.companyName}</td>
                                    <td>{order.supplier}</td>
                                    <td>{order.iName}</td>
                                    <td>
                                    <a href={`/editorders/${order._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i></button></a>
                                    </td>
                            </tr>
                        ))}
                            
                        
                        </tbody>
                        </div>
                    </table>
                </div>
            )
        }

    }