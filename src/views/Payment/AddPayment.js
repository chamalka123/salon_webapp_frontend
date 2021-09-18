import React,{useState} from "react";
import axios from "axios";
import "./Payment.css";
import "./AddPayment.css";




export default function AddPayment() {
  const[paymentId, setPaymentID]= useState("");
  const[customername, setName]= useState("");
  const[paymentType, setPaytype]= useState("");
  const[discount, setDiscounts]= useState("");
  const[date, setDate]= useState("");
  const[amount, setAmounts]= useState("");

  function sendData(e){
    e.preventDefault();

    const newpayment ={
      paymentId,
      customername,
      paymentType,
      discount,
      date,
      amount
    }

    axios.post("http://localhost:8070/payment/add",newpayment).then(()=>{
       alert("Payment Added")   
    }).catch((err)=>{
       alert(err)
    })

    
  }


    
  return (
 
    <div className="container">
    <form onSubmit={sendData}>
      <div className="form-group">
        <label for="paymentId">Payment ID</label>
        <input type="text" class="form-control" id="paymentId" required placeholder="Enter Payment ID"
        onChange={(e)=>{
          setPaymentID(e.target.value);
        }} />

        </div>

  
      <div className="form-group">
        <label for="customername">Client Name</label>
        <input type="text" class="form-control" id="customername" required placeholder="Enter Client Name"
        onChange={(e)=>{
          setName(e.target.value);
        }} />

        </div>

        <div className="form-group">
        <label for="paymentType">Payment Type</label>
        <input type="text" class="form-control" id="paymentType" placeholder="Enter Payment Type"
        onChange={(e)=>{
          setPaytype(e.target.value);
        }} />

        </div>

        <div className="form-group">
        <label for="discount">Discount</label>
        <input type="text" class="form-control" id="discount" placeholder="Enter Discounts"
        onChange={(e)=>{
          setDiscounts(e.target.value);
        }} />
        
        </div>

        <div className="form-group">
        <label for="date">Entry Date</label>
        <input type="text" class="form-control" id="date" placeholder="Enter Entry Date"
        onChange={(e)=>{
          setDate(e.target.value);
        }} />
        
        </div>

        <div className="form-group">
        <label for="amount">Amount</label>
        <input type="text" class="form-control" id="amount" placeholder="Enter the Amount"
        onChange={(e)=>{
          setAmounts(e.target.value);
        }} />
        
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
          
        
      </form>
    </div>
  );
}
