import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";


function EditEmployee(){

    const [empId, setEmployee_id] = useState("");
    const [empName, setEmployee_name] = useState("");
    const [age, setAge] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [gender, setGender] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [billableHours, setBillableHours] = useState("");
    const [availableHours, setAvailabelHours] = useState("");

  const {id} = useParams();
  useEffect(() => {
    function getEmployees() {
      axios.get(`http://localhost:8070/employee/get/${id}`)
      .then((res) => {

        console.log(res.data.employee);
        setEmployee_id(res.data.employee.empId);
        setEmployee_name(res.data.employee.empName);
        setAge(res.data.employee.age);
        setContactNumber(res.data.employee.contactNumber);
        setGender(res.data.employee.gender);
        setJobTitle(res.data.employee.jobTitle);
        setBillableHours(res.data.employee.billableHours);
        setAvailabelHours(res.data.employee.availableHours);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getEmployees();
  }, []);



  function sendUpdateEmployee(e){
    e.preventDefault();

      const updateemployee = {

        empId,
        empName,
        age,
        contactNumber,
        gender,
        jobTitle,
        billableHours,
        availableHours


      }

    axios.put(`http://localhost:8070/employee/update/${id}`, updateemployee).then(()=>{
      alert("Employee is Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
     <div className="container"> 
     <h1>EDIT EMPLOYEE</h1>
      <form onSubmit={sendUpdateEmployee}>

  <div class="col-md-12">
    <label for="empId">Employee ID</label>
    <input type="text" class="form-control" id="empId" 
    value={empId}
    onChange={(e)=>{

      setEmployee_id(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <label for="empName">Employee Name</label>
    <input type="text" class="form-control" id="empName" 
    value={empName}
    onChange={(e)=>{

      setEmployee_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="age">Age</label>
    <input type="text" class="form-control" id="age" placeholder="Enter the age in years" 
    value={age}
    onChange={(e)=>{

      setAge(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="contactNumber">Contact Number</label>
    <input type="text" class="form-control" id="contactNumber" placeholder="enter only one" 
    value={contactNumber}
    onChange={(e)=>{

      setContactNumber(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="gender">Gender</label>
    <input type="text" class="form-control" id="gender"  
    value={gender}
    onChange={(e)=>{

      setGender(e.target.value);

    }}/>
  </div>

  <div class="col-md-12" >
    <label for="jobTitle">Job Title</label> 
    <input type="text" class="form-control" id="jobTitle" 
    value={jobTitle}
    onChange={(e)=>{

      setJobTitle(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="billableHours">Billable  Hours</label>
    <input type="text" class="form-control" id="billableHours" 
    value={billableHours}
    onChange={(e)=>{

      setBillableHours(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="availableHours">Available  Hours</label>
    <input type="text" class="form-control" id="availableHours" 
    value={availableHours}
    onChange={(e)=>{

      setAvailabelHours(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <button type="submit" class="btn btn-success btn-sm">Update</button>
  </div>
  
</form>
</div>  
    );
}
export default EditEmployee;