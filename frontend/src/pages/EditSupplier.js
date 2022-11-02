import axios from "axios";
import React,{Component} from "react";

export default class EditSupplier extends Component{

    constructor(props){
        super(props);
        this.state={
            sname:"",
            semail:"",
            userName:"",
            spwd:"",
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

        const {sname,semail,userName,spwd} = this.state;

        const data={
            sname:sname,
            semail:semail,
            userName:userName,
            spwd:spwd
        }

        console.log(data)

        axios.put(`http://localhost:7000/suppliers/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Details Updated Successfully")
                this.setState(
                    {
                        sname:"",
                        semail:"",
                        userName:"",
                        spwd:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:7000/suppliers/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    sname:res.data.supplier.sname,
                    semail:res.data.supplier.semail,
                    userName:res.data.supplier.userName,
                    spwd:res.data.supplier.spwd
                });

                console.log(this.state.supplier);
            }
        })
    }


    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Supplier Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Supplier Name</label>
                        <input type="text"
                        className="form-control"
                        name="sname"
                        placeholder="Enter Name"
                        value={this.state.sname}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Supplier Email</label>
                        <input type="email"
                        className="form-control"
                        name="semail"
                        placeholder="itxxxxxxxx@my.sliit.lk"
                        value={this.state.semail}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Username</label>
                        <input type="text"
                        className="form-control"
                        name="userName"
                        placeholder="Enter a username"
                        value={this.state.userName}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Password</label>
                        <input type="password"
                        className="form-control"
                        name="spwd"
                        placeholder="at least 6 charactors"
                        value={this.state.spwd}
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