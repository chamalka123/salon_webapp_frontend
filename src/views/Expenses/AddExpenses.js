import React, { useState } from "react";
import "./Expenses.css";
import axios from "axios";
import { Link } from "react-router-dom";

function AddExpenses() {

  const [expenseCategory, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  function sendExpenseData(e){
    e.preventDefault();//prevent submit event default behaviour
    const newExpense = {
      expenseCategory,
      date,
      amount,
      description
    }

    axios.post("http://localhost:8070/expense/add", newExpense).then(()=>{
      alert("expense added");
    }).catch((err)=>{
      alert(err)
    })
  }

  return (
    <div className="container" onSubmit = {sendExpenseData}>
      <form className="addExpense">
        <div className="form-group">
          <label for="exampleInputCategory">Expense Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputexpenseCategory"
            placeholder="Enter Expense Category"
            onChange = {(e)=>{
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Entry Date</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Enter Entry Date"
            onChange = {(e)=>{
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Amount</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Amount"
            onChange = {(e)=>{
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Description"
            onChange = {(e)=>{
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        &nbsp;
        <Link to="/Expenses">
        <button className="btn btn-danger">CANCEL</button> 
        </Link>
      </form>
    </div>
  );
}
export default AddExpenses;
