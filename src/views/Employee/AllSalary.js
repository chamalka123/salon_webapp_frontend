import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';



export default function AllEmployeeSalary() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/employeeSalary/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);

    const [employeeSalarys, setEmployeeSalarys] = useState([]);

    useEffect(() => {
       function getEmployeeSalarys() {
           axios.get("http://localhost:8070/employeeSalary/").then((res) =>{
               setEmployeeSalarys(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getEmployeeSalarys();
    }, [employeeSalarys]);


   function deleteEmployeeSalary(_id){

        axios.delete("http://localhost:8070/employeesalary/delete/"+_id).then((res)=>{

            console.log(res.data);

            alert("Employee Salary Informatin is deleted");



        }).catch((err)=>{

            alert(err)

        });

        setEmployeeSalarys(employeeSalarys.filter((employeeSalarys) => employeeSalarys._id !== _id))



    }

    return (
              <><div>
            <input className="search1"
            style={{ width:"15%" ,height:"25px"}}
            type="text"
            placeholder="search..."
            onChange={(e) => setSearchName(e.target.value)}/>
            </div> 

    <div className="container">
        <h1>EMPLOYEE SALARY DASHBOARD</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Basic Salary</th>
                <th scope="col">Month</th>
                <th scope="col">OT Rate</th>
                <th scope="col">OT HOurs</th>
                <th scope="col">Deductions</th>
                <th scope="col">Total salary</th>
                </tr>
            </thead>
            {loading ? (
                    <button class="btn-btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aris-hidden="true"></span>
                        Loading </button>
                ) : (
                    posts
                        .filter((value) => {
                            if (searchName === "") {
                                return value;
                            } else if (
                                value.month.includes(searchName.toUpperCase())
                            ){
                                return value;
                            }




               }).map((employeeSalarys) => 

                    <tr key={employeeSalarys._id}>
                    <td>{employeeSalarys.empId}</td>
                    <td>{employeeSalarys.empName}</td>
                    <td>{employeeSalarys.jobTitle}</td>
                    <td>{employeeSalarys.basicSalary}</td>
                    <td>{employeeSalarys.month}</td>
                    <td>{employeeSalarys.payOTRate}</td>
                    <td>{employeeSalarys.payOTHours}</td>
                    <td>{employeeSalarys.deductions}</td>
                    <td>{employeeSalarys.totalSalary}</td>

                    <div class="btn">
                    <Link to={`/Editemployee/${employeeSalarys._id}`} class="btn btn-success btn-sm">

                     Update</Link>
                    &nbsp;
                    
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteEmployeeSalary(employeeSalarys._id)}>Delete</button>
                    </div>
                
                </tr> 
               
            ))}

     
        </table>
       <Link to={"/EmployeeSalaryCalculator"} className="btn btn-warning btn-sm">SALARY CALCULATOR</Link>
       &nbsp;
       <Link to={"/AddEmployeeSalary"} className="btn btn-warning btn-sm">ADD NEW RECORD</Link>
    </div>
    </>
    )
}