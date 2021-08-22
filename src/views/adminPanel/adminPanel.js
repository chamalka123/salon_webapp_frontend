import React from "react";
import "./adminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails"


function createCard(cardDetails){
    return(
        <Card 
            key = {cardDetails.id}
            name = {cardDetails.name}
            img  = {cardDetails.img}
        />
    );
}
function Admin(){
    return(
        <div className="admin-home">
            <h1>Admin Panel</h1>
            {cardDetails.map(createCard)}
            
        </div>
    );
}
export default Admin;