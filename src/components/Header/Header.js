import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header>
            <div className="nav-container">
                <div className="nav-brand">Winray</div>
                <Link to={"/"}>
                <div className="nav-item">HOME</div>
                </Link>
                <div className="nav-item">ABOUT</div>
                <div className="nav-item"> CONTACT US</div>
                <div className="nav-item"> MY ACCOUNT</div>
                <Link to={"/adminPanel"}>
                    <div className="nav-item"> ADMIN PANEL</div>
                </Link>

            </div>
        </header>
    );
}

export default Header;