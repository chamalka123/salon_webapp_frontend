
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router";

function EditExpenses() {
  const [expenseCategory, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

//retrieve relevent data form relavent fields
const [expense, setExpense] = useState([]);
const {id} = useParams();
useEffect(() => {
  function getExpenses() {
    axios.get(`http://localhost:8070/expense/get/${id}`)
      .then((res) => {
        setExpense(res.data);
        console.log(res.data);
        // setExpenseCategory(res.data.expenseCategory);
        // setAmount(res.data.amount);
        // setDate(res.data.date);
        // setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  getExpenses();
}, []);

//update data 
function sendUpdateExpense(e){
  e.preventDefault();//prevent submit event default behaviour
  const updateExpense = {
    expenseCategory,
    date,
    amount,
    description
  }

  axios.put(`http://localhost:8070/expense/update/${id}`, updateExpense).then(()=>{
    alert("expense added");
  }).catch((err)=>{
    alert(err);
  })
}

  return (
    <div className="container" onSubmit = {sendUpdateExpense}>
      <form className="addExpense">
        <div className="form-group">
          <label for="exampleInputCategory">Expense Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputexpenseCategory1"
            placeholder="Enter Expense Category"
            value = {expense.expenseCategory}
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
            value = {expense.date}
            onChange = {(e)=>{
              setDate(e.target.value);
            }}
            
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEntryDate1">Amount</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEntryDate1"
            placeholder="Amount"
            value = {expense.amount}
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
            value = {expense.description}
            onChange = {(e)=>{
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default EditExpenses;