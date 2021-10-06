import React from "react";

import "./Home.css";

import Card from "../../components/Card/Card";

import cardDetails from "../../components/Card/cardDetails";

<<<<<<< HEAD
import customerCardDetails from "../../components/Card/customerCardDetails";
import SideDrawer from "../../components/Header/SideDrawer.js";


=======
>>>>>>> parent of 9014e97 (feedback and career portal management updated)


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

<<<<<<< HEAD

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

=======
>>>>>>> parent of 9014e97 (feedback and career portal management updated)
}

export default Home;