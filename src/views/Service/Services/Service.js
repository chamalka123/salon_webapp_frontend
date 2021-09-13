import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import ReactDOM from "react-dom";
import "./Service.css";
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

import {green, red, blue } from '@material-ui/core/colors';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Services() {
  const[id,setId]=useState("");
  const [services, setServices] = useState([])
  const history=useHistory()
 // const [searchTerm, setSearchTerm] = useState("");
 // const [searchResults, setSearchResults] = useState([]);
 const config = {
  headers: {
      "content-Type": "application/json"
  }
};


  useEffect(() => {
   async function getServices() {
      axios.get(`http://localhost:8070/service`).then((res) => {
        setServices(res.data)
        //console.log(res.data)   
      }).catch((err) => {
        alert(err)
      })
    }
    getServices();
  }, [])
  
  function view(id){
    history.push(`/salon/item/${id}`)
  }
  async function deleteService(id){        
    await axios.delete(`http://localhost:8070/service/delete/${id}`,config).then(() => {
        alert("Item deleted successfully")
      
    }).catch((error) => {
        alert(`Failed to delete the product\n${error.message}`)
    }) 
} 
return(
  <div className="container">
      <h1>Services management</h1>
    
     <nav class="nav nav-pills flex-column flex-sm-row">
    
  <Link to={"/AddService"} className="btn btn-warning btn-sm" href="" align="right">ADD</Link>
  
</nav>


        <div className="container productGrid" > 
       {services.map((Service,key)=>( 
            <div key={key}> 
                <div class="productcard">
                    <div class="imgBx">
                        <img  src="./images/d.jpg" alt="service"/>
                    </div>
                    <div class="p-3">
                     
                        <h7>{Service.title}</h7>
                        <h6>Rs.{Service.price}.00</h6>
                       
                          <span> 
                          
                          <button className="mx-2 productbtn" style={{backgroundColor:red[500]}} onClick={()=>deleteService(Service._id)} >
                                        Delete <DeleteForeverIcon/>
                                        </button>
                              &nbsp;&nbsp;&nbsp;
                              <button class="productbtn" style={{backgroundColor:blue[400]}} onClick={()=>view(Service._id)}>
                                        View
                                    </button>
                              
                          </span> 
                        
                    </div>
                </div>
            </div>
        ))}
        </div>
        </div>
  )
}
export default Services