import React from "react";
import "./Payment.css";

function AddPayment() {
  return (
    <div className="container">
    <form className="addPayment">
      <div className="form-group">
        <label for="exampleInputEmail1">Client Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputexpenseCategory1"
          placeholder="Enter Payment Type"
        />
      </div>
    
        <div className="form-group">
          <label for="exampleInputEmail1">Payment Type</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputexpenseCategory1"
            placeholder="Enter Payment Type"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Discount</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Enter Discount"
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
export default AddPayment;