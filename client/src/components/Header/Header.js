import React, { useState } from "react";
import Logo from "../../assets/logoGray.png";
import "./Header.css";
// import Bars from "../../assets/PlanTracker.png";
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-bootstrap';
import Join from "../Home/Join";


const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="header" id="header">
      
      < img src={Logo} alt="logo" className="logo"
      style={{ cursor: "pointer" }} 
      onClick={() => navigate('/')}
       />

      <div
        style={{ backgroundColor: "transparency", padding: "1rem", borderRadius: "1rem" }}
        
      >
        {/* <img
          src={Bars}
          alt="Plantracker"
          style={{ width: "10rem", height: "10rem" }}
        /> */}
      </div>
      <ul className="navbar">
        {/* <li> */}
        {/* <Join /> */}
          {/* <button onClick={(event) => navigate('/homepagecontainer')} className='btn'>Home</button>
          <button onClick={(event) => navigate('/register')} className='btn'>Register</button> */}
          {!localStorage.id_token ? (
            <button onClick={(event) => navigate('/register')} className='btn'>Register</button>

          ) : (
            <button onClick={(event) => navigate('/homepagecontainer')} className='btn'>Home</button>
          )}          
          {!localStorage.id_token ? (
            <button onClick={(event) => navigate('/login')} className='btn'>Login</button>

          ) : (
            <button onClick={Auth.logout} className='btn' id="logout">Logout</button>
          )}
        {/* </li> */}
      </ul>
    </div>
  )
}


export default Header;
