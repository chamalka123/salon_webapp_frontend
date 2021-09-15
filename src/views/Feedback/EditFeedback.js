import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";


function EditFeedback(){

  const [feedback_id, setFeedback_id] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [service_type, setService_type] = useState("");
  const [rating, setRating] = useState("");
  const [feedback_description, setFeedback_description] = useState("");
  

  const {id} = useParams();
  useEffect(() => {
    function getFeedbacks() {
      axios.get(`http://localhost:8070/feedback/get/${id}`)
      .then((res) => {

        console.log(res.data.feedback);
        setFeedback_id(res.data.feedback.feedback_id);
        setCustomer_name(res.data.feedback.customer_name);
        setService_type(res.data.feedback.service_type);
        setRating(res.data.feedback.rating);
        setFeedback_description(res.data.feedback.feedback_description);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getFeedbacks();
  }, []);



  function sendUpdateFeedback(e){
    e.preventDefault();

      const updatefeedback = {

        feedback_id,
        customer_name,
        service_type,
        rating,
        feedback_description

      }

    axios.put(`http://localhost:8070/feedback/update/${id}`, updatefeedback).then(()=>{
      alert("Feedback Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
     <div className="container"> 
     <h1>Edit Feedback</h1>
      <form onSubmit={sendUpdateFeedback}>

  <div class="col-md-12">
    <label for="feedback_id">Feedback ID</label>
    <input type="text" class="form-control" id="feedback_id" 
    value={feedback_id}
    onChange={(e)=>{

      setFeedback_id(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <label for="customer_name">Customer Name</label>
    <input type="text" class="form-control" id="customer_name" 
    value={customer_name}
    onChange={(e)=>{

      setCustomer_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="service_type">Service_type</label>
    <input type="text" class="form-control" id="service_type" placeholder="Enter Service Type" 
    value={service_type}
    onChange={(e)=>{

      setService_type(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="rating">Rating</label>
    <input type="text" class="form-control" id="rating" placeholder="Enter Rating from 1-3" 
    value={rating}
    onChange={(e)=>{

      setRating(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="feedback_description">Feedback_description</label>
    <input type="text" class="form-control" id="feedback_description"  
    value={feedback_description}
    onChange={(e)=>{

      setFeedback_description(e.target.value);

    }}/>
  </div>

  
<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-success btn-sm">Update</button>
  </div>
  </center>
</form>
</div>  
    );
}
export default EditFeedback;