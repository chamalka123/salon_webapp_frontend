import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Expenses.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Navbar from "../../components/Navbar/Navbar";
import { green, red } from "@material-ui/core/colors";
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Expenses() {
  //fetch all expense collections
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    function getExpenses() {
      axios
        .get("http://localhost:8070/expense/")
        .then((res) => {
          setExpenses(res.data);
          //console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getExpenses();

  }, [expenses]);

  //delete
  function deleteExpense(_id) {
    axios
      .delete(`http://localhost:8070/expense/delete/${_id}`)
      .then((res) => {
        //console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
 
  return (
    <div className="expenseBody">
      <Navbar />
      <br />
    <div className="containerExpenses">
      <table className="table table-striped expenseTable">
        <thead className="thead-dark">
          <tr className="expenseRaw">
          <th scope="col">ID</th>
          <th scope="col">Entry Date</th>
          <th scope="col">Expense Cetogory</th>
          <th scope="col">Amount</th>
          <th scope="col">description</th>
          <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {expenses.map((expenses) => (
          <tr>
            <td className="expenseTableData">{expenses._id}</td>
            <td className="expenseTableData">{expenses.date}</td>
            <td className="expenseTableData">{expenses.expenseCategory}</td>
            <td className="expenseTableData">{expenses.amount}</td>
            <td className="expenseTableData">{expenses.description}</td>
            <td>
            <Link
              to={`/EditExpense/${expenses._id}`}
              className="btn btn-sm expenseButton"
            >
              <EditIcon className="btn-icon" style={{color:green[600]}} fontSize="small"/>
            </Link>
            &nbsp;
            <button
              className="btn btn-sm expenseButton"
              onClick={() => deleteExpense(expenses._id)}
            >
              <DeleteIcon className="btn-icon" style={{color:red[600]}} fontSize="small"/>
            </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <Link to={"/AddExpense"} className="btn btn-warning btn-sm">
        ADD EXPENSE <AddCircleIcon />
      </Link>
    </div>
    </div>
  );
}
export default Expenses;
