import React, {Component} from "react";
import axios from 'axios';

export default class ViewSuppliers extends Component {

    constructor(props){
        super(props);
    
        this.state={
            suppliers:[]
        };
    }
    
    componentDidMount(){
        this.retrieveSuppliers();
    }
    
    retrieveSuppliers(){
        axios.get("http://localhost:7000/suppliers").then(res => {
            if (res.data.success) {
                this.setState({
                    suppliers:res.data.existingSuppliers
                });
                console.log(this.state.suppliers)
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:7000/suppliers/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveSuppliers();
        })
    }

    filterData(suppliers, searchKey){
        const result = suppliers.filter((supplier) =>
            supplier.sname.toLowerCase().includes(searchKey)||
            supplier.semail.toLowerCase().includes(searchKey)||
            supplier.userName.toLowerCase().includes(searchKey)
        )

        this.setState({suppliers:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:7000/suppliers").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingSuppliers,searchKey)
            }
        });
    }
    
        render(){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8-mt-2 mb-2">
                            <h2><b>All Suppliers</b></h2>
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col">Supplier Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.suppliers.map((suppliers,index) => (
                            <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td><a href={`/supplier/${suppliers._id}`} style={{textDecoration:"none"}}>{suppliers.sname}</a></td>
                                    <td>{suppliers.semail}</td>
                                    <td>{suppliers.userName}</td>
                                    <td>{suppliers.spwd}</td>
                                    <td>
                                    {/* <a href={`/editSuppliers/${suppliers._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i>&nbsp;Edit</button></a> */}
                                    
                                    &nbsp;
                                    <button className="btn btn-danger btn-sm" onClick={() => this.onDelete(suppliers._id)}><i className="far fa-trash-alt"></i>&nbsp;
                                    Delete
                                </button> &nbsp;
                                    {/* <a href={`/supplier/${suppliers._id}`} ><button className="btn btn-secondary btn-sm"><i className="fa fa-info-circle"></i>&nbsp;View</button></a> */}
                                    </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button className="abtn" type="button"><a href="/supregister" style={{textDecoration:'none',color:'white'}} required><b>Add Supplier</b></a></button>
                </div>
            )
        }
    }