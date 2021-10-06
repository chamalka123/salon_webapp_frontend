import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateBudgetPlan() {
  const [month, setmonth] = useState("");
  const [description, setDescription] = useState("");
  const [estimate, setestimate] = useState("");
  const [actual, setActual] = useState("");
  const [balance, setBalance] = useState("");

  function sendBudgetData(e) {
    e.preventDefault(); //prevent submit event default behaviour
    const newBudgetPlan = {
      month,
      description,
      estimate,
      actual,
      balance,
    };

    axios
      .post("http://localhost:8070/budgetplan/add", newBudgetPlan)
      .then(() => {
        alert("Budget plan added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="expenseBody">
      <div className="container col-6" onSubmit={sendBudgetData}>
        <form className="addExpense">
          <div className="form-group">
            <label for="exampleInputCategory">Select Month</label>
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              onChange={(e) => {
                setmonth(e.target.value);
              }}
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="1">April</option>
              <option value="2">May</option>
              <option value="3">June</option>
              <option value="1">July</option>
              <option value="2">August</option>
              <option value="3">September</option>
              <option value="1">October</option>
              <option value="2">November</option>
              <option value="3">December</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Description</label>
            <textarea
              required={true}
              maxLength={100}
              type="text"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Estimate</label>
            <input
              required={true}
              type="number"
              min="0"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Estimate(Rs)"
              onChange={(e) => {
                setestimate(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Actual</label>
            <input
              required={true}
              type="number"
              min="0"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Actual(Rs)"
              onChange={(e) => {
                setActual(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Balance</label>
            <input
              required={true}
              type="number"
              min="0"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Balance(Rs)"
              onChange={(e) => {
                setBalance(e.target.value);
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
    </div>
  );
}
export default CreateBudgetPlan;
