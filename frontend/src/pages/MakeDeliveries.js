import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const iState = {
    orderid:"",
    iName:"",
    quantity:"",
    deliveryPrice:"",
    TotalPrice:"",
    stAddress:"",
    deliveryDate:"",

    orderidError:"",
    iNameError:"",
    quantityError:"",
    deliveryPriceError:"",
    TotalPriceError:"",
    stAddressError:"",
    deliveryDateError:""
}

export default class MakeDeliveries extends Component{
    state = iState;

    constructor(props){
        super(props);
    
        this.state={
            delivery:[],
        };
    }

    validate = () => {
        let orderidError = "";
        let iNameError = "";
        let quantityError = "";
        let deliveryPriceError = "";
        let TotalPriceError = "";
        let stAddressError = "";
        let deliveryDateError = "";

        if(!this.state.orderid){
            orderidError = 'Order ID field cannot be empty!';
        }

        if(!this.state.iName){
            iNameError = 'Item Name field cannot be empty!';
        }

        if(!this.state.quantity){
            quantityError = 'Quantity field cannot be empty!';
        }

        if(!this.state.deliveryPrice){
            deliveryPriceError = 'Delivery Price field cannot be empty!';
        }

        if(!this.state.TotalPrice){
            TotalPriceError = 'Total Price field cannot be empty!';
        }

        if(!this.state.stAddress){
            stAddressError = 'Site Address field cannot be empty!';
        }

        if(!this.state.deliveryDate){
            deliveryDateError = 'Delivery Date field cannot be empty!';
        }

        if(orderidError || iNameError || quantityError || deliveryPriceError || TotalPriceError || stAddressError || deliveryDateError){
            this.setState({orderidError, iNameError, quantityError, deliveryPriceError, TotalPriceError, stAddressError, deliveryDateError});
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
        const{orderid, iName, quantity, deliveryPrice, TotalPrice, stAddress, deliveryDate} = this.state;

        const Delivery = {
            orderid:orderid,
            iName:iName,
            quantity:quantity,
            deliveryPrice:deliveryPrice,
            TotalPrice:TotalPrice,
            stAddress:stAddress,
            deliveryDate:deliveryDate
        }

     
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(iState);
    
        axios.post("http://localhost:7000/delivery/add",Delivery).then((res) => {               
            alert("Details added successfully!");
            if(res.data.success){
                this.setState({
                    orderid:"",
                    iName:"",
                    quantity:"",
                    deliveryPrice:"",
                    TotalPrice:"",
                    stAddress:"",
                    deliveryDate:""
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
                <button className="abtn" type="button"><a href="/viewdelivery" style={{textDecoration:'none',color:'white'}} required><b>View Deliveries</b></a></button>
                <div className="new"> 
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}>
                    <div >
                    <h2>Add Delivery Details</h2>

                    <div>
                        <label name="orderid"><b>Order ID</b></label><br/>
                        <input type="text" 
                            name='orderid' 
                            id='orderid' 
                            placeholder="Eg:O100" 
                            value={this.state.orderid} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.orderidError}</b></div>
                    
                    <div>
                        <label name="iName"><b>Item Name</b></label><br/>
                        <input type="text" 
                            name='iName' 
                            id='iName' 
                            placeholder="Eg:Cement" 
                            value={this.state.iName} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.iNameError}</b></div>

                    <div>
                        <label name="quantity"><b>Quantity</b></label><br/>
                        <input type="text" 
                            name='quantity' 
                            id='quantity' 
                            placeholder="Eg:100kg" 
                            value={this.state.quantity} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.quantityError}</b></div>

                    <div>
                        <label name="deliveryPrice"><b>Delivery Price</b></label><br/>
                        <input type="number" 
                            name='deliveryPrice' 
                            id='deliveryPrice' 
                            placeholder="Eg:100" 
                            value={this.state.deliveryPrice} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.deliveryPriceError}</b></div>

                    <div>
                        <label name="TotalPrice"><b>Total Price</b></label><br/>
                        <input type="number" 
                            name='TotalPrice' 
                            id='TotalPrice' 
                            placeholder="Eg:1000" 
                            value={this.state.TotalPrice} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.TotalPriceError}</b></div>

                    <div>
                        <label name="stAddress"><b>Site Address</b></label><br/>
                        <input type="text" 
                            name='stAddress' 
                            id='stAddress' 
                            placeholder="Eg:Colombo" 
                            value={this.state.stAddress} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.stAddressError}</b></div>

                    <div>
                        <label name="deliveryDate"><b>Delivery Date</b></label><br/>
                        <input type="date" 
                            min="2018-01-01" max="2030-12-31" 
                            name='deliveryDate' 
                            id='deliveryDate' 
                            value={this.state.deliveryDate} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.deliveryDateError}</b></div>


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