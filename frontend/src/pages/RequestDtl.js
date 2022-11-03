import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const iState = {
    companyName:"",
    supplier:"",
    //reqDate:"",
    stAddress:"",
    city:"",
    province:"",
    zipCode:"",
    contact:"",
    email:"",
    adInfo:"",
    // iName:"",
    // quantity:"",

    companyNameError:"",
    stAddressError:"",
    cityError:"",
    provinceError:"",
    zipCodeError:"",
    contactError:"",
    //iNameError:"",
    //quantityError:""
}

export default class RequestDtl extends Component{
    state = iState;

    constructor(props){
        super(props);
    
        this.state={
            Order:[],
        };
    }

    validate = () => {
        let companyNameError = "";
        let stAddressError = "";
        let cityError = "";
        let provinceError = "";
        let zipCodeError = "";
        let contactError = "";
        //let iNameError = "";
        //let quantityError = "";

        if(!this.state.companyName){
            companyNameError = 'Company Name field cannot be empty!';
        }

        if(!this.state.stAddress){
            stAddressError = 'Address Name field cannot be empty!';
        }

        if(!this.state.city){
            cityError = 'City field cannot be empty!';
        }

        if(!this.state.province){
            provinceError = 'Province field cannot be empty!';
        }

        if(!this.state.zipCode){
            zipCodeError = 'Zip Code field cannot be empty!';
        }

        if(!this.state.contact){
            contactError = 'Contact Number field cannot be empty!';
        }

        // if(!this.state.iName){
        //     iNameError = 'Item Name field cannot be empty!';
        // }

        // if(!this.state.quantity){
        //     quantityError = 'Quantity field cannot be empty!';
        // }

        if(companyNameError || stAddressError || cityError || provinceError || zipCodeError || contactError /* || iNameError || quantityError*/){
            this.setState({companyNameError, stAddressError, cityError, provinceError, zipCodeError, contactError, /*iNameError, quantityError*/});
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
        const{companyName, supplier, /*reqDate,*/ stAddress, city, province, zipCode, contact, email, adInfo, /*iName, quantity*/} = this.state;

        const Requests = {
            companyName:companyName,
            supplier:supplier,
            //reqDate:reqDate,
            stAddress:stAddress,
            city:city,
            province:province,
            zipCode:zipCode,
            contact:contact,
            email:email,
            adInfo:adInfo,
            // iName:iName,
            // quantity:quantity,
        }

     
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(iState);
    
        axios.post("http://localhost:7000/order/save",Requests).then((res) => {               
            alert("Request Sent!");
            if(res.data.success){
                this.setState({
                    companyName:"",
                    supplier:"",
                    //reqDate:"",
                    stAddress:"",
                    city:"",
                    province:"",
                    zipCode:"",
                    contact:"",
                    email:"",
                    adInfo:"",
                    // iName:"",
                    // quantity:"",
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
                <button className="abtn" type="button"><a href="/" style={{textDecoration:'none',color:'white'}} required><b>View Requests</b></a></button>
                <div className="new"> 
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}>
                    <div >
                    <h2>Request Details</h2>

                    <div>
                        <label name="companyName"><b>Company Name</b></label><br/>
                        <input type="text" 
                            name='companyName' 
                            id='companyName' 
                            placeholder="Eg:ABC Company" 
                            value={this.state.companyName} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.companyNameError}</b></div>
                    
                    <div>
                        <label name="supplier"><b>Supplier Name</b></label><br/>
                        <input type="text" 
                            name='supplier' 
                            id='supplier' 
                            placeholder="Eg:Perera G.H." 
                            value={this.state.supplier} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.supplierError}</b></div>

                    {/* <div>
                        <label name="reqDate"><b>Due Date</b></label><br/>
                        <input type="date" 
                            name='reqDate' 
                            id='reqDate' 
                            placeholder="Eg:100kg" 
                            value={this.state.reqDate} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.reqDateError}</b></div> */}

                    <div>
                        <label name="stAddress"><b>Address</b></label><br/>
                        <input type="text" 
                            name='stAddress' 
                            id='stAddress' 
                            placeholder="Eg:Sri Lanka" 
                            value={this.state.stAddress} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.stAddressError}</b></div>

                    <div>
                        <label name="city"><b>City</b></label><br/>
                        <input type="text" 
                            name='city' 
                            id='city' 
                            placeholder="Eg:Colombo" 
                            value={this.state.city} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.cityError}</b></div>

                    <div>
                        <label name="province"><b>Province</b></label><br/>
                        <input type="text" 
                            name='province' 
                            id='province' 
                            placeholder="Eg:Western" 
                            value={this.state.province} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.provinceError}</b></div>

                    <div>
                        <label name="zipCode"><b>Zip Code</b></label><br/>
                        <input type="number" 
                            name='zipCode' 
                            id='zipCode' 
                            value={this.state.zipCode} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.zipCodeError}</b></div>

                    <div>
                        <label name="contact"><b>Contact Number</b></label><br/>
                        <input type="text" 
                            name='contact' 
                            id='contact' 
                            value={this.state.contact} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.contactError}</b></div>

                    <div>
                        <label name="email"><b>Email</b></label><br/>
                        <input type="email" 
                            name='email' 
                            id='email' 
                            value={this.state.email} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.emailError}</b></div>

                    <div>
                        <label name="adInfo"><b>Additional Information</b></label><br/>
                        <input type="text" 
                            min="2018-01-01" max="2030-12-31" 
                            name='adInfo' 
                            id='adInfo' 
                            value={this.state.adInfo} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.adInfoError}</b></div>

                    {/* <div>
                        <label name="iName"><b>Item Name</b></label><br/>
                        <input type="text" 
                            name='iName' 
                            id='iName' 
                            value={this.state.iName} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.iNameError}</b></div>

                    <div>
                        <label name="quantity"><b>Quantity</b></label><br/>
                        <input type="number" 
                            name='quantity' 
                            id='quantity' 
                            value={this.state.quantity} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.quantityError}</b></div> */}

                    <br/><br/><br/>
                    <button className="sbtn" type="submit" onClick={this.onSubmit} ><a href="#" style={{textDecoration:'none',color:'white'}}><b>Request</b></a></button><br/>
                    </div>
                </form> 
                </div>
                </div>
            </div>
        )
    }
}