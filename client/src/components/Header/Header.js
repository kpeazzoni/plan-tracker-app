import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";
import {  useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      {(menuOpened===false && mobile===true)? (
        <div
          style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            {/* <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link> */}
            <button onClick={(event) => navigate('/')} className='btn'>Home</button>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="calendar"
              spy={true}
              smooth={true}
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="clients"
              spy={true}
              smooth={true}
            >
              Clients
            </Link>
          </li>
          <li>
          <button onClick={(event) => navigate('/login')} className='btn'>Login</button>
          </li>
          <li>
          <button onClick={(event) => navigate('/register')} className='btn'>Register</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
