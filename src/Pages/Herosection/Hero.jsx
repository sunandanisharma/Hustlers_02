import React from "react";
import "./Hero.css";
import { Link } from 'react-router-dom'
// import Herovector from '../../Assets/Herovector.svg';

function Hero() {
  return (
    <div>
  <div className="Herosection">
    <div className="h1">
     {/* <h2 className="heading">Huslters Village</h2> */}
       </div>  
   
    <h1 className="headingone">
      Let your <spam className="head1"><u>hustle</u></spam> 
      speak for itself.    </h1>
      <div className="herobutton">
      <button className="hustlers-village"><b>hustlervillage.com/ </b>
      <spam>your-name</spam></button>
      <div>
      <Link to='/Login'>
        <button className="beginning">Start Hustling
       <spam className="hexode">&#x2192;</spam>
       </button> 
      </Link>
      </div>
      </div>
      <p className="headpara">It's free, and takes less than a minute </p>
      </div>
      </div>
  );
}

export default Hero;