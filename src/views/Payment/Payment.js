import React from "react";
import {Link} from "react-router-dom";

function Payment(){
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
          <tr>
          <td>1</td>
          <td>Sandaru</td>
          <td>Credit</td>
          <td>40</td>
          <td>03-15-2020</td>
          <td>Rs,40000</td>
          
          <td>
            <Link to="#" className="btn btn-success btn-sm" href="#">EDIT</Link>
            &nbsp;
            <Link to="#" className="btn btn-danger btn-sm" href="#">DELETE</Link>
          </td>
        </tr>
        </thead>
      </table>
      <Link to={"/AddPayment"} className="btn btn-warning btn-sm" href="">ADD PAYMENT</Link>
        </div>
    );
}
export default Payment;