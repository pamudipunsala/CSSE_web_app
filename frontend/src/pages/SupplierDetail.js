import React, { Component } from "react";
import axios from "axios";

export default class SupplierDetail extends Component {
    
    constructor(props){
        super(props);

        this.state={
            supplier:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:7000/suppliers/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    supplier:res.data.supplier
                });

                console.log(this.state.supplier);
            }
        })
    }

    render() {

        const {sname, semail, userName, spwd} = this.state.supplier;

        return(
            <div style={{marginTop:'20px'}} className="container">
                <h4>{sname}</h4>
                <hr/>
                
                <dl className="row">
                    <dt className="col-sm-3">Supplier Email</dt>
                    <dd className="col-sm-9">{semail}</dd>

                    <dt className="col-sm-3">Username</dt>
                    <dd className="col-sm-9">{userName}</dd>

                    <dt className="col-sm-3">Password</dt>
                    <dd className="col-sm-9">{spwd}</dd>

                </dl>
            </div>
        )
    }
}