import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import ReactDOM from "react-dom";
import "./Service.css";
import axios from 'axios';
import {Link} from "react-router-dom";
import {green, red } from '@material-ui/core/colors';

function Expenses() {
  const [services, setServices] = useState([])
  const history=useHistory()
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = services.filter(service =>
      service.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  useEffect(() => {
    async function getServices() {
      axios.get(`http://localhost:8070/service`).then((res) => {
        setServices(res.data)
        console.log(res.data)   
      }).catch((err) => {
        alert(err)
      })
    }
    getServices();
  }, [])
  
  function view(id){
    history.push(`/item/${id}`)
  }
 function deleteService(_id){
   axios.delete("http://localhost:8070/service/delete/"+_id).then((res)=>{
     console.log(res.data);
   }).catch((err)=>{
     alert(err)
   });
setServices(services.filter((services)=>services._id!==_id))
 }
return (
  <div className="container">
      <h1>Services management</h1>
    
     <nav class="nav nav-pills flex-column flex-sm-row">
     <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categories</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></hr></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <a class="flex-sm-fill text-sm-center nav-link" href="#"></a>
  <Link to={"/AddService"} className="btn btn-warning btn-sm" href="">ADD</Link>
  <Link to={"/Categories"} className="flex-sm-fill text-sm-center nav-link" href="">Categories</Link>
</nav>

<div className="filter-menu">
<input type="text" value={searchTerm} placeholder="Enter your search" onChange={handleChange}/>
{searchResults.map(item => (
          <li>{item}</li>
        ))}
</div>
        <div className="container productGrid" > 
       {services.map((Service,key)=>( 
            <div key={key}> 
                <div class="productcard">
                    <div class="imgBx">
                        <img  src="/images/d.jpg" alt="service"/>
                    </div>
                    <div class="p-3">
                        <h7>{Service.title}</h7>
                        <h6>{Service.price}</h6>
                        <div align="right">
                          <span> 
                              <button class="productbtn" style={{backgroundColor:red[600]}} onClick={()=>deleteService(services._id)}>
                                DELETE
                              </button>
                              &nbsp;&nbsp;&nbsp;
                              <button class="productbtn" style={{backgroundColor:green[400]}} onClick={()=>view(id)}>UPDATE</button>
                          </span> 
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
        </div>
  )
}
export default Expenses