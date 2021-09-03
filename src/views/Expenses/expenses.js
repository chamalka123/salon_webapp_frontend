import React from "react";

function Expenses(){
    return(
        <div>
          <h1>Expense management</h1>
          <hr />
          <table>
            <tr>
            <th>ID</th>
            <th>Income Cetogory</th>
            <th>Entry Date</th>
            <th>Amount</th>
            <th>description</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Product</td>
              <td>03-15-2020</td>
              <td>Rs,40000</td>
              <td>purchase products</td>
            </tr>
          </table>
          
        </div>

        
    );
}
export default Expenses;