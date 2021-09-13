import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./BudgetPlans.css";
function BudgetPlans() {
  //fetch all expense collections
  const [budgetPlans, setBudgetPlans] = useState([]);
  useEffect(() => {
    function getBudgetPlan() {
      axios
        .get("http://localhost:8070/budgetplan/")
        .then((res) => {
          setBudgetPlans(res.data);
          //console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBudgetPlan();
  }, [budgetPlans]);

  //delete
  function deleteBudgetPlans(_id) {
    axios
      .delete(`http://localhost:8070/budgetplan/delete/${_id}`)
      .then((res) => {})
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="expenseBody">
      <Navbar />
      <h1>Budget Plans</h1>
      {budgetPlans.map((budgetPlans) => (
        <div className="budgetContainer">
          <div className="budgetCard">
            <header>
              <p>{budgetPlans.month}</p>
            </header>
            <hr />
            <div className="budgetDetails">
              <div className="planText">{budgetPlans.description}</div>
              <div className="planText">{budgetPlans.estimate}</div>
              <div className="planText">{budgetPlans.actual}</div>
              <div className="planText">{budgetPlans.balance}</div>
              <button className="btn btn-dark btn-sm btnBudget">+</button>
              &nbsp;
              <button
              className="btn btn-danger btn-sm btnBudget"
              onClick={() => deleteBudgetPlans(budgetPlans._id)}
              >
              -
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BudgetPlans;
