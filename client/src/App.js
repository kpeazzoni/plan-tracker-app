import React from "react";
import { useState } from "react";
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewClientForm from './components/NewClientForm/NewClientForm'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AllTraineesContainer from './components/AllTraineesContainer/AllTraineesContainer';
import HomepageContainer from "./components/HomepageContainer/HomepageContainer";
import Login from './pages/Login'
import Register from "./pages/Register";
import SingleTraineeContainer from './components/SingleTraineeContainer/SingleTraineeContainer'
import UpdateClientModal from "./components/UpdateClientModal/UpdateClientModal";
import EditWorkoutPlanModal from "./components/EditWorkoutPlanModal/EditWorkoutPlanModal";
import ScheduleAppointmentModal from "./components/ScheduleAppointmentModal/ScheduleAppointmentModal";
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
    <div className="App">
      {/* <Header /> */}
      {/* <Home/>  */}
      {/* <NewClientForm /> */}
      {/* <AllClientsContainer /> */}
      {/* <SingleClientContainer /> */}
      {/* <HomepageContainer/> */}
      {/* <Login />
      <LoginBox />
      <Register /> */}
      {/* <Footer/> */}

      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
          <Header />  
        <Routes>
          {/*  Main Module  paths */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/homepagecontainer' element={<HomepageContainer />} />
          <Route exact path='/alltraineescontainer' element={<AllTraineesContainer />} />
          <Route exact path='/singletraineecontainer' element={<SingleTraineeContainer />} />
          <Route exact path='/newclientform' element={<NewClientForm />} />
          <Route exact path='/updateclientmodal' element={<UpdateClientModal />} />
          <Route exact path='/editworkoutmodal' element={<EditWorkoutPlanModal />} />
          <Route exact path='/scheduleappointmentmodal' element={<ScheduleAppointmentModal />} />


        </Routes>
        </div>
        <div>
        <Footer />
        </div>
      </Router>
    </div>
    </ApolloProvider>
  );
 
}

export default App;
