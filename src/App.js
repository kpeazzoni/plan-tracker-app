import './App.css';
// import Hero from './components/Hero/Hero';
// import Join from './components/Join/Join';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewClientForm from './components/NewClientForm/NewClientForm'
// import SignUpForm from './components/SignUpForm/SignUpForm'

function App() {
  return (
    <div className= 'App'>
      {/* <Hero/>
      <Join/> */}
      <Header />
      <NewClientForm/>
      <Footer />
    
    </div>
  );
}

export default App;
