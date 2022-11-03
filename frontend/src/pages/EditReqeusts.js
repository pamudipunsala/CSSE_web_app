import axios from "axios";
import React,{Component} from "react";

export default class EditRequests extends Component{

    constructor(props){
        super(props);
        this.state={
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
        }
    }

    handleinputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {companyName,supplier,/*reqDate,*/stAddress,city,province,zipCode,contact,email,adInfo,iName,quantity} = this.state;

        const data={
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

        axios.put(`/requests/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Details Updated Successfully")
                this.setState(
                    {
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
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:7000/order/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    companyName:res.data.requests.companyName,
                    supplier:res.data.requests.supplier,
                    // reqDate:res.data.requests.reqDate,
                    stAddress:res.data.requests.stAddress,
                    city:res.data.requests.city,
                    province:res.data.requests.province,
                    zipCode:res.data.requests.zipCode,
                    contact:res.data.requests.contact,
                    email:res.data.requests.email,
                    adInfo:res.data.requests.adInfo,
                    iName:res.data.requests.iName,
                    quantity:res.data.requests.quantity,
                });
            }
        })
    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Student Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Companyy Name</label>
                        <input type="text"
                        className="form-control"
                        name="companyName"
                        placeholder="Enter Name"
                        value={this.state.companyName}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Supplier Name</label>
                        <input type="text"
                        className="form-control"
                        name="supplier"
                        placeholder="ITxxxxxxxx"
                        value={this.state.supplier}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="stAddress"
                        placeholder="itxxxxxxxx@my.sliit.lk"
                        value={this.state.stAddress}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>City</label>
                        <input type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter a username"
                        value={this.state.city}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Province</label>
                        <input type="text"
                        className="form-control"
                        name="province"
                        placeholder="at least 6 charactors"
                        value={this.state.province}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Zip Code</label>
                        <input type="text"
                        className="form-control"
                        name="zipCode"
                        placeholder="at least 6 charactors"
                        value={this.state.zipCode}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Zip Code</label>
                        <input type="text"
                        className="form-control"
                        name="contact"
                        placeholder="at least 6 charactors"
                        value={this.state.contact}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="at least 6 charactors"
                        value={this.state.email}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Additional Information</label>
                        <input type="text"
                        className="form-control"
                        name="adInfo"
                        value={this.state.adInfo}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Item Name</label>
                        <input type="text"
                        className="form-control"
                        name="iName"
                        value={this.state.iName}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Quantity</label>
                        <input type="number"
                        className="form-control"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleinputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
        )
        
    }
}