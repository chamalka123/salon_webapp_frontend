import React,{useState} from "react";
import axios from "axios";
import "./Feedback.css";


export default function AddFeedback(){

  const [feedback_id, setFeedback_id] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [service_type, setService_type] = useState("");
  const [rating, setRating] = useState("");
  const [feedback_description, setFeedback_description] = useState("");
  

  function sendData(e){
    e.preventDefault();

      const newFeedback ={

        feedback_id,
        customer_name,
        service_type,
        rating,
        feedback_description

      }

    axios.post("http://localhost:8070/feedback/add",newFeedback).then(()=>{
      alert("Feedback Added")

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
      
      <div className="feedbackBody">
     <div className="feedback-container"> 
     <h1>Add New Feedback</h1>
      <form onSubmit={sendData} className="add-feedback">

 
  
  <div class="form-group">
    <label for="customer_name">Customer Name</label>
    <input type="text" class="form-control" id="customer_name" maxlength="20" size="20" required 
    onChange={(e)=>{

      setCustomer_name(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="service_type">Service_type</label>
    <input type="text" class="form-control" id="service_type" placeholder="Enter Service Type"
    onChange={(e)=>{

      setService_type(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="rating">Rating</label>
    <input type="text" class="form-control" id="rating" placeholder="Enter Rating from 1-3"
    onChange={(e)=>{

      setRating(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="feedback_description">Feedback_description</label>
    <input type="text" class="form-control" id="feedback_description"
    onChange={(e)=>{

        setFeedback_description(e.target.value);

    }}/>
  </div>

 
  <br></br>

  <center>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </center>
</form>
</div>
</div>
    )
}