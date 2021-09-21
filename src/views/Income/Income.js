import React from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./Income.css";
import { useState, useEffect } from "react";

function Income() {
    //fetch all income records in payment collections
    const [income, setIncome] = useState([]);
    useEffect(() => {
      function getIncome() {
        axios
          .get("http://localhost:8070/payment/")
          .then((res) => {
            setIncome(res.data);
            //console.log(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      getIncome();
  
    }, [income]);
  return (
      <div className="incomeBody">
          <Navbar />
          <br />
          <div className="containerIncome">
      <table className="table table-striped incomeTable">
        <thead className="thead-dark">
          <tr className="incomeRaw">
          <th scope="col">ID</th>
          <th scope="col">Entry Date</th>
          <th scope="col">Expense Cetogory</th>
          <th scope="col">Amount</th>
          <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {income.map((income) => (
          <tr>
            <td className="expenseTableData">{income._id}</td>
            <td className="expenseTableData">{income.date}</td>
            <td className="expenseTableData">{income.expenseCategory}</td>
            <td className="expenseTableData">{income.amount}</td>
            <td>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
export default Income;