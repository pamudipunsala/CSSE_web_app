import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    //views
    const showNavigation = () => (
        <nav style={{margin:'5px', paddingLeft:'20px'}} className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >ABC Company (Pvt) Ltd</Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/orders" className="nav-link">Orders </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign Up </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/viewpayment" className="nav-link">Payment Records</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/viewdelivery" className="nav-link">Schedulded Deliveries</Link>
                    </li>
                    
                </ul>
                </div>
                
            
        </nav>
    );

    //render
    return (
        
        <div>
            <header id='header'>{showNavigation()}</header>
        </div>
    );
};

export default Header;