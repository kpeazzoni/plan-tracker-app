import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
// import { Link } from "react-scroll";

import Bars from "../../assets/bars.png";
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';



// import { NavLink } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const mobile = window.innerWidth <= 768 ? true : false;
  // const [menuOpened, setMenuOpened] = useState(false);
  return (
    // <div className="header" id="header">
    //   <img src={Logo} alt="" className="logo" />
    //   {(menuOpened===false && mobile===true)? (
    //     <div
    //       style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
    //       onClick={() => setMenuOpened(true)}
    //     >
    //       <img
    //         src={Bars}
    //         alt="bars"
    //         style={{ width: "1.5rem", height: "1.5rem" }}
    //       />
    //     </div>
    <ul className="navbar">
      <li>
        
        <button onClick={(event) => navigate('/')} className='btn'>Home</button>
        <button onClick={(event) => navigate('/register')} className='btn'>Register</button>
      

      {!localStorage.id_token ? (
        <button onClick={(event) => navigate('/login')} className='btn'>Login</button>

      ) : (
        <button onClick={Auth.logout} className='btn' id="logout">Logout</button>
      )}
      </li>
    </ul>
  );
};


export default Header;
