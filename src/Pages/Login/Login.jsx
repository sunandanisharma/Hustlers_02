import React from "react";
import Google from '../../Assets/Google.svg';
import github from '../../Assets/github.svg';
import dribbble from '../../Assets/dribbble.svg';
import { Link } from 'react-router-dom'
import "./Login.css";

function Login() {
  return (
  <div className="initialsec"> 
    <div className='section'>
      <h2 className="title">Log in to your Account</h2> 
       <div className="icons">
          <button className="Google">
            <img  src={Google} alt="ab" />
            Google
          </button>
          <button className="Github">
            <img src={github} alt="ab" />
            Github
          </button>
          <button className="Dribble">
            <img  src={dribbble} alt="ab" />
            Dribble
          </button>
        </div>
   <p className="desc">or log in with email</p>
    </div> 

       <form className='cardnew'> 
       <div className="mailid">
          <label className='content'>Email</label>
         <input className='input' type="email" />
        </div>

        <div className="Pass">
          <label className='desc1'>Password</label>
          <div>
          <p className='forpas'>Forget Password?</p>
            </div>
         <input className='passinput' type="password" />
        </div>

        <div>
          <Link to='/Cards'>
          <button className='new'>Take Me To The Village</button>
          </Link>
        </div>

        <p className="sign">
         Don't have an account on HustlersVillage? 
        <Link to='/Register' className='sign'>Sign up</Link>
        </p>

        </form>
 </div>
  );
}
export default Login;