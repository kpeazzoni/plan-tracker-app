import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Header from './components/Header/Header';
import NewClientForm from './components/NewClientForm/NewClientForm'

function App() {
  return (
    <div className="App">
      {/* <Hero/>
      <Join/>
      <Footer/> */}
      <Header />
      <NewClientForm/>
      <Footer />
    
    </div>
  );
}

export default App;
