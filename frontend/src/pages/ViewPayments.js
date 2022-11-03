import React, {Component} from "react";
import axios from 'axios';
import '../index.css';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class ViewPayments extends Component {

    constructor(props){
        super(props);
    
        this.state={
            payments:[]
        };
    }
    
    componentDidMount(){
        this.retrievePayments();
    }
    
    retrievePayments(){
        axios.get("http://localhost:7000/payments").then(res => {
            if (res.data.success) {
                this.setState({
                    payments:res.data.existingPayment
                });
                console.log(this.state.payments)
            }
        });
    }

    onDelete = (id) => {
        confirmAlert({
            title: 'Delete Payment',
            message: `Are you sure you want to delete payment details?`,
            buttons: [
              {
                label: 'Cancel',
              },
              {
                label: 'Delete',
                onClick: () => {
                    axios.delete(`http://localhost:7000/payment/delete/${id}`).then((res) => {
                        alert("Delete Successfully");
                        this.retrievePayments();
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

    filterData(payments, searchKey){
        const result = payments.filter((payments) =>
        payments.orderid.toLowerCase().includes(searchKey)||
        payments.supplierid.toLowerCase().includes(searchKey)||
        payments.sname.toLowerCase().includes(searchKey)||
        payments.accid.toLowerCase().includes(searchKey)||
        payments.date.toLowerCase().includes(searchKey)||
        payments.amount.toLowerCase().includes(searchKey)
        )
        
        this.setState({payments:result});
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:7000/payments").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPayment,searchKey)
            }
        });
    }
    
        render(){
            return (
                <div className="container">
                    <div className="viewpayment">
                        <div className="col-lg-8-mt-2 mb-2">
                            <h2>Payments History</h2>
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
                                <th scope="col">Payment ID</th>
                                <th scope="col">Order ID</th>
                                <th scope="col">Supplier ID</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col">Accountant ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            {this.state.payments.map((payments,index) => (
                            <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td><a href={`/paymentdetails/${payments._id}`} style={{textDecoration:'none'}}>
                                    {payments._id}
                                    </a></td>
                                    <td>{payments.orderid}</td>
                                    <td>{payments.supplierid}</td>
                                    <td>{payments.sname}</td>
                                    <td>{payments.accid}</td>
                                    <td>{payments.date}</td>
                                    <td>{payments.amount}</td>
                                    <td>
                                    <a href={`/editpayment/${payments._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i></button></a>
                                    </td>
                                    <td>
                                    <a className="delete" href="#" onClick={()=>this.onDelete(payments._id)}><b>
                                        <i className="fas fa-trash-alt"></i>Delete</b>
                                    </a>
                                </td>   
                            </tr>
                        ))}
                            
                        
                        </tbody>
                        </div>
                    </table>
                    <button className="abtn" type="button"><a href="/makepayment" style={{textDecoration:'none',color:'white'}} required><b>Add Payment</b></a></button>
                </div>
            )
        }

    }










