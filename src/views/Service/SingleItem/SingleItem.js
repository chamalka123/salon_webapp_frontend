import React,{useEffect, useState} from 'react'
import '../Services/Service.css'
import './SingleItem.css'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import { orange, green, red } from '@material-ui/core/colors';



function ServiceDetails(props) {
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState("");
    const[duration,setDuration]=useState("");
    const[content,setContent]=useState("");
    const [services, setServices] = useState([])

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
      async function getServiceDetails() {
        axios.get(`http://localhost:8070/service/item/${props.match.params.id}`).then((res) => {
            setTitle(res.data.service.title)
          setPrice(res.data.service.price)
          setDuration(res.data.service.duration)
          setContent(res.data.service.content)
          console.log(res)   
        }).catch((err) => {
          alert(err)
        })
      }
      getServiceDetails();

    }, [props])
    
      
    return (
        <div className="container">
            <div className="detailproductcard">     
                <div className="detailproduct">
                                <img src="/images/d.jpg " alt="productdeatils" />
                    <div className="box-detailproduct">
                        <div className="row">
                            <h2>{title}</h2>
                        </div>
                                <span>
                                    $ {price}
                                </span>
                                <div>
                                <p>
                                    {duration}
                                </p>
                            </div>  
                            <div>
                                <p>
                                    {content}
                                </p>
                            </div>  
                            <table className="singleitembtns">  
                        <div align="right">
                            <span> 
                                <button class="productbtn" style={{backgroundColor:red[400]}} >
                                   
                                </button>
                                    &nbsp;&nbsp;&nbsp; &nbsp;
                                <button class="productbtn" style={{backgroundColor:red[400]}} >
                                   Book Now
                                </button>
                            </span> 
                        </div>
                        </table>
                    </div>
                            
                </div>                
            </div>
           
            <br></br>
        <div>
            <div> 
            <h2> &nbsp;&nbsp;&nbsp;&nbsp;
              Related 
              <br></br>
              <br></br>
            </h2>
            </div>
               <table className="relatedproduct">
            <div className="products">
                <div className="container productGridr" > 
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
                                            <button class="productbtn" style={{backgroundColor:orange[600]}}> 
                                             
                                            </button>
                                                         &nbsp;&nbsp;&nbsp;
                                            <button class="productbtn" style={{backgroundColor:red[400]}} > View Item </button>
                                        </span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </table>
        </div>
        </div> 
                
    )
}

export default ServiceDetails
