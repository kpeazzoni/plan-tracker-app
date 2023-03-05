import React, { useState } from "react";
import './App.css';
import NewClientForm from './components/NewClientForm/NewClientForm'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ClientsContainer from './components/ClientsContainer/ClientsContainer';
import HomepageContainer from "./components/HomepageContainer/HomepageContainer";

function App() {
  return (
    <div className="">
      <Header />
      {/* <Home/> */} 
      <NewClientForm />
      {/* <ClientsContainer /> */}
      <HomepageContainer/>
      <Footer/>


    </div>
  );
  // return <HomepageContainer/>
}

export default App;
