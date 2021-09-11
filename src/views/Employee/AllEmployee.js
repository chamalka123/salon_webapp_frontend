import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function AllEmployee() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
       function getEmployees() {
           axios.get("http://localhost:8070/employee/").then((res) =>{
               setEmployees(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getEmployees();
    }, [employees]);


   function deleteEmployee(_id){

        axios.delete("http://localhost:8070/employee/delete/"+_id).then((res)=>{

            console.log(res.data);

            alert("Employee deleted");



        }).catch((err)=>{

            alert(err)

        });

        setEmployees(employees.filter((employees) => employees._id !== _id))



    }

    return (
    <div className="container">
        <h1>All Employee Details</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Age</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Job Title</th>
               
                </tr>
            </thead>
           
            {employees.map((employees) => (
        
                <tr>
                    <td>{employees.empId}</td>
                    <td>{employees.empName}</td>
                    <td>{employees.age}</td>
                    <td>{employees.contactNumber}</td>
                    <td>{employees.gender}</td>
                    <td>{employees.jobTitle}</td>
                    
                    <div class="btn">
                    <Link to={`/Editemployee/${employees._id}`} class="btn btn-success btn-sm">

                     Update</Link>

                    
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteEmployee(employees._id)}>Delete</button>
                    </div>
                
                </tr> 
               
            ))}

     
        </table>
       <Link to={"/add"} className="btn btn-warning btn-sm">Add New Employee</Link>

    </div>
    )
}