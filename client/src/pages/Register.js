import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TRAINER } from '../utils/mutations';
import Logo from "../assets/logoWhite.png";


import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import pt1 from '../assets/PT1.jpg';
import Auth from '../utils/auth';

const Register = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addTrainer, { error, data }] = useMutation(ADD_TRAINER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);

    try {
      const { data } = await addTrainer({
        variables: { ...formState },
      });

      Auth.login(data.addTrainer.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={pt1}/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2 justify-content-center'>
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} /> */}
                < img src={Logo} alt="logo" className="logo"
                  style={{ cursor: "pointer" }}
                  // onClick={() => navigate('/')}
                />
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create New Account</h5>
              {data ? (
                <p>
                  Success! You may now head{' '}
                  {/* the link is actually getting handled in auth and changing the route there.  */}
                  <Link to="/homepagecontainer">to your DASHBOARD!</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <MDBInput input
                    className="form-input"
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <MDBInput input
                    className="form-input"
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <MDBInput input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <MDBInput input
                    className="form-input"
                    placeholder="password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn onWhite"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}


export default Register;
