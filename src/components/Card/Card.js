import React from "react";
import "./Card.css";
import {Link} from 'react-router-dom';

function Card(props){
    return (

        <div className="card">
            <Link to={"/myAccount"}>
                <img src = {props.img}
                alt="admin_home_img" />
                <p>{props.name}</p>
            </Link>
        </div>
    );
}
export default Card;