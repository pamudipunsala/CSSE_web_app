import React, {Component} from "react";
import axios from 'axios';
import '../index.css';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class ViewDeliveries extends Component {

    constructor(props){
        super(props);
    
        this.state={
            deliveries:[]
        };
    }
    
    componentDidMount(){
        this.retrieveDeliveries();
    }
    
    retrieveDeliveries(){
        axios.get("http://localhost:7000/deliveries").then(res => {
            if (res.data.success) {
                this.setState({
                    deliveries:res.data.existingDelivery
                });
                console.log(this.state.deliveries)
            }
        });
    }

    onDelete = (id) => {
        confirmAlert({
            title: 'Delete Delivery',
            message: `Are you sure you want to delete this delivery?`,
            buttons: [
              {
                label: 'Cancel',
              },
              {
                label: 'Delete',
                onClick: () => {
                    axios.delete(`http://localhost:7000/delivery/delete/${id}`).then((res) => {
                        alert("Delete Successfully");
                        this.retrieveDeliveries();
                    })
                  .then(() => {
                    toast.success(`Record deleted.`);
                  })
                  .catch(err => {
                    toast.error(`Failed to delete record: ${err.message}`);
                  });
                }
              }      
            ]
          });
    }

    filterData(deliveries, searchKey){
        const result = deliveries.filter((deliveries) =>
        deliveries.orderid.toLowerCase().includes(searchKey)||
        deliveries.iName.toLowerCase().includes(searchKey)||
        deliveries.quantity.toLowerCase().includes(searchKey)||
        deliveries.deliveryPrice.toLowerCase().includes(searchKey)||
        deliveries.TotalPrice.toLowerCase().includes(searchKey)||
        deliveries.stAddress.toLowerCase().includes(searchKey)||
        deliveries.deliveryDate.toLowerCase().includes(searchKey)
        )
        
        this.setState({deliveries:result});
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:7000/deliveries").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingDelivery,searchKey)
            }
        });
    }
    
        render(){
            return (
                <div className="container">
                    <div className="viewpayment">
                        <div className="col-lg-8-mt-2 mb-2">
                            <h2>Scheduled Deliveries</h2>
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
                                <th scope="col">Delivery ID</th>
                                <th scope="col">Order ID</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delivery Price</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Site Address</th>
                                <th scope="col">Delivery Date</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            {this.state.deliveries.map((deliveries,index) => (
                            <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{deliveries._id}</td>
                                    <td>{deliveries.orderid}</td>
                                    <td>{deliveries.iName}</td>
                                    <td>{deliveries.quantity}</td>
                                    <td>{deliveries.deliveryPrice}</td>
                                    <td>{deliveries.TotalPrice}</td>
                                    <td>{deliveries.stAddress}</td>
                                    <td>{deliveries.deliveryDate}</td>
                                    <td>
                                    <a href={`/editdelivery/${deliveries._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i></button></a>
                                    </td>
                                    <td>
                                    <a className="delete" href="#" onClick={()=>this.onDelete(deliveries._id)}><b>
                                        <i className="fas fa-trash-alt"></i>Delete</b>
                                    </a>
                                </td>   
                            </tr>
                        ))}
                            
                        
                        </tbody>
                        </div>
                    </table>
                    <button className="abtn" type="button"><a href="/makedelivery" style={{textDecoration:'none',color:'white'}} required><b>Add Delivery</b></a></button>
                </div>
            )
        }

    }
