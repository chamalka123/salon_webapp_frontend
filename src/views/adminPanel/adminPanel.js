import React from "react";
import "./adminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails";

function Admin(){
    return(

            <div className="admin-home">
            
                <h1>Admin Panel</h1>

                        {cardDetails.map( (cardDetails) => {
                            return(
                                <div>

                                        <Card 
                                            key = {cardDetails.id}
                                            name = {cardDetails.name}
                                            img  = {cardDetails.img}
                                            navigate = {cardDetails.navigate}
                                        />

                               
                                </div>
                            );
                        })}

     
            </div>

    );
}
export default Admin;