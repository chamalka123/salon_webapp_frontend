
import React,{useState,  useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

 export default function Payment(){
  
  const[payments, setPayments]= useState([]);
    
  useEffect(()=>{
      function getPayments(){
          axios.get("http://localhost:8070/payment/").then((res)=>{
              setPayments(res.data);
              
          }).catch((err)=>{
              alert(err.message);

          })
      }
      getPayments();
  }, [payments]);

  function deletePayment(_id){



    axios.delete(`http://localhost:8070/payment/delete/${_id}`)

    .then((res)=>{

      //console.log(res.data);

    }).catch((err)=>{

      alert(err)

    });

      setPayments(payments.filter((payments) => payments._id !== _id))

  }
    return(
        <div className="container">
            <h1>Payment management</h1>
            <table class="table">
        <thead>
          <tr>
            <th scope="col">PaymentID</th>
            <th scope="col">ClientName</th>
            <th scope="col">PaymentType</th>
            <th scope="col">Discount</th>
            <th scope="col">Entry Date</th>
            <th scope="col">Amount</th>
            
          </tr>
          </thead>

           {payments.map((payments)=>(
           <tr>
        <td>{payments.paymentId}</td>
        <td>{payments.customername}</td>
        <td>{payments.paymentType}</td>
        <td>{payments.discount}</td>
        <td>{payments.date}</td>
        <td>{payments.amount}</td>

        
          
            <a href={`/update/${payments.paymentId}`} >EDIT</a>
            &nbsp;
            

                    

                
            <Link to="#" className="btn btn-danger btn-sm"onClick={() => deletePayment(payments._id)} >DELETE</Link>
          </tr>
        
        
        ))}
        </table>
        <Link to={"/AddPayment"} className="btn btn-success btn-sm">ADD PAYMENT</Link>
    </div>
    )
}
