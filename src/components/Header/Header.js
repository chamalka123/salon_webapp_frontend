import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header>
            <div className="nav-container">
                <div className="nav-brand">Winray</div>
                <Link to={"/"} className = "link">
                    <div className="nav-item">HOME</div>
                </Link>
                <div className="nav-item">ABOUT</div>
                    <div className="nav-item"> CONTACT US</div>
                <Link to={"/myAccount"} className = "link">
                    <div className="nav-item"> MY ACCOUNT</div>
                </Link>
                <Link to={"/adminPanel"} className = "link">
                    <div className="nav-item"> ADMIN PANEL</div>
                </Link>

            </div>
        </header>
    );
}

export default Header;