import React from 'react'
import Container from 'react-bootstrap/Container'
import NavHomepage from '../components/Home/Home'
import LoginBox from '../components/LoginBox'
import Footer from '../components/Footer/Footer'

import Breadcrumb from 'react-bootstrap/Breadcrumb'


const Login = () => {

  return (
    <>
      <div className='login-wrapper'>
        <Container fluid sticky="top" className="nav-container-pages">
          <NavHomepage />
        </Container>

        <Breadcrumb className="hero">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Login</Breadcrumb.Item>
        </Breadcrumb>

        <LoginBox
          path = '/' 
        />

        <Footer />
      </div>
    </>
  )
}

export default Login