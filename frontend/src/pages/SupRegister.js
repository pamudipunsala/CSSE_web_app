import React, { useState } from "react"
import "../index.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SupRegister = () => {

    const navigate = useNavigate()

    const [ suppliers, setSuppliers] = useState({
        sname:"",
        semail:"",
        userName:"",
        spwd:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setSuppliers({
            ...suppliers,
            [name]: value
        })
    }

    const supregister = () => {
        const { sname, semail, userName, spwd } = suppliers
        if( sname && semail && userName && spwd){
            axios.post("http://localhost:7000/supregister", suppliers)
            .then( res => {
                alert(res.data.message)
                // history.push("/login")
            })
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="addpayment">
        <div className='ish'>
        <div className='center'>
        <div className='row px-3 vh-100'>
        <div className='col-md-9 mx-auto align-self-center'>
        <div className="register">
            {console.log("Suppliers", suppliers)}
            <h1>Supplier Registration</h1>
            <input type="text" name="sname" value={suppliers.sname} placeholder="Enter Your Name" onChange={ handleChange }></input>
            <input type="text" name="semail" value={suppliers.semail} placeholder="Enter Your Email" onChange={ handleChange }></input>
            <input type="text" name="userName" value={suppliers.userName} placeholder="Enter UserName" onChange={ handleChange }></input>
            <input type="password" name="spwd" value={suppliers.spwd} placeholder="Enter Password" onChange={ handleChange }></input>
            <div className="sbtn" onClick={supregister} style={{textDecoration:'none',color:'white'}} >Register</div>
            {/* <div>or</div> */}
            {/* <div className="button" onClick={() => navigate("/login")}>Login</div> */}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default SupRegister