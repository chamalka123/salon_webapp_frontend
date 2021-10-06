import React from "react";
import "./adminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails";
import SideDrawer from "../../components/Header/SideDrawer.js";

function Admin() {
  return (
    <div className="admin-home">
      <SideDrawer/>
      <div class="heading">Admin Panel</div>
      {cardDetails.map((cardDetails) => {
        return (
          <div>
            <Card
              key={cardDetails.id}
              name={cardDetails.name}
              img={cardDetails.img}
              navigate={cardDetails.navigate}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Admin;
