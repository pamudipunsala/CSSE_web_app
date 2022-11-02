import React, { useState } from "react"
import "../index.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ users, setUsers] = useState({
        uname:"",
        regNo:"",
        uemail:"",
        userName:"",
        upwd:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUsers({
            ...users,
            [name]: value
        })
    }

    const register = () => {
        const { uname, regNo, uemail, userName, upwd } = users
        if( uname && regNo && uemail && userName && upwd){
            axios.post("http://localhost:7000/register", users)
            .then( res => {
                alert(res.data.message)
                // history.push("/login")
            })
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="register-container">
        <div className='row px-3 vh-100'>
        <div className='col-md-5 mx-auto align-self-center'>
        <div className="register">
            {console.log("Users", users)}
            <h1>Register</h1>
            <input type="text" name="uname" value={users.uname} placeholder="Enter Your Name" onChange={ handleChange }></input>
            <input type="text" name="regNo" value={users.regNo} placeholder="Enter Your Register Number" onChange={ handleChange }></input>
            <input type="text" name="uemail" value={users.uemail} placeholder="Enter Your Email" onChange={ handleChange }></input>
            <input type="text" name="userName" value={users.userName} placeholder="Enter UserName" onChange={ handleChange }></input>
            <input type="password" name="upwd" value={users.upwd} placeholder="Enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Register