import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';



export default function AllEmployee() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/employee/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);

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
              <><div>
            <input className="searchemp"
            style={{ width:"15%" ,height:"25px"}}
            type="text"
            placeholder="search..."
            onChange={(e) => setSearchName(e.target.value)}/>
            </div> 

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
                                value.empId.includes(searchName.toUpperCase())
                            ){
                                return value;
                            }




               }).map((employees) => 

                    <tr key={employees._id}>
                    <td>{employees.empId}</td>
                    <td>{employees.empName}</td>
                    <td>{employees.age}</td>
                    <td>{employees.contactNumber}</td>
                    <td>{employees.gender}</td>
                    <td>{employees.jobTitle}</td>
                    
                    <div class="btn">
                    <Link to={`/Editemployee/${employees._id}`} class="btn btn-success btn-sm">

                     Update</Link>
                    &nbsp;
                    
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteEmployee(employees._id)}>Delete</button>
                    </div>
                
                </tr> 
               
            ))}

     
        </table>
       <Link to={"/add"} className="btn btn-warning btn-sm">Add New Employee</Link>
       &nbsp;
       <Link to={"/AllSalary"} className="btn btn-warning btn-sm">SALARY</Link>

    </div>
    </>
    )
}