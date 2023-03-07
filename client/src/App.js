import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewClientForm from './components/NewClientForm/NewClientForm'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ClientsContainer from './components/ClientsContainer/ClientsContainer';
import HomepageContainer from "./components/HomepageContainer/HomepageContainer";
import Login from './pages/Login'

import Register from "./pages/Register";
import SingleClientContainer from './components/SingleClientContainer/SingleClientContainer'

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
      <div className="flex-column justify-flex-start min-100-vh">
          <Header />  
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
        </div>
        <div>
        <Footer />
        </div>
      </Router>
    </div>
  );
  // return <HomepageContainer/>
}

export default App;
