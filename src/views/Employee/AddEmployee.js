import React,{useState} from "react";
import axios from "axios";



export default function AddEmployee(){

  const [empId, setEmployee_id] = useState("");
  const [empName, setEmployee_name] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [billableHours, setBillableHours] = useState("");
  const [availableHours, setAvailabelHours] = useState("");

  function sendData(e){
    e.preventDefault();

      const newEmployee ={

        empId,
        empName,
        age,
        contactNumber,
        gender,
        jobTitle,
        billableHours,
        availableHours

      }

    axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
      alert("Employee Added");

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
     <div className="container"> 
     <h1>Add New Employee</h1>
      <form onSubmit={sendData}>

  <div class="form-group">
    <label for="empId">Employee ID</label>
    <input type="text" class="form-control" id="empId"
    onChange={(e)=>{

        setEmployee_id(e.target.value);

    }}/>
  </div>
  
  <div class="form-group">
    <label for="empName">Employee Name</label>
    <input type="text" class="form-control" id="empName"
    onChange={(e)=>{

        setEmployee_name(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="age">Age</label>
    <input type="text" class="form-control" id="age" placeholder="Enter the age"
    onChange={(e)=>{

        setAge(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="contactNumber">Contact Number</label>
    <input type="text" class="form-control" id="contactNumber" placeholder="Enter the contact Number"
    onChange={(e)=>{

        setContactNumber(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="gender">Gender</label>
    <input type="text" class="form-control" id="gender"
    onChange={(e)=>{

        setGender(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="jobTitle">Job Title</label>
    <input type="text" class="form-control" id="jobTitle"
    onChange={(e)=>{

        setJobTitle (e.target.value);

    }}/>
  </div>
  <div class="form-group">
    <label for="bilalableHours">Billable Hours</label>
    <input type="text" class="form-control" id="billableHours"
    onChange={(e)=>{

        setBillableHours (e.target.value);

    }}/>
  </div>
  <div class="form-group">
    <label for="availableHours">AvailaHours Hours</label>
    <input type="text" class="form-control" id="availableHours"
    onChange={(e)=>{

        setAvailabelHours (e.target.value);

    }}/>
  </div>
  


  <center>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </center>
</form>
</div>  
    )
}