import React from "react";
import {Link} from "react-router-dom";

function Expenses() {
  return (
    <div className="container">
      <h1>Expense management</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Expense Cetogory</th>
            <th scope="col">Entry Date</th>
            <th scope="col">Amount</th>
            <th scope="col">description</th>
          </tr>
          <tr>
          <td>1</td>
          <td>Product</td>
          <td>03-15-2020</td>
          <td>Rs,40000</td>
          <td>purchase products</td>
          <td>
            <Link to="#" className="btn btn-success btn-sm" href="#">EDIT</Link>
            &nbsp;
            <Link to="#" className="btn btn-danger btn-sm" href="#">DELETE</Link>
          </td>
        </tr>
        </thead>
      </table>
      <Link to={"/AddExpense"} className="btn btn-warning btn-sm" href="">ADD EXPENSE</Link>
    </div>
  );
}
export default Expenses;
