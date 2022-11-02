import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const iState = {
    orderid:"",
    supplierid:"",
    sname:"",
    accid:"",
    date:"",
    amount:"",

    orderidError:"",
    supplieridError:"",
    snameError:"",
    accidError:"",
    dateError:"",
    amountError:""
}

export default class MakePayments extends Component{
    state = iState;

    constructor(props){
        super(props);
    
        this.state={
            payment:[],
        };
    }

    validate = () => {
        let orderidError = "";
        let supplieridError = "";
        let snameError = "";
        let accidError = "";
        let dateError = "";
        let amountError = "";

        if(!this.state.orderid){
            orderidError = 'Order ID field cannot be empty!';
        }

        if(!this.state.supplierid){
            supplieridError = 'Supplier ID field cannot be empty!';
        }

        if(!this.state.sname){
            snameError = 'Supplier Name field cannot be empty!';
        }

        if(!this.state.accid){
            accidError = 'Accountant ID field cannot be empty!';
        }

        if(!this.state.date){
            dateError = 'Date cannot be empty!';
        }

        if(!this.state.amount){
            amountError = 'Amount cannot be empty!';
        }

        if(orderidError || supplieridError || snameError || accidError ||dateError||amountError){
            this.setState({orderidError, supplieridError, snameError, accidError, dateError, amountError});
            return false;
        }

        return true;
    }

    InputChange =(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
        const{orderid, supplierid, sname, accid, date, amount} = this.state;

        const Payment = {
            orderid:orderid,
            supplierid:supplierid,
            sname:sname,
            accid:accid,
            date:date,
            amount:amount
        }

     
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(iState);
    
        axios.post("http://localhost:7000/payment/add",Payment).then((res) => {               
            alert("Details added successfully!");
            if(res.data.success){
                this.setState({
                    orderid:"",
                    supplierid:"",
                    sname:"",
                    accid:"",
                    date:"",
                    amount:""
                })
            }
        }).catch((err)=>{
            alert(err)
        })
    };
    }

    render(){
        return (
            <div className="addpayment">
                <div className="ish">
                <button className="abtn" type="button"><a href="/viewpayments" style={{textDecoration:'none',color:'white'}} required><b>View Teams</b></a></button>
                <div className="new"> 
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}>
                    <div >
                    <h2>Add Payment Details</h2>

                    <div>
                        <label name="orderid"><b>Order ID</b></label><br/>
                        <input type="text" 
                            name='orderid' 
                            id='orderid' 
                            placeholder="Eg:AB100" 
                            value={this.state.orderid} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.orderidError}</b></div>
                    
                    <div>
                        <label name="supplierid"><b>Supplier ID</b></label><br/>
                        <input type="text" 
                            name='supplierid' 
                            id='supplierid' 
                            placeholder="Eg:XX0909" 
                            value={this.state.supplierid} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.supplieridError}</b></div>

                    <div>
                        <label name="sname"><b>Supplier Name</b></label><br/>
                        <input type="text" 
                            name='sname' 
                            id='sname' 
                            placeholder="Eg:Kusal Fernando" 
                            value={this.state.sname} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.snameError}</b></div>

                    <div>
                        <label name="accid"><b>Accountant ID</b></label><br/>
                        <input type="text" 
                            name='accid' 
                            id='accid' 
                            placeholder="Eg:AC0101" 
                            value={this.state.accid} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.accidError}</b></div>

                    <div>
                        <label name="date"><b>Date</b></label><br/>
                        <input type="text" 
                            name='date' 
                            id='date' 
                            placeholder="Eg:11/01/2022" 
                            value={this.state.date} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.dateError}</b></div>

                    <div>
                        <label name="amount"><b>Amount</b></label><br/>
                        <input type="text" 
                            name='amount' 
                            id='amount' 
                            placeholder="Eg:Rs 10000" 
                            value={this.state.amount} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.amountError}</b></div>

                    <br/><br/><br/>
                    <button className="sbtn" type="submit" onClick={this.onSubmit} ><a href="#" style={{textDecoration:'none',color:'white'}}><b>Save</b></a></button><br/>
                    </div>
                </form> 
                </div>
                </div>
            </div>
        )
    }
}