import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import ReactDOM from "react-dom";
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'
import '../Services/Service.css';

import {green, red, blue } from '@material-ui/core/colors';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ListItem } from '@material-ui/core';

function Services() {
  const[id,setId]=useState("");
  const [services, setServices] = useState([])
  const history=useHistory()
const [loading,setLoading ] =useState(false);
const[posts,setPosts]= useState([]);
const[searchtitle,setSearchtitle]=useState("");

useEffect(()=>{
const loadPosts = async()=>{
  setLoading(true);
  const response = await axios.get("http://localhost:3000/Service");

setPosts(response.data);
setLoading(false);
};
loadPosts();
}, []);

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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <header>
    <div className="logo">
                <h1>
                    <Link to={"/Service"}>{'SERVICES MANAGEMENT'}</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/AddService">{'CREATE NEW'}</Link></li>
                <li><Link to="/Service">SERVICES & PACKAGES</Link></li>
                </ul>
</header>
<div className="filter-menu">
<input type="text"  placeholder="Enter your search" onChange={(e)=>setSearchtitle(e.target.value)}/>
{loading ?(
  <h4>Loading...</h4>
) : (
  posts
  .filter((value)=>{
    if(searchtitle === ""){
      return value
    }else if(value.title.toLowerCase().includes(searchtitle.toLowerCase())){
      return value;
    }
  })
  .map((item)=> <h5 key={item.id}>{item.titie}</h5>)
)
}
</div>
        <div className="container productGrid" > 
       {services.map((Service,key)=>( 
            <div key={key}> 
                <div class="productcard">
                    <div class="imgBx">
                        <img  src="./image/d.jpg" alt="service"/>
                    </div>
                    <div class="p-3">
                     
                        <h7>{Service.title}</h7>
                        <h6>Rs.{Service.price}.00</h6>
                       
                          <span> 
                          
                          <button className="mx-2 productbtn" style={{backgroundColor:red[500]}} onClick={()=>deleteService(Service._id)} >
                                       Add To Favourites
                                        </button>
                              &nbsp;&nbsp;&nbsp;
                              <Link to="/CustomerSingleItem">
                              <button class="productbtn" style={{backgroundColor:blue[400]}} onClick={()=>view(Service._id)}>
                                        VIEW
                                    </button></Link>
                              
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