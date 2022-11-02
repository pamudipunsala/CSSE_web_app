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
            alert("Delete Successfully");
            this.retrieveOrders();
        })
    }

    filterData(orders, searchKey){
        const result = orders.filter((orders) =>
        orders.city.toLowerCase().includes(searchKey)||
        orders.province.toLowerCase().includes(searchKey)||
        orders.supplier.toLowerCase().includes(searchKey)||
        orders.zipCode.toLowerCase().includes(searchKey)
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
                        <div className="ordersHeader">
                            <h2>All Orders</h2>
                        </div>
                        
                    </div>
                    <table >
                    <div className="table">
                        <thead>
                            <tr>
                                <th scope="col">Order ref.</th>
                                <th scope="col">Site Manager</th>
                                <th scope="col">Site Location</th>
                                <th scope="col">Required Date</th>
                                <th scope="col">Status</th>
            
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            {this.state.orders.map((order,index) => (
                            <tr key={index}>
                                    <th scope="row"><a href={`/editorders/${order._id}`} >GJQ{index+20045301}</a></th>
                                    <td>{order.steMan}</td>
                                    <td>{order.city}</td>
                                    <td>{order.reqDate}</td>
                                    <td>{order.status}</td>
                                    
                            </tr>
                        ))}
                            
                        
                        </tbody>
                        </div>
                    </table>
                </div>
            )
        }

    }










