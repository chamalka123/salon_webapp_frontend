import React from "react";
import "./Expenses.css";

function AddExpenses() {
  return (
    <div className="container">
      <form className="addExpense">
        <div className="form-group">
          <label for="exampleInputEmail1">Expense Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputexpenseCategory1"
            placeholder="Enter Expense Category"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Entry Date</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Enter Entry Date"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Amount</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Amount"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Description"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddExpenses;
