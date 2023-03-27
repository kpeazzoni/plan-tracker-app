import React, { useState } from "react";
import Logo from "../../assets/logoGray.png";
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="header" id="header">
      
      < img src={Logo} alt="logo" className="logo"
      style={{ cursor: "pointer" }} 
      onClick={() => navigate('/')}
       />

      
          {Auth.loggedIn() ? (
            <Navbar expand="false" expanded={expanded} className="mb-3">
            <Container fluid>
              <button onClick={(event) => navigate('/homepagecontainer')} className='header-btn hide-on-md'>Home</button>
              <button onClick={Auth.logout} className='header-btn hide-on-md' id="logout">Logout</button>
              <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false"  onClick={() => setExpanded(expanded ? false : "expanded")} />
              <Navbar.Offcanvas
                id="offcanvasNavbar-expand-false"
                aria-labelledby="offcanvasNavbarLabel-expand-false"
                placement="end"
              >
                <Offcanvas.Header>
                  <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                    Navigation
                  </Offcanvas.Title>
                  <button className="btn-close" onClick={() => setExpanded(false)} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3" onClick={() => setExpanded(false)}>
                    <Nav.Link as={Link} to="/newclientform">Add Client</Nav.Link>
                    <Nav.Link as={Link} to="/alltraineescontainer">View All Clients</Nav.Link>
                    <Nav.Link as={Link} to="/schedule">View Full Schedule</Nav.Link>
                    <div>
                    <Link to="/homepagecontainer"><button className='header-btn onWhite show-on-md'>Home</button></Link>
                    <button onClick={Auth.logout} className='header-btn onWhite show-on-md' id="logout">Logout</button>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          ) : (
            <Navbar expand="md" expanded={expanded} className="mb-3">
            <Container fluid>
              <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md"  onClick={() => setExpanded(expanded ? false : "expanded")} />
              <Navbar.Offcanvas
                id="offcanvasNavbar-expand-md"
                aria-labelledby="offcanvasNavbarLabel-expand-md"
                placement="end"
              >
                <Offcanvas.Header>
                  <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                    Welcome!
                  </Offcanvas.Title>
                  <button className="btn-close" onClick={() => setExpanded(false)} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3" onClick={() => setExpanded(false)}>
                    <div>
                    <Link to="/register"><button className='header-btn onWhite'>Register</button></Link>
                    <Link to="/login"><button className='header-btn onWhite'>Login</button></Link>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          )}
    </div>
  )
}


export default Header;
