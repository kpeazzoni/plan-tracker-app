import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'//insert useNavigate here
import axios from 'axios'

const LoginBox = ({ path }) => {

  const history = useNavigate()

  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleFocus = () => {
    setError(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      setTokenToLocalStorage(data.token)
      history.push(path)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <Container className="login-register-outer-box">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="fromBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} onFocus={handleFocus} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Please enter a password</Form.Label>          
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} onFocus={handleFocus} />
        </Form.Group>
        {error && <p className="help is-danger">Sorry, your username or password are incorrect</p>}

        <Button variant="warning" type="Submit" block>Login</Button>

      </Form>
      <Link to="/register" className="login-register">Not yet registered? Sign up here!</Link>

    </Container>
  )
}

export default LoginBox