import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const rState = {
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
    iName:"",
    quantity:"",
    companyNameError:"",
    //reqDateError:"",
    stAddressError:"",
    cityError:"",
    provinceError:"",
    zipCodeError:"",
    contactError:"",
}

export default class RequestDtl extends Component{
    state = rState;

    constructor(props){
        super(props);
    
        this.state={
            reuests:[],
        };
    }

    // componentDidMount(){
    //     this.retrievedata();
    // }

    // filterData(staff){
    //     const result = staff.filter((staffmem) =>
    //         staffmem.staff === "Supervisor"
    //     )

    //     this.setState({staff:result})
    // }
    
    // retrievedata(){
    //     axios.get("http://localhost:7000/getstaff").then(res => {
    //         if (res.data.success) {
    //             this.setState({
    //                 specstaff:this.filterData(res.data.staff)
    //             })
    //             console.log(this.state.specstaff)
    //         }
    //     });
    // }

    validate = () => {
        let companyNameError = "";
        //let reqDateError = "";
        let stAddressError = "";
        let cityError = "";
        let provinceError = "";
        let zipCodeError = "";
        let contactError = "";
        if(!this.state.companyName){
            companyNameError = 'Group ID field cannot be empty!';
        }

        // if(!this.state.reqDate){
        //     reqDateError = 'Group Leaders\' field cannot be empty!';
        // }

        if(!this.state.stAddress){
            stAddressError = 'Member 1 field cannot be empty!';
        }

        if(!this.state.city){
            cityError = 'Member 2 field cannot be empty!';
        }

        if(!this.state.province){
            provinceError = 'Member 3 field cannot be empty!';
        }

        if(!this.state.zipCode){
            zipCodeError = 'Topic field cannot be empty!';
        }

        if(!this.state.contact){
            contactError = 'Supervisor field cannot be empty!';
        }

        if(companyNameError || /*reqDateError ||*/ stAddressError || cityError ||provinceError || zipCodeError || contactError ){
            this.setState({companyNameError, /*reqDateError,*/ stAddressError, cityError, provinceError, zipCodeError, contactError});
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
        const{companyName, supplier, reqDate, stAddress, city, province, zipCode, contact, email, adInfo, iName, quantity} = this.state;

        const rDtl = {
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
            iName:iName,
            quantity:quantity,
        }

        //console.log(customer)
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(rState);
    
        axios.post("http://localhost:7000/request/insert",rDtl).then((res) => {               
            alert("Details added successfully!");
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
                    iName:"",
                    quantity:"",
                })
            }
        }).catch((err)=>{
            alert(err)
        })
    };
    }

    render(){
        return (
            <div className="addtopic">
                <div className="ish">
                <button className="abtn" type="button"><a href="/" style={{textDecoration:'none',color:'black'}} required><b>View Details</b></a></button>
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", }}>
                    <div >
                    <h2>Insert Request Details</h2>

                    <div>
                        <label name="companyName"><b>Company Name</b></label><br/>
                        <input type="text" 
                            name='companyName' 
                            id='companyName' 
                            placeholder="Eg:Gamage Company" 
                            value={this.state.companyName} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.companyNameError}</div>
                    
                    <div>
                        <label name="supplier"><b>Supplier Name</b></label><br/>
                        <input type="text" 
                            name='supplier' 
                            id='supplier' 
                            placeholder="select supplier" 
                            value={this.state.supplier} 
                            onChange={this.InputChange}/>
                    </div>

                    {/* <div>
                        <label name="reqDate"><b>Due Date</b></label><br/>
                        <input type="text" 
                            name='reqDate' 
                            id='reqDate' 
                            placeholder="Enter the date you want to recieve the order" 
                            value={this.state.reqDate} 
                            onChange={this.InputChange}/>
                    </div> */}

                    <div>
                        <label name="stAddress"><b>Address</b></label><br/>
                        <input type="text" 
                            name='stAddress' 
                            id='stAddress' 
                            placeholder="Eg:Perera K.L." 
                            value={this.state.stAddress} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.stAddressError}</div>

                    <div>
                        <label name="city"><b>City</b></label><br/>
                        <input type="text" 
                            name='city' 
                            id='city' 
                            placeholder="Eg:Perera K.L." 
                            value={this.state.city} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.cityError}</div>

                    <div>
                        <label name="province"><b>Province</b></label><br/>
                        <input type="text" 
                            name='province' 
                            id='province' 
                            placeholder="Eg:Management Tool" 
                            value={this.state.province} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.provinceError}</div><br/>


                    {/* <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Reg.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.staff.map((staff,index) => (
                                    <tr key={index}>
                                    <th>{staff.lregNo}</th>
                                    <td>{staff.lname}</td>
                                    <td>{staff.staff}</td>   
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}

                    <div>
                        <label name="zipCode"><b>Zip Code</b></label><br/>
                        <input type="text" 
                            name='zipCode' 
                            id='zipCode' 
                            placeholder="Eg:Perera M.F." 
                            value={this.state.zipCode} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.zipCodeError}</div>

                    {/* <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Reg.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.staff1.map((staff,index) => (
                                    <tr key={index}>
                                    <th>{staff.lregNo}</th>
                                    <td>{staff.lname}</td>
                                    <td>{staff.staff}</td>   
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}

                    <div>
                        <label name="contact"><b>Contact Number</b></label><br/>
                        <input type="text" 
                            name='contact' 
                            id='contact' 
                            placeholder="Eg:Perera M.F." 
                            value={this.state.contact} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.contactError}</div>

                    <div>
                        <label name="email"><b>Email</b></label><br/>
                        <input type="text" 
                            name='email' 
                            id='email' 
                            placeholder="Eg:perera@gmail.com" 
                            value={this.state.email} 
                            onChange={this.InputChange}/>
                    </div>

                    <div>
                        <label name="adInfo"><b>Additional Information</b></label><br/>
                        <input type="text" 
                            name='adInfo' 
                            id='adInfo' 
                            value={this.state.adInfo} 
                            onChange={this.InputChange}/>
                    </div>

                    <div>
                        <label name="iName"><b>Item Name</b></label><br/>
                        <input type="text" 
                            name='iName' 
                            id='iName' 
                            placeholder="Eg:Soil" 
                            value={this.state.iName} 
                            onChange={this.InputChange}/>
                    </div>

                    <div>
                        <label name="quantity"><b>Quantity</b></label><br/>
                        <input type="text" 
                            name='quantity' 
                            id='quantity' 
                            placeholder="Eg:5 cubes" 
                            value={this.state.quantity} 
                            onChange={this.InputChange}/>
                    </div>

                    <br/><br/>
                    <button className="sbtn" type="submit" onClick={this.onSubmit} ><a href="/" style={{textDecoration:'none',color:'black'}}><b>Save</b></a></button><br/>
                    </div>
                </form> 
                </div>
            </div>
        )
    }
}