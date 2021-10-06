import {React,useState} from "react";
import Input from "@material-ui/core/Input";
import "./AdminLogin.css";
import { FormControl, InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SideDrawer from "../../components/Header/SideDrawer.js";
import { Link,useHistory } from "react-router-dom";
import axois from "axios";

const AdminLogin = (props) => {

  const history = useHistory()
 
  const [Email_address,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username] = useState("")
  const [custId] = useState("") 
  const [phoneno] = useState("")
  const [sex] = useState("")
  const [Date_of_birth] = useState("")
  const [age] = useState("")

  
  function sendData(e) {
       if(!Email_address || !password){
              alert("Please add email or password");
              return
       }
      // else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email_address)){
      //         alert("Invalid email");
      //      return
      //  }

      e.preventDefault();
      
      const newCustomer ={
        custId,
        username,
        age,
        sex,
        Date_of_birth,
        phoneno,
        Email_address,
        password
      }
       console.log(newCustomer)  
         // alert("Success");

       axois.post("http://localhost:8070/customer/signin", newCustomer).then(() => {
           alert("Sign in successfully")

           history.push('/AdminPanel')
           //window.location='/profile/+{email}'

       }).catch((err) =>{
           
          alert("Invalid email or password")
       })

      
  }

  return (
    <div className="loginContainer">
      <SideDrawer/>
      <form onSubmit={sendData} >
      <div className="headingLogin">Admin Login</div>
      <div className="loginInput">
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input id="my-input" value={Email_address} aria-describedby="my-helper-text" onChange={(e) => setEmail (e.target.value)}  />
        </FormControl>
      </div>

      <div className="loginInput">
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={password} onChange={(e) => setPassword (e.target.value)} />
        </FormControl>
      </div>
      <div className="loginBtn">
      <Button variant="contained" color="primary" type="submit" className="loginBtn">
        LOGIN
      </Button>
      </div>
      </form>
    </div>
  );
}
export default AdminLogin;
