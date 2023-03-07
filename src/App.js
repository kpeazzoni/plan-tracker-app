import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewClientForm from './components/NewClientForm/NewClientForm'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ClientsContainer from './components/ClientsContainer/ClientsContainer';
import HomepageContainer from "./components/HomepageContainer/HomepageContainer";
import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";
import SingleClientContainer from './components/SingleClient/SingleClientContainer'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home/>  */}
      {/* <NewClientForm /> */}
      {/* <ClientsContainer /> */}
      {/* <HomepageContainer/> */}
      {/* <Login />
      <LoginBox />
      <Register /> */}
      {/* <Footer/> */}

      <Router>
        <Routes>
          {/*  Main Module  paths */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/homepagecontainer' element={<HomepageContainer />} />
          <Route exact path='/clientscontainer' element={<ClientsContainer />} />
          <Route exact path='/newclientform' element={<NewClientForm />} />
          <Route exact path='/header' element= {<Header />} />
          <Route exact path='/footer' element={<Footer />} />

        </Routes>
      </Router>
    </div>
  );
  // return <HomepageContainer/>
}

export default App;
