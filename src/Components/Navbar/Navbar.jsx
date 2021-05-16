import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css";

function Login() {
  return (
    <div className="header">
      <Link to='/' >
    <h2 className="heading">Huslters Village</h2> </Link>
      <div className="navbar">
       <Link to="/" className="navelement">Home</Link>
       <Link to="/" className="navelement">How it works?</Link>
       <Link to="/" className="navelement">Contact</Link>

       <button className="login-button">
          <Link to="/Login"> Log in </Link></button> 

          <Link to='/Register' > 
          <button className="Register-button">   Register
       <spam className="hexode">&#x2192;</spam> </button> </Link>
       </div>
   </div>  
  );
}
export default Login;