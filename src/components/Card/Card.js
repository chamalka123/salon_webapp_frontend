import React from "react";
import "./Card.css";

function Card(props){
    return (
        <div className="card">
            <img src = {props.img}
             alt="admin_home_img" />
            <p>{props.name}</p>
        </div>
    );
}
export default Card;