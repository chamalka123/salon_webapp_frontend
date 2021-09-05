import React from "react";

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
            <a className="btn btn-success btn-sm" href="#">EDIT</a>
            &nbsp;
            <a className="btn btn-primary btn-sm" href="#">VIEW</a>
            &nbsp;
            <a className="btn btn-danger btn-sm" href="#">DELETE</a>
          </td>
        </tr>
        </thead>
      </table>
      <a className="btn btn-warning btn-sm" href="#">ADD EXPENSE</a>
      <br/><br/>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Income Cetogory</th>
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
            <a className="btn btn-success btn-sm" href="#">EDIT</a>
            &nbsp;
            <a className="btn btn-primary btn-sm" href="#">VIEW</a>
            &nbsp;
            <a className="btn btn-danger btn-sm" href="#">DELETE</a>
          </td>
        </tr>
        </thead>
      </table>
      <a className="btn btn-warning btn-sm" href="#">ADD INCOME</a>
    </div>
  );
}
export default Expenses;
