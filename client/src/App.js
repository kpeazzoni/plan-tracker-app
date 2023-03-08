import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewClientForm from './components/NewClientForm/NewClientForm'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AllClientsContainer from './components/AllClientsContainer/AllClientsContainer';
import HomepageContainer from "./components/HomepageContainer/HomepageContainer";
import Login from './pages/Login'
import Register from "./pages/Register";
import SingleClientContainer from './components/SingleClientContainer/SingleClientContainer'
import UpdateClientModal from "./components/UpdateClientModal/UpdateClientModal";
import EditWorkoutPlanModal from "./components/EditWorkoutPlanModal/EditWorkoutPlanModal";

function App() {
  return (
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
          <Route exact path='/allclientscontainer' element={<AllClientsContainer />} />
          <Route exact path='/singleclientscontainer' element={<SingleClientContainer />} />
          <Route exact path='/newclientform' element={<NewClientForm />} />
          <Route exact path='/updateclientmodal' element={<UpdateClientModal />} />
          <Route exact path='/editworkoutmodal' element={<EditWorkoutPlanModal />} />

        </Routes>
        </div>
        <div>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
