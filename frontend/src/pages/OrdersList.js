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

   

    
        render(){
            return (
                <div style={{backgroundColor:"#d1d1d1",margin:"5px",height:"650px"}}>
                <div className="container" >
                    <div className="row">
                        <div className="ordersHeader">
                            <h3>All Requisitions</h3>
                        </div>
                        
                    </div>
                    <br /><br />
                    <table style={{marginLeft:"100px", width:"80%", textAlign:"center", paddingLeft:"300px"}}>
                    <div className="table" >
                        <thead>
                            <tr>
                                <th scope="col" style={{padding:"20px"}}>Order ref.</th>
                                <th scope="col" style={{padding:"20px"}}>Site Manager</th>
                                <th scope="col" style={{padding:"20px"}}>Site Location</th>
                                <th scope="col" style={{padding:"20px"}}>Required Date</th>
                                <th scope="col" style={{padding:"20px"}}>Status</th>
            
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
                            </tr>))}
                        </tbody>
                        </div>
                    </table>
                </div>
                </div>
            )
        }

    }










