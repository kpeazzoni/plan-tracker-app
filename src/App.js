import React, { useState } from "react";
import './App.css';
import NewClientForm from './components/NewClientForm/NewClientForm'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ClientsContainer from './components/ClientsContainer/ClientsContainer';
import HomepageContainer from "./components/HomepageContainer/HomepageContainer";
import Login from "./components/Auth/Login";
import LoginBox from "./components/Auth/LoginBox";
import Register from "./components/Auth/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Home/> 
      {/* <NewClientForm />  */}
      {/* <ClientsContainer /> */}
      {/* <Login/>
      <LoginBox/>
      <Register/> */}
      <HomepageContainer/>
      <Footer/>


    </div>
  );
  // return <HomepageContainer/>
}

export default App;
