import React from "react";
import "./adminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails"

function Admin(){
    return(
        <div className="admin-home">
            <h1>Admin Panel</h1>
            <Card 
                img = {cardDetails[0].img}
                name = {cardDetails[0].name}
            />
            <Card 
                img = {cardDetails[1].img}
                name = {cardDetails[1].name}
            />
            <Card 
                img = {cardDetails[2].img}
                name = {cardDetails[2].name}
            />
                        <Card 
                img = {cardDetails[2].img}
                name = {cardDetails[2].name}
            />
                        <Card 
                img = {cardDetails[2].img}
                name = {cardDetails[2].name}
            />
                        <Card 
                img = {cardDetails[2].img}
                name = {cardDetails[2].name}
            />
                        <Card 
                img = {cardDetails[2].img}
                name = {cardDetails[2].name}
            />
                        <Card 
                img = {cardDetails[2].img}
                name = {cardDetails[2].name}
            />
        </div>
    );
}
export default Admin;