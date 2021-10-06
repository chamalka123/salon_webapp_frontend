import React from "react";

import "./Home.css";

import Card from "../../components/Card/Card";


import cardDetails from "../../components/Card/cardDetails";

import customerCardDetails from "../../components/Card/customerCardDetails";
import SideDrawer from "../../components/Header/SideDrawer.js";




function Home(){


    return(

        <div className="home-home">

            <SideDrawer/>

                <h1>Home</h1>



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


    return (
      
        <div className="admin-home">
          <SideDrawer/>
            <div class="heading">Home</div>
          {customerCardDetails.map((customerCardDetails) => {
            return (
              <div>
                <Card
                  key={customerCardDetails.id}
                  name={customerCardDetails.name}
                  img={customerCardDetails.img}
                  navigate={customerCardDetails.navigate}
                />
              </div>
            );
          })}
        </div>
      );

}

export default Home;