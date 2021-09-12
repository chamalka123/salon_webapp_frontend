import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import "./Expenses.css";

//fetch all expense collections
function Expenses() {
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
    <div className="container">
      <h1>Expense management</h1>
      <table className="table">
        <thead>
          <tr>
          <th scope="col">ID</th>
          <th scope="col">Entry Date</th>
          <th scope="col">Expense Cetogory</th>
          <th scope="col">Amount</th>
          <th scope="col">description</th>
          </tr>
        </thead>
        {expenses.map((expenses) => (
          <tr>
            <td>{expenses._id}</td>
            <td>{expenses.date}</td>
            <td>{expenses.expenseCategory}</td>
            <td>{expenses.amount}</td>
            <td>{expenses.description}</td>
            <Link
              to={`/EditExpense/${expenses._id}`}
              className="btn btn-success btn-sm"
            >
              EDIT
              <EditIcon />
            </Link>
            &nbsp;
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteExpense(expenses._id)}
            >
              DELETE
              <DeleteIcon />
            </button>
          </tr>
        ))}
      </table>
      <Link to={"/AddExpense"} className="btn btn-warning btn-sm">
        ADD EXPENSE <AddIcon />
      </Link>
    </div>
  );
}
export default Expenses;
