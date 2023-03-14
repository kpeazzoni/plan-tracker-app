import React, { useState } from "react";
import Logo from "../../assets/logoGray.png";
import "./Header.css";
// import Bars from "../../assets/PlanTracker.png";
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="header" id="header">
      
      < img src={Logo} alt="logo" className="logo"
      style={{ cursor: "pointer" }} 
      onClick={() => navigate('/')}
       />

      
      <ul className="navbar">
          {Auth.loggedIn() ? (
            <Navbar expand="false" className="mb-3">
            <Container fluid>
              <button onClick={(event) => navigate('/homepagecontainer')} className='btn'>Home</button>
              <button onClick={Auth.logout} className='btn' id="logout">Logout</button>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-false`}
                aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                    Navigation
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/newclientform">Add Client</Nav.Link>
                    <Nav.Link href="/alltraineecontainer">View All Clients</Nav.Link>
                    <Nav.Link href="/schedule">View Full Schedule</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          ) : (
            <>
            <button onClick={(event) => navigate('/register')} className='btn'>Register</button>
            <button onClick={(event) => navigate('/login')} className='btn'>Login</button>
            </>
          )}
      </ul>
      
    </div>
  )
}


export default Header;
